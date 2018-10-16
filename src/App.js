import React, { Component } from 'react';
import Nav from "./components/nav/Nav.js";
import Jumbo from "./components/jumbotron/Jumbo.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Jumbo />
      </div>
    );
  }
}

export default App;
