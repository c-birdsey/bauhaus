import React, { Component } from 'react';
import './App.css';

class Questions extends Component {
  constructor() {
    super();

    this.state = {
      q_number: 1,
    };
  }

  //function to increment q_number on click of next 

  render() {
    let content; 

    //landing
    if (this.state.q_number === 1) {
        content = (
            <div>Question 1</div>
        );
    } else if(this.state.q_number === 2) {
        content = (
            <div>Question 2</div>
        );
    }

    return (
      <div className="questions">
        {content}
      </div>
    );
  }
}

export default Questions;
