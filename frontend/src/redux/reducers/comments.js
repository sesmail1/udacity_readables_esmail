import {
    GET_COMMENTS_POST,
    GET_COMMENT,
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    VOTE_COMMENT,
} from '../actions/comments';

export function comments_reducer(state = {}, action) {
    switch(action.type) {
        case GET_COMMENTS_POST:
            return {
                ...state,
                comments: action.comments
            };
        case GET_COMMENT:
            return state;
        case ADD_COMMENT:
            if(state.comments){
                let newComments = state.comments.concat(action.comment);
                return {
                    ...state,
                    comments: newComments
                };
            }
            return state;
        case EDIT_COMMENT:
            let editedComments = state.comments.filter(comment => comment.id !== action.comment.id);
            return {
                ...state,
                comments: editedComments.concat(action.comment)
            };
        case DELETE_COMMENT:
            let updatedComments = state.comments.filter(comment => comment.id !== action.comment.id);
            return {
                ...state,
                comments: updatedComments
            }
        case VOTE_COMMENT:
            let vote = function() {
                if(action.option === 'upVote') {
                    return 1
                }
                if(action.option === 'downVote') {
                    return -1
                }
            }
            let newScore = {
                ...state.comments[action.index],
                voteScore: state.comments[action.index].voteScore + vote()
            }
            let newArray = [
                ...state.comments.slice(0, action.index),
                newScore,
                ...state.comments.slice(action.index + 1)
            ];
            return {
                ...state,
                comments: newArray
            };
        default:
            return state;
    }
};