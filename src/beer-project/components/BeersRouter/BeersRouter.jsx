import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import FavoritesPage from '../../containers/FavoritesPage';
import LandingPage from '../../containers/LandingPage';
import DetailPage from '../../containers/DetailPage';

function BeersRouter({ loadFavorites }) {
  return (
    <>
      <Navigation loadFavorites={loadFavorites} />

      <Route path="/" exact component={LandingPage} />
      <Route path="/favorites/:page/" component={FavoritesPage} />
      <Route path="/detail/:id/" component={DetailPage} />
    </>
  );
}

BeersRouter.propTypes = { loadFavorites: PropTypes.func.isRequired };

export default BeersRouter;
