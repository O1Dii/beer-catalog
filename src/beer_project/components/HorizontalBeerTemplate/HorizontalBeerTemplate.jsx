import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './HorizontalBeerTemplate.scss';

function HorizontalBeerTemplate({
  className,
  title,
  tagline,
  description,
  image,
  onRemoveFavoriteClicked,
  id,
}) {
  const onRemoveFavoriteButtonClicked = useCallback(() => {
    onRemoveFavoriteClicked(id);
  }, [id]);

  return (
    <div className={classNames('horizontal-beer-template', className)}>
      <div className="horizontal-beer-template__content-container">
        <div className="horizontal-beer-template__left-container">
          <p className="horizontal-beer-template__name">{title}</p>
          <p className="horizontal-beer-template__description">{tagline}</p>
          <p className="horizontal-beer-template__text">{description}</p>
        </div>
        <img src={image} className="horizontal-beer-template__image" alt="beer" />
      </div>

      <div className="horizontal-beer-template__buttons-container">
        <Link className="horizontal-beer-template__open-button" to={`/detail/${id}/`}>
          Open
        </Link>

        <button
          className="horizontal-beer-template__favorite-button"
          type="button"
          onClick={onRemoveFavoriteButtonClicked}
        >
          Remove Favorite
        </button>
      </div>
    </div>
  );
}

HorizontalBeerTemplate.propTypes = {
  onRemoveFavoriteClicked: PropTypes.func.isRequired,

  className: PropTypes.string,

  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

HorizontalBeerTemplate.defaultProps = {
  className: '',
};

export default HorizontalBeerTemplate;
