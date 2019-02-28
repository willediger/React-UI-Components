import React from 'react';
import './Group.css';

import NumberButton from '../ButtonComponents/NumberButton';

const Numpad = () => (
  <div className="numpad">
    <NumberButton buttonStyle='first-column' text="7" />
    <NumberButton buttonStyle='' text="8" />
    <NumberButton buttonStyle='' text="9" />
    <NumberButton buttonStyle='first-column' text="4" />
    <NumberButton buttonStyle='' text="5" />
    <NumberButton buttonStyle='' text="6" />
    <NumberButton buttonStyle='first-column' text="1" />
    <NumberButton buttonStyle='' text="2" />
    <NumberButton buttonStyle='' text="3" />
    <NumberButton buttonStyle='zero-button' text="0" />
  </div>
);

export default Numpad;
