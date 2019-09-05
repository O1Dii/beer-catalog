import React from 'react';
import classNames from 'classnames';

import './SideMenu.scss';

function SideMenu({ className }) {
  return (
    <div className={classNames('side-menu', className)}>
      <div className="side-menu__title-container">
        <p className="side-menu__title">Beer Catalog</p>
      </div>
      <button type="button" className="side-menu__first-item-container">
        <i className="side-menu__first-icon fas fa-inbox" />
        <p className="side-menu__first-item">Home</p>
      </button>
      <button type="button" className="side-menu__second-item-container">
        <i className="side-menu__second-icon fas fa-star" />
        <p className="side-menu__second-item">Favorites</p>
      </button>
    </div>
  );
}

export default SideMenu;
