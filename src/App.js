import React, { Component } from 'react';
import './App.css';
import Questions from './Questions.js';
import { Button, Row, Col } from 'reactstrap';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mode: 'landing',
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState = (newMode) => {
    this.setState({ mode: newMode})
  }

  

  render() {
    let bodyStyle, content; 

    //landing
    if (this.state.mode === 'landing') {
      bodyStyle = ("landing");
      content = (
        <div className="landing-text">
          <h3 className="title"><b>TESTING Welcome to the Middlebury Bauhaus Experience</b></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.</p>
          <div className="options-btn">
            <Button size="sm" color="warning" onClick={() => this.toggleState('questions')}>
              Begin
            </Button>
            <Button color="danger" onClick={() => this.toggleState('questions')}>
              Begin
            </Button>
            <Button color="primary" onClick={() => this.toggleState('questions')}>
              Begin
            </Button>
          </div>
        </div>
      );
    } else if(this.state.mode === 'questions') {
      bodyStyle = ('questions');
      content = ( <Questions reset={this.toggleState} /> );
    }

    return (
      <div className={bodyStyle}>
        {content}
      </div>
    );
  }
}

export default App;
