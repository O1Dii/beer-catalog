import React from 'react';
import classNames from 'classnames';

import './VerticalBeerTemplate.scss';

function VerticalBeerTemplate({ className, title, tagline }) {
  return (
    <div className={classNames('vertical-beer-template', className)}>
      <img src="assets/img/kitty.jpg" className="vertical-beer-template__image" alt="beer" />
      <div className="vertical-beer-template__lower-container">
        <p className="vertical-beer-template__name">{title}</p>
        <p className="vertical-beer-template__description">{tagline}</p>
        <div className="vertical-beer-template__buttons-container">
          <button className="vertical-beer-template__open-button" type="button">
            Open
          </button>
          <button className="vertical-beer-template__favorite-button" type="button">
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerticalBeerTemplate;
