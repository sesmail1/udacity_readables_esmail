import React, { Component } from 'react';
import * as rbs from 'react-bootstrap';
import Modal from './Modal';
import EditCommentForm from './EditCommentForm';


export default class EditComment extends Component {

    state = {
        showModal: false
    }

    editThreadHandler(e) {
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
            <div className="btn btn-default btn-xs">
                
                <rbs.Button
                    
                    onClick={(e) => this.editThreadHandler(e)}
                    bsSize="xsmall"
                    bsStyle="success">
                    <rbs.Glyphicon glyph="edit" /> Edit
                  </rbs.Button>

                <Modal 
                title={'Edit Comment'}
                showModal={this.state.showModal} 
                onHide={() => this.setState({showModal: false})}
                > 
                    <EditCommentForm 
                        commentData={this.props.commentData}
                        modalMethod={() => this.hideModal()}/>
                </Modal>

            </div>
        );
    }
};