import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable import/no-extraneous-dependencies

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <p>
          <strong>{name}</strong>
        </p>
        <ul className="list-wrapper">
          <li key="result" className="item-0">0</li>
          <li key="AC" className="digit">AC</li>
          <li key="sign" className="digit">+/-</li>
          <li key="percentage" className="digit">%</li>
          <li key="divide" className="operator">
            <span>&#247;</span>
          </li>
          <li key="seven" className="digit">7</li>
          <li key="eight" className="digit">8</li>
          <li key="nine" className="digit">9</li>
          <li key="substract" className="operator">-</li>
          <li key="four" className="digit">4</li>
          <li key="five" className="digit">5</li>
          <li key="six" className="digit">6</li>
          <li key="multiply" className="operator">*</li>
          <li key="one" className="digit">1</li>
          <li key="two" className="digit">2</li>
          <li key="three" className="digit">3</li>
          <li key="sum" className="operator">+</li>
          <li key="zero" className="zero">0</li>
          <li key="dot" className="digit">.</li>
          <li key="equal" className="operator">=</li>
        </ul>
      </div>
    );
  }
}

Calculator.propTypes = {
  name: PropTypes.string,
};

Calculator.defaultProps = {
  name: 'Calc',
};

export { Calculator as default };
