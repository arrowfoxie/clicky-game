//sets up the reusable Navbar component
import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand">Clicky Game</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item nav-link">
            Score:
          </li>
          <li class="nav-item nav-link">
          Top Score:
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default Nav;