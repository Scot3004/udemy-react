import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent/ValidationComponent'
import CharComponent from './components/CharComponent/CharComponent'


class App extends Component {
  state = {word: ""}
  wordChanged = (event) => {
    this.setState({word: event.target.value})
  }
  deleteLetter(index) {
    let word = this.state.word
    this.setState({word: word.slice(0, index)+word.slice(index+1)})
  }
  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.word} onChange={this.wordChanged}></input>
        <p>{this.state.word.length}</p>
        <ValidationComponent wordLength={this.state.word.length} />
        {this.state.word.split('').map((letter, index)=> <CharComponent letter={letter} key={index} onClick={() => this.deleteLetter(index)}></CharComponent>)}
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
