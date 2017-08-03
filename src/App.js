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
  for(var i = 1; i <= this.state.wordToGuess.length; i++) {
    this.state.correctGuesses.push('_');
  }
}

  render() {
    // const newWord = randomWords();
    console.log(this.state.wordToGuess);
    this.fillGuesses();
    console.log(this.state.correctGuesses);
		let className = `strike-${this.state.strikes}`;
		let spans = [<span>_</span>];
    return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs">
					<div>{spans}</div>
					<input />
					<button>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
