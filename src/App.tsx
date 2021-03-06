import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Nose from './pages/nose/Index'
// import NoseItemList from './pages/nose/ItemList'
import NoseList from './pages/nose/List'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/list" component={ Nose } />
          <Route exact path="/list/:gid" component={ NoseList } />
          <Route exact path="/list/:gid/:rid" component={ withRouter(NoseList) } />
        </Switch>
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
