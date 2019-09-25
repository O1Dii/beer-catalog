import { connect } from 'react-redux';

import {
  getBeers, addFavorite, removeFavorite, searchDataChange,
} from '../actions';
import { getFavoriteBeers } from '../selectors';

import Router from '../components/PagesRouter/PagesRouter';

const mapStateToProps = state => ({
  beers: state.get('beers'),

  searchText: state.get('searchText'),
  abv: state.get('abv'),
  ibu: state.get('ibu'),
  ebc: state.get('ebc'),
  favoriteBeers: getFavoriteBeers(state),
});

const mapDispatchToProps = {
  loadBeers: getBeers,
  onSearchChange: searchDataChange,
  onFavoriteClicked: addFavorite,
  onRemoveFavoriteClicked: removeFavorite,
};

const PagesRouter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);

export default PagesRouter;
