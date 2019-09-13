import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './SideMenu.scss';

function SideMenu({ className, children }) {
  return (
    <div className={classNames('side-menu', className)}>
      <div className="side-menu__title-container">
        <p className="side-menu__title">Beer Catalog</p>
      </div>
      {children}
    </div>
  );
}

SideMenu.propTypes = {
  className: PropTypes.string,

  children: PropTypes.node.isRequired,
};

SideMenu.defaultProps = {
  className: '',
};

export default SideMenu;
