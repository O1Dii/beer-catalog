import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, Map } from 'immutable';

import './Ingredients.scss';

const getIngredientItems = (ingredient) => {
  if (ingredient instanceof List) {
    let ingredientItemId = 0;

    return ingredient
      .map((ingredientItem) => {
        ingredientItemId += 1;

        return (
          <p key={ingredientItemId} className="ingredients__item-description">
            {`"${ingredientItem.get('name')}" - `}
            {`${ingredientItem.getIn(['amount', 'value'])} `}
            {ingredientItem.getIn(['amount', 'unit'])}
            {ingredientItem.get('add') && `, add at the ${ingredientItem.get('add')}`}
          </p>
        );
      })
      .toList();
  }

  return <p className="ingredients__item-description">{ingredient}</p>;
};

function Ingredients({ className, ingredients }) {
  let ingredientId = 0;

  return (
    <div className={classNames('ingredients', className)}>
      <p className="ingredients__title">Ingredients</p>
      <ul className="ingredients__list">
        {ingredients
          .map((ingredient, ingredientName) => {
            ingredientId += 1;

            return (
              <li key={ingredientId} className="ingredients__list-item">
                <p className="ingredients__item-name">{ingredientName}</p>

                {getIngredientItems(ingredient)}
              </li>
            );
          })
          .toList()}
      </ul>
    </div>
  );
}

Ingredients.propTypes = {
  className: PropTypes.string,
  ingredients: PropTypes.oneOfType([PropTypes.instanceOf(Map), PropTypes.string]).isRequired,
};

Ingredients.defaultProps = {
  className: '',
};

export default Ingredients;
