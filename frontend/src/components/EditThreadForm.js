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
import * as posts_action from '../redux/actions/posts';


class EditThreadForm extends Component {
    state = {
        form: {
            title: this.props.postData.title,
            body: this.props.postData.body
        }
    }
    handleData(e) {
        e.preventDefault();
        let updatedData = {
            ...this.props.postData,
            title: this.title.value,
            body: this.body.value,
            timestamp: Date.now()
        };
        this.props.editPost(updatedData);
        this.props.modalMethod();
    }
    render() {
        return (
            <Form onSubmit={(e) => this.handleData(e)} >
                <FormGroup role="form">
                    <ControlLabel>Title</ControlLabel>
                    <FormControl defaultValue={this.state.form.title} inputRef={node => this.title = node} type="text" className="form-control" />
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
        editPost: posts_action.fetchEditPost
    }, dispatch);
}

export default connect(null, matchDispatchToProps)(EditThreadForm);