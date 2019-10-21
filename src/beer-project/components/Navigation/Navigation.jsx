import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from 'use-onclickoutside';
import classNames from 'classnames';
import Navbar from '../Navbar/Navbar';

import SideMenu from '../SideMenu/SideMenu';

import './Navigation.scss';

function Navigation({ loadFavorites }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadFavorites();
  }, []);

  const onMenuOpen = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const onOutsideClick = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const ref = React.useRef(null);
  useOnClickOutside(ref, onOutsideClick);

  return (
    <div className="navigation">
      <div ref={ref}>
        <SideMenu
          className={classNames('navigation__side-menu', {
            'navigation__side-menu_open': open,
          })}
        />
      </div>

      <Navbar className="navigation__navbar" onMenuButtonClick={onMenuOpen} />
    </div>
  );
}

Navigation.propTypes = {
  loadFavorites: PropTypes.func.isRequired,
};

export default Navigation;
