import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import './FavoritesPage.scss';
import FavoritesPageBeers from '../FavoritesPageBeers/FavoritesPageBeers';

function FavoritesPage({
  beers,
  onRemoveFavoriteClicked,
  loadMissingBeers,
  loadFavorites,
  pagesCount,
  currentPage,
  beersStart,
  beersEnd,
  isLoading,
}) {
  useEffect(() => {
    loadFavorites();
    loadMissingBeers();
  }, []);

  return (
    <div className="favorites-page">
      <h3 className="favorites-page__title">Your favorite beers</h3>
      {isLoading ? (
        <i className="favorites-page__loading-spinner fas fa-spinner" />
      ) : (
        <FavoritesPageBeers
          beers={beers}
          onRemoveFavoriteClicked={onRemoveFavoriteClicked}
          pagesCount={pagesCount}
          currentPage={currentPage}
          beersStart={beersStart}
          beersEnd={beersEnd}
        />
      )}
    </div>
  );
}

FavoritesPage.propTypes = {
  onRemoveFavoriteClicked: PropTypes.func.isRequired,
  loadMissingBeers: PropTypes.func.isRequired,
  loadFavorites: PropTypes.func.isRequired,

  beers: PropTypes.instanceOf(Map).isRequired,

  pagesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  beersStart: PropTypes.number.isRequired,
  beersEnd: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default FavoritesPage;
