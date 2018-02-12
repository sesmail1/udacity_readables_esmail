import React, { Component } from 'react';
import * as rbs from 'react-bootstrap';

export default class Modal extends Component {

    render() {
        return (
            <div>
                <rbs.Modal show={this.props.showModal} onHide={this.props.onHide}>
                    <rbs.Modal.Header closeButton>
                        <rbs.Modal.Title>{this.props.title}</rbs.Modal.Title>
                    </rbs.Modal.Header>
                    <rbs.Modal.Body>
                        {this.props.children}
                    </rbs.Modal.Body>
                </rbs.Modal>
            </div>
        );
    }
};
