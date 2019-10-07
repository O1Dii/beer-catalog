import { connect } from 'react-redux';

import {
  getBeers,
  addFavorite,
  removeFavorite,
  replaceBeers,
  changeAbv,
  changeIbu,
  changeEbc,
  changeSearchText,
} from '../actions';

import Page from '../components/LandingPage/LandingPage';

const mapStateToProps = store => ({
  beers: store.getIn(['beer', 'beers']),

  currentPage: store.getIn(['beer', 'currentPage']),
  hasMoreItems: !store.getIn(['beer', 'searchText']),

  searchText: store.getIn(['beer', 'searchText']),
  abv: store.getIn(['beer', 'abv']),
  ibu: store.getIn(['beer', 'ibu']),
  ebc: store.getIn(['beer', 'ebc']),

  filtersVisible: store.getIn(['beer', 'filtersVisible']),
  loading: store.getIn(['beer', 'loading']),
});

const mapDispatchToProps = {
  loadBeersConsecutive: getBeers,
  loadBeersWithReplacement: replaceBeers,
  onFavoriteClicked: addFavorite,
  onRemoveFavoriteClicked: removeFavorite,
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
