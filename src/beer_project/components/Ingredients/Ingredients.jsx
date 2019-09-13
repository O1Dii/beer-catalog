import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, Map } from 'immutable';

import './Ingredients.scss';

function Ingredients({ className, ingredients }) {
  let id = 0;

  return (
    <div className={classNames('ingredients', className)}>
      <p className="ingredients__title">Ingredients</p>
      <ul className="ingredients__list">
        {ingredients
          .map((ingredient, itemName) => (
            <li key={itemName} className="ingredients__list-item">
              <p className="ingredients__item-name">{itemName}</p>
              {ingredient instanceof List ? (
                ingredient
                  .map((item) => {
                    id += 1;

                    return (
                      <p key={id} className="ingredients__item-description">
                        {`"${item.get('name')}"`}
                        {' - '}
                        {item.getIn(['amount', 'value'])}
                        {' '}
                        {item.getIn(['amount', 'unit'])}
                        {item.get('add') && `, add at the ${item.get('add')}`}
                      </p>
                    );
                  })
                  .toList()
              ) : (
                <p className="ingredients__item-description">{ingredient}</p>
              )}
            </li>
          ))
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
