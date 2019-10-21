import { connect } from 'react-redux';

import { loadFavoritesFromStorage } from '../actions';

import Router from '../components/PagesRouter/PagesRouter';

const mapDispatchToProps = {
  loadFavorites: loadFavoritesFromStorage,
};

const PagesRouter = connect(
  () => ({}),
  mapDispatchToProps,
)(Router);

export default PagesRouter;
