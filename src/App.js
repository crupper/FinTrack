import React from 'react';
import logo from './logo.svg';
import './App.css';

let test_env = process.env.REACT_APP_TEST_VAR;
console.log(process.env.REACT_APP_TEST_VAR);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. <br/>
          Test: {test_env}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
