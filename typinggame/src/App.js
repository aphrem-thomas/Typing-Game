import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Content/> 
       </div>
    );
  }
}

export default App;
