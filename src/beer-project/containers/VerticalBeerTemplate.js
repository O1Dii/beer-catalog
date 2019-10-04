import { connect } from 'react-redux';

import { isIdFavoriteSelector } from '../selectors';

import BeerTemplate from '../components/VerticalBeerTemplate/VerticalBeerTemplate';

const mapStateToProps = (store, { id }) => ({
  favorite: isIdFavoriteSelector(store.get('beer'), id),
});

const VerticalBeerTemplate = connect(mapStateToProps)(BeerTemplate);

export default VerticalBeerTemplate;
