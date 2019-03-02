import React from 'react';
import './Group.css';

import OperatorButton from '../ButtonComponents/OperatorButton';

class Operators extends React.Component {
  render() {
    return (
      <div className="operators">
        <OperatorButton text="÷" operatorValue="/" onClick={this.props.onClick} />
        <OperatorButton text="×" operatorValue="*" onClick={this.props.onClick} />
        <OperatorButton text="-" operatorValue="-" onClick={this.props.onClick} />
        <OperatorButton text="+" operatorValue="+" onClick={this.props.onClick} />
        <OperatorButton text="=" operatorValue="=" onClick={this.props.eval} />
      </div>
    );
  }
}


export default Operators;
