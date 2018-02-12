const api = 'http://localhost:3001';

let token = localStorage.token;
if(!token) token = localStorage.token = Math.random.toString(36).substr(-8);

const headers = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'Authorization' : token,
};


// Categories //
export const getCategories = function() {
    return (
        fetch(`${api}/categories`, { headers })
            .then(res => res.json())
            .then((res) => res.categories)
    );
};

export const getCategoryPosts = function(category) {
    return (
        fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())
        .then(res_data => res_data)
    );
};

// Posts //
export const getAllPosts = function() {
    return (
        fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(res_data => res_data)
    );
};

export const getPost = function(postID) {
    return (
        fetch(`${api}/posts/${postID}`, { headers })
        .then(res => res.json())
        .then(res_data => res_data)
    );
};

export const addPost = function(post) {
    return (
        fetch(`${api}/posts`, {
            method: 'POST',
            headers,
            body: JSON.stringify( post )
        })
        .then(res => res.json())
    );
};

export const deletePost = function(post) {
    return (
        fetch(`${api}/posts/${post.id}`, {
            method: 'DELETE',
            headers
        })
        .then(res => res.json())
        .then(res_data => res_data)
    );
}

export const editPost = function(post) {
    return (
        fetch(`${api}/posts/${post.id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(res_data => res_data)
    );
}

export const votePost = (postID, option) => {
    return (
        fetch(`${api}/posts/${postID}`, {
            method: 'POST',
            headers,
            body: JSON.stringify({option})
        })
        .then(res => res.json())
        .then(res_data => res_data)
    );
  };

  // Comments //
export const getCommentsForPost = function(postId) {
    return (
        fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json())
        .then(res_data => res_data)
    );
};

export const getComment = function(commentId) {
    return (
        fetch(`${api}/comments/${commentId}`, { headers })
        .then(res => res.json())
        .then(res_data => res_data)
    );
};

export const addComment = function(comment) {
    return (
        fetch(`${api}/comments`, {
            method: 'POST',
            headers,
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then(res_data => res_data)
    );
};

export const voteComment = function(commentId, option) {
    return (
        fetch(`${api}/comments/${commentId}`, {
            method: 'POST',
            headers,
            body: JSON.stringify({option})
        })
        .then(res => res.json())
        .then(res_data => res_data)
    );
  };

  export const editComment = function(comment) {
    return (
        fetch(`${api}/comments/${comment.id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then(res_data => res_data)
    );
  };

  export const deleteComment = function(commentId) {
    return (
        fetch(`${api}/comments/${commentId}`, {
            method: 'DELETE',
            headers
        })
        .then(res => res.json())
        .then(res_data => res_data)
    );
  };