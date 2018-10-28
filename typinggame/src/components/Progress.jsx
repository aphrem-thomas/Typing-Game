import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Intro from './Intro';
import Typing from './Typing';

class Progress extends Component {
  render() {
    return (
    this.props.prog!==0?
      <div className="progressIndicator">
      <h1 className="percent">{this.props.prog}%</h1>
      <br/>
      <h2 className="percent">accuracy</h2>
      </div>
      :null
    );
  }
}

export default Progress;
