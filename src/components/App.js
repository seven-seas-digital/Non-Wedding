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

    // this.state = {
    //   activeChecklist: 'budget'
    // };
    // this.updateChecklist = this.updateChecklist.bind(this);
  }

  // updateChecklist(type) {
  //   this.setState({
  //     activeChecklist: type
  //   })
  // }


  render() {
    // const activeChecklist = this.state.activeChecklist;
    const activeChecklist = this.props.activeChecklist;
    return (
      <div className="app">
        <Header
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
