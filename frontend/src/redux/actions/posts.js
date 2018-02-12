import * as api from '../../utils/api';
/////////////////////////////////////////////////////////////////////
export const RECEIVED_ALL_POSTS = 'RECEIVED_ALL_POSTS';

export const fetchAllPosts = () => dispatch => (
    api.getAllPosts()
        .then(posts => dispatch(receivedAllPosts(posts)))
);

export const receivedAllPosts = (posts) => ({
    type: RECEIVED_ALL_POSTS,
    posts
});
/////////////////////////////////////////////////////////////////////
export const RECEIVE_CATEGORY_POSTS = 'RECEIVE_CATEGORY_POSTS';

export const fetchCategoryPosts = (category) => dispatch => (
    api.getCategoryPosts(category)
        .then(posts => dispatch(receiveCategoryPosts(posts)))
);

export const receiveCategoryPosts = (posts) => ({
    type: RECEIVE_CATEGORY_POSTS,
    posts
});
/////////////////////////////////////////////////////////////////////
export const ADD_POST = 'ADD_POST';

export const fetchAddPost = (post) => dispatch => (
    api.addPost(post)
        .then(post => dispatch(addedPost(post)))
);

export const addedPost = (post) => ({
    type: ADD_POST,
    post
});
/////////////////////////////////////////////////////////////////////
export const DELETE_POST = 'DELETE_POST';

export const fetchDeletePost = (post) => dispatch => (
    api.deletePost(post)
        .then(post => dispatch(deletedPost(post)))
);

export const deletedPost = (post) => ({
    type: DELETE_POST,
    post
});
/////////////////////////////////////////////////////////////////////
export const EDIT_POST = 'EDIT_POST';

export const fetchEditPost = (post) => dispatch => (
    api.editPost(post)
        .then(post => dispatch(editedPost(post)))
);

export const editedPost = (post) => ({
    type: EDIT_POST,
    post
});
/////////////////////////////////////////////////////////////////////
export const VOTE_POST = 'VOTE_POST';

export const votePost = (post, option, index) => dispatch => (
    api.votePost(post.id, option)
        .then(post => dispatch(votedPost(post, option, index)) )
);

export const votedPost = (post, option, index) => ({
    type: VOTE_POST,
    post,
    option,
    index
});
/////////////////////////////////////////////////////////////////////
export const SORT_POSTS = 'SORT_POSTS';

export const sortPosts = (sortType) => dispatch => (
    dispatch(sortedPosts(sortType))
);

export const sortedPosts = (sortType) => ({
    type: SORT_POSTS,
    sortType
});
/////////////////////////////////////////////////////////////////////
export const POST_COMMENTS_INCREMENT = 'POST_COMMENTS_INCREMENT';

export const postCommentsIncrement = (index) => dispatch => (
    dispatch(incrementedPosts(index))
);

export const incrementedPosts = (index) => ({
    type: POST_COMMENTS_INCREMENT,
    index
});