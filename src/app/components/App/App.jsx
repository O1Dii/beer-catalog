import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../../../beer-project/components/Navigation/Navigation';
import PagesRouter from '../../../beer-project/containers/PagesRouter';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />

        <Route path="/" exact component={PagesRouter} />
      </Router>
    </div>
  );
}

export default App;
