import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";
import randomWords from "random-words";

class App extends Component {
	constructor(){
		super();

		const wordToGuess = randomWords(); //generate random words
		const wordToGuessArray = wordToGuess.split('');
		const correctGuesses = wordToGuessArray.fill("_"); //fill the array with "_"

		this.state = {
			wordToGuess,
			correctGuesses,
			strikes:0,
			guess:""
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}


	handleInput(e) {
		if(e.target.value.length <= 1) {
			this.setState({
				guess: e.target.value,
			});
		} else {
			this.setState({
				guess: ''
			});
		}
	}

	handleButtonClick() {
		let wordToGuess = this.state.wordToGuess;
		let correctGuesses = this.state.correctGuesses;
		let guess = this.state.guess;

		if(wordToGuess.includes(guess)) {
 			wordToGuess.split('').map((letter, index) => {
				if(guess === letter) {
					console.log(`Good!The letter "${guess}" is in the word`);
				  correctGuesses[index] = guess;
					console.log(`guess typed: ${guess}`);
				}
				this.setState({
						correctGuesses: correctGuesses
					});
			});
		} else {
			console.log(`Ops! The letter "${guess}" is NOT in the word`);
			this.setState(function(prevState) {
				return {
					strikes: prevState.strikes + 1
				}
			});
		}
	}

	render() {
		console.log(`The word to guess: ${this.state.wordToGuess}`);
		console.log(`Your strikes: ${this.state.strikes}`);
		console.log(`Your current guess array: ${this.state.correctGuesses}`);
		console.log(`new guess value: ${this.state.guess}`);

		let className = `strike-${this.state.strikes}`;
		let spans = [<span>_</span>];
    return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs">
					<div>{spans}</div>
					<input onChange={this.handleInput}/>
					<button onClick={this.handleButtonClick}>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
