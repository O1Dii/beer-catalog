import React from 'react';
import classNames from 'classnames';

import { chooseFunction } from '../../utils';

import './BeerShortDescription.scss';

function BeerShortDescription({
  id,
  className,
  title,
  tagline,
  description,
  image,
  favorite,
  onFavoriteClicked,
  onRemoveFavoriteClicked,
}) {
  console.log(favorite);
  const FavoriteButtonTitle = favorite ? 'Remove Favorite' : 'Favorite';

  const onFavoriteButtonClicked = () => chooseFunction(favorite, onFavoriteClicked, onRemoveFavoriteClicked)(id);

  return (
    <div className={classNames('beer-short-description', className)}>
      <div className="beer-short-description__left-container">
        <p className="beer-short-description__name">{title}</p>
        <p className="beer-short-description__description">{tagline}</p>
        <button
          type="button"
          className="beer-short-description__favorite-button"
          onClick={onFavoriteButtonClicked}
        >
          {FavoriteButtonTitle}
        </button>
        <p className="beer-short-description__text">{description}</p>
      </div>
      <img src={image} className="beer-short-description__image" alt="beer" />
    </div>
  );
}

export default BeerShortDescription;
