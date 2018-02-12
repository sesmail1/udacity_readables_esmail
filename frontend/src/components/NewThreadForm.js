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
import uuid from 'uuid/v1'

class NewThreadForm extends Component {
    handleData(e) {
        e.preventDefault();
        let postData = {
            author: this.props.user,
            body: this.body.value,
            category: this.category.value,
            id: uuid(),
            timestamp: Date.now(),
            title: this.title.value,
        }
        this.props.addPost(postData);
        this.props.modalMethod()
    }
    render() {
        return (
            <Form onSubmit={(e) => this.handleData(e)} >
                <FormGroup role="form">
                    <ControlLabel>Title</ControlLabel>
                    <FormControl inputRef={node => this.title = node} type="text" className="form-control" />
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Body</ControlLabel>
                        <FormControl
                            inputRef={node => this.body = node}
                            componentClass="textarea"
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Category</ControlLabel>
                        <FormControl inputRef={node => this.category = node} componentClass="select" placeholder="select">
                        {this.props.categories.map((category, index) => 
                            (<option key={index}> {category.name} </option>))}
                        </FormControl>
                    </FormGroup>
                    <Button className="btn btn-primary btn-large centerButton" type="submit">Send</Button>
                </FormGroup>
            </Form>
        );
    }
};

function mapStateToProps(state) {
    return {
        categories: state.category_reducer.categories,
        user: state.user_reducer.user
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPost: posts_action.fetchAddPost
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NewThreadForm);