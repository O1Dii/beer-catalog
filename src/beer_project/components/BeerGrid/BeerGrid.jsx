import React from 'react';
import classNames from 'classnames';

import VerticalBeerTemplate from '../VerticalBeerTemplate/VerticalBeerTemplate';

import './BeerGrid.scss';

function BeerGrid({ className, beers }) {
  return (
    <div className={classNames('beer-grid', className)}>
      {beers.map(item => (
        <VerticalBeerTemplate
          key={item.get('id')}
          title={item.get('name')}
          tagline={item.get('tagline')}
          image={item.get('image_url')}
          className="beer-grid__item"
        />
      ))}
    </div>
  );
}

export default BeerGrid;
