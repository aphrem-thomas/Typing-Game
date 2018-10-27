import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Intro from './Intro';
import Typing from './Typing';

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/typing" component={Typing} />
      </Switch>
    );
  }
}

export default Content;
