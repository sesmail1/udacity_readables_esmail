import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Panel,
    Row,
    Col,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    Button
} from 'react-bootstrap';
import * as user_actions from '../../redux/actions/user';

class Login extends Component {
    handleUser(e) {
        e.preventDefault();
        let username = this.username.value;
        if(username.length > 0)
            this.props.login(username);
    }
    render() {
        return (
            <Row className="show-grid">
                <Col xs={8} xsOffset={2}>
                    <br/><br/>
                    <Panel bsStyle="info">
                        <Panel.Heading>
                            <center><Panel.Title componentClass="h1">Agora - the gathering place</Panel.Title></center>
                        </Panel.Heading>
                        <Panel.Body>

                            Please set a username to continue
                            <br /><br/>
                            <Form onSubmit={(e) => this.handleUser(e)} >
                                <FormGroup role="form">
                                    <ControlLabel>Username</ControlLabel>
                                    <FormControl inputRef={node => this.username = node} type="text" className="form-control" />                
                                    <br/>
                                    <Button className="btn btn-primary btn-large centerButton" type="submit">Set Username</Button>
                                </FormGroup>
                            </Form>
                        </Panel.Body>
                        <br/>
                        <Panel.Footer><i>Agora Forums, by Sameer Esmail, for the React Nanodegree Program, Udacity</i></Panel.Footer>
                    </Panel>
                </Col>
            </Row>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        login: user_actions.setUser
    }, dispatch);
}

export default connect(null, matchDispatchToProps)(Login);

