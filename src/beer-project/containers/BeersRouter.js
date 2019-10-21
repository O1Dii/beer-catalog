import { connect } from 'react-redux';

import { loadFavoritesFromStorage } from '../actions';

import Router from '../components/BeersRouter/BeersRouter';

const mapDispatchToProps = {
  loadFavorites: loadFavoritesFromStorage,
};

const BeersRouter = connect(
  () => ({}),
  mapDispatchToProps,
)(Router);

export default BeersRouter;
