import { createAction } from 'redux-actions';

import { sendRequest } from '../utils';

export const errorBeers = createAction('ERROR_BEERS');
export const requestBeers = createAction('REQUEST_BEERS');
export const receiveBeers = createAction('RECEIVE_BEERS');

export const receiveSearchedBeers = createAction('RECEIVE_SEARCHED_BEERS');

export const getBeers = (page = 1) => (dispatch, getStore) => {
  const store = getStore();

  const searchText = store.get('searchText');
  const abv = store.get('abv');
  const ibu = store.get('ibu');
  const ebc = store.get('ebc');

  const url = `https://api.punkapi.com/v2/beers?${
    searchText
      ? `beer_name=${searchText}&abv_gt=${abv}&ibu_gt=${ibu}&ebc_gt=${ebc}`
      : `page=${page}&per_page=9`
  }`;

  const request = () => dispatch(requestBeers());
  const receive = searchText
    ? response => dispatch(receiveSearchedBeers(JSON.parse(response)))
    : response => dispatch(receiveBeers(JSON.parse(response)));
  const error = () => dispatch(errorBeers());

  sendRequest(url, request, receive, error);
};

export const clearBears = createAction('CLEAR_BEARS');

export const searchChange = createAction('SEARCH_CHANGE', (searchText, abv, ibu, ebc) => ({
  searchText,
  abv,
  ibu,
  ebc,
}));

export const searchDataChange = (searchText, ...args) => (dispatch) => {
  if (!searchText) {
    dispatch(clearBears());
  }

  dispatch(searchChange(searchText, ...args));
};

export const addFavorite = createAction('ADD_FAVORITE');
export const removeFavorite = createAction('REMOVE_FAVORITE');
