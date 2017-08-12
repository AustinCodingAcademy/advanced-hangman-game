import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";
import randomWords from "random-words";

class App extends Component {
	constructor(){
		super();
		this.state = {
			wordToGuess:"",
			strikes:0,
			guess:"",
			correctGuesses:[]
		};
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		if(e.target.value <= 1)
		this.setState({
			guess: e.target.value,
		});
	}

  render() {
		console.log(this.state.guess);
		this.state.wordToGuess = randomWords();
		console.log(this.state.wordToGuess);

		this.state.correctGuesses = Array(this.state.wordToGuess.length).fill("_")
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
					<input onChange={this.handleInput} />
					<button>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
