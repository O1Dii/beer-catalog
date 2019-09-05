import React from 'react';
import classNames from 'classnames';

import SliderWithTitle from '../SliderWithTitle/SliderWithTitle';

import './Filters.scss';

function Filters({ className }) {
  return (
    <div className={classNames('filters', className)}>
      <p className="filters__header">Filter results</p>
      <SliderWithTitle className="filters__slider-with-title" />
      <SliderWithTitle className="filters__slider-with-title" />
      <SliderWithTitle className="filters__slider-with-title" />
    </div>
  );
}

export default Filters;
