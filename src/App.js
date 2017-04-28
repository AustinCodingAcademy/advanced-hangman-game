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
			guessArr: ""

	}
	this.state.guessArr = this.state.wordToGuess.map(function(){
			return " _ "
	})
}

	mapArray(arr) {
		var temp = [];
		temp = arr.map(function () {
			return " _ "
		})
		return temp;
	}

  render() {
		let _wordArr = this.state.wordToGuess;
		let _guessArr = this.state.guessArr;
		console.log(_wordArr);
		let currentStrike = this.state.strikes;
		let spriteStrike = '';
		let winner = true;
		for(var i = 0; i < _guessArr.length; i++){
			if(_guessArr[i] === ' _ ')
				winner = false;
		}
		if(winner){
			spriteStrike = "gamewon"
		}else if (currentStrike < 6)
			spriteStrike = `strike-${this.state.strikes}`;
		else {
			spriteStrike = "gameover"
		}
    return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${spriteStrike} current`} />
				</div>
				<div id="inputs">
					<div>{this.state.guessArr}</div>
					<input value={this.state.guess} onChange={
		            (e) => {
              if(e.target.value.length <= 1 && currentStrike < 6) {
		              this.setState({guess: e.target.value})
									}
		             }
		           }  />
					<button onClick={
						(e) => {

							let guessCounter = 0;
							let tempGuess = this.state.correctGuesses;
							for(var i = 0; i < _wordArr.length; i++) {
								if (this.state.guess === _wordArr[i]) {
									guessCounter++;
									_guessArr[i] = this.state.guess;
									this.setState({guessArr: _guessArr})
									tempGuess.push(this.state.guess);
								}
							}

 							if(guessCounter===0){
								currentStrike++;
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
