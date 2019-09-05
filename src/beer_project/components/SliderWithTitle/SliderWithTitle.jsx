import React from 'react';
import classNames from 'classnames';
import { Slider } from '@material-ui/core';

import './SliderWithTitle.scss';

function SliderWithTitle({ title, value, className }) {
  return (
    <div className={classNames('slider-with-title', className)}>
      <p className="slider-with-title__title">Alcohol</p>
      <p className="slider-with-title__value">42</p>
      <div className="slider-with-title__slider">
        <Slider min={0} max={100} />
      </div>
    </div>
  );
}

export default SliderWithTitle;
