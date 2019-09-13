import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List } from 'immutable';

import './FoodPairing.scss';

function FoodPairing({ className, foodPairing }) {
  return (
    <div className={classNames('food-pairing', className)}>
      <p className="food-pairing__title">Food Pairing</p>
      <ul className="food-pairing__list">
        {foodPairing.map(item => (
          <li key={item} className="food-pairing__list-item">
            <p className="food-pairing__item-name">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

FoodPairing.propTypes = {
  className: PropTypes.string,

  foodPairing: PropTypes.instanceOf(List).isRequired,
};

FoodPairing.defaultProps = {
  className: '',
};

export default FoodPairing;
