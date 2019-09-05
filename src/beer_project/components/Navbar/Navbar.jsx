import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Navbar.scss';

function Navbar(props) {
  const { className, onMenuButtonClick } = props;

  return (
    <div className={classNames('navbar', className)}>
      <button type="button" onClick={onMenuButtonClick}>
        <i className="navbar__menu-icon fas fa-bars" />
      </button>
      <p className="navbar__title">Beer catalog</p>
      <i className="navbar__options-icon fas fa-ellipsis-v" />
    </div>
  );
}

Navbar.propTypes = {
  onMenuButtonClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Navbar.defaultProps = {
  className: '',
};

export default Navbar;
