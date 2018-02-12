import React, { Component } from 'react';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import HomeView from './views/HomeView'
import CategoryView from './views/CategoryView';
import PostView from './views/PostView';
import { connect } from 'react-redux';
import Login from './views/Login';


class App extends Component {

  render() {
    if(!this.props.loggedIn) {
      return (
        <Login />
      )
    }
    if(this.props.loggedIn)
    return (
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route exact path='/:category' component={CategoryView} />
          <Route exact path='/:category_name/:post_id' component={PostView}/>
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.user_reducer.loggedIn,
  };
};



export default withRouter(connect(mapStateToProps)(App));

//push to github and submit