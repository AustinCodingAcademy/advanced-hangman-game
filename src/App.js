import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";
import randomWords from 'random-words';

class App extends Component {
	constructor(){
		super();
		this.state = {
			wordToGuess:"",
			strikes:0,
			guess:"",
			correctGuesses:[]
		};
	}

	componentDidMount() {
		const newWord = randomWords();
		let initArr = [];
		initArr.length = newWord.length;
		initArr.fill("_");
		// console.log('componentDidMount',newWord, initArr);
		this.setState({
			wordToGuess:newWord,
			correctGuesses:initArr
		})
	}

	handleClick = ()=> {
		// console.log('inHandleClick', this.state);
		const { guess, wordToGuess, correctGuesses, strikes } = this.state;
		if (strikes == 6) {
			this.setState({ guess:"" });
		} else if (wordToGuess.indexOf(guess) !== -1) {
			let updatedGuesses = correctGuesses.map((pos, idx)=>{
				if (wordToGuess[idx] === guess) {
					// console.log('handle Click match', pos, idx, wordToGuess[idx], guess);
					return guess;
				} else {
					// console.log('handle Click no match', pos, idx, wordToGuess[idx], guess);
					return pos;
				};
			});
			this.setState({
				correctGuesses:updatedGuesses,
				guess:""
		 	});

		} else {
				this.setState({
					strikes:strikes+1,
					guess:""
				});
			}
	}

  render() {
		// console.log('In render',this.state.wordToGuess, this.state.correctGuesses);
		let className = ''
		if (this.state.correctGuesses.indexOf("_") === -1) {
			className = 'gamewon';
		} else if (this.state.strikes == 6) {
			className = 'gameover';
		} else {
			className = `strike-${this.state.strikes}`;
		}
		let spans = this.state.correctGuesses.map((guess, idx)=><span key={idx}>{guess}</span>);
    return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs">
					<div>{spans}</div>
					<input
						value={this.state.guess}
						onChange = {(e)=> this.setState({ guess: e.target.value.toLowerCase().slice(0,1) })}
					/>
					<button onClick={this.handleClick}>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
