import React, { Component } from 'react';
import './App.css';
import { Button, Row, Col } from 'reactstrap';
import { CirclePicker } from 'react-color';


var answers = {
    "triangle": null, 
    "circle": null, 
    "square": null
};

class Color extends Component {
  constructor() {
    super();

    this.state = {
        mode: "playing", 
        tri_state: "inner-triangle",
        tri_border: "triangle", 
        circ_state: "circle", 
        square_state: "square", 
        submission: true, 
        selected_color: '#fff',
        viewMore: false, 
    };

    this.updateTri = this.updateTri.bind(this);
    this.updateCirc = this.updateCirc.bind(this);
    this.updateSquare = this.updateSquare.bind(this);

    this.submit = this.submit.bind(this);
  }

  updateTri = () => {
    if(this.state.selected_color === "#b80000") {
        this.setState({ tri_state: "inner-triangle tri-red", tri_border: "triangle border-red"}); 
        this.checkShapes("triangle","red"); 
    } else if(this.state.selected_color === "#fccb00"){
        this.setState({ tri_state: "inner-triangle tri-yellow", tri_border: "triangle border-yellow"});
        this.checkShapes("triangle","yellow");  
    } else {
        this.setState({ tri_state: "inner-triangle tri-blue", tri_border: "triangle border-blue"}); 
        this.checkShapes("triangle","blue"); 
    }
  }

  updateCirc = () => {
    if(this.state.selected_color === "#b80000") {
        this.setState({ circ_state: "circle red"}); 
        this.checkShapes("circle","red"); 
    } else if(this.state.selected_color === "#fccb00"){
        this.setState({ circ_state: "circle yellow"}); 
        this.checkShapes("circle","yellow"); 
    } else {
        this.setState({ circ_state: "circle blue"}); 
        this.checkShapes("circle","blue"); 
    }
  }

  updateSquare = () => {
    if(this.state.selected_color === "#b80000") {
        this.setState({ square_state: "square red"}); 
        this.checkShapes("square", "red"); 
    } else if(this.state.selected_color === "#fccb00"){
        this.setState({ square_state: "square yellow"}); 
        this.checkShapes("square", "yellow"); 
    } else {
        this.setState({ square_state: "square blue"}); 
        this.checkShapes("square","blue"); 
    }
  }

  checkShapes = (shape, color) => {
    if(shape === "square") {
        if(color === "red") {
            if(this.state.circ_state === "circle red")
                this.setState({ circ_state: "circle" }); 
            if(this.state.tri_state === "inner-triangle tri-red")
                this.setState( {tri_state: "inner-triangle", tri_border:"triangle"});
        } else if(color === "yellow") {
            if(this.state.circ_state === "circle yellow")
                this.setState({ circ_state: "circle" }); 
            if(this.state.tri_state === "inner-triangle tri-yellow")
                this.setState( {tri_state: "inner-triangle", tri_border:"triangle"});
        } else {
            if(this.state.circ_state === "circle blue")
                this.setState({ circ_state: "circle" }); 
            if(this.state.tri_state === "inner-triangle tri-blue")
                this.setState( {tri_state: "inner-triangle", tri_border:"triangle"});
        }
    } else if(shape === "circle") {
        if(color === "red") {
            if(this.state.square_state === "square red")
                this.setState({ square_state: "square" }); 
            if(this.state.tri_state === "inner-triangle tri-red")
                this.setState( {tri_state: "inner-triangle", tri_border:"triangle"});
        } else if(color === "yellow") {
            if(this.state.square_state === "square yellow")
                this.setState({ square_state: "square" }); 
            if(this.state.tri_state === "inner-triangle tri-yellow")
                this.setState( {tri_state: "inner-triangle", tri_border:"triangle"});
        } else {
            if(this.state.square_state === "square blue")
                this.setState({ square_state: "square" }); 
            if(this.state.tri_state === "inner-triangle tri-blue")
                this.setState( {tri_state: "inner-triangle", tri_border:"triangle"});
        }
    } else { 
        if(color === "red") {
            if(this.state.square_state === "square red")
                this.setState({ square_state: "square" }); 
            if(this.state.circ_state === "circle red")
                this.setState({ circ_state: "circle" }); 
        } else if(color === "yellow") {
            if(this.state.square_state === "square yellow")
                this.setState({ square_state: "square" }); 
            if(this.state.circ_state === "circle yellow")
                this.setState({ circ_state: "circle" }); 
        } else {
            if(this.state.square_state === "square blue")
                this.setState({ square_state: "square" }); 
            if(this.state.circ_state === "circle blue")
                this.setState({ circ_state: "circle" }); 
        }
    } 
    setTimeout(function(that){ that.updateSubStatus() }, 20, this);

  }

  updateSubStatus = () => {
    if((this.state.circ_state.length > 6) && (this.state.square_state.length > 7) && (this.state.tri_state.length > 15)) {
        this.setState({submission: false}); 
      } else {
        this.setState({submission: true}); 
      }
  }
  submit = () => {  
    answers.triangle = this.state.tri_state; 
    answers.circle = this.state.circ_state; 
    answers.square = this.state.square_state; 
    this.setState({mode: "results"})
    return; 
  }


  handleChangeComplete = (color) => {
    this.setState({ selected_color: color.hex });
  };

  render() {
    let content; 
    const colorSwatches = ["#B80000", "#FCCB00", "#004DCF"];
    
    if (this.state.mode === "playing") {
        content = (
            <div className="color-body">           
                <Row className="game-header">
                    <h2>Kandinsky's Color Theory</h2>
                </Row>
                <Row className="game-header">
                    <p> Vassily Kandinsky believed certain shapes corresponded with 
                        specific primary colors. He designed a survey to test this 
                        theory among his students, and you too can see if your answers 
                        align with the Bauhaus Master’s. Click a color on the palette 
                        to the left, and then select a shape to color it. Then, 
                        submit your answer to compare with Kandinsky and learn more 
                        about color and shape theory.
                    </p>
                </Row>
                <Row className="color-main-row">
                    <Col className="color-picker" xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div>
                            <CirclePicker 
                                width="70px"
                                circleSize={50}
                                color={ this.state.background }
                                colors={colorSwatches}
                                onChangeComplete={ this.handleChangeComplete }  
                            />
                        </div>
                    </Col>
                    <Col className="shape-margin shape-container" xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div className={this.state.tri_border}>
                            <div className={this.state.tri_state}
                                onClick={ this.updateTri }
                            ></div>
                        </div>
                    </Col>
                    <Col className="shape-margin shape-container" xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div className={this.state.circ_state}
                            onClick={ this.updateCirc }
                        ></div>
                    </Col>
                    <Col className="shape-margin shape-container" xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div className={this.state.square_state}
                            onClick={ this.updateSquare }
                        ></div>
                    </Col>
                </Row>
                <Row className="submit-btn"> 
                    <Button 
                        color="primary" 
                        size="md"
                        onClick = {() => this.submit()}
                        disabled={this.state.submission}
                    > Submit 
                    </Button>
                </Row>
            </div>
        ); 
    } else {
        let aboutColor = (!this.state.viewMore ? "color-about hidden" : "color-about slide-top"); 
        let toggle = (!this.state.viewMore ? "Learn More" : "See my responses");
        let resultsClass = (!this.state.viewMore ? "result-header" : "result-header fade-out");
        let responseClass = (!this.state.viewMore ? "responses" : "responses fade-out");
        let K_resultsClass = (!this.state.viewMore ? "result-header" : "result-header slide-top");
        let K_responseClass = (!this.state.viewMore ? "responses" : "responses slide-top");
        let returnBtn = (!this.state.viewMore ? "return-btn" : "return-btn offset");
        content = (
            <div className="results color-body">
                <Row className={resultsClass}>
                    <h3><b>Your response</b></h3>
                </Row>
                <Row className={responseClass}>
                    <Col className="shape-container" xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div className={this.state.tri_border}>
                            <div className={this.state.tri_state}
                            ></div>
                        </div>
                    </Col>
                    <Col className="shape-container" xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div className={this.state.circ_state}
                        ></div>
                    </Col>
                    <Col className="shape-container" xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div className={this.state.square_state}
                        ></div>
                    </Col>
                </Row>
                <Row className={K_resultsClass }>
                    <h3><b>Kandinsky's Model </b></h3>
                    <h2 className="learn-more" onClick={() => this.setState({viewMore: !this.state.viewMore})}>{toggle}</h2>
                </Row>
                <Row className={K_responseClass}> 
                    <Col className="shape-container" xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div className="triangle border-yellow">
                            <div className="inner-triangle tri-yellow"
                            ></div>
                        </div>
                    </Col>
                    <Col className="shape-container" xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div className="circle blue"
                        ></div>
                    </Col>
                    <Col className="shape-container" xs={3} sm={3} md={3} lg={3} xl={3}>
                        <div className="square red"
                        ></div>
                    </Col>
                </Row>
                <Row className={aboutColor}>
                    <p>
                    Kandinsky developed a robust theory surrounding color and shape, believing that color was associated
                    with certain physical effects and an "inner resonance". He developed his theory by testing and 
                    conversing with many Bauhaus students.
                    </p>
                    <p>
                    He described yellow as a sharp color, one that represented movement and fluidity - thus, it was 
                    associated with the pointed triangle. Red was assertive and strong and showed an inner tension that 
                    Kandinsky found present in the square. Blue was a deeper color that didn't pop quite like red or yellow 
                    and so it became associated with the calm and restful form of the circle. Color theory was explored 
                    by many other figures at the Bauhaus, and this experimentation can be seen in a number of the works
                    we have on exhibit today. 
                    </p>
                </Row>
                <Row className={returnBtn}>
                    <Button 
                        color="danger" 
                        onClick={() => this.props.reset('landing')}
                    > Return Home
                    </Button>
                </Row>
            </div>
        );
    }
    
    return (
        <div>
            {content}
        </div>
    );
  }
}

export default Color;
