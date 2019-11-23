import React, { Component } from 'react';
import './App.css';
import Questions from './Questions.js';
import Color from './Color.js';
import { Row, Col } from 'reactstrap';
import img from './img/modrien.gif'; 

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
        <div className="body landing-text">
          <Row>
          <Col xs={7} sm={7} md={7} lg={7} xl={7}>
            <h3 className="title"><b>Welcome to the Bauhaus Experience</b></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.</p>
            <div className="options-btn">
              <button type="button" class="btn btn-lg btn-outline-dark" onClick={() => this.toggleState('questions')}>
                Take the Bauhausler Quiz
              </button>
              <button type="button" class="btn btn-outline-dark btn-lg" onClick={() => this.toggleState('color')}>
                Learn Color Theory
              </button>
            </div>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5}>
            <div>
              <img src={img} className="gif" alt="Bauhaus GIF"></img>
            </div>
          </Col>
          </Row>
        </div>
      );
    } else if(this.state.mode === 'questions') {
      bodyStyle = ('questions');
      content = ( 
        <div className = {bodyStyle}>
          <Questions reset={this.toggleState} /> 
        </div>
      );
    } else if(this.state.mode === 'color') {
      content = ( <Color reset={this.toggleState}/> ); 
    }

    return (
      <div className="background">
        {content}
      </div>
    );
  }
}

export default App;
