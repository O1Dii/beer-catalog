import { connect } from 'react-redux';

import { removeFavorite } from '../actions';
import { getFavoriteBeers } from '../selectors';

import Page from '../components/FavoritesPage/FavoritesPage';
import { ITEMS_PER_FAVORITE_PAGE } from '../constants';

const mapStateToProps = (store, { match }) => ({
  beers: getFavoriteBeers(store.get('beer')),

  pagesCount: Math.ceil(getFavoriteBeers(store.get('beer')).count() / ITEMS_PER_FAVORITE_PAGE),
  currentPage: match.params.page,

  BeersStart: (match.params.page - 1) * ITEMS_PER_FAVORITE_PAGE,
  BeersEnd: match.params.page * ITEMS_PER_FAVORITE_PAGE,
});

const mapDispatchToProps = {
  onRemoveFavoriteClicked: removeFavorite,
};

const FavoritesPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default FavoritesPage;
