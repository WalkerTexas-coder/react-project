import React, { Component } from 'react'
import './App.css'
import Dice from './components/Dice'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      dice : []
    }
  }
  handleDice = (num) => {
    this.setState({
      dice: [...this.state.dice, <Dice number={num}/>]
    })
  }
  render(){
    console.log(this.state);
  return (
    <>
      <h1>Click a number to get a new dice!</h1>
      <div className="row-flex">
        <div id="d4" onClick={() => this.handleDice(4)} > 4 </div>
        <div id="d6" onClick={() => this.handleDice(6)}> 6 </div>
        <div id="d8" onClick={() => this.handleDice(8)}> 8 </div>
        <div id="d10" onClick={() => this.handleDice(10)}> 10 </div>
        <div id="d12" onClick={() => this.handleDice(12)}> 12 </div>
        <div id="d20" onClick={() => this.handleDice(20)}> 20 </div>
        <div id="d100" onClick={() => this.handleDice(100)}> 100 </div>
      </div>
      {this.state.dice?.map(x => x)}
    </>
  );
  }
}

export default App;
