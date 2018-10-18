import React, { Component } from 'react';
import Nav from "./components/nav/Nav.js";
import Jumbo from "./components/jumbotron/Jumbo.js";
import CatCard from "./components/cats/CatCard.js";
import Wrapper from "./components/wrapper/Wrapper.js"
import cat from "./spookycats.json"
import './App.css';

class App extends Component {
  state = {
    cat,
    clickedCat: [],
    score: 0
  };

  // Handles click function for cats
  imageClick = event => {
    const currentCat = event.target.alt;
     // Adds cats that are clicked to an array
    const SecondClick =
      this.state.clickedCat.indexOf(currentCat) > -1;

         // Checks if cat has been clicked before
    if (SecondClick) {
         // Resorts the img order
      this.setState({
        cat: this.state.cat.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        // Resets the score empties the clicked cats array
        clickedCat: [],
        score: 0
      });
       // Alerts player that they lost
        alert("Whoops, you clicked that one already! Start over.");


    } else {
      this.setState(
        {
          // Resorts order of cats
          cat: this.state.cat.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          // Adds the clicked cats to the clickedcats array
          clickedCat: this.state.clickedCat.concat(
            currentCat
          ),
          // Raises score by 1
          score: this.state.score + 1
        },
     
        () => {
          // Checks if the score has reached 12
          if (this.state.score === 12) {
            // Alerts player they won
            alert("You clicked them all!");
            // Resorts order of cats
            this.setState({
              cat: this.state.cat.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              // Resets score and cats array
              clickedCat: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        {/* Renders Nav component */}
        <Nav 
          score={this.state.score}
        />
        {/* Renders Jumbotron component */}
        <Jumbo />

        {/* Renders the container component that holds all the cats */}
        <Wrapper>
          {/* Loops through and renders the cats images and data */}
          {this.state.cat.map(cat => (
            <CatCard
              imageClick={this.imageClick}
              id={cat.id}
              key={cat.id}
              image={cat.image}
            />
          ))}
          </Wrapper>
      </div>

    );
  }
}

export default App;
