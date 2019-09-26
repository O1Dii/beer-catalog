import { connect } from 'react-redux';

import { isIdFavoriteSelector, getBeerById } from '../selectors';

import Page from '../components/DetailPage/DetailPage';
import { removeFavorite, addFavorite } from '../actions';

const mapStateToProps = (store, { match }) => ({
  favorite: isIdFavoriteSelector(store.get('beer'), match.params.id),
  beer: getBeerById(store.get('beer'), match.params.id),
});

const mapDispatchToProps = {
  onFavoriteClicked: addFavorite,
  onRemoveFavoriteClicked: removeFavorite,
};

const DetailPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default DetailPage;
