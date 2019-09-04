import React from 'react';
import classNames from 'classnames';

import './VerticalBeerTemplate.scss';

function VerticalBeerTemplate({ className }) {
  return (
    <div className={classNames('vertical-beer-template', className)}>
      <img src="assets/img/kitty.jpg" className="vertical-beer-template__image" alt="beer" />
      <div className="vertical-beer-template__lower-container">
        <p className="vertical-beer-template__name">Punk IPA 2007 - 2010</p>
        <p className="vertical-beer-template__description">
          Post Modern Classic. Spiky. Tropical. Hoppy.
        </p>
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
