import React from 'react';
import './Group.css';

import OperatorButton from '../ButtonComponents/OperatorButton';

const Operators = () => (
  <div className="operators">
    <OperatorButton text="÷" />
    <OperatorButton text="×" />
    <OperatorButton text="-" />
    <OperatorButton text="+" />
    <OperatorButton text="=" />
  </div>
);

export default Operators;
