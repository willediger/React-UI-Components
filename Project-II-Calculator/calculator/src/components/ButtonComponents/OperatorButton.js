import React from 'react';
import './Button.css';

import GenericButton from "./GenericButton";

class OperatorButton extends React.Component {
  render() {
    return (
      <GenericButton buttonStyle="operator-button" text={this.props.text} onClick={this.props.onClick} operatorValue={this.props.operatorValue}/>
    );
  }
} 
  
export default OperatorButton;