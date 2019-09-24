import { connect } from 'react-redux';

import { isIdFavoriteSelector, getBeerById } from '../selectors';

import Page from '../components/DetailPage/DetailPage';

const mapStateToProps = (state, { match }) => ({
  favorite: isIdFavoriteSelector(state, match.params.id),
  beer: getBeerById(state, match.params.id),
});

const DetailPage = connect(mapStateToProps)(Page);

export default DetailPage;
