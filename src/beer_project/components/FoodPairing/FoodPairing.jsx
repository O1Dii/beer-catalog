import React from 'react';
import classNames from 'classnames';

import './FoodPairing.scss';

function FoodPairing({ className, foodPairing }) {
  return (
    <div className={classNames('food-pairing', className)}>
      <p className="food-pairing__title">Food Pairing</p>
      <ul className="food-pairing__list">
        {foodPairing.map(item => (
          <li className="food-pairing__list-item">
            <p className="food-pairing__item-name">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodPairing;
