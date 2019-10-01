import { connect } from 'react-redux';

import {
  getBeers, addFavorite, removeFavorite, changeSearchData,
} from '../actions';

import Page from '../components/LandingPage/LandingPage';

import { ITEMS_PER_LANDING_PAGE } from '../constants';

const mapStateToProps = store => ({
  beers: store.getIn(['beer', 'beers']),

  currentPage:
    (Math.ceil(store.getIn(['beer', 'beers']).count() / ITEMS_PER_LANDING_PAGE) || 1) + 1,
  hasMoreItems: !store.getIn(['beer', 'searchText']),

  searchText: store.getIn(['beer', 'searchText']),
  abv: store.getIn(['beer', 'abv']),
  ibu: store.getIn(['beer', 'ibu']),
  ebc: store.getIn(['beer', 'ebc']),
});

const mapDispatchToProps = {
  loadBeers: getBeers,
  onSearchChange: changeSearchData,
  onFavoriteClicked: addFavorite,
  onRemoveFavoriteClicked: removeFavorite,
};

const LandingPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default LandingPage;
