import React from 'react';

import HorizontalBeerTemplate from '../HorizontalBeerTemplate/HorizontalBeerTemplate';

import './FavoritesPage.scss';

function FavoritesPage() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="favorites-page">
      <h3 className="favorites-page__title">Your favorite beers</h3>
      {arr.map(item => (
        <HorizontalBeerTemplate className="favorites-page__item" />
      ))}
    </div>
  );
}

export default FavoritesPage;
