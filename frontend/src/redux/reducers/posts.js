import {
    RECEIVED_ALL_POSTS,
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    VOTE_POST,
    SORT_POSTS,
    RECEIVE_CATEGORY_POSTS,
    POST_COMMENTS_INCREMENT
} from '../actions/posts';


export function posts_reducer(state = {}, action ) {
    switch(action.type) {
        case RECEIVED_ALL_POSTS:
            let posts = action.posts;
            return {
                ...state,
                posts
            };
        case ADD_POST:
            let newPosts = state.posts.concat(action.post);
            return {
                ...state,
                posts: newPosts
            };
        case DELETE_POST:
            let updatedPosts = state.posts.filter(post => post.id !== action.post.id);
            return {
                ...state,
                posts: updatedPosts
            }
        case EDIT_POST:
            let editedPosts = state.posts.filter(post => post.id !== action.post.id);
            return {
                ...state,
                posts: editedPosts.concat(action.post)
            };
        case VOTE_POST:
            let vote;
            if(action.option === 'upVote') {
                vote = 1
            }
            if(action.option === 'downVote') {
                vote = -1
            }
            let newScore = {
                ...state.posts[action.index],
                voteScore: state.posts[action.index].voteScore + vote
            }
            let newArray = [
                ...state.posts.slice(0, action.index),
                newScore,
                ...state.posts.slice(action.index + 1)
            ];
            return {
                ...state,
                posts: newArray
            };
        case SORT_POSTS:
            let obj;
            obj = [...state.posts];
            if(action.sortType === 'vote_desc') {
                obj.sort((a, b) => a.voteScore - b.voteScore);
            }
            if(action.sortType === 'vote_asc') {
                obj.sort((a, b) => b.voteScore - a.voteScore);
            }
            if(action.sortType === 'date_asc') {
                obj.sort((a, b) => a.timestamp - b.timestamp);
            }
            if(action.sortType === 'date_desc') {
                obj.sort((a, b) => b.timestamp - a.timestamp);
            }
            let sorted = obj;
            return {
                ...state,
                posts: sorted
            };
        case RECEIVE_CATEGORY_POSTS:
            let posts_cat = action.posts;
            return {
                ...state,
                posts: posts_cat
            };
        case POST_COMMENTS_INCREMENT:
            let newIncrement = {
                ...state.posts[action.index],
                commentCount: state.posts[action.index].commentCount + 1
            }
            let newArrayIncremented = [
                ...state.posts.slice(0, action.index),
                newIncrement,
                ...state.posts.slice(action.index + 1)
            ];
            return {
                ...state,
                posts: newArrayIncremented
            };
        default:
            return state;
    }
};

