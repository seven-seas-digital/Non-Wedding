import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './Header.js';
import Checklist from './Checklist';

class Home extends Component {
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
      <div className="App">
        <Header 
          updateChecklist={this.updateChecklist}/>
        <Checklist 
          checklistType={activeChecklist}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Home);
