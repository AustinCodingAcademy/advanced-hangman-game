import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";

class App extends Component {
	constructor(){
		var randomWords = require('random-words');
		let word = randomWords();
		let guesses = []
		for (let i=0;i<word.length;i++){
			guesses.push("_ ");
		}
		super();
		this.state = {
			wordToGuess:word,
			strikes:0,
			guess:"",
			correctGuesses:guesses
		};
	}
	
  render() {
		//console.log(this.state.wordToGuess);
		//console.log(this.state.correctGuesses);
		//console.log(this.state.guess);
		//console.log(this.state.strikes);
		let className = `strike-${this.state.strikes}`;
		let spans = this.state.correctGuesses;
		if (this.state.correctGuesses.indexOf("_ ") <= -1){
			className = "gamewon";
		}
		if (this.state.strikes == 6){
			className = "gameover";
		}
    return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs">
					<div>{spans}</div>
					<input onChange={
                    (e) => {
											var fieldLength = e.target.value.length;
											if(fieldLength <= 1){
													var state = {
														guess : e.target.value
													};
													this.setState(state);
												}
												else
												{
													var str = e.target.value;
													str = str.substring(0, str.length - 1);
													e.target.value = str;
												}
                        
                    }
					}/>
					<button onClick={
								(elem) => {
									if (this.state.wordToGuess.indexOf(this.state.guess) > -1){
										let str = this.state.wordToGuess;
										for (var i = 0; i < str.length; i++){
											if (str[i] === this.state.guess){
												//console.log(this.state.guess,"found at", i)
												this.state.correctGuesses[i] = this.state.guess;
												//this.setState(state);
											}
										}
									}
									else{
										this.state.strikes = this.state.strikes +1;
										//this.setState(state);
									}
									this.state.guess = "";
									this.setState(state);	
								}
															
					}>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
