import React, { Component } from 'react';
import lorem from 'lorem-ipsum';
import TypingArea from './TypingArea';
import $ from 'jquery';

class Typing extends Component {
  constructor(props){
    super(props);
    this.state={sentence:"",cursor:0}
  }
  componentDidMount(){
    let lor=lorem();
    lor=lor.toLowerCase();
    this.setState({sentence:lor});
    let sentenceArray=lor.split('');
    let cursor=this.state.cursor;
    document.addEventListener('keydown',(e)=>{
      e.preventDefault();
      console.log("cursor is at "+this.state.cursor);
      
        // console.log(e.key);
        $('document').ready(()=>{
            if(sentenceArray[this.state.cursor]===e.key){
              $('.'+this.state.cursor).css({"color":"green","font-size":"40px"});
              this.setState(prevState=>({cursor:prevState.cursor+1}));
            }
            else if(sentenceArray[this.state.cursor]!=e.key){
              $('.'+this.state.cursor).css({"color":"red","font-size":"40px"});
              this.setState(prevState=>({cursor:prevState.cursor+1}));
            }

        });
       
     
    })
  }
  render() {
    return (
      <div className="typing">
          <TypingArea text={this.state.sentence}/>
        </div>
    );
  }
}

export default Typing;
