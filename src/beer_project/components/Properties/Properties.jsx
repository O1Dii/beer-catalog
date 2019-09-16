import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Properties.scss';

function Properties({
  className, abv, ibu, ebc,
}) {
  return (
    <div className={classNames('properties', className)}>
      <p className="properties__title">Properties</p>
      <ul className="properties__list">
        <li className="properties__list-item">
          <p className="properties__item-name">ABV</p>
          <i className="properties__item-icon fas fa-info-circle" />
          <div className="properties__number">{abv ? abv.toFixed(1) : 'no abv'}</div>
        </li>
        <li className="properties__list-item">
          <p className="properties__item-name">IBU</p>
          <i className="properties__item-icon fas fa-info-circle" />
          <div className="properties__number">{ibu ? ibu.toFixed(1) : 'no ibu'}</div>
        </li>
        <li className="properties__list-item">
          <p className="properties__item-name">EBC</p>
          <i className="properties__item-icon fas fa-info-circle" />
          <div className="properties__number">{ebc ? ebc.toFixed(1) : 'no ebc'}</div>
        </li>
      </ul>
    </div>
  );
}

Properties.propTypes = {
  className: PropTypes.string,

  abv: PropTypes.number,
  ibu: PropTypes.number,
  ebc: PropTypes.number,
};

Properties.defaultProps = {
  className: '',

  abv: 0,
  ibu: 0,
  ebc: 0,
};

export default Properties;
