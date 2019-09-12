import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  errorBeers,
  receiveBeers,
  requestBeers,
  searchChange,
  addFavorite,
  removeFavorite,
  receiveSearchedBeers,
  clearBears,
} from '../actions';

const main = handleActions(
  {
    [requestBeers]: state => state,
    [receiveBeers]: (state, { payload }) => {
      console.log(payload);
      return state.update('beers', oldData => oldData.concat(
        Immutable.Map(Immutable.fromJS(payload).map(item => [item.get('id'), item])),
      ));
    },
    [errorBeers]: (state) => {
      console.error('error loading beers');
      return state;
    },

    [addFavorite]: (state, { payload }) => state.update('favoritesIds', list => list.push(payload)),
    [removeFavorite]: (state, { payload }) => state.update('favoritesIds', list => list.delete(list.indexOf(payload))),

    [searchChange]: (state, { payload }) => state
      .set('searchText', payload.searchText)
      .set('abv', payload.abv)
      .set('ibu', payload.ibu)
      .set('ebc', payload.ebc),

    [receiveSearchedBeers]: (state, { payload }) => state.set(
      'beers',
      Immutable.OrderedMap(Immutable.fromJS(payload).map(item => [item.get('id'), item])),
    ),

    [clearBears]: state => state.update('beers', oldBeers => oldBeers.clear()),
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
