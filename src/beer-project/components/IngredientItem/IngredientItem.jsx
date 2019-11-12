import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List } from 'immutable';
import uuid from 'uuid/v4';
import _ from 'lodash';

function IngredientItem({ className, ingredient }) {
  if (_.isString(ingredient)) {
    return (
      <span className={classNames('ingredient-item', className)}>
        <p className="ingredient-item__section">{ingredient}</p>
      </span>
    );
  }

  return (
    <span className={classNames('ingredient-item', className)}>
      {ingredient
        .map(ingredientItem => (
          <p key={uuid()} className="ingredient-item__section">
            {`"${ingredientItem.get('name')}" - `}
            {`${ingredientItem.getIn(['amount', 'value'])} `}
            {ingredientItem.getIn(['amount', 'unit'])}
            {ingredientItem.get('add') && `, add at the ${ingredientItem.get('add')}`}
          </p>
        ))
        .toList()}
    </span>
  );
}

IngredientItem.propTypes = {
  className: PropTypes.string,

  ingredient: PropTypes.oneOfType([PropTypes.instanceOf(List), PropTypes.string]).isRequired,
};

IngredientItem.defaultProps = {
  className: '',
};

export default IngredientItem;
