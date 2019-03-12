import React from 'react';
import './Button.css';

class GenericButton extends React.Component {
  render() {
    const clickParam = this.props.operatorValue ? this.props.operatorValue : this.props.text;
    return (
      <button className={this.props.buttonStyle} onClick={this.props.onClick(clickParam)}>
        {this.props.text}
      </button>
    );
  }
} 
  
export default GenericButton;