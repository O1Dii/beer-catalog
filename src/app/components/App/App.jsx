import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BeersRouter from '../../../beer-project/components/BeersRouter/BeersRouter';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" component={BeersRouter} />
      </Router>
    </div>
  );
}

export default App;
