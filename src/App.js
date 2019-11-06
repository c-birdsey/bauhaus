import React, { Component } from 'react';
import './App.css';
import Questions from './Questions.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mode: 'landing',
    };
  }

  render() {
    let bodyStyle, content; 

    //landing
    if (this.state.mode === 'landing') {
      bodyStyle = ("landing");
      content = (
        <div className="landing-text">Testing</div>
      );
    } else if(this.state.mode === 'questions') {
      bodyStyle = ('questions');
      content = ( <Questions /> );
    }

    return (
      <div className={bodyStyle}>
        {content}
      </div>
    );
  }
}

export default App;
