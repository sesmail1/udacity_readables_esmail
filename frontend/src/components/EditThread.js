import React, { Component } from 'react';
import * as rbs from 'react-bootstrap';
import Modal from './Modal';
import EditThreadForm from './EditThreadForm';


export default class EditThread extends Component {

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
                    bsStyle="warning">
                    <rbs.Glyphicon glyph="edit" /> Edit
                  </rbs.Button>

                <Modal 
                title={'Edit Thread'}
                showModal={this.state.showModal} 
                onHide={() => this.setState({showModal: false})}
                > 
                    <EditThreadForm 
                        postData={this.props.postData}
                        modalMethod={() => this.hideModal()}/>
                </Modal>

            </div>
        );
    }
};