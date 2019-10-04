import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../../../beer-project/components/Navigation/Navigation';

import FavoritesPage from '../../../beer-project/containers/FavoritesPage';
import LandingPage from '../../../beer-project/containers/LandingPage';
import DetailPage from '../../../beer-project/containers/DetailPage';

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
