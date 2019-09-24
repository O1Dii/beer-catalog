import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Map } from 'immutable';
import uuid from 'uuid/v4';

import IngredientItem from '../IngredientItem/IngredientItem';

import './Ingredients.scss';

function Ingredients({ className, ingredients }) {
  return (
    <div className={classNames('ingredients', className)}>
      <p className="ingredients__title">Ingredients</p>
      <ul className="ingredients__list">
        {ingredients
          .map((ingredient, ingredientName) => (
            <li key={uuid()} className="ingredients__list-item">
              <p className="ingredients__item-name">{ingredientName}</p>

              <IngredientItem ingredient={ingredient} />
            </li>
          ))
          .toList()}
      </ul>
    </div>
  );
}

Ingredients.propTypes = {
  className: PropTypes.string,
  ingredients: PropTypes.instanceOf(Map).isRequired,
};

Ingredients.defaultProps = {
  className: '',
};

export default Ingredients;
