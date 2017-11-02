import React, { Component } from 'react';
import './App.css';
import randomWords from 'random-words';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			wordToGuess: this.props.word,
			strikes:0,
			guess:"",
			correctGuesses:[]
		};
	}

	componentDidMount(){
		this.setState({
			correctGuesses: this.correctGuess()
		})
	}

	correctGuess() {
		let correct = [];
		for (let i = 0; i < this.state.wordToGuess.length; i++) {
			correct.push("_");
		} 
		return correct;
	}
	
	setGuessState(e){
		this.setState({guess: e.target.value});
	}

	incrementStrike(){
		let strikes = this.state.strikes;
		strikes ++;
		this.setState({
			strikes: strikes
		})
	}

	setCorrectGuessState(index){
		let correctGuesses = this.state.correctGuesses;
		let guess = this.state.guess;
		let startValue = index;
		let endValue = index;

		endValue ++;
		correctGuesses.fill(guess, startValue, endValue);
		
		this.setState({
			correctGuesses: correctGuesses,
			guess: ""
		})
	}



	checkGuess(e){
		const guess = this.state.guess;
		let word = this.state.wordToGuess;
		let strikes = this.state.strikes;
		let indexes = [], i = -1;

		word = word.split("");

		if (word.indexOf(guess) == -1){
			this.incrementStrike();
		}

		while ((i = word.indexOf(guess, i+1)) != -1){
				indexes.push(i);
		}
		

		indexes.forEach((index) => {
			this.setCorrectGuessState(index);
		})
		// for (let i = 0; i < indexes.length; i++){
		// 	this.setCorrectGuessState([i]);
		// }
		
		
	}
	spans(){
		const correctGuesses = this.state.correctGuesses
		let spans = []
		correctGuesses.forEach((guess) => {
			spans.push(<span> {guess} </span>);
		})
		return spans;
	}

  render() {
	console.log(this.state);
	let className = `strike-${this.state.strikes}`;
	let correctGuesses = this.state.correctGuesses;
	
	if (correctGuesses.indexOf('_') === -1){
		className = 'gamewon'
	};
	if (this.state.strikes >= 6){
		className = 'gameover'
	};
	
    return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs">
					<div>{this.spans()}</div>
					<input maxlength="1" onChange={this.setGuessState.bind(this)} />
					<button onClick={this.checkGuess.bind(this)}>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
