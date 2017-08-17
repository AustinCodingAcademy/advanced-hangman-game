import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";
import randomWords from "random-words";

class App extends Component {
	constructor(){
		super();

		const wordToGuess = randomWords(); //generate random words
		const correctGuesses = wordToGuess.split('').fill("_"); //fill the array with "_"

		this.state = {
			wordToGuess,
			correctGuesses,
			strikes:0,
			guess:""
		};
		this.handleInput = this.handleInput.bind(this);
		// this.handleButtonClick = this.handleButtonClick.bind(this);
	}


	handleInput(e) {
		if(e.target.value.length <= 1) {
			this.setState({
				guess: e.target.value,
			});
		}
	}

	// handleButtonClick() {
	// 	if(!this.state.wordToGuess.includes(this.state.guess)) {
	// 		this.setState(prevState => {
	// 			return {
	// 				strikes: prevState.strikes + 1
	// 			}
	// 		});
	// 	}
	// }

  render() {
		// console.log(this.state.strikes);
		console.log(this.state.wordToGuess); //print the word
		console.log(this.state.correctGuesses); //print the "_" array
		console.log(this.state.guess);

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
					<button>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
