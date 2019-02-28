import React from 'react';
import './App.css';

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ClearButton from './components/ButtonComponents/ClearButton';
import Numpad from './components/GroupComponents/Numpad';
import Operators from './components/GroupComponents/Operators';

const App = () => (
  <div className="container">
    <CalculatorDisplay text="0" />
    <div class="input">
      <div className="clear-numpad">
        <ClearButton />
        <Numpad />
      </div>
      <Operators />
    </div>
  </div>
);

export default App;
