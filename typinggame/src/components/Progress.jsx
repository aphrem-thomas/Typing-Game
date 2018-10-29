import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Intro from './Intro';
import Typing from './Typing';

class Progress extends Component {
  render() {
    return (
    this.props.prog!==0?
      <div className="progressIndicator">
      <div className="percent">{this.props.prog}%accuracy</div>
      <div className="percent">{this.props.speed} WPM Speed</div>
      </div>
      :null
    );
  }
}

export default Progress;
