import React, { Component } from 'react';
import lorem from 'lorem-ipsum';
import TypingArea from './TypingArea';
import $ from 'jquery';
import SpeedGuage from './SpeedGuage';

class Typing extends Component {
  constructor(props) {
    super(props);
    this.state = { sentence: "", cursor: 0,speed:0 }
  }
  // getSentence(){
  //   this.setState({cursor:0,speed:0});
  //   let lor = lorem();
  //   lor = lor.toLowerCase();
  //   this.setState({ sentence: lor });
  // }
  componentDidMount() {
    let lor = lorem();
    lor = lor.toLowerCase();
    this.setState({ sentence: lor });
    if(this.state.sentence!=null){
    var sentenceArray = this.state.sentence.split('');
    }
    var start;
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if(this.state.cursor===1){
        start = new Date();
      }
      let timeLapsed = (new Date() -start)/60000;
      let WPM =Math.round(((this.state.cursor/5)/timeLapsed));
      if(WPM>0){
        this.setState({speed:WPM})
      }
      console.log("cursor at"+this.state.cursor);
      $('document').ready(() => {
        console.log("charecter "+sentenceArray[this.state.cursor]+"key "+e.key);
        if (sentenceArray[this.state.cursor] === e.key) {
          $('.' + this.state.cursor).css({ "color": "green", "font-size": "40px" });
          this.setState(prevState => ({ cursor: prevState.cursor + 1 }));
        }
        else if (sentenceArray[this.state.cursor] != e.key) {
          $('.' + this.state.cursor).css({ "color": "red", "font-size": "40px" });
          this.setState(prevState => ({ cursor: prevState.cursor + 1 }));
        }

      });


    })
  }
  render() {
    return (
      <div className="typing">
        <TypingArea text={this.state.sentence} />
        <SpeedGuage speed={this.state.speed}/>
        <button className="btn btn-primary" onClick={this.componentDidMount.bind(this)}>reset</button>
      </div>
    );
  }
}

export default Typing;
