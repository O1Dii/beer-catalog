import React, { useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import classNames from 'classnames';
import Navbar from '../Navbar/Navbar';

import SideMenu from '../SideMenu/SideMenu';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import LandingPage from '../LandingPage/LandingPage';

import './PagesRouter.scss';

function PagesRouter() {
  const [open, setOpen] = useState(false);

  const onMenuOpen = () => {
    setOpen(!open);
  };

  const onOutsideClick = () => {
    setOpen(false);
  };

  const ref = React.useRef(null);
  useOnClickOutside(ref, onOutsideClick);

  return (
    <div className="pages-router">
      <div ref={ref}>
        <SideMenu
          className={classNames('pages-router__side-menu', {
            'pages-router__side-menu_open': open,
          })}
        />
      </div>
      <Navbar className="pages-router__navbar" onMenuButtonClick={onMenuOpen} />
      <LandingPage />
    </div>
  );
}

export default PagesRouter;
