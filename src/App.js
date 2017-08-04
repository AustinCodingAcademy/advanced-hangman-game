import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";
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
    const word = this.state.wordToGuess;
    console.log(this.state.wordToGuess);

    for(var i = 0; i < word.length; i++) {
      if(word[i] === this.state.guess) {
        this.showHit(i)
      }
    }
  };

  showHit = (i) => {
    // console.log(i);
    var tempCG = this.state.correctGuesses.slice(0);

    tempCG.splice(i, 1, 'x');
    this.setState({
      correctGuesses: tempCG
    })

console.log(this.state.correctGuesses);
   };

  render() {
    // const newWord = randomWords();
    this.fillGuesses();
    // console.log(this.state.wordToGuess);
    // console.log(`guess: this.state.guess`);
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
