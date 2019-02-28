import React from 'react';
import './Button.css';

const GenericButton = props => (
  <button className={props.buttonStyle}>
    {props.text}
  </button>
);
  
export default GenericButton;