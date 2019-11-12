import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Slider } from '@material-ui/core';

import './SliderWithTitle.scss';

function SliderWithTitle({
  title, min, max, step, className, value, onChange,
}) {
  const onValueChange = useCallback(
    (e, newValue) => {
      onChange(newValue);
    },
    [onChange],
  );

  return (
    <div className={classNames('slider-with-title', className)}>
      <p className="slider-with-title__title">{title}</p>
      <p className="slider-with-title__value">{value}</p>
      <div className="slider-with-title__slider">
        <Slider min={min} max={max} value={value} step={step} onChange={onValueChange} />
      </div>
    </div>
  );
}

SliderWithTitle.propTypes = {
  onChange: PropTypes.func.isRequired,

  className: PropTypes.string,

  title: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

SliderWithTitle.defaultProps = {
  className: '',
};

export default SliderWithTitle;
