import React, { Component } from 'react';
import './App.css';
const randomWords = require('random-words');

class App extends Component {
	constructor() {
		super();
		this.state = {
			wordToGuess: "",
			strikes: 0,
			guess: "",
			correctGuesses: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	// app methods
	updateArray(arr){
		let retArr = this.state.wordToGuess.map((letter, idx) => {
			if (this.state.guess === letter) return this.state.guess;
			return this.state.correctGuesses[idx];
		});
		return retArr;
	}
	handleChange(e) {
		const guess = e.target.value;
		this.setState({
			guess: guess
		});
	}
	handleClick(){
		const guess = this.state.guess.toLowerCase();
		if (/[a-z]/.test(guess) && this.state.wordToGuess.indexOf(guess) > -1) {
			const guesses = this.updateArray(this.state.correctGuesses);
			this.setState({correctGuesses: guesses});
		} else {
			const strike = this.state.strikes + 1;
			this.setState({strikes: strike});
		}
	}
	// react methods
	componentDidMount(){
		const wordToGuess = randomWords().split('');
		const correctGuesses = Array(wordToGuess.length).fill("_");
		this.setState({
			wordToGuess: wordToGuess,
			correctGuesses: correctGuesses
		});
	}
	// render
  render() {
		console.log(this.state.wordToGuess);
		let className = `strike-${this.state.strikes}`;
		if (this.state.strikes === 6) className = "gameover";
		if (this.state.correctGuesses.indexOf("_") < 0) className = "gamewon";		
		let spans = this.state.correctGuesses.map(x => <span>{x}</span>);
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
