import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function Calculator(props) {
  const { name } = props;
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (e) => {
    const buttonName = e.target.textContent;
    const obj = calculate(({ total, next, operation }), buttonName);

    setTotal(obj.total);
    setNext(obj.next);
    setOperation(obj.operation);
  };

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
        <button key="AC" className="digit" type="button" onClick={handleClick}>AC</button>
        <button key="sign" className="digit" type="button" onClick={handleClick}>+/-</button>
        <button key="percentage" className="digit" type="button" onClick={handleClick}>%</button>
        <button key="divide" className="operator" type="button" onClick={handleClick}>
          <span>&#247;</span>
        </button>
        <button key="seven" className="digit" type="button" onClick={handleClick}>7</button>
        <button key="eight" className="digit" type="button" onClick={handleClick}>8</button>
        <button key="nine" className="digit" type="button" onClick={handleClick}>9</button>
        <button key="substract" className="operator" type="button" onClick={handleClick}>-</button>
        <button key="four" className="digit" type="button" onClick={handleClick}>4</button>
        <button key="five" className="digit" type="button" onClick={handleClick}>5</button>
        <button key="six" className="digit" type="button" onClick={handleClick}>6</button>
        <button key="multiply" className="operator" type="button" onClick={handleClick}>x</button>
        <button key="one" className="digit" type="button" onClick={handleClick}>1</button>
        <button key="two" className="digit" type="button" onClick={handleClick}>2</button>
        <button key="three" className="digit" type="button" onClick={handleClick}>3</button>
        <button key="sum" className="operator" type="button" onClick={handleClick}>+</button>
        <button key="zero" className="zero" type="button" onClick={handleClick}>0</button>
        <button key="dot" className="digit" type="button" onClick={handleClick}>.</button>
        <button key="equal" className="operator" type="button" onClick={handleClick}>=</button>
      </ul>
    </div>
  );
}

Calculator.propTypes = {
  name: PropTypes.string,
};

Calculator.defaultProps = {
  name: 'Calc',
};

export { Calculator as default };
