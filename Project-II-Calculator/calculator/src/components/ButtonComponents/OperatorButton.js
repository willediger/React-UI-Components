import React from 'react';
import './Button.css';

import GenericButton from "./GenericButton";

const OperatorButton = props => (
  <GenericButton buttonStyle="operator-button" text={props.text} />
);
  
export default OperatorButton;