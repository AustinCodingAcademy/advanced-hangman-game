import React, { Component } from 'react';
import './App.css';
import state from "./state";
const randomWords = require('random-words');

class App extends Component {
	constructor() {
		super();
		this.state = {
			wordToGuess: "",
			strikes:0,
			guess:"",
			correctGuesses:[]
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	// app methods
	handleChange(e) {
		const guess = e.target.value
		console.log(guess);		
		this.setState({
			guess: guess
		});
	}
	handleClick(){
		const guess = this.state.guess.toLowerCase();
		const empty = Array(wortToGuess.length).fill("_");
		const 
		if (/[a-z]/.test(guess) && this.state.wordToGuess.indexOf(guess) > -1) {
			console.log("found it!", guess);
		}
	}
	// react methods
	componentDidMount(){
		const wordToGuess = randomWords();
		const correctGuesses = Array(wordToGuess.length).fill("_");
		this.setState({
			wordToGuess: wordToGuess,
			correctGuesses: correctGuesses
		});
	}
	// render
  render() {
		console.log(this.state.wordToGuess, this.state.correctGuesses, this.state.guess);
		let className = `strike-${this.state.strikes}`;
		let spans = <span>_</span>;
    return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs">
					<div>{spans}</div>
					<input onChange={this.handleChange} maxLength="1" autoFocus/>
					<button onClick={this.handleClick}>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
