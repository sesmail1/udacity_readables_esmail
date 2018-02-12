import * as api from '../../utils/api';
/////////////////////////////////////////////////////////////////////
export const GET_COMMENTS_POST = 'GET_COMMENTS_POST';

export const getPostComments = (postId) => dispatch => (
    api.getCommentsForPost(postId)
        .then(comments => dispatch(gotPostComments(comments)))
);

export const gotPostComments = (comments) => ({
    type: GET_COMMENTS_POST,
    comments
});
/////////////////////////////////////////////////////////////////////
export const GET_COMMENT = 'GET_COMMENT';

export const getComment = (comment) => dispatch => (
    api.getComment(comment.id)
        .then(comment => dispatch(gotComment(comment)))
);

export const gotComment = (comment) => ({
    type: GET_COMMENT,
    comment
});
/////////////////////////////////////////////////////////////////////
export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = (comment, parentId) => dispatch => (
    api.addComment(comment)
        .then(comment => dispatch(addedComment(comment, parentId)))
);

export const addedComment = (comment) => ({
    type: ADD_COMMENT,
    comment
});
/////////////////////////////////////////////////////////////////////
export const EDIT_COMMENT = 'EDIT_COMMENT';

export const editComment = (comment) => dispatch => (
    api.editComment(comment)
        .then(comment => dispatch(editedComment(comment)))
);

export const editedComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
});
/////////////////////////////////////////////////////////////////////
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const deleteComment = (comment) => dispatch => (
    api.deleteComment(comment.id)
        .then(comment => dispatch(deletedComment(comment)))
);

export const deletedComment = (comment) => ({
    type: DELETE_COMMENT,
    comment
});
/////////////////////////////////////////////////////////////////////
export const VOTE_COMMENT = 'VOTE_COMMENT';

export const voteComment = (comment, option, index) => dispatch => (
    api.voteComment(comment.id, option)
        .then((comment) => dispatch(votedComment(comment, option, index)))
);

export const votedComment = (comment, option, index) => ({
    type: VOTE_COMMENT,
    comment,
    option,
    index
});
/////////////////////////////////////////////////////////////////////
