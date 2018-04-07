import React, { Component } from 'react';
import Home from './Home.js';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
export default class App extends Component {
  constructor(props) {
    super(props);

  }
  


  render() {

    return (
      <div className="DaApp">
        <Switch>
          <Route path='/signIn' component={SignIn}></Route>
          <Route path='/' component={Home}></Route>
      </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
