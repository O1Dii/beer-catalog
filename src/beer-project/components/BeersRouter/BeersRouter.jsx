import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import FavoritesPage from '../../containers/FavoritesPage';
import LandingPage from '../../containers/LandingPage';
import DetailPage from '../../containers/DetailPage';

function BeersRouter() {
  return (
    <>
      <Navigation />

      <Route path="/" exact component={LandingPage} />
      <Route path="/favorites/:page/" component={FavoritesPage} />
      <Route path="/detail/:id/" component={DetailPage} />
    </>
  );
}

export default BeersRouter;
