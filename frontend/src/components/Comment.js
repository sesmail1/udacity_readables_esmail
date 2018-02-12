import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as comment_actions from '../redux/actions/comments';
import {
    Button,
    Glyphicon,
    Panel,
    Col,
    Row,
    ButtonGroup,
    Well
} from 'react-bootstrap';
import EditComment from './EditComment';

class Comment extends Component {
    render() {
        const voteButtons = (
            <ButtonGroup className="pull-right">
                <Button 
                    onClick={() => this.props.voteComment(this.props.commentData, 'upVote', this.props.index)}
                    bsStyle="primary" bsSize="xsmall">
                        <Glyphicon glyph="chevron-up" />
                </Button>
                <Button 
                    onClick={() => this.props.voteComment(this.props.commentData, 'downVote', this.props.index)}
                    bsStyle="primary" bsSize="xsmall">
                        <Glyphicon glyph="chevron-down" />
                </Button>
            </ButtonGroup>
        );
        const container = (
            <Well bsSize="small" className="pull-right">
                {voteButtons}
                <br />
                <center>
                    <h5>{this.props.commentData.voteScore}</h5>
                </center>
            </Well>
        );
        const threadControls = (
            <ButtonGroup className="pull-right">
                <EditComment 
                    commentData={this.props.commentData}
                />
                <div className="btn btn-default btn-xs">
                    <Button
                        onClick={() => this.props.deleteComment(this.props.commentData)}
                        bsStyle="danger" bsSize="xsmall">
                        <Glyphicon glyph="trash" /> Delete
                    </Button>
                </div>
            </ButtonGroup>
        );
        return (
        <Row className="show-grid">
            <Col xs={10} xsOffset={1}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        #{this.props.index + 1}
                    </Panel.Heading>
                    <Panel.Body>{this.props.commentData.body} {container}</Panel.Body>
                    <Panel.Footer bsStyle="primary"><Glyphicon glyph="user"/> {this.props.commentData.author} {threadControls}</Panel.Footer>
                </Panel>                    
            </Col>
        </Row>
        );
    }
};

function mapStateToProps(state) {
    return {
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteComment: comment_actions.deleteComment,
        editComment: comment_actions.editComment,
        voteComment: comment_actions.voteComment
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Comment);