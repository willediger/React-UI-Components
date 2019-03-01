import React from 'react';
import './Button.css';

import GenericButton from "./GenericButton";

const NumberButton = props => (
  <GenericButton buttonStyle={`number-button ${props.buttonStyle}`} text={props.text} />
);

NumberButton.defaultProps = {
  buttonStyle: ''
}
  
export default NumberButton;