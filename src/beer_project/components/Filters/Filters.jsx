import React from 'react';
import classNames from 'classnames';

import SliderWithTitle from '../SliderWithTitle/SliderWithTitle';

import './Filters.scss';

function Filters({ className }) {
  return (
    <div className={classNames('filters', className)}>
      <p className="filters__header">Filter results</p>
      <SliderWithTitle
        className="filters__slider-with-title"
        title="Alcohol by volume"
        min={2}
        max={14}
      />
      <SliderWithTitle
        className="filters__slider-with-title"
        title="International Bitterness Units"
        min={0}
        max={120}
      />
      <SliderWithTitle
        className="filters__slider-with-title"
        title="Color by EBC"
        min={4}
        max={80}
      />
    </div>
  );
}

export default Filters;
