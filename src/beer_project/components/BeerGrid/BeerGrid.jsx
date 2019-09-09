import React from 'react';
import classNames from 'classnames';

import VerticalBeerTemplate from '../VerticalBeerTemplate/VerticalBeerTemplate';

import './BeerGrid.scss';

function BeerGrid({
  className, beers, onFavoriteClicked, onRemoveFavoriteClicked, isIdFavorite,
}) {
  return (
    <div className={classNames('beer-grid', className)}>
      {beers
        .map(item => (
          <VerticalBeerTemplate
            className="beer-grid__item"
            key={item.get('id')}
            id={item.get('id')}
            title={item.get('name')}
            tagline={item.get('tagline')}
            image={item.get('image_url')}
            favorite={isIdFavorite(item.get('id'))}
            onFavoriteClicked={onFavoriteClicked}
            onRemoveFavoriteClicked={onRemoveFavoriteClicked}
          />
        ))
        .toList()}
    </div>
  );
}

export default BeerGrid;
