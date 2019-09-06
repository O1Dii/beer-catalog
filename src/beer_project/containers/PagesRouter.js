import { connect } from 'react-redux';

import { getBeersData, searchChange } from '../actions';

import Router from '../components/PagesRouter/PagesRouter';

const mapStateToProps = state => ({
  beers: state.get('beers'),
  searchText: state.get('searchText'),
});

const mapDispatchToProps = {
  onLandingPageMount: getBeersData,
  onSearchChange: searchChange,
};

const PagesRouter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);

export default PagesRouter;
