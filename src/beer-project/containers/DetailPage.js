import { connect } from 'react-redux';

import { isIdFavoriteSelector, getBeerByIdSelector } from '../selectors';

import Page from '../components/DetailPage/DetailPage';
import { addFavoriteWithStorage, removeFavoriteWithStorage, getDetailPageBeer } from '../actions';

const mapStateToProps = (store, { match }) => ({
  // parseInt is needed because both selectors work properly only with numbers
  favorite: isIdFavoriteSelector(store.get('beer'), parseInt(match.params.id, 10)),
  beer: getBeerByIdSelector(store.get('beer'), parseInt(match.params.id, 10)),
  id: match.params.id,
});

const mapDispatchToProps = {
  loadBeer: getDetailPageBeer,
  onFavoriteClicked: addFavoriteWithStorage,
  onRemoveFavoriteClicked: removeFavoriteWithStorage,
};

const DetailPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default DetailPage;
