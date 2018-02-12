import React, { Component } from 'react';
import * as rbs from 'react-bootstrap';
import Modal from './Modal';
import NewThreadForm from './NewThreadForm';


export default class NewThread extends Component {

    state = {
        showModal: false
    }

    newThreadHandler(e) {
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
                
                <rbs.Button
                    
                    onClick={(e) => this.newThreadHandler(e)}
                    bsSize="small"
                    bsStyle="success">
                    <rbs.Glyphicon glyph="plus" /> New Thread
                  </rbs.Button>

                <Modal 
                title={'New Thread'}
                showModal={this.state.showModal} 
                onHide={() => this.setState({showModal: false})}
                > 
                    <NewThreadForm 
                        
                        modalMethod={() => this.hideModal()}/> 
                </Modal>

            </div>
        );
    }
};