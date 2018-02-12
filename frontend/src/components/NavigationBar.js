import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as category_actions from '../redux/actions/category';
import * as post_actions from '../redux/actions/posts';
import * as user_actions from '../redux/actions/user';
import {
    Navbar,
    Nav,
    NavDropdown,
    MenuItem,
    Glyphicon
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


class NavigationBar extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }
    categoryClickHandler(category) {
        this.props.fetchCategoryPosts(category.name)
    }
    render() {
        if (!this.props.categories) {
            return (
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            LOADING...
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            );

        }
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={`/`}><Glyphicon glyph="home" /> agora</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
                            {this.props.categories.map((category, index) => {
                                return (
                                    <LinkContainer key={index} to={`/${category.name}`}>
                                        <MenuItem
                                            key={index}
                                            eventKey={index}
                                            onClick={() => this.categoryClickHandler(category)}
                                        > {category.name.toUpperCase()}
                                        </MenuItem>
                                    </LinkContainer>
                                );
                            })}
                        </NavDropdown>
                    </Nav>
                    <div className="pull-right">
                        <Navbar.Text>
                            Logged in as: <b>{this.props.user}</b>
                        </Navbar.Text>
                        <Navbar.Text>
                            <button 
                                className="btn-link"
                                onClick={() => this.props.logOut()} >
                                    <Glyphicon glyph="share" /> Log Out
                            </button>
                        </Navbar.Text>
                    </div>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.category_reducer.categories,
        categoryPosts: state.posts_reducer.posts,
        user: state.user_reducer.user
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCategories: category_actions.fetchAllCategories,
        fetchCategoryPosts: post_actions.fetchCategoryPosts,
        logOut: user_actions.resetUser
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(NavigationBar);