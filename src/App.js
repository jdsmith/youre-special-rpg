import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './images/special-logo.png';
import './App.css';
import HomePage from './containers/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>You&apos;re&nbsp;</h1>
          <Link to="/" className="App-link">
            <img src={logo} className="App-logo" alt="logo" aria-label="Special" />
          </Link>
          {/* <Link
            className="App-link"
            to="/perks/strength"
          >
            Strength Perks
          </Link>
          <Link
            className="App-link"
            to="/perks/perception"
          >
            Perception Perks
          </Link>
          <Link
            className="App-link"
            to="/perks/endurance"
          >
            Endurance Perks
          </Link>
          <Link
            className="App-link"
            to="/perks/charisma"
          >
            Charisma Perks
          </Link>
          <Link
            className="App-link"
            to="/perks/intelligence"
          >
            Intelligence Perks
          </Link>
          <Link
            className="App-link"
            to="/perks/agility"
          >
            Agility Perks
          </Link>
          <Link
            className="App-link"
            to="/perks/luck"
          >
            Luck Perks
          </Link> */}
        </header>
        <Switch>
          {/* <Route path="/perks/:category">
            <PerkPage />
          </Route> */}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
