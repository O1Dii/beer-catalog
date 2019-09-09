import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  errorBeers,
  receiveBeers,
  requestBeers,
  searchChange,
  addFavorite,
  removeFavorite,
} from '../actions';

const main = handleActions(
  {
    [errorBeers]: (state, { payload }) => {
      console.error('error loading beers');
      return state;
    },
    [receiveBeers]: (state, { payload }) => state.update('beers', oldData => oldData.concat(
      Immutable.Map(Immutable.fromJS(payload).map(item => [item.get('id'), item])),
    )),
    [requestBeers]: (state, { payload }) => state,

    [addFavorite]: (state, { payload }) => state.update('favoritesIds', list => list.push(payload)),
    [removeFavorite]: (state, { payload }) => state.update('favoritesIds', list => list.delete(list.indexOf(payload))),

    [searchChange]: (state, { payload }) => state.set('searchText', payload),
  },
  Immutable.Map({
    beers: Immutable.OrderedMap(),
    searchText: '',
    favoritesIds: Immutable.List(),
    abv: 2,
    ibu: 0,
    ebc: 4,
  }),
);

export default main;
