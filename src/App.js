import './App.css';
import React from 'react';
import Calculator from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
// eslint-disable-next-line no-useless-constructor
  constructor(props) {
    // eslint-disable-next-line no-useless-constructor
    super(props);
  }

  render() {
    return (
      <div>
        <Calculator name="Calculator" />
      </div>
    );
  }
}

export default App;
