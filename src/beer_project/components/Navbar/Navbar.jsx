import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Navbar.scss';

function Navbar(props) {
  const { className } = props;

  return (
    <div className={classNames('navbar', className)}>
      <i className="navbar__menu-icon fas fa-bars" />
      <p className="navbar__title">Beer catalog</p>
      <i className="navbar__options-icon fas fa-ellipsis-v" />
    </div>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};

Navbar.defaultProps = {
  className: '',
};

export default Navbar;
