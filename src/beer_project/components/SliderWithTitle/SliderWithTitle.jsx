import React, { useState } from 'react';
import classNames from 'classnames';
import { Slider } from '@material-ui/core';

import './SliderWithTitle.scss';

function SliderWithTitle({
  title, min, max, className,
}) {
  const [value, setValue] = useState(min);

  const onSliderChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classNames('slider-with-title', className)}>
      <p className="slider-with-title__title">{title}</p>
      <p className="slider-with-title__value">{value}</p>
      <div className="slider-with-title__slider">
        <Slider min={min} max={max} value={value} onChange={onSliderChange} />
      </div>
    </div>
  );
}

export default SliderWithTitle;
