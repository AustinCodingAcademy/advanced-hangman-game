import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";
import randomWord from "random-words";

class App extends Component {
	constructor(){
		super();
		this.state = {
			wordToGuess:randomWord().split(''),
			strikes: 0,
			guess: "",
			correctGuesses: [],
			guessArr: this.state.wordToGuess.map(function (){
				return " _ "
			})
	}
}
  render() {
		let _wordArr = this.state.wordToGuess;
		let _guessArr = this.state.guessArr;
    let className = `strike-${this.state.strikes}`;
    return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs">
					<div>{this.state.guessArr}</div>
					<input value={this.state.guess} onChange={
		            (e) => {
              if(e.target.value.length == 0) {
		              this.setState({guess: e.target.value})
									}
		             }
		           }  />
					<button onClick={
						(e) => {
							let currentStrike = this.state.strikes;
							let guessCounter = 0;
							let tempGuess = this.state.correctGuesses;
							for(var i = 0; i < _wordArr.length; i++) {
								if (this.state.guess === _wordArr[i]) {
									guessCounter++;
									_guessArr[i] = this.state.guess;
									this.setState({guessArr: _guessArr[i]})
									tempGuess.push(this.state.guess);
								}
							}
							//I had to do this if statement twice for some reason, when I tried
							// to place the current strike ++ inside the if statement below
							// I got an error... was weird.
							if(guessCounter===0)
								currentStrike++;
 							if(guessCounter===0){
								this.setState({strikes: currentStrike})
							}
								else {this.setState({correctGuesses: tempGuess})}

						}
					}>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
