import React, { Component } from 'react';
import './App.css';
import { Button, Row, Col } from 'reactstrap';
import schlemmer from './img/schlemmer.png'; 
import itten from './img/itten.png'; 
import brandt from './img/brandt.png';
import albers from './img/albers.png';  

var data = {
    "itten": {name: "Johannes Itten", img: itten, about: "Lorem ipsum dolor sit amet, adhuc vivendum interpretaris mei ea, sit summo nonumes gloriatur ea, mei in malis atqui semper. In sed quaeque atomorum, no suas nonumy eum, vix porro docendi ex. Debet elitr pro ei, te utroque aliquando nam, ne per tation graecis officiis. Dissentiet reprehendunt te eos. Nam ea inani dissentias, vim cibo dignissim ad. Vidit nominati ea mei, eum cu quod simul sadipscing, ei decore minimum nec.", workshop: "Vorkurs Preliminary Course", aboutWork: "Lorem ipsum dolor sit amet, adhuc vivendum interpretaris mei ea, sit summo nonumes gloriatur ea, mei in malis atqui semper. In sed quaeque atomorum, no suas nonumy eum, vix porro docendi ex. Debet elitr pro ei, te utroque aliquando nam, ne per tation graecis officiis. Dissentiet reprehendunt te eos. Nam ea inani dissentias, vim cibo dignissim ad. Vidit nominati ea mei, eum cu quod simul sadipscing, ei decore minimum nec."}, 
    "schlemmer": {name: "Oskar Schlemmer", img: schlemmer, about: "Lorem ipsum dolor sit amet, adhuc vivendum interpretaris mei ea, sit summo nonumes gloriatur ea, mei in malis atqui semper. In sed quaeque atomorum, no suas nonumy eum, vix porro docendi ex. Debet elitr pro ei, te utroque aliquando nam, ne per tation graecis officiis. Dissentiet reprehendunt te eos. Nam ea inani dissentias, vim cibo dignissim ad. Vidit nominati ea mei, eum cu quod simul sadipscing, ei decore minimum nec.", workshop: "Theater Workshop", aboutWork: "Lorem ipsum dolor sit amet, adhuc vivendum interpretaris mei ea, sit summo nonumes gloriatur ea, mei in malis atqui semper. In sed quaeque atomorum, no suas nonumy eum, vix porro docendi ex. Debet elitr pro ei, te utroque aliquando nam, ne per tation graecis officiis. Dissentiet reprehendunt te eos. Nam ea inani dissentias, vim cibo dignissim ad. Vidit nominati ea mei, eum cu quod simul sadipscing, ei decore minimum nec."}, 
    "albers": {name: "Anni Albers", img: albers, about: "testLorem ipsum dolor sit amet, adhuc vivendum interpretaris mei ea, sit summo nonumes gloriatur ea, mei in malis atqui semper. In sed quaeque atomorum, no suas nonumy eum, vix porro docendi ex. Debet elitr pro ei, te utroque aliquando nam, ne per tation graecis officiis. Dissentiet reprehendunt te eos. Nam ea inani dissentias, vim cibo dignissim ad. Vidit nominati ea mei, eum cu quod simul sadipscing, ei decore minimum nec.", workshop: "Weaving Workshop", aboutWork: "Lorem ipsum dolor sit amet, adhuc vivendum interpretaris mei ea, sit summo nonumes gloriatur ea, mei in malis atqui semper. In sed quaeque atomorum, no suas nonumy eum, vix porro docendi ex. Debet elitr pro ei, te utroque aliquando nam, ne per tation graecis officiis. Dissentiet reprehendunt te eos. Nam ea inani dissentias, vim cibo dignissim ad. Vidit nominati ea mei, eum cu quod simul sadipscing, ei decore minimum nec."}, 
    "brandt": {name: "Marianne Brandt", img: brandt, about: "Lorem ipsum dolor sit amet, adhuc vivendum interpretaris mei ea, sit summo nonumes gloriatur ea, mei in malis atqui semper. In sed quaeque atomorum, no suas nonumy eum, vix porro docendi ex. Debet elitr pro ei, te utroque aliquando nam, ne per tation graecis officiis. Dissentiet reprehendunt te eos. Nam ea inani dissentias, vim cibo dignissim ad. Vidit nominati ea mei, eum cu quod simul sadipscing, ei decore minimum nec.", workshop: "Metal Workshop", aboutWork: "Lorem ipsum dolor sit amet, adhuc vivendum interpretaris mei ea, sit summo nonumes gloriatur ea, mei in malis atqui semper. In sed quaeque atomorum, no suas nonumy eum, vix porro docendi ex. Debet elitr pro ei, te utroque aliquando nam, ne per tation graecis officiis. Dissentiet reprehendunt te eos. Nam ea inani dissentias, vim cibo dignissim ad. Vidit nominati ea mei, eum cu quod simul sadipscing, ei decore minimum nec."}
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
      q_number: 1,
      value: undefined, 
    };

    this.handleNext = this.handleNext.bind(this);
    this.countScore = this.countScore.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearIndex = this.clearIndex.bind(this); 
  }

  handleNext = () => {
    var new_index = this.state.q_number; 
    this.countScore(); 
    this.setState({ q_number: new_index + 1, value: undefined});
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value }); 
  }; 

  countScore = () => {
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
 
    if (this.state.q_number === 1) {
        this.clearIndex(); 
        content = (
            <div>
                <div className="question-text">Question 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat?
                </div>
                <div className="container">
                        <input 
                            className="hidden"
                            type="radio" 
                            value="albers"
                            id="input1"
                            checked={this.state.value === "albers"}
                            onChange={this.handleChange}
                        ></input>
                        <label className="entry" htmlFor="input1">
                            <div class="radio-circle"></div>
                            <div class="entry-label">Answer 1</div>
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
                            <div class="entry-label">Answer 2</div>
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
                            <div class="entry-label">Answer 3</div>
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
                            <div class="entry-label">Answer 4</div>
                        </label>
                    <div class="highlight"></div>
                    <div class="overlay"></div>
                </div>
            </div>
        ); 
    } else if(this.state.q_number === 2) {
        content = (
            <div>
                <div className="question-text">Question 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat?
                </div>
                <div className="container">
                        <input 
                            className="hidden"
                            type="radio" 
                            value="albers"
                            id="input1"
                            checked={this.state.value === "albers"}
                            onChange={this.handleChange}
                        ></input>
                        <label className="entry" htmlFor="input1">
                            <div class="radio-circle"></div>
                            <div class="entry-label">Answer 1</div>
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
                            <div class="entry-label">Answer 2</div>
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
                            <div class="entry-label">Answer 3</div>
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
                            <div class="entry-label">Answer 4</div>
                        </label>
                    <div class="highlight"></div>
                    <div class="overlay"></div>
                </div>
            </div>
        );
    } else if(this.state.q_number === 3) {
        content = (
            <div>
                <div className="question-text">Question 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat?
                </div>
                <div className="container">
                        <input 
                            className="hidden"
                            type="radio" 
                            value="albers"
                            id="input1"
                            checked={this.state.value === "albers"}
                            onChange={this.handleChange}
                        ></input>
                        <label className="entry" htmlFor="input1">
                            <div class="radio-circle"></div>
                            <div class="entry-label">Answer 1</div>
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
                            <div class="entry-label">Answer 2</div>
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
                            <div class="entry-label">Answer 3</div>
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
                            <div class="entry-label">Answer 4</div>
                        </label>
                    <div class="highlight"></div>
                    <div class="overlay"></div>
                </div>
            </div>
        );
    } else if(this.state.q_number === 4) {
        content = (
            <div>
                <div className="question-text">Question 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat?
                </div>
                <div className="container">
                        <input 
                            className="hidden"
                            type="radio" 
                            value="albers"
                            id="input1"
                            checked={this.state.value === "albers"}
                            onChange={this.handleChange}
                        ></input>
                        <label className="entry" htmlFor="input1">
                            <div class="radio-circle"></div>
                            <div class="entry-label">Answer 1</div>
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
                            <div class="entry-label">Answer 2</div>
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
                            <div class="entry-label">Answer 3</div>
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
                            <div class="entry-label">Answer 4</div>
                        </label>
                    <div class="highlight"></div>
                    <div class="overlay"></div>
                </div>
            </div>
        );
    } else if(this.state.q_number === 5) {
        content = (
            <div>
                <div className="question-text">Question 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat?
                </div>
                <div className="container">
                        <input 
                            className="hidden"
                            type="radio" 
                            value="albers"
                            id="input1"
                            checked={this.state.value === "albers"}
                            onChange={this.handleChange}
                        ></input>
                        <label className="entry" htmlFor="input1">
                            <div class="radio-circle"></div>
                            <div class="entry-label">Answer 1</div>
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
                            <div class="entry-label">Answer 2</div>
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
                            <div class="entry-label">Answer 3</div>
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
                            <div class="entry-label">Answer 4</div>
                        </label>
                    <div class="highlight"></div>
                    <div class="overlay"></div>
                </div>
            </div>
        );
    } else {
        btnClass = "hidden";
        let match = this.getMatch(); 
        //let match = "albers"; 
        console.log(index[match]); 
        let name = data[match]["name"]; 
        let workshop = "About the " + data[match]["workshop"]; 
        content = (
            <div>
                <div className="quiz-results">
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <img src={data[match]["img"]} className="match-img" alt={match}></img>
                        </Col> 
                        <Col className="results-text" xs={6} sm={6} md={6} lg={6} xl={6}>
                            <h3>You are most similar to...</h3>
                            <h2><b>{name}</b></h2>
                            <p className="match-abt">{data[match]["about"]}</p>  
                            <h3><b>{workshop}</b></h3>
                            <p className="match-abt">{data[match]["aboutWork"]}</p>  
                        </Col> 
                    </Row>
                </div>
                    <Button className="return-home" color="danger" onClick={() => this.props.reset('landing')}>
                            Return Home
                    </Button>
                
            </div>
        );
    }

    return (
        <div className="question-body">
            <div>
                {content}
                <Button type="submit" disabled={this.state.value === undefined} className={btnClass} color="primary" onClick = {() => this.handleNext()}>
                    Next
                </Button>
            </div>
        </div>
    );
  }
}

export default Questions;
