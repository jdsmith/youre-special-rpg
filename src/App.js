import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import PerkPage from './containers/PerkPage';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link
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
          </Link>
        </header>
        <Switch>
          <Route path="/perks/:category">
            <PerkPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
