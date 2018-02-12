import React, { Component } from 'react';
import Thread from '../Thread';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as post_actions from '../../redux/actions/posts';
import {
    Panel,
    Label,
    Button,
    Glyphicon
} from 'react-bootstrap';
import {
    LinkContainer
} from 'react-router-bootstrap';
import ForumToolbar from '../ForumToolbar';

class CategoryView extends Component {
    componentDidMount() {
        this.props.fetchCategoryPosts(this.props.match.params.category)
    }

    render() {

        if(!this.props.posts) {
            return (
                <h1>Loading View... /{this.props.match.params.category}</h1>
            )
        }
        let category = this.props.match.params.category;
        if(category !== 'react') {
            if(category !== 'redux')
                if(category !== 'udacity')
                    return (
                        <div>
                            <h1>404</h1>
                            <h2>The forum you are trying to reach, /{this.props.match.params.category}, does not exist!</h2>
                        </div>
                    );
        }
        
        return (
            <div>     
                <Panel>
                    <LinkContainer to={`/`}>
                        <Button><Glyphicon glyph="backward"/> Home</Button>
                    </LinkContainer>    
                    <Panel.Body>
                        <center>
                            <h1>
                                <Label>/{this.props.match.params.category}</Label>
                            </h1>
                            <i>You are now viewing the {this.props.match.params.category} categories' posts.</i>
                        </center>
                        <br/>
                    </Panel.Body>
                </Panel>
                <br/>          
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
        fetchCategoryPosts: post_actions.fetchCategoryPosts
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CategoryView);