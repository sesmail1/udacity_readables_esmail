import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    Button,
    ControlLabel
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as comments_action from '../redux/actions/comments';
import * as posts_action from '../redux/actions/posts';
import uuid from 'uuid/v1'

class NewThreadForm extends Component {
    handleData(e) {
        e.preventDefault();
        let commentData = {
            author: this.props.user,
            body: this.body.value,
            id: uuid(),
            timestamp: Date.now(),
            parentId: this.props.postData.id
        }
        this.props.addComment(commentData);
        this.props.incrementComments(this.props.index);
        this.props.modalMethod()
    }
    render() {
        return (
            <Form onSubmit={(e) => this.handleData(e)} >
                <FormGroup role="form">
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Body</ControlLabel>
                        <FormControl
                            inputRef={node => this.body = node}
                            componentClass="textarea"
                        />
                    </FormGroup>
                    <Button className="btn btn-primary btn-large centerButton" type="submit">Send</Button>
                </FormGroup>
            </Form>
        );
    }
};

function mapStateToProps(state) {
    return {
      user: state.user_reducer.user
    };
  };

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addComment: comments_action.addComment,
        incrementComments: posts_action.postCommentsIncrement
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NewThreadForm);