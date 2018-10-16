import React, { Component } from "react";

class Jumbo extends Component {
    render() {
      return (
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Clicky Game</h1>
          <p class="lead">Click a cat to start earning points, but don't click the same cat twice!</p>
        </div>
      </div>
      );
    }
  }
  
  export default Jumbo;