import React, { Component } from 'react';
import logo from '../assets/logo-nonwedding.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Hearts from './Hearts';

{/* <Link to="/SignIn">Sign in</Link> */}

class Logo extends Component {

  authButton(){
    if (this.props.authenticated) {
      return <button onClick={() => this.props.authenticate(false)}>Sign Out</button>
    }

    return <button onClick={() => this.props.authenticate(true)}>Sign In</button>;
  }
  render() {
    return (
      <div className="logo-container">
        <div className="hearts-container">
          < Hearts />
        </div>
        <span style={{position: 'absolute', right: '20px', top: '0'}}>{ this.authButton() }</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}
export default connect(mapStateToProps, actions)(Logo);