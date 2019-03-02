import React from 'react';
import './Button.css';

import GenericButton from "./GenericButton";

class ClearButton extends React.Component {
  render() {
    return (
      <GenericButton buttonStyle="clear-button" text="clear" onClick={this.props.onClick}/>
    )
  }
};
  
export default ClearButton;