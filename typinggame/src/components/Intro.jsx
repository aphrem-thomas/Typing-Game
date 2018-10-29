import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cloud from "./images/clouds.png";
import sun from "./images/sun.png";
class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="pictures">
        <div className="cloud">
            <img src={cloud}/>
            <img src={cloud}/>
            <img src={cloud}/>
            <img src={cloud}/>
          </div>
          <div className="sun"> <img src={sun} /> </div>
         
        </div>

        Touch typing (also called touch type or touch keyboarding) is typing without using the sense of sight to find the keys. Specifically, a touch typist will know their location on the keyboard through muscle memory
        <h1>Learn touch typing...</h1>
        <Link to="/typing"> <button className="btn btn-primary">let's start</button></Link>
      </div>
    );
  }
}

export default Intro;
