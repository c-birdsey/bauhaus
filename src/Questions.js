import React, { Component } from 'react';
import './App.css';
import { Button, Row, Col } from 'reactstrap';
import schlemmer from './img/schlemmer.png'; 
import itten from './img/itten.png'; 
import brandt from './img/brandt.png';
import albers from './img/albers.png';  

import albersBody from './img/albers-body.png';  
import ittenBody from './img/itten-body.jpg';  
import brandtBody from './img/brandt-body.jpg';  
import schlemmerBody from './img/schlemmer-body.jpg';  

import albersSketch from './img/albers-sketch.png';  
import ittenSketch from './img/itten-sketch.jpg';  
import brandtSketch from './img/brandt-sketch.jpg';  
import schlemmerSketch from './img/schlemmer-sketch.jpg';  


import albersItem from './img/albers-item.jpg';  
import ittenItem from './img/itten-item.jpg';  
import brandtItem from './img/brandt-item.jpg';  
import schlemmerItem from './img/schlemmer-item.jpg';  


import albersPattern from './img/albers-pattern.png';  
import ittenPattern from './img/itten-pattern.jpg';  
import brandtPattern from './img/brandt-pattern.png';  
import schlemmerPattern from './img/schlemmer-pattern.jpg';  

var data = {
    "itten": {
        name: "Johannes Itten", 
        img: itten, 
        about: "Johannes Itten was very much an experimental educator. As the head of the preliminary introductory course at the Bauhaus, he encouraged self-expression via a number of different outlets, not contained only to the arts. Within his own work, he explored color and contrast, often with a focus on mysticism as well.", 
        workshop: "Vorkurs Preliminary Course", 
        aboutWork: "Training for all students began with the preliminary course where new, experimental educational methods were applied to acquaint students with the use of materials and the basic principles of design. Only after students passed the preliminary course were they allowed to select a workshop for their main course of study. Check out the section of the exhibit on the preliminary course to learn more!"}, 
    "schlemmer": {
        name: "Oskar Schlemmer", 
        img: schlemmer, 
        about: "Oskar Schlemmer worked primarily as a painter, sculptor, theater designer and choreographer. His work was experimental and abstract, yet he expertly bridged the gap between pure abstraction and representational work. Much of his work dealt with interpretations of the human body and physical forms.", 
        workshop: "Theater Workshop", 
        aboutWork: "This was the space within the Bauhaus where students were introduced to modern dance and theater, as well as stage design and the relationship between the human being and space. It supported Schlemmer’s incredibly successful ‘Triadic Ballet’ in 1922 and became a central piece of the Bauhaus curriculum. Check out the section of the exhibit on the theater workshop to learn more!"}, 
    "albers": {
        name: "Anni Albers", 
        img: albers, 
        about: "Arriving at the Bauhaus with the intention of pursuing a career as a painter, Albers found artistic freedom at the loom. She quickly became one the most prolific members of the workshop, experimenting within the technical structure of weaving and exploring abstraction throughout her work. She made a distinct mark on the Bauhaus and the weaving art form as a whole.", 
        workshop: "Weaving Workshop", 
        aboutWork: "The weaving workshop was one of the most successful and productive workshops at the Bauhaus, experimenting with both traditional craft techniques and industrial methods. Much of the work dealt with core artistic concepts such as color and complex patterning. Check out the section of the exhibit on the textiles workshop to learn more!"}, 
    "brandt": {
        name: "Marianne Brandt", 
        img: brandt, 
        about: "Marianne Brandt made a name for herself in the metal workshop, a male dominated field, and excelled designing elegant and industrial household items that were both sculptural and utilitarian. She eventually progressed to be the director of the metal workshop and is an influential figure in the world of modern industrial design.",
        workshop: "Metal Workshop", 
        aboutWork: "The metal workshop at the Bauhaus was one of the studios most focused on the development of product prototypes, designed for mass production. Some of the most successful items coming from this workshop were lamps, ashtrays, tea infusers, and other objects of that sort. Check out the section of the exhibit on the metal workshop to learn more!"}
};

var index = {
    "itten": 0, 
    "brandt": 0, 
    "schlemmer": 0, 
    "albers": 0
  }; 

class Questions extends Component {
  constructor() {
    super();

    this.state = {
      q_number: 7,
      value: undefined, 
      img: undefined, 
    };

    this.handleNext = this.handleNext.bind(this);
    this.countScore = this.countScore.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearIndex = this.clearIndex.bind(this); 
  }

  handleNext = () => {
    var new_index = this.state.q_number; 
    this.countScore(); 
    this.setState({ q_number: new_index + 1, value: undefined, img: undefined});
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value }); 
  };
  
  countScore = () => {
    if(this.state.value === undefined)
        index[this.state.img] = index[this.state.img] + 1;
    else
        index[this.state.value] = index[this.state.value] + 1;
    console.log(index);
  }

  clearIndex = () => {  
    index.itten = 0; 
    index.brandt = 0; 
    index.schlemmer = 0; 
    index.albers = 0; 
  }

  getMatch = () => {
      let arr = ["itten", "brandt", "schlemmer", "albers"]; 
      let top;
      let count = 0;  
      arr.forEach(element => {
          if(index[element] > count) {
              top = element; 
              count = index[element]; 
          }
      });
      return top; 
  }

  render() {
    let content; 
    let btnClass = "next-btn"; 
    let schlemmerClass = ((this.state.img === "schlemmer") ? "multichoice-img clicked" : "multichoice-img"); 
    let ittenClass = ((this.state.img === "itten") ? "multichoice-img clicked" : "multichoice-img"); 
    let albersClass = ((this.state.img === "albers") ? "multichoice-img clicked" : "multichoice-img"); 
    let brandtClass = ((this.state.img === "brandt") ? "multichoice-img clicked" : "multichoice-img"); 
 
    if (this.state.q_number === 1) {
        this.clearIndex(); 
        content = (
            <div>
                <div className="question-text fade-in">Imagine you’re a young artist at the Bauhaus. As you begin to develop a style and reputation, what characteristics would you want your work to be associated with?</div>
                <div className="container fade-in">
                        <input 
                            className="hidden"
                            type="radio" 
                            value="albers"
                            id="input1"
                            checked={this.state.value === "albers"}
                            onChange={this.handleChange}
                        ></input>
                        <label className="entry" htmlFor="input1">
                            <div className="radio-circle"></div>
                            <div className="entry-label">Experimental, technical and complex</div>
                        </label>
                        <input 
                            className="hidden"
                            type="radio" 
                            value="itten"
                            id="input2"
                            checked={this.state.value === "itten"}
                            onChange={this.handleChange}
                        ></input>
                         <label className="entry" htmlFor="input2">
                            <div class="radio-circle"></div>
                            <div class="entry-label">Eccentric, imaginative and colorful</div>
                        </label>
                        <input 
                            className="hidden"
                            type="radio" 
                            value="brandt"
                            id="input3"
                            checked={this.state.value === "brandt"}
                            onChange={this.handleChange}
                        ></input>
                         <label className="entry" htmlFor="input3">
                            <div class="radio-circle"></div>
                            <div class="entry-label">Simple, efficient and elegant</div>
                        </label>
                        <input 
                            className="hidden"
                            type="radio" 
                            value="schlemmer"
                            id="input4"
                            checked={this.state.value === "schlemmer"}
                            onChange={this.handleChange}
                        ></input>
                        <label className="entry" htmlFor="input4">
                            <div class="radio-circle"></div>
                            <div class="entry-label">Geometric, performative and abstract</div>
                        </label>
                    <div class="highlight"></div>
                    <div class="overlay"></div>
                </div>
            </div>
        ); 
    } else if(this.state.q_number === 2) {
        content = (
            <div>
                <div className="question-text fade-in">Which career in the arts sounds most appealing to you?</div>
                <div className="container fade-in">
                        <input 
                            className="hidden"
                            type="radio" 
                            value="brandt"
                            id="input1"
                            checked={this.state.value === "brandt"}
                            onChange={this.handleChange}
                        ></input>
                        <label className="entry" htmlFor="input1">
                            <div class="radio-circle"></div>
                            <div class="entry-label">Industrial designer</div>
                        </label>
                        <input 
                            className="hidden"
                            type="radio" 
                            value="schlemmer"
                            id="input2"
                            checked={this.state.value === "schlemmer"}
                            onChange={this.handleChange}
                        ></input>
                         <label className="entry" htmlFor="input2">
                            <div class="radio-circle"></div>
                            <div class="entry-label">Costume designer </div>
                        </label>
                        <input 
                            className="hidden"
                            type="radio" 
                            value="itten"
                            id="input3"
                            checked={this.state.value === "itten"}
                            onChange={this.handleChange}
                        ></input>
                         <label className="entry" htmlFor="input3">
                            <div class="radio-circle"></div>
                            <div class="entry-label">Abstract painter and theorist</div>
                        </label>
                        <input 
                            className="hidden"
                            type="radio" 
                            value="albers"
                            id="input4"
                            checked={this.state.value === "albers"}
                            onChange={this.handleChange}
                        ></input>
                        <label className="entry" htmlFor="input4">
                            <div class="radio-circle"></div>
                            <div class="entry-label">Textile designer</div>
                        </label>
                    <div class="highlight"></div>
                    <div class="overlay"></div>
                </div>
            </div>
        );
    } else if(this.state.q_number === 3) {
        content = (
            <div>
                <div className="fade-in question-text">Imagine you are asked by a master to create a work of art that 
                represents the human body and the human form. Which image would you most likely create or which 
                image is most appealing to you?</div>
                <div className="fade-in container">
                    <Row >
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={schlemmerClass}
                                src={schlemmerBody}
                                onClick={() => this.setState({ img: "schlemmer" })}
                            ></img>
                        </Col>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={ittenClass}
                                src={ittenBody}
                                onClick={() => this.setState({ img: "itten" })}
                            ></img>
                        </Col>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={albersClass}
                                src={albersBody}
                                onClick={() => this.setState({ img: "albers" })}
                            ></img>
                        </Col>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={brandtClass}
                                src={brandtBody}
                                onClick={() => this.setState({ img: "brandt" })}
                            ></img>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    } else if(this.state.q_number === 4) {
        content = (
            <div>
                <div className="question-text fade-in">As an aspiring Bauhaus artist, you always carry a sketchbook. What image 
                looks most like a page from your book? </div>
                <div className="container fade-in">
                    <Row>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={schlemmerClass}
                                src={schlemmerSketch}
                                onClick={() => this.setState({ img: "schlemmer" })}
                            ></img>
                        </Col>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={ittenClass}
                                src={ittenSketch}
                                onClick={() => this.setState({ img: "itten" })}
                            ></img>
                        </Col>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={albersClass}
                                src={albersSketch}
                                onClick={() => this.setState({ img: "albers" })}
                            ></img>
                        </Col>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={brandtClass}
                                src={brandtSketch}
                                onClick={() => this.setState({ img: "brandt" })}
                            ></img>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    } else if(this.state.q_number === 5) {
        content = (
            <div>
                <div className="question-text fade-in"> Imagine you are asked to select a pattern that best represents your 
                artistic style, or would be most similar to pattern you might create. Which of the following images
                would you pick? 
                </div>
                <div className="container fade-in">
                <Row>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={schlemmerClass}
                                src={schlemmerPattern}
                                onClick={() => this.setState({ img: "schlemmer" })}
                            ></img>
                        </Col>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={ittenClass}
                                src={ittenPattern}
                                onClick={() => this.setState({ img: "itten" })}
                            ></img>
                        </Col>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={albersClass}
                                src={albersPattern}
                                onClick={() => this.setState({ img: "albers" })}
                            ></img>
                        </Col>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={brandtClass}
                                src={brandtPattern}
                                onClick={() => this.setState({ img: "brandt" })}
                            ></img>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    } else if(this.state.q_number === 6) {
        content = (
            <div>
                <div className="question-text fade-in"> Imagine you are decorating a 1920s apartment on a small budget. You can 
                afford to add one of the following Bauhaus products (rug, pendant light, desk lamp, and coffee table) to your 
                living room. Which would you choose?
                </div>
                <div className="container fade-in">
                <Row>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={schlemmerClass}
                                src={schlemmerItem}
                                onClick={() => this.setState({ img: "schlemmer" })}
                            ></img>
                        </Col>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={ittenClass}
                                src={ittenItem}
                                onClick={() => this.setState({ img: "itten" })}
                            ></img>
                        </Col>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={albersClass}
                                src={albersItem}
                                onClick={() => this.setState({ img: "albers" })}
                            ></img>
                        </Col>
                        <Col className="frame" xs={3} sm={3} md={3} lg={3} xl={3}>
                            <img 
                                className={brandtClass}
                                src={brandtItem}
                                onClick={() => this.setState({ img: "brandt" })}
                            ></img>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    } else {
        btnClass = "hidden";
        let match = this.getMatch(); 
        console.log(index[match]); 
        let name = data[match]["name"]; 
        let workshop = "About the " + data[match]["workshop"]; 
        content = (
            <div>
                <div className="quiz-results fade-in">
                    <Row>
                        <Col className="img-col fade-in" xs={5} sm={5} md={5} lg={5} xl={5}>
                            <img src={data[match]["img"]} className="match-img" alt={match}></img>
                        </Col> 
                        <Col className="results-text fade-in" xs={7} sm={7} md={7} lg={7} xl={7}>
                            <h3>You are most similar to...</h3>
                            <h2><b>{name}</b></h2>
                            <p className="match-abt">{data[match]["about"]}</p>  
                            <h3><b>{workshop}</b></h3>
                            <p className="match-abt">{data[match]["aboutWork"]}</p>  
                        </Col> 
                    </Row>
                </div>
                    <Button className="return-home" size="md" color="danger" onClick={() => this.props.reset('landing')}>
                            Return Home
                    </Button>
            </div>
        );
    }

    return (
        <div className="question-body">
            <div>
                {content}
                <Button 
                    type="submit" 
                    disabled={this.state.value === undefined && this.state.img === undefined} 
                    className={btnClass} 
                    color="primary" 
                    onClick = {() => this.handleNext()}
                    > Next
                </Button>
            </div>
        </div>
    );
  }
}

export default Questions;
