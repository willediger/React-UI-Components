import React from 'react';
import math from 'mathjs';
import './App.css';

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ClearButton from './components/ButtonComponents/ClearButton';
import Numpad from './components/GroupComponents/Numpad';
import Operators from './components/GroupComponents/Operators';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      queue: '',
      display: '0'
    };
  };

  addToQueue = param => e => {
    this.setState(prevState => ({queue: prevState.queue + param}));
    this.setState(prevState => ({display: prevState.queue}));
  }

  clear = (param = null) => e => {
    this.setState({queue: '', display: '0'});
  }

  evaluateQueue = (param = null) => e => {
    let queue = this.state.queue;
    queue.length ? this.setState({queue: '', display: math.round(math.eval(queue),8)}) : this.clear()(null);
  }

  render() {
    return (
      <div className="container">
        <CalculatorDisplay text={this.state.display} />
        <div class="input">
          <div className="clear-numpad">
            <ClearButton onClick={this.clear}/>
            <Numpad onClick={this.addToQueue}/>
          </div>
          <Operators onClick={this.addToQueue} eval={this.evaluateQueue} />
        </div>
      </div>
    );
  };
};

export default App;
