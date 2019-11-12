import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import HorizontalBeerTemplate from '../HorizontalBeerTemplate/HorizontalBeerTemplate';
import PagesList from '../PagesList/PagesList';

import './FavoritesPageBeers.scss';

function FavoritesPageBeers({
  beers,
  onRemoveFavoriteClicked,
  pagesCount,
  currentPage,
  beersStart,
  beersEnd,
}) {
  return (
    <>
      {beers
        .slice(beersStart, beersEnd)
        .map(item => (
          <HorizontalBeerTemplate
            className="favorites-page-beers__item"
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
        <p className="favorites-page-beers__no-favorites-title">
          You don&apos;t have favorite beers yet
        </p>
      ) : (
        <PagesList
          className="favorites-page-beers__pages-list"
          pagesCount={pagesCount}
          currentPage={currentPage}
        />
      )}
    </>
  );
}

FavoritesPageBeers.propTypes = {
  onRemoveFavoriteClicked: PropTypes.func.isRequired,

  beers: PropTypes.instanceOf(Map).isRequired,

  pagesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  beersStart: PropTypes.number.isRequired,
  beersEnd: PropTypes.number.isRequired,
};

export default FavoritesPageBeers;
