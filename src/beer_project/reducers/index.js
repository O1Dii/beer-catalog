import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  errorBeers, receiveBeers, requestBeers, searchChange,
} from '../actions';

const main = handleActions(
  {
    [errorBeers]: (state, { payload }) => {
      console.log('error');
      return state;
    },
    [receiveBeers]: (state, { payload }) => state.set('beers', Immutable.fromJS(payload)),
    [requestBeers]: (state, { payload }) => {
      console.log('request');
      return state;
    },

    [searchChange]: (state, { payload }) => state.set('searchText', payload),
  },
  Immutable.Map({
    beers: Immutable.List(),
    searchText: '',
    abv: 2,
    ibu: 0,
    ebc: 4,
  }),
);

export default main;
