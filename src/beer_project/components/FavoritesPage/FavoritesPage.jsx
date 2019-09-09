import React from 'react';

import HorizontalBeerTemplate from '../HorizontalBeerTemplate/HorizontalBeerTemplate';
import PagesList from '../PagesList/PagesList';

import './FavoritesPage.scss';

function FavoritesPage({ beers, onRemoveFavoriteClicked }) {
  return (
    <div className="favorites-page">
      <h3 className="favorites-page__title">Your favorite beers</h3>
      {beers
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
      <PagesList className="favorites-page__pages-list" />
    </div>
  );
}

export default FavoritesPage;
