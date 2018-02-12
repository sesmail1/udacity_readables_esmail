import React, { Component } from 'react';
import {
    ButtonGroup,
    ButtonToolbar,
    Button,
    Glyphicon,
    Panel,
    Well,
    Label,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import EditThread from './EditThread';
import NewComment from './NewComment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as post_actions from '../redux/actions/posts';
import * as comment_actions from '../redux/actions/comments';

class Thread extends Component {

    render() {

        const voteButtons = (
            <ButtonGroup className="pull-right">
                <Button 
                    onClick={() => this.props.votePost(this.props.postData, 'upVote', this.props.index)}
                    bsStyle="primary" bsSize="xsmall">
                        <Glyphicon glyph="chevron-up" />
                </Button>
                <Button 
                    onClick={() => this.props.votePost(this.props.postData, 'downVote', this.props.index)}
                    bsStyle="primary" bsSize="xsmall">
                        <Glyphicon glyph="chevron-down" />
                </Button>
            </ButtonGroup>
        );

        const threadControls = (
            <ButtonToolbar>
                <NewComment postData={this.props.postData} index={this.props.index}/>
                <EditThread postData={this.props.postData}/>
                <div className="btn btn-default btn-xs">
                    <Button
                        onClick={() => this.props.deletePost(this.props.postData)}
                        bsStyle="danger" bsSize="xsmall">
                        <Glyphicon glyph="trash" /> Delete
                    </Button>
                </div>
            </ButtonToolbar>
  
        );

        return (
            <div className="modal-container">
                <Panel bsStyle="info">

                    <Panel.Body>
                        <div className="pull-left">
                            <LinkContainer to={`/${this.props.postData.category}/${this.props.postData.id}`} >
                                <button className="btn-link">
                                    <h4>
                                        <Glyphicon glyph="new-window" /> {this.props.postData.title}
                                    </h4>
                                </button>
                            </LinkContainer>
                            <h6><Glyphicon glyph="user" /> {this.props.postData.author}</h6>
                            <br />
                            {this.props.children}
                            <br />
                            <h5>
                                <Label>{`/${this.props.postData.category}`}</Label>
                            </h5>
                        </div>


                        <Well bsSize="small" className="pull-right">
                            {voteButtons}
                            <br />
                            <center>
                                <h5>{this.props.postData.voteScore}</h5>
                            </center>
                        </Well>
                    </Panel.Body>
                    <Panel.Footer>

                        <div className="pull-right"><Glyphicon glyph="list" /> <i>{this.props.postData.commentCount} comments</i></div>
                        &nbsp; &nbsp; &nbsp;
                        {threadControls}

                    </Panel.Footer>
                </Panel>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        deletePost: post_actions.fetchDeletePost,
        editPost: post_actions.fetchEditPost,
        votePost: post_actions.votePost,
        addComment: comment_actions.addComment
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Thread);