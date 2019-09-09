import React from 'react';
import classNames from 'classnames';
import Immutable from 'immutable';

import './Ingredients.scss';

function Ingredients({ className, ingredients }) {
  return (
    <div className={classNames('ingredients', className)}>
      <p className="ingredients__title">Ingredients</p>
      <ul className="ingredients__list">
        {ingredients
          .map((ingredients, itemName) => (
            <li className="ingredients__list-item">
              <p className="ingredients__item-name">{itemName}</p>
              {ingredients instanceof Immutable.List ? (
                ingredients
                  .map(item => (
                    <p className="ingredients__item-description">
                      {`"${item.get('name')}"`}
                      {' - '}
                      {item.getIn(['amount', 'value'])}
                      {' '}
                      {item.getIn(['amount', 'unit'])}
                      {item.get('add') && `, add at the ${item.get('add')}`}
                    </p>
                  ))
                  .toList()
              ) : (
                <p className="ingredients__item-description">{ingredients}</p>
              )}
            </li>
          ))
          .toList()}
      </ul>
    </div>
  );
}

export default Ingredients;
