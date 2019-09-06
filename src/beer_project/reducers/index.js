import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import { errorBeers, receiveBeers, requestBeers } from '../actions';

const main = handleActions(
  {
    [errorBeers]: (state, { payload }) => {
      console.log('error');
    },
    [receiveBeers]: (state, { payload }) => state.set('beers', Immutable.fromJS(payload)),
    [requestBeers]: (state, { payload }) => {
      console.log('request');
    },
  },
  Immutable.Map({
    beers: Immutable.List(),
  }),
);

export default main;
