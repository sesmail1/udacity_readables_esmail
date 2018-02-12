import React, { Component } from 'react';
import NewThread from './NewThread';
import Filter from './Filter';
import { ButtonToolbar } from 'react-bootstrap';

export default class ForumToolbar extends Component {
    render() {
        return (
            <ButtonToolbar>
                <NewThread /><Filter/>
            </ButtonToolbar>
        );
    }
};