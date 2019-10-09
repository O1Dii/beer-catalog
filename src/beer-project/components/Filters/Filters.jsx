import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SliderWithTitle from '../SliderWithTitle/SliderWithTitle';

import './Filters.scss';
import {
  MIN_ABV, MIN_IBU, MIN_EBC, MAX_ABV, MAX_IBU, MAX_EBC,
} from '../../constants';

function Filters({
  className, abv, ibu, ebc, setAbv, setIbu, setEbc,
}) {
  return (
    <div className={classNames('filters', className)}>
      <p className="filters__header">Filter results</p>

      <SliderWithTitle
        className="filters__slider-with-title"
        title="Alcohol by volume"
        value={abv}
        step={0.1}
        onChange={setAbv}
        min={MIN_ABV}
        max={MAX_ABV}
      />
      <SliderWithTitle
        className="filters__slider-with-title"
        title="International Bitterness Units"
        value={ibu}
        step={1}
        onChange={setIbu}
        min={MIN_IBU}
        max={MAX_IBU}
      />
      <SliderWithTitle
        className="filters__slider-with-title"
        title="Color by EBC"
        value={ebc}
        step={1}
        onChange={setEbc}
        min={MIN_EBC}
        max={MAX_EBC}
      />
    </div>
  );
}

Filters.propTypes = {
  setAbv: PropTypes.func.isRequired,
  setIbu: PropTypes.func.isRequired,
  setEbc: PropTypes.func.isRequired,

  className: PropTypes.string,

  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  ebc: PropTypes.number.isRequired,
};

Filters.defaultProps = {
  className: '',
};

export default Filters;
