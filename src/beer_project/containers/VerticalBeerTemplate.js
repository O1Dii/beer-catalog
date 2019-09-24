import { connect } from 'react-redux';

import { isIdFavoriteSelector } from '../selectors';

import BeerTemplate from '../components/VerticalBeerTemplate/VerticalBeerTemplate';

const mapStateToProps = (state, { id }) => ({
  favorite: isIdFavoriteSelector(state, id),
});

const VerticalBeerTemplate = connect(mapStateToProps)(BeerTemplate);

export default VerticalBeerTemplate;
