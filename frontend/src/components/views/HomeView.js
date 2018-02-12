import React, { Component } from 'react';
import Thread from '../Thread';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as posts_action from '../../redux/actions/posts';
import {
    Panel,
    Label
} from 'react-bootstrap';
import ForumToolbar from '../ForumToolbar';

class HomeView extends Component {
    componentDidMount() {
        this.props.fetchAllPosts()
    }
    render() {

        if(!this.props.posts) {
            return (
                <h1>Loading Home View...</h1>
            )
        }
        return (
            <div>     
                <Panel>
                    <Panel.Body>
                        <center>
                            <h1>
                                <Label> /all </Label>
                            </h1>
                            <i>You are now viewing all categories' posts.</i>
                        </center>
                        <br/>
                    </Panel.Body>
                </Panel>              
                <ForumToolbar />
                <br/>
                {this.props.posts.map((post, index) => {
                    return (
                        <Thread index={index} key={index} postData={post} />
                    );
                })}
            </div>
        );
    }
};



function mapStateToProps(state) {
    return {
        posts: state.posts_reducer.posts
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchAllPosts: posts_action.fetchAllPosts
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeView);