import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
  const FavoriteButtonTitle = favorite ? 'Remove Favorite' : 'Favorite';

  const onFavoriteButtonClicked = useCallback(
    () => (favorite ? onRemoveFavoriteClicked(id) : onFavoriteClicked(id)),
    [favorite, id],
  );

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

BeerShortDescription.propTypes = {
  onFavoriteClicked: PropTypes.func.isRequired,
  onRemoveFavoriteClicked: PropTypes.func.isRequired,

  className: PropTypes.string,

  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,

  image: PropTypes.string,
};

BeerShortDescription.defaultProps = {
  image: 'https://images.punkapi.com/v2/keg.png',
  className: '',
};

export default BeerShortDescription;
