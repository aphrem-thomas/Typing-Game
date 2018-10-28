import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Intro from './Intro';
import Typing from './Typing';

class Progress extends Component {
  render() {
    return (
      <div className="progressIndicator">
      <h1>{this.props.prog}</h1>
      </div>
    );
  }
}

export default Progress;
