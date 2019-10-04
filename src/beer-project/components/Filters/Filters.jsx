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
  const onAbvChange = useCallback(
    (e, newValue) => {
      setAbv(newValue);
    },
    [setAbv],
  );

  const onIbuChange = useCallback(
    (e, newValue) => {
      setIbu(newValue);
    },
    [setIbu],
  );

  const onEbcChange = useCallback(
    (e, newValue) => {
      setEbc(newValue);
    },
    [setEbc],
  );

  return (
    <div className={classNames('filters', className)}>
      <p className="filters__header">Filter results</p>

      <SliderWithTitle
        className="filters__slider-with-title"
        title="Alcohol by volume"
        value={abv}
        onChange={onAbvChange}
        min={MIN_ABV}
        max={MAX_ABV}
      />
      <SliderWithTitle
        className="filters__slider-with-title"
        title="International Bitterness Units"
        value={ibu}
        onChange={onIbuChange}
        min={MIN_IBU}
        max={MAX_IBU}
      />
      <SliderWithTitle
        className="filters__slider-with-title"
        title="Color by EBC"
        value={ebc}
        onChange={onEbcChange}
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
