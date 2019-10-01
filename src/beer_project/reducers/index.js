import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  receiveBeers,
  changeSearch,
  addFavorite,
  removeFavorite,
  replaceBeers,
  clearBears,
} from '../actions';
import { MIN_ABV, MIN_IBU, MIN_EBC } from '../constants';

const main = handleActions(
  {
    [receiveBeers]: (state, { payload }) => state
      .update('beers', oldData => oldData.concat(
        Immutable.Map(Immutable.fromJS(payload).map(item => [item.get('id'), item])),
      ))
      .update('currentPage', page => page + 1),

    [addFavorite]: (state, { payload }) => state.update('favoritesIds', list => list.push(parseInt(payload, 10))),
    [removeFavorite]: (state, { payload }) => state.update('favoritesIds', list => list.delete(list.indexOf(parseInt(payload, 10)))),

    [changeSearch]: (state, { payload }) => state
      .set('searchText', payload.searchText)
      .set('abv', payload.abv)
      .set('ibu', payload.ibu)
      .set('ebc', payload.ebc),

    [replaceBeers]: (state, { payload }) => state
      .set(
        'beers',
        Immutable.OrderedMap(Immutable.fromJS(payload).map(item => [item.get('id'), item])),
      )
      .set('currentPage', 1),

    [clearBears]: state => state.set('beers', Immutable.OrderedMap()).set('currentPage', 1),
  },
  Immutable.Map({
    beers: Immutable.OrderedMap(),
    searchText: '',
    favoritesIds: Immutable.List(),
    abv: MIN_ABV,
    ibu: MIN_IBU,
    ebc: MIN_EBC,
    currentPage: 1,
  }),
);

export default main;
