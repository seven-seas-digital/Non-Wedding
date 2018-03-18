import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Checklist from './Checklist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Checklist />
      </div>
    );
  }
}

export default App;
