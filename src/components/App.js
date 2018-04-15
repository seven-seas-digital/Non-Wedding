import React, { Component } from 'react';
import Header from './Header.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index.js';
import './App.css';
import Checklist from './Checklist.js';
// import Checklist from './Checklist';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const activeChecklist = this.props.activeChecklist;

    return (
      <div className="App">
        <Header
          activeChecklist={activeChecklist}
          updateChecklist={this.props.actions.changeChecklist} />
          <Checklist
          checklistType={activeChecklist}/>
          {this.props.children}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
