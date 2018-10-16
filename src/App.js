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

  imageClick = event => {
    const currentCat = event.target.alt;
    const SecondClick =
      this.state.clickedCat.indexOf(currentCat) > -1;

    if (SecondClick) {
      this.setState({
        cat: this.state.cat.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCat: [],
        score: 0
      });
        alert("Whoops, you clicked that one already! Start over.");


    } else {
      this.setState(
        {
          cat: this.state.cat.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCat: this.state.clickedCat.concat(
            currentCat
          ),
          score: this.state.score + 1
        },
     
        () => {
          if (this.state.score === 12) {
            alert("You clicked them all!");
            this.setState({
              cat: this.state.cat.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
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

        <Nav 
          score={this.state.score}
        />
        <Jumbo />
        <Wrapper>
      
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
