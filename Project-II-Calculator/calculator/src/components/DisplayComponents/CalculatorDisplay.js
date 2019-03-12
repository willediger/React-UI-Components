import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
  render() {
    return (
      <div className = "display">
        {this.props.text}
      </div>
    );
  }
} 
  
export default CalculatorDisplay;