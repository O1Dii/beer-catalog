import { connect } from 'react-redux';

import { getFavoriteBeers, removeFavoriteWithStorage, loadFavoritesFromStorage } from '../actions';
import { getFavoriteBeersSelector } from '../selectors';

import Page from '../components/FavoritesPage/FavoritesPage';
import { ITEMS_PER_FAVORITE_PAGE } from '../constants';

const mapStateToProps = (store, { match }) => ({
  beers: getFavoriteBeersSelector(store.get('beer')),

  pagesCount: Math.ceil(
    getFavoriteBeersSelector(store.get('beer')).count() / ITEMS_PER_FAVORITE_PAGE,
  ),
  currentPage: parseInt(match.params.page, 10),

  beersStart: (match.params.page - 1) * ITEMS_PER_FAVORITE_PAGE,
  beersEnd: match.params.page * ITEMS_PER_FAVORITE_PAGE,
  isLoading: store.getIn(['beer', 'isLoading']),
});

const mapDispatchToProps = {
  loadFavorites: loadFavoritesFromStorage,
  onRemoveFavoriteClicked: removeFavoriteWithStorage,
  loadBeers: getFavoriteBeers,
};

const FavoritesPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default FavoritesPage;
