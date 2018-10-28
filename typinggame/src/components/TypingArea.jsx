import React, { Component } from 'react';

class TypingArea extends Component {
  render() {
    return (
        <div className="typingarea">
            {this.props.text.split('').map((item,index)=>{
                return(<span className={index}>{item}</span>);
            })}
        </div>
    );
  }
}

export default TypingArea;
