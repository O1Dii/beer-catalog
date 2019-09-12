import React, { useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import SideMenu from '../SideMenu/SideMenu';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import LandingPage from '../LandingPage/LandingPage';
import DetailPage from '../DetailPage/DetailPage';

import './PagesRouter.scss';

function PagesRouter({
  onLandingPageMount,
  beers,
  searchText,
  onSearchChange,
  onFavoriteClicked,
  onRemoveFavoriteClicked,
  isIdFavorite,
  getFavoriteBeers,
  getBeerById,
  abv,
  ibu,
  ebc,
}) {
  const beersPerFavoritePage = 3;
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
            <Link to="/" className="side-menu__item-container">
              <i className="side-menu__icon fas fa-inbox" />
              <p className="side-menu__item">Home</p>
            </Link>
            <Link to="/favorites/1/" className="side-menu__item-container">
              <i className="side-menu__icon fas fa-star" />
              <p className="side-menu__item">Favorites</p>
            </Link>
          </SideMenu>
        </div>
        <Navbar className="pages-router__navbar" onMenuButtonClick={onMenuOpen} />

        <Route
          path="/"
          exact
          render={props => (
            <LandingPage
              {...props}
              onMount={onLandingPageMount}
              onSearchChange={onSearchChange}
              beers={beers}
              onFavoriteClicked={onFavoriteClicked}
              onRemoveFavoriteClicked={onRemoveFavoriteClicked}
              isIdFavorite={isIdFavorite}
              searchText={searchText}
              abv={abv}
              ibu={ibu}
              ebc={ebc}
            />
          )}
        />
        <Route
          path="/favorites/:page/"
          render={props => (
            <FavoritesPage
              {...props}
              beers={getFavoriteBeers()}
              beersPerPage={beersPerFavoritePage}
              onRemoveFavoriteClicked={onRemoveFavoriteClicked}
            />
          )}
        />
        <Route
          path="/detail/:id/"
          render={props => (
            <DetailPage
              {...props}
              getBeerById={getBeerById}
              onFavoriteClicked={onFavoriteClicked}
              onRemoveFavoriteClicked={onRemoveFavoriteClicked}
              isIdFavorite={isIdFavorite}
            />
          )}
        />
      </div>
    </Router>
  );
}

export default PagesRouter;
