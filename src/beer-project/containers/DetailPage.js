import { connect } from 'react-redux';

import { isIdFavoriteSelector, getBeerById } from '../selectors';

import Page from '../components/DetailPage/DetailPage';
import {
  addFavoriteWithStorage,
  removeFavoriteWithStorage,
  loadFavoritesFromStorage,
  getDetailPageBeer,
} from '../actions';

const mapStateToProps = (store, { match }) => ({
  // parseInt is needed because both selectors work properly only with numbers
  favorite: isIdFavoriteSelector(store.get('beer'), parseInt(match.params.id, 10)),
  beer: getBeerById(store.get('beer'), parseInt(match.params.id, 10)),
});

const mapDispatchToProps = {
  loadBeer: getDetailPageBeer,
  loadFavorites: loadFavoritesFromStorage,
  onFavoriteClicked: addFavoriteWithStorage,
  onRemoveFavoriteClicked: removeFavoriteWithStorage,
};

const DetailPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default DetailPage;
