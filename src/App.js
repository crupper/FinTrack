import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import './css/shards-dashboards.1.1.0.min.css';

import Home from './components/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

let test_env = process.env.REACT_APP_TEST_VAR;
console.log(process.env.REACT_APP_TEST_VAR);
console.log(test_env)

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
