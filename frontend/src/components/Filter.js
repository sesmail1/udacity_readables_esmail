import React, { Component } from 'react';
import * as rbs from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as post_actions from '../redux/actions/posts';

class Filter extends Component {
    render() {
        return (
            
                <rbs.DropdownButton id={`dropdown-basic`} bsSize="small" bsStyle="warning" title="Filter">
                    <rbs.MenuItem
                        onSelect={() => this.props.sort('date_desc')}
                        >Date - Newest</rbs.MenuItem>
                    <rbs.MenuItem
                        onSelect={() => this.props.sort('date_asc')}
                        >Date - Oldest</rbs.MenuItem>
                    <rbs.MenuItem
                        onSelect={() => this.props.sort('vote_asc')}
                        >Score - Descending</rbs.MenuItem>
                    <rbs.MenuItem
                        onSelect={() => this.props.sort('vote_desc')}
                        >Score - Ascending</rbs.MenuItem>
                </rbs.DropdownButton>
            
        );
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        sort: post_actions.sortPosts
    }, dispatch);
}

export default connect(null, matchDispatchToProps)(Filter);