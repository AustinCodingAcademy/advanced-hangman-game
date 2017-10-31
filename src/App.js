import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";


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

	correctGuess() {
		let correct = [];
		for (let i = 0; i < this.state.wordToGuess.length; i++) {
			correct.push("_");
		} 
		return correct;
	}
	
	setGuess(e){
		this.setState({guess: e.target.value});
	}
	checkGuess(e){
		const guess = this.state.guess;
		const word = this.state.wordToGuess;
		console.log("guess: " + guess + " " + "Word To Guess: " + word);
		}
	}

	componentDidMount(){
		this.setState({
			correctGuesses: this.correctGuess(),
			
		})
	}

  render() {
		
		
		
		let className = `strike-${this.state.strikes}`;
		let spans = [<span>_</span>];
    return (
			<div>
				<div  className="hangman-sprites">
					<div className={`${className} current`} />
				</div>
				<div id="inputs">
					<div>{spans}</div>
					<input onChange={this.setGuess.bind(this)} />
					<button onClick={this.checkGuess.bind(this)}>Guess</button>
				</div>
			</div>
    );
  }
}

export default App;
