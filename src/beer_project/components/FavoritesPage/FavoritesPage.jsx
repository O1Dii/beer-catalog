import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import HorizontalBeerTemplate from '../HorizontalBeerTemplate/HorizontalBeerTemplate';
import PagesList from '../PagesList/PagesList';

import { ITEMS_PER_FAVORITE_PAGE } from '../../constants';

import './FavoritesPage.scss';

function FavoritesPage({ beers, onRemoveFavoriteClicked, match }) {
  const beersPerPage = ITEMS_PER_FAVORITE_PAGE;
  const pagesCount = Math.ceil(beers.count() / beersPerPage);
  const currentPage = match.params.page;

  return (
    <div className="favorites-page">
      <h3 className="favorites-page__title">Your favorite beers</h3>
      {beers
        .slice((currentPage - 1) * beersPerPage, currentPage * beersPerPage)
        .map(item => (
          <HorizontalBeerTemplate
            className="favorites-page__item"
            key={item.get('id')}
            id={item.get('id')}
            title={item.get('name')}
            tagline={item.get('tagline')}
            description={item.get('description')}
            image={item.get('image_url')}
            onRemoveFavoriteClicked={onRemoveFavoriteClicked}
          />
        ))
        .toList()}
      {beers.isEmpty() ? (
        <p className="favorites-page__no-favorites-title">You don&apos;t have favorite beers yet</p>
      ) : (
        <PagesList
          className="favorites-page__pages-list"
          pagesCount={+pagesCount}
          currentPage={+currentPage}
        />
      )}
    </div>
  );
}

FavoritesPage.propTypes = {
  onRemoveFavoriteClicked: PropTypes.func.isRequired,

  beers: PropTypes.instanceOf(Map).isRequired,

  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FavoritesPage;
