import React from 'react';
import classNames from 'classnames';

import './Method.scss';

function Method({ className, method }) {
  return (
    <div className={classNames('method', className)}>
      <p className="method__title">Method</p>
      <ul className="method__list">
        <li className="method__list-item method__list-item_border-top">
          <p className="method__item-name">Mash</p>
          {method.get('mash_temp').map(item => (
            <p className="method__item-description">
              {item.get('duration') && `${item.get('duration')} minutes at `}
              {item.getIn(['temp', 'value'])}
              {' '}
              {item.getIn(['temp', 'unit'])}
            </p>
          ))}
        </li>
        <li className="method__list-item">
          <p className="method__item-name">Fermentation</p>
          <p className="method__item-description">
            Perform at
            {' '}
            {method.getIn(['fermentation', 'temp', 'value'])}
            {' '}
            {method.getIn(['fermentation', 'temp', 'unit'])}
          </p>
        </li>
        <li className="method__list-item">
          <p className="method__item-name">Twist</p>
          <p className="method__item-description">
            {method.get('twist') ? method.get('twist') : 'no twist'}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Method;
