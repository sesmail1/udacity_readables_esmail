import React, { Component } from 'react';
import * as rbs from 'react-bootstrap';
import Modal from './Modal';
import NewCommentForm from './NewCommentForm';


export default class NewComment extends Component {

    state = {
        showModal: false
    }

    newCommentHandler(e) {
        e.preventDefault();
        this.setState({
            showModal: true
        });
    };

    hideModal() {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div>
                
                <div className="btn btn-default btn-xs">
                    <rbs.Button
                        onClick={(e) => this.newCommentHandler(e)}
                        bsStyle="success" bsSize="xsmall">
                        <rbs.Glyphicon glyph="plus" /> Comment
                    </rbs.Button>
                </div>

                <Modal 
                title={'Add Comment'}
                showModal={this.state.showModal} 
                onHide={() => this.setState({showModal: false})}
                > 
                    <NewCommentForm 
                        postData={this.props.postData}
                        index={this.props.index}
                        modalMethod={() => this.hideModal()}/> 
                </Modal>

            </div>
        );
    }
};