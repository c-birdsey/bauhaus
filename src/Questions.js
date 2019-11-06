import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

class Questions extends Component {
  constructor() {
    super();

    this.state = {
      q_number: 1,
    };

    this.increment_q = this.increment_q.bind(this);
  }

  increment_q = () => {
    var new_index; 
    new_index = this.state.q_number; 
    this.setState({ q_number: new_index + 1})
  }

  render() {
    let content, btnClass; 

    //landing
    if (this.state.q_number === 1) {
        content = (
            <div>Question 1</div>
        );
    } else if(this.state.q_number === 2) {
        content = (
            <div>Question 2</div>
        );
    } else if(this.state.q_number === 3) {
        content = (
            <div>Question 3</div>
        );
    } else if(this.state.q_number === 4) {
        content = (
            <div>Question 4</div>
        );
    } else if(this.state.q_number === 5) {
        content = (
            <div>Question 5</div>
        );
    } else {
        btnClass = "hidden";
        content = (
            <div>
                <p>Results</p>
                <Button color="danger" onClick={() => this.props.reset('landing')}>
                    Finish
                </Button>
            </div>
        );
    }

    return (
      <div className="questions">
        {content}
        <Button className={btnClass} color="primary" onClick = {() => this.increment_q()}>
            Next
        </Button>
      </div>
    );
  }
}

export default Questions;
