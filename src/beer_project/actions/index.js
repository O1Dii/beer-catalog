import { createAction } from 'redux-actions';

import { sendRequest, getUrl } from '../utils';
import { MIN_ABV, MIN_IBU, MIN_EBC } from '../constants';

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

  const url = getUrl(searchText, abv, ibu, ebc, page);

  const request = () => dispatch(requestBeers());
  const receive = searchText
    ? response => dispatch(receiveSearchedBeers(response))
    : response => dispatch(receiveBeers(response));
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

export const searchDataChange = (searchText, abv, ibu, ebc) => (dispatch) => {
  let newAbv = abv;
  let newIbu = ibu;
  let newEbc = ebc;

  if (!searchText) {
    dispatch(clearBears());
    newAbv = MIN_ABV;
    newIbu = MIN_IBU;
    newEbc = MIN_EBC;
  }

  dispatch(searchChange(searchText, newAbv, newIbu, newEbc));
};

export const addFavorite = createAction('ADD_FAVORITE');
export const removeFavorite = createAction('REMOVE_FAVORITE');
