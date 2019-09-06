import React, { useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import SideMenu from '../SideMenu/SideMenu';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import LandingPage from '../../containers/LandingPage';

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
    <Router>
      <div className="pages-router">
        <div ref={ref}>
          <SideMenu
            className={classNames('pages-router__side-menu', {
              'pages-router__side-menu_open': open,
            })}
          >
            <Link to="/">
              <button type="button" className="side-menu__first-item-container">
                <i className="side-menu__first-icon fas fa-inbox" />
                <p className="side-menu__first-item">Home</p>
              </button>
            </Link>
            <Link to="/favorites/">
              <button type="button" className="side-menu__second-item-container">
                <i className="side-menu__second-icon fas fa-star" />
                <p className="side-menu__second-item">Favorites</p>
              </button>
            </Link>
          </SideMenu>
        </div>
        <Navbar className="pages-router__navbar" onMenuButtonClick={onMenuOpen} />

        <Route path="/" exact component={LandingPage} />
        <Route path="/favorites/" component={FavoritesPage} />
      </div>
    </Router>
  );
}

export default PagesRouter;
