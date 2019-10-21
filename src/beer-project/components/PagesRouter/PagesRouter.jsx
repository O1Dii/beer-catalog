import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FavoritesPage from '../../containers/FavoritesPage';
import LandingPage from '../../containers/LandingPage';
import DetailPage from '../../containers/DetailPage';

function PagesRouter({ loadFavorites }) {
  useEffect(() => {
    loadFavorites();
  });

  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/favorites/:page/" component={FavoritesPage} />
      <Route path="/detail/:id/" component={DetailPage} />
    </Router>
  );
}

PagesRouter.propTypes = { loadFavorites: PropTypes.func.isRequired };

export default PagesRouter;
