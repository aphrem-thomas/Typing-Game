import React, { Component } from 'react';
import lorem from 'lorem-ipsum';
import TypingArea from './TypingArea';
import $ from 'jquery';
import SpeedGuage from './SpeedGuage';
import Progress from './Progress';

class Typing extends Component {
  constructor(props) {
    super(props);
    let lor = lorem();
    lor = lor.toLowerCase();
    let len = lor.length;
    this.state = { sentence: lor, cursor: 0, speed: 0, textLength: len, accuracy: 0 }//storing the sentence, curosor position, speed of typing, total length of text and accuracy
  }
  changeText() {              //called when reset button is clicked
    let lor = lorem();
    lor = lor.toLowerCase();
    let len = lor.length;
    this.setState({ sentence: lor, cursor: 0, speed: 0,textLength:len,accuracy:0 }); //resetting states

    $('document').ready(() => {         //resetting styles  
      $('.typingarea').children().css(({ 
      "font-size": "40px",
      "border-width":0,
      "border-bottom":"null",
      "transition": "font-size 10ms ease-in",
      "color": "black" }));
    })
    
  }

  componentDidMount() {
    var start,correct;
    $('.' + this.state.cursor).css({
      "font-size": "50px",
      "margin": "2px",
      "border-bottom":"solid",
      "transition": "font-size 10ms ease-in",
      "color": "black"
    });

    document.addEventListener('keydown', (e) => {                  //event listner for keydown
      e.preventDefault();
      if (this.state.cursor === 1) {
        start = new Date();
      }
      if(this.state.cursor===0){
         correct = 0;
      }
      if (this.state.cursor >= this.state.textLength-1) {          //accuracy get printed
        let acc = Math.round(((correct) / (this.state.textLength-1)) * 100);
        this.setState({ accuracy: acc })
      }
      let timeLapsed = (new Date() - start) / 60000;            //
      let WPM = Math.round(((this.state.cursor / 5) / timeLapsed));//calculating words per minute
      if (WPM > 0 && WPM != Infinity) {
        this.setState({ speed: WPM })                //setting words per minute
      }

      $('document').ready(() => {
        if ($('.' + [this.state.cursor]).text() == e.key) {
          $('.' + this.state.cursor).css({ "color": "green", "font-size": "40px","border-bottom":"solid" });// if text matched with typed letter
          this.setState(prevState => ({ cursor: prevState.cursor + 1 }));
          correct++;
        }
        else if ($('.' + [this.state.cursor]).text() !== e.key) {
          $('.' + this.state.cursor).css({ "color": "red", "font-size": "40px","border-bottom":"solid" });// it text not matched with typed letter
          this.setState(prevState => ({ cursor: prevState.cursor + 1 }));
        }
        $('.' + this.state.cursor).css({
          "font-size": "50px",
          "margin": "2px",
          "border-bottom":"solid",
          "transition": "font-size 10ms ease-in",
          "color": "black"
        });
      });


    })
  }
  render() {
    return (
      <div className="typing">
        <TypingArea text={this.state.sentence} />
        <div className="guages">
          <Progress prog={this.state.accuracy} speed={this.state.speed} />
          <SpeedGuage speed={this.state.speed} />
        </div>
        <button className="btn btn-primary" onClick={this.changeText.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default Typing;
