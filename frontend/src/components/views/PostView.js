import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as comment_actions from '../../redux/actions/comments';
import * as post_actions from '../../redux/actions/posts';
import Thread from '../Thread';
import {
    Well,
    Button,
    Glyphicon,
} from 'react-bootstrap';
import {
    LinkContainer
} from 'react-router-bootstrap';
import Comment from '../Comment';


class PostView extends Component {
    componentDidMount() {
        this.props.getCommentsForPost(this.props.match.params.post_id);
        this.props.fetchAllPosts();
    }
    render() {
        if(!this.props.posts) {
            return (
                <h1>Loading Post...</h1>
            )
        }
        if(!this.props.comments) {
            return (
                <h1>Loading Post...</h1>
            )
        }
        
        let found = this.props.posts.find((post) => post.id === this.props.match.params.post_id);
        
        if(found === undefined) {
            return(
                <div>
                    <h1>404 not found</h1>
                </div>
            )
        }

        return (
            <div>
                <LinkContainer to={`/${this.props.match.params.category_name}`}>
                    <Button><Glyphicon glyph="backward"/> {this.props.match.params.category_name}</Button>
                </LinkContainer>
                {this.props.posts.map((post, index) => {
                    if(post.category === this.props.match.params.category_name){
                        if(post.id === this.props.match.params.post_id) {
                            return (                                
                                <Thread index={index} key={index} postData={post}>
                                    <Well>
                                        {post.body}
                                    </Well>
                                </Thread>
                            );
                        }
                    } 
                    return null;
                })}
                <br/>
                {this.props.comments.map(function(comment, index) {
                    return (
                        <Comment index={index} key={index} commentData={comment} />
                    )
                })}
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        comments: state.comments_reducer.comments,
        posts: state.posts_reducer.posts
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getCommentsForPost: comment_actions.getPostComments,
        fetchAllPosts: post_actions.fetchAllPosts
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PostView);