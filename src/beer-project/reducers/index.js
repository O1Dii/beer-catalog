import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  receiveBeers,
  changeSearchText,
  changeAbv,
  changeIbu,
  changeEbc,
  addFavorite,
  removeFavorite,
  clearBeers,
  changeFiltersVisible,
  requestBeers,
  replaceFavorites,
} from '../actions';
import { MIN_ABV, MIN_IBU, MIN_EBC } from '../constants';

const main = handleActions(
  {
    [requestBeers]: state => state.set('isLoading', true),
    [receiveBeers]: (state, { payload }) => state
      .update('beers', oldData => oldData.concat(
        Immutable.Map(Immutable.fromJS(payload).map(item => [item.get('id'), item])),
      ))
      .update('currentPage', page => page + 1)
      .set('isLoading', false),

    [addFavorite]: (state, { payload }) => state.update('favoritesIds', list => list.push(payload)),
    [removeFavorite]: (state, { payload }) => state.update('favoritesIds', list => list.delete(list.indexOf(payload))),

    [changeSearchText]: (state, { payload }) => state.set('searchText', payload),
    [changeAbv]: (state, { payload }) => state.set('abv', payload),
    [changeIbu]: (state, { payload }) => state.set('ibu', payload),
    [changeEbc]: (state, { payload }) => state.set('ebc', payload),
    [changeFiltersVisible]: (state, { payload }) => state.set('filtersVisible', payload),

    [clearBeers]: state => state.set('beers', Immutable.OrderedMap()).set('currentPage', 1),

    [replaceFavorites]: (state, { payload }) => state.set('favoritesIds', Immutable.List(payload)),
  },
  Immutable.Map({
    beers: Immutable.OrderedMap(),
    searchText: '',
    favoritesIds: Immutable.List(),
    abv: MIN_ABV,
    ibu: MIN_IBU,
    ebc: MIN_EBC,
    currentPage: 1,
    filtersVisible: false,
    isLoading: false,
  }),
);

export default main;
