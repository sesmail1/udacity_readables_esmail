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


class EditCommentForm extends Component {
    state = {
        form: {
            body: this.props.commentData.body
        }
    }
    handleData(e) {
        e.preventDefault();
        let updatedData = {
            ...this.props.commentData,
            body: this.body.value,
            timestamp: Date.now()
        };
        this.props.editComment(updatedData);
        this.props.modalMethod();
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
                            defaultValue={this.state.form.body}
                        />
                    </FormGroup>
                    
                    <Button className="btn btn-primary btn-large centerButton" type="submit">Send Edit</Button>
                </FormGroup>
            </Form>
        );
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        editComment: comments_action.editComment
    }, dispatch);
}

export default connect(null, matchDispatchToProps)(EditCommentForm);