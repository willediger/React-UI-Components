import React from 'react';
import './Button.css';

import GenericButton from "./GenericButton";

class NumberButton extends React.Component {
  constructor(props) {
    super(props);
    NumberButton.defaultProps = {
      buttonStyle: ''
    }
  }

  render() {
    return (
      <GenericButton buttonStyle={`number-button ${this.props.buttonStyle}`} text={this.props.text} onClick={this.props.onClick} />
    );
  }
} 

export default NumberButton;