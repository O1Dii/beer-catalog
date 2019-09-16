import { connect } from 'react-redux';

import {
  getBeers, addFavorite, removeFavorite, searchDataChange,
} from '../actions';
import { isIdFavoriteSelector, getFavoriteBeers, getBeerById } from '../selectors';

import Router from '../components/PagesRouter/PagesRouter';

const mapStateToProps = state => ({
  beers: state.get('beers'),

  searchText: state.get('searchText'),
  abv: state.get('abv'),
  ibu: state.get('ibu'),
  ebc: state.get('ebc'),

  isIdFavorite: id => isIdFavoriteSelector(state, id),
  getFavoriteBeers: () => getFavoriteBeers(state),
  getBeerById: id => getBeerById(state, id),
});

const mapDispatchToProps = {
  onLandingPageMount: getBeers,
  onSearchChange: searchDataChange,
  onFavoriteClicked: addFavorite,
  onRemoveFavoriteClicked: removeFavorite,
};

const PagesRouter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);

export default PagesRouter;
