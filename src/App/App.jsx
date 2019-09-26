import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../beer_project/components/Navigation/Navigation';

import FavoritesPage from '../beer_project/containers/FavoritesPage';
import LandingPage from '../beer_project/containers/LandingPage';
import DetailPage from '../beer_project/containers/DetailPage';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />

        <Route path="/" exact component={LandingPage} />
        <Route path="/favorites/:page/" component={FavoritesPage} />
        <Route path="/detail/:id/" component={DetailPage} />
      </Router>
    </div>
  );
}

export default App;
