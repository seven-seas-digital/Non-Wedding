import React, { Component } from 'react';
import Header from './Header.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index.js';
import './App.css';
import Checklist from './Checklist.js';

import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import Modal from 'react-modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPaneOpen: false,
      isPaneOpenLeft: false
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  render() {
    const activeChecklist = this.props.activeChecklist;
    // const activeNav = this.props.activeNav;
    return (
      <div className="App" ref={ref => this.el = ref} >
        <Header
          activeChecklist={activeChecklist}
          updateChecklist={this.props.actions.changeChecklist} />
        <Checklist
          checklistMap={this.props.checklistMap}
          updateChecklist={this.props.actions.changeChecklist}
          checklistType={activeChecklist} />
        <button onClick={() => this.setState({ isPaneOpen: true })}>Click me to open right pane!</button>
        <SlidingPane
          className='slide-menu'
          overlayClassName='slide-menu-container'
          isOpen={ this.state.isPaneOpen }
          title='Hey, it is optional pane title.  I can be React component too.'
          subtitle='Optional subtitle.'
          onRequestClose={ () => {
              // triggered on "<" on left top click or on outside click
              this.setState({ isPaneOpen: false });
          } }>
          <div>And I am pane content. BTW, what rocks?</div>
          <br />
        </SlidingPane>
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
  const checklistMap = {
    'budget': 0,
    'apparel': 1,
    'reception': 2,
    'ceremony': 3
  }
  return {checklistMap, ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
