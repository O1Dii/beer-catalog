import { connect } from 'react-redux';

import { getBeersData } from '../actions';

import Page from '../components/LandingPage/LandingPage';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onMount: getBeersData,
};

const LandingPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default LandingPage;
