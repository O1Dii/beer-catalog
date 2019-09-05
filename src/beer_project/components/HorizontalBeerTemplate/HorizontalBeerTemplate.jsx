import React from 'react';
import classNames from 'classnames';

import './HorizontalBeerTemplate.scss';

function HorizontalBeerTemplate({ className }) {
  return (
    <div className={classNames('horizontal-beer-template', className)}>
      <div className="horizontal-beer-template__left-container">
        <p className="horizontal-beer-template__name">Punk IPA 2007 - 2010</p>
        <p className="horizontal-beer-template__description">
          Post Modern Classic. Spiky. Tropical. Hoppy.
        </p>
        <p className="horizontal-beer-template__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias laudantium asperiores
          porro praesentium quasi ratione. Aliquam reprehenderit neque, soluta itaque laudantium
          repellat quas facilis ipsum necessitatibus debitis commodi molestiae libero, doloremque
          enim quam recusandae. Repellat eveniet aut atque reprehenderit, incidunt et excepturi!
        </p>
        <div className="horizontal-beer-template__buttons-container">
          <button className="horizontal-beer-template__open-button" type="button">
            Open
          </button>
          <button className="horizontal-beer-template__favorite-button" type="button">
            Favorite
          </button>
        </div>
      </div>
      <img src="assets/img/kitty.jpg" className="horizontal-beer-template__image" alt="beer" />
    </div>
  );
}

export default HorizontalBeerTemplate;
