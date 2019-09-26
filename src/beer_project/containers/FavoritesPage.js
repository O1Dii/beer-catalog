import { connect } from 'react-redux';

import { removeFavorite } from '../actions';
import { getFavoriteBeers } from '../selectors';

import Page from '../components/FavoritesPage/FavoritesPage';

const mapStateToProps = store => ({
  beers: getFavoriteBeers(store.get('beer')),
});

const mapDispatchToProps = {
  onRemoveFavoriteClicked: removeFavorite,
};

const FavoritesPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default FavoritesPage;
