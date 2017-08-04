import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import state from "./state";
// import randomWords from 'random-words';

var randomWords = require('random-words');


class App extends Component {
	constructor(){
		super();
		this.state = {
			wordToGuess:randomWords(),
			strikes:0,
			guess:"",
			correctGuesses:[]
		};
	}


  fillGuesses = () => {
    if(this.state.correctGuesses.length < 1) {
      for(var i = 1; i <= this.state.wordToGuess.length; i++) {
        this.state.correctGuesses.push('_');
      }
    }
  }

  guessLetter = (e) => {
    e.preventDefault();
    if(e.target.value.length < 2) {
      this.setState({
        guess: e.target.value
      });
    }
  }

  buttonClick = () => {
    // set word to the word we're guessing
    const word = this.state.wordToGuess;
    console.log(this.state.wordToGuess);
    // idxs is temp array to hold INDEXES of word letter match of user guess
    const idxs = [];
    //push word letter match into idxs array
    for(var i = 0; i < word.length; i++) {
      if(word[i] === this.state.guess) {
        idxs.push(i);
      }
    }
    // call function showHit which changes the '_' with user guess in correctGuesses
    this.showHit(idxs)

  };

  // changes the '_' with user guess in correctGuesses
  showHit = (idxs) => {
    if(idxs.length >= 1) {
      // temp variable so we don't effect original array of correctGuesses
      var tempCG = this.state.correctGuesses.slice(0);
      // replace each index in correctGuesses with user guess
      for(var i = 0; i < idxs.length; i++) {
        tempCG.splice(idxs[i], 1, this.state.guess);
      }
      // set State of correctGuesses with new temp array
      this.setState({
        correctGuesses: tempCG
      })
    }
  };

  render() {
    this.fillGuesses();
    console.log(this.state.correctGuesses);
		let className = `strike-${this.state.strikes}`;
		let spans = [<span>_</span>];
    return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs" onChange={this.guessLetter}>
					<div>{spans}</div>
					<input />
					<button onClick={this.buttonClick}>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
