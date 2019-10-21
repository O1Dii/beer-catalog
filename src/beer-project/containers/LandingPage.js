import { connect } from 'react-redux';

import {
  getBeersConsecutive,
  replaceBeers,
  changeAbv,
  changeIbu,
  changeEbc,
  changeSearchText,
  addFavoriteWithStorage,
  removeFavoriteWithStorage,
  loadFavoritesFromStorage,
} from '../actions';

import Page from '../components/LandingPage/LandingPage';

const mapStateToProps = store => ({
  beers: store.getIn(['beer', 'beers']),

  hasMoreItems: !store.getIn(['beer', 'searchText']),

  searchText: store.getIn(['beer', 'searchText']),
  abv: store.getIn(['beer', 'abv']),
  ibu: store.getIn(['beer', 'ibu']),
  ebc: store.getIn(['beer', 'ebc']),

  filtersVisible: store.getIn(['beer', 'filtersVisible']),
  isLoading: store.getIn(['beer', 'isLoading']),
});

const mapDispatchToProps = {
  loadFavorites: loadFavoritesFromStorage,
  loadBeersConsecutive: getBeersConsecutive,
  loadBeersWithReplacement: replaceBeers,
  onFavoriteClicked: addFavoriteWithStorage,
  onRemoveFavoriteClicked: removeFavoriteWithStorage,
  setSearchText: changeSearchText,
  setAbv: changeAbv,
  setIbu: changeIbu,
  setEbc: changeEbc,
};

const LandingPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default LandingPage;
