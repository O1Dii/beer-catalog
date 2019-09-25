import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './VerticalBeerTemplate.scss';

function VerticalBeerTemplate({
  className,
  title,
  tagline,
  image,
  onFavoriteClicked,
  onRemoveFavoriteClicked,
  favorite,
  id,
}) {
  const favoriteButtonTitle = favorite ? 'Remove Favorite' : 'Favorite';

  const onFavoriteButtonClicked = useCallback(
    () => (favorite ? onRemoveFavoriteClicked(id) : onFavoriteClicked(id)),
    [favorite, id],
  );

  return (
    <div className={classNames('vertical-beer-template', className)}>
      <img src={image} className="vertical-beer-template__image" alt="beer" />
      <div className="vertical-beer-template__lower-container">
        <p className="vertical-beer-template__name">{title}</p>
        <p className="vertical-beer-template__description">{tagline}</p>
        <div className="vertical-beer-template__buttons-container">
          <Link className="vertical-beer-template__open-button" to={`/detail/${id}/`}>
            Open
          </Link>
          <button
            className="vertical-beer-template__favorite-button"
            type="button"
            onClick={onFavoriteButtonClicked}
          >
            {favoriteButtonTitle}
          </button>
        </div>
      </div>
    </div>
  );
}

VerticalBeerTemplate.propTypes = {
  onFavoriteClicked: PropTypes.func.isRequired,
  onRemoveFavoriteClicked: PropTypes.func.isRequired,

  className: PropTypes.string,

  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  image: PropTypes.string,
};

VerticalBeerTemplate.defaultProps = {
  image: 'https://images.punkapi.com/v2/keg.png',
  className: '',
};

export default VerticalBeerTemplate;
