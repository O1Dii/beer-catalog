import { connect } from 'react-redux';

import Beers from '../components/BeerGrid/BeerGrid';

const mapStateToProps = state => ({
  beers: state.get('beers'),
});

const BeerGrid = connect(mapStateToProps)(Beers);

export default BeerGrid;
