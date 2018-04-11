import React, { Component } from 'react';
import Header from './Header.js';
import { connect } from 'react-redux';
import './App.css';
import Checklist from './Checklist.js';
// import Checklist from './Checklist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeChecklist: 'budget'
    };
    this.updateChecklist = this.updateChecklist.bind(this);
  }
  
  updateChecklist(type) {
    this.setState({
      activeChecklist: type
    })
  }


  render() {
    const activeChecklist = this.state.activeChecklist;
    
    return (
      <div className="app">
        <Header 
          updateChecklist={this.updateChecklist}/>
          <Checklist 
          checklistType={activeChecklist}/>
          {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
