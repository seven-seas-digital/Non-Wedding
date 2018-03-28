import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Checklist from './Checklist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeChecklist: 'budget'
    };
    this.updateChecklist = this.updateChecklist.bind(this);
  }
  
  updateChecklist(type) {
    // alert('we did it ' + type);
    this.setState({
      activeChecklist: type
    })
  }

  render() {
    const activeChecklist = this.state.activeChecklist;

    return (
      <div className="App">
        <Header 
          updateChecklist={this.updateChecklist}/>
        <Checklist 
          checklistType={activeChecklist}/>
      </div>
    );
  }
}

export default App;
