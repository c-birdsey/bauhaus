import React, { Component } from 'react';
import './App.css';
import Questions from './Questions.js';
import Color from './Color.js';
import { Row, Col } from 'reactstrap';
import img from './img/modrien.gif'; 
import Fullscreen from "react-full-screen";

class App extends Component {
  constructor() {
    super();

    this.state = { 
      mode: 'landing',
      isFull: false,
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState = (newMode) => {
    this.setState({ mode: newMode})
  }

  goFull = () => {
    this.setState({ isFull: true });
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
            <h3 className="title"><b>Welcome to the Interactive Bauhaus App</b></h3>
            <p>Welcome to Middlebury College’s interactive app celebrating the 100th anniversary of the Bauhaus. 
              With this tool you can explore Wassily Kandinsky’s color theory, as well as a step into the shoes of a young 
              Bauhaus artist and answer questions that will pair you with an iconic Bauhaus Master and their associated 
              workshop. In the spirit of the Bauhaus, we hope that an interactive and hands-on experience will elevate 
              the experience of art and design theory!</p>
            <div className="options-btn">
              <button type="button" className="btn btn-md btn-outline-dark" onClick={() => this.toggleState('questions')}>
                Take the Bauhausler Quiz
              </button>
              <button type="button" className="btn btn-outline-dark btn-md" onClick={() => this.toggleState('color')}>
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
      <div>
          <Fullscreen
            enabled={this.state.isFull}
            onChange={isFull => this.setState({isFull})}
          >
            <div className="background">
              {content}
            </div>
          </Fullscreen>
      </div>
    );
  }
}

export default App;
