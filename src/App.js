import React, { Component } from 'react';
import './App.css';
import Questions from './Questions.js';
import { Button } from 'reactstrap';

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
          <p>Testing</p>
          <Button color="warning" onClick={() => this.toggleState('questions')}>
            Begin
          </Button>
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
