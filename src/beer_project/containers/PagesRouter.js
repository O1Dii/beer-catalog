import { connect } from 'react-redux';

import {
  getBeersData, searchChange, addFavorite, removeFavorite,
} from '../actions';
import { isIdFavoriteSelector, getFavoriteBeers, getBeerById } from '../selectors';

import Router from '../components/PagesRouter/PagesRouter';

const mapStateToProps = state => ({
  beers: state.get('beers'),
  searchText: state.get('searchText'),
  isIdFavorite: id => isIdFavoriteSelector(state, id),
  getFavoriteBeers: () => getFavoriteBeers(state),
  getBeerById: id => getBeerById(state, id),
});

const mapDispatchToProps = {
  onLandingPageMount: getBeersData,
  onSearchChange: searchChange,
  onFavoriteClicked: addFavorite,
  onRemoveFavoriteClicked: removeFavorite,
};

const PagesRouter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);

export default PagesRouter;
