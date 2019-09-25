import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from 'use-onclickoutside';
import classNames from 'classnames';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Map } from 'immutable';
import Navbar from '../Navbar/Navbar';

import SideMenu from '../SideMenu/SideMenu';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import LandingPage from '../LandingPage/LandingPage';
import DetailPage from '../../containers/DetailPage';

import './PagesRouter.scss';

function PagesRouter({
  loadBeers,
  beers,
  searchText,
  onSearchChange,
  onFavoriteClicked,
  onRemoveFavoriteClicked,
  favoriteBeers,
  abv,
  ibu,
  ebc,
}) {
  const [open, setOpen] = useState(false);

  const onMenuOpen = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);

  const onOutsideClick = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

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
          />
        </div>
        <Navbar className="pages-router__navbar" onMenuButtonClick={onMenuOpen} />

        <Route
          path="/"
          exact
          render={props => (
            <LandingPage
              {...props}
              loadBeers={loadBeers}
              onSearchChange={onSearchChange}
              beers={beers}
              onFavoriteClicked={onFavoriteClicked}
              onRemoveFavoriteClicked={onRemoveFavoriteClicked}
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
              beers={favoriteBeers}
              onRemoveFavoriteClicked={onRemoveFavoriteClicked}
            />
          )}
        />
        <Route
          path="/detail/:id/"
          render={props => (
            <DetailPage
              {...props}
              onFavoriteClicked={onFavoriteClicked}
              onRemoveFavoriteClicked={onRemoveFavoriteClicked}
            />
          )}
        />
      </div>
    </Router>
  );
}

PagesRouter.propTypes = {
  loadBeers: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onFavoriteClicked: PropTypes.func.isRequired,
  onRemoveFavoriteClicked: PropTypes.func.isRequired,

  beers: PropTypes.instanceOf(Map).isRequired,
  favoriteBeers: PropTypes.instanceOf(Map).isRequired,

  searchText: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  ebc: PropTypes.number.isRequired,
};

export default PagesRouter;
