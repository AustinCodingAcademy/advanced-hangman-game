import React, { Component } from 'react';
import './App.css';
let randomWords = require('random-words');

class App extends Component {

	constructor(){
		super();
		this.state = {
			wordToGuess: randomWords(),
			strikes:0,
			guess:"",
			correctGuesses:[]
		};
	}

	componentWillMount() {
		let word = this.state.wordToGuess;
		for (let i = 0; i < word.length; i++) {
		 this.state.correctGuesses.push("_");
		};
	}

  render() {
    let className = `strike-${this.state.strikes}`;
		let spans = [];
		for (let i = 0; i < this.state.correctGuesses.length; i++) {
		 spans.push(<span key={i}>{this.state.correctGuesses[i]}</span>);
		};
		if (this.state.strikes === 6) {
			className = 'gameover';
		}
		if (!this.state.correctGuesses.includes("_")) {
			className = 'gamewon';
		}
		let inputGuess = (e) => {
			if (typeof e.target.value === 'string') {
				this.setState({
					guess: e.target.value
				});
			}
		};
		let submitGuess = (e) => {
			let answer = this.state.wordToGuess;
			let guess = this.state.guess;
			let strikes = this.state.strikes;
			let correctGuesses = this.state.correctGuesses;
			if (answer.includes(guess)) {
				for(let i = 0; i < answer.length; i++) {
    			if (answer[i] === guess) {
						correctGuesses[i] = guess;
					}
				}
				this.forceUpdate();
			} else {
				this.setState({
					strikes: this.state.strikes +1
				});
			}
			guess = "";
			document.getElementById('textbox').value = "";
		};
		console.log(this.state.wordToGuess);
    return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs">
					<div>{spans}</div>
					<input id="textbox" onChange={inputGuess} maxLength="1" />
					<button onClick={submitGuess}>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
