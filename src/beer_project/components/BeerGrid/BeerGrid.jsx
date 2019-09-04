import React from 'react';
import classNames from 'classnames';

import VerticalBeerTemplate from '../VerticalBeerTemplate/VerticalBeerTemplate';

import './BeerGrid.scss';

function BeerGrid({ className }) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={classNames('beer-grid', className)}>
      {arr.map(item => (
        <VerticalBeerTemplate className="beer-grid__item" />
      ))}
    </div>
  );
}

export default BeerGrid;
