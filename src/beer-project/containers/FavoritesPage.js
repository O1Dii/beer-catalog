import { connect } from 'react-redux';

import {
  getMissingFavoriteBeers,
  removeFavoriteWithStorage,
  loadFavoritesFromStorage,
} from '../actions';
import { getFavoriteBeers } from '../selectors';

import Page from '../components/FavoritesPage/FavoritesPage';
import { ITEMS_PER_FAVORITE_PAGE } from '../constants';

const mapStateToProps = (store, { match }) => ({
  beers: getFavoriteBeers(store.get('beer')),

  pagesCount: Math.ceil(getFavoriteBeers(store.get('beer')).count() / ITEMS_PER_FAVORITE_PAGE),
  currentPage: parseInt(match.params.page, 10),

  beersStart: (match.params.page - 1) * ITEMS_PER_FAVORITE_PAGE,
  beersEnd: match.params.page * ITEMS_PER_FAVORITE_PAGE,
  isLoading: store.getIn(['beer', 'isLoading']),
});

const mapDispatchToProps = {
  loadFavorites: loadFavoritesFromStorage,
  onRemoveFavoriteClicked: removeFavoriteWithStorage,
  loadMissingBeers: getMissingFavoriteBeers,
};

const FavoritesPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default FavoritesPage;
