import React from 'react';
import './Button.css';

import GenericButton from "./GenericButton";

const ClearButton = props => (
  <GenericButton buttonStyle="clear-button" text="clear" />
);
  
export default ClearButton;