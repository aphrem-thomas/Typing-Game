import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <h1>Learn touch typing...</h1>
       <Link to="/typing"> <button className="btn btn-pimary">let's start</button></Link>
       </div>
    );
  }
}

export default Intro;
