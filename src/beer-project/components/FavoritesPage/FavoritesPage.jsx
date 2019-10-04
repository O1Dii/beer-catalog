import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import HorizontalBeerTemplate from '../HorizontalBeerTemplate/HorizontalBeerTemplate';
import PagesList from '../PagesList/PagesList';

import './FavoritesPage.scss';

function FavoritesPage({
  beers,
  onRemoveFavoriteClicked,
  pagesCount,
  currentPage,
  BeersStart,
  BeersEnd,
}) {
  return (
    <div className="favorites-page">
      <h3 className="favorites-page__title">Your favorite beers</h3>
      {beers
        .slice(BeersStart, BeersEnd)
        .map(item => (
          <HorizontalBeerTemplate
            className="favorites-page__item"
            key={item.get('id')}
            id={item.get('id')}
            title={item.get('name')}
            tagline={item.get('tagline')}
            description={item.get('description')}
            image={item.get('image_url') || undefined}
            onRemoveFavoriteClicked={onRemoveFavoriteClicked}
          />
        ))
        .toList()}
      {beers.isEmpty() ? (
        <p className="favorites-page__no-favorites-title">You don&apos;t have favorite beers yet</p>
      ) : (
        <PagesList
          className="favorites-page__pages-list"
          pagesCount={parseInt(pagesCount, 10)}
          currentPage={parseInt(currentPage, 10)}
        />
      )}
    </div>
  );
}

FavoritesPage.propTypes = {
  onRemoveFavoriteClicked: PropTypes.func.isRequired,

  beers: PropTypes.instanceOf(Map).isRequired,

  pagesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  BeersStart: PropTypes.number.isRequired,
  BeersEnd: PropTypes.number.isRequired,
};

export default FavoritesPage;
