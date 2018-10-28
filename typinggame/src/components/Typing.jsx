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
    this.state = { sentence: lor, cursor: 0, speed: 0, textLength: len, accuracy: 0 }
  }
  changeText() {
    let lor = lorem();
    lor = lor.toLowerCase();
    let len = lor.length;
    this.setState({ sentence: lor, cursor: 0, speed: 0,textLength:len,accuracy:0 });
    $('document').ready(() => {
      $('.typingarea').children().css(({ "color": "black", "font-size": "40px" }));
    })
  }

  componentDidMount() {
    var start;
    var correct;
    $('.' + this.state.cursor).css({
      "font-size": "50px",
      "margin": "2px",
      "border-bottom":"solid",
      "transition": "font-size 10ms ease-in",
      "color": "black"
    });
    
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      console.log("sentenceArray" + this.sentenceArray);
      if (this.state.cursor === 1) {
        start = new Date();
        correct = 0;
      }
      if (this.state.cursor === this.state.textLength-1) {
        let acc = (correct / this.state.textLength) * 100;
        this.setState({ accuracy: acc })
      }
      let timeLapsed = (new Date() - start) / 60000;
      let WPM = Math.round(((this.state.cursor / 5) / timeLapsed));
      if (WPM > 0 && WPM != Infinity) {
        this.setState({ speed: WPM })
      }

      $('document').ready(() => {
        if ($('.' + [this.state.cursor]).text() == e.key) {
          $('.' + this.state.cursor).css({ "color": "green", "font-size": "40px" });
          this.setState(prevState => ({ cursor: prevState.cursor + 1 }));
          correct++;
        }
        else if ($('.' + [this.state.cursor]).text() !== e.key) {
          $('.' + this.state.cursor).css({ "color": "red", "font-size": "40px" });
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
          <Progress prog={this.state.accuracy} />
          <SpeedGuage speed={this.state.speed} />
        </div>
        <button className="btn btn-primary" onClick={this.changeText.bind(this)}>reset</button>
      </div>
    );
  }
}
const style_zoom = {
  "display": "inline-block",
  "font-size": "80px",
  "border-width": "3px",
  "margin": "2px",
  "transition": "font-size 30ms ease-in",
  "color": "black"
}
export default Typing;
