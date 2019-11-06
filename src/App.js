import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      mode: 'landing',
    };
  }

  render() {
    let bodyStyle; 

    //landing
    if (this.state.mode === 'landing') {
      bodyStyle = ("landing");
    } else if(this.state.mode === 'questions') {
      bodyStyle = ('questions');
    }

    return (
      <div className={bodyStyle}>
    
      </div>
    );
  }
}

export default App;
