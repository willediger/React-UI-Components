import React from 'react';
import './Group.css';

import NumberButton from '../ButtonComponents/NumberButton';

const firstColumnClassName = 'first-column';
const zeroButtonClassName = 'zero-button';

const numbers = [
  {
    order: 1,
    number: 7,
    buttonStyle: firstColumnClassName
  },
  {
    order: 2,
    number: 8
  },
  {
    order: 3,
    number: 9
  },
  {
    order: 4,
    number: 4,
    buttonStyle: firstColumnClassName
  },
  {
    order: 5,
    number: 5
  },
  {
    order: 6,
    number: 6
  },
  {
    order: 7,
    number: 1,
    buttonStyle: firstColumnClassName
  },
  {
    order: 8,
    number: 2
  },
  {
    order: 9,
    number: 3
  },
  {
    order: 10,
    number: 1,
    buttonStyle: zeroButtonClassName
  }
]

const Numpad = () => (
  <div className="numpad">
    {numbers.map(n => (
      // number button is having a buttonstyle set if that property is present on the current 'n' in 'numbers', and the key and text are set always. all number buttons default to '.number-button' class. the additional class we're sometimes setting here is for the zero button and left-most buttons, which are slightly narrower.
      <NumberButton {...(n.buttonStyle ? {buttonStyle: n.buttonStyle} : {})} text={n.number} key={n.order} />
    ))}
  </div>
);

export default Numpad;
