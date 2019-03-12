import React from 'react';
import './Group.css';

import NumberButton from '../ButtonComponents/NumberButton';

const firstColumnClassName = 'first-column';
const zeroButtonClassName = 'zero-button';

class Numpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [
      {
        order: 1,
        number: 7,
        buttonStyle: firstColumnClassName
      },
      {
        order: 2,
        number: 8
      },
      {
        order: 3,
        number: 9
      },
      {
        order: 4,
        number: 4,
        buttonStyle: firstColumnClassName
      },
      {
        order: 5,
        number: 5
      },
      {
        order: 6,
        number: 6
      },
      {
        order: 7,
        number: 1,
        buttonStyle: firstColumnClassName
      },
      {
        order: 8,
        number: 2
      },
      {
        order: 9,
        number: 3
      },
      {
        order: 10,
        number: 0,
        buttonStyle: zeroButtonClassName
      }]
    };
  }

  render() {
    return (
      <div className="numpad">
        {this.state.numbers.map(n => (
          // number button is having a buttonstyle set if that property is present on the current 'n' in 'numbers', and the key and text are set always. all number buttons default to '.number-button' class. the additional class we're sometimes setting here is for the zero button and left-most buttons, which are slightly narrower.
          // see this stackoverflow answer for more info on the syntax: https://stackoverflow.com/a/35428331
          // or view the archive.org entry i saved for it: https://web.archive.org/web/20190301041432/https://stackoverflow.com/questions/31163693/how-to-conditionally-add-attributes-to-react-components/35428331
          <NumberButton {...(n.buttonStyle ? {buttonStyle: n.buttonStyle} : {})} text={n.number} key={n.order} onClick={this.props.onClick} />
        ))}
      </div>
    );
  }
} 

export default Numpad;
