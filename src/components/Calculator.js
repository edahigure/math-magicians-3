import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const buttonName = e.target.textContent;
    const { total, next, operation } = this.state;
    const obj = calculate(({ total, next, operation }), buttonName);

    this.setState(() => ({
      total: obj.total,
      next: obj.next,
      operation: obj.operation,
    }));
  };

  render() {
    const { name } = this.props;
    const { total } = this.state;
    const { next } = this.state;
    const { operation } = this.state;

    return (

      <div>
        <p>
          <strong>
            {name}
          </strong>
          {total}
          {next}
          {operation}
        </p>
        <ul className="list-wrapper">
          <li key="result" className="item-0">
            {' '}
            {next || total}
          </li>
          <button key="AC" className="digit" type="button" onClick={this.handleClick}>AC</button>
          <button key="sign" className="digit" type="button" onClick={this.handleClick}>+/-</button>
          <button key="percentage" className="digit" type="button" onClick={this.handleClick}>%</button>
          <button key="divide" className="operator" type="button" onClick={this.handleClick}>
            <span>&#247;</span>
          </button>
          <button key="seven" className="digit" type="button" onClick={this.handleClick}>7</button>
          <button key="eight" className="digit" type="button" onClick={this.handleClick}>8</button>
          <button key="nine" className="digit" type="button" onClick={this.handleClick}>9</button>
          <button key="substract" className="operator" type="button" onClick={this.handleClick}>-</button>
          <button key="four" className="digit" type="button" onClick={this.handleClick}>4</button>
          <button key="five" className="digit" type="button" onClick={this.handleClick}>5</button>
          <button key="six" className="digit" type="button" onClick={this.handleClick}>6</button>
          <button key="multiply" className="operator" type="button" onClick={this.handleClick}>x</button>
          <button key="one" className="digit" type="button" onClick={this.handleClick}>1</button>
          <button key="two" className="digit" type="button" onClick={this.handleClick}>2</button>
          <button key="three" className="digit" type="button" onClick={this.handleClick}>3</button>
          <button key="sum" className="operator" type="button" onClick={this.handleClick}>+</button>
          <button key="zero" className="zero" type="button" onClick={this.handleClick}>0</button>
          <button key="dot" className="digit" type="button" onClick={this.handleClick}>.</button>
          <button key="equal" className="operator" type="button" onClick={this.handleClick}>=</button>
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
