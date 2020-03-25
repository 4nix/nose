import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nose from './pages/nose/Index';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ Main } />
        <Route path="/nose" component={ Nose } />
      </Router>

    </div>
  );
}

const Main: React.FC = () => {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
  )
}

export default App;
