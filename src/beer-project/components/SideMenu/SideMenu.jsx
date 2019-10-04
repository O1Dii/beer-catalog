import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './SideMenu.scss';

function SideMenu({ className }) {
  return (
    <div className={classNames('side-menu', className)}>
      <div className="side-menu__title-container">
        <p className="side-menu__title">Beer Catalog</p>
      </div>

      <Link to="/" className="side-menu__item-container">
        <i className="side-menu__icon fas fa-inbox" />
        <p className="side-menu__item">Home</p>
      </Link>
      <Link to="/favorites/1/" className="side-menu__item-container">
        <i className="side-menu__icon fas fa-star" />
        <p className="side-menu__item">Favorites</p>
      </Link>
    </div>
  );
}

SideMenu.propTypes = {
  className: PropTypes.string,
};

SideMenu.defaultProps = {
  className: '',
};

export default SideMenu;
