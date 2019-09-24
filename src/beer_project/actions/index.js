import { createAction } from 'redux-actions';
import queryString from 'query-string';

import * as requests from '../requests';

import {
  API_URL, MIN_ABV, MIN_IBU, MIN_EBC, ITEMS_PER_LANDING_PAGE,
} from '../constants';

export const requestBeers = createAction('REQUEST_BEERS');
export const receiveBeers = createAction('RECEIVE_BEERS');
export const errorBeers = createAction('ERROR_BEERS');

export const replaceBeers = createAction('REPLACE_BEERS');

export const getBeers = (page = 1) => (dispatch, getStore) => {
  const store = getStore();

  const searchText = store.get('searchText');
  const abv = store.get('abv');
  const ibu = store.get('ibu');
  const ebc = store.get('ebc');

  let searchParams = {
    beer_name: searchText,
    abv_gt: Math.max(abv - 0.1, MIN_ABV),
    abv_lt: abv + 1,
    ibu_gt: Math.max(ibu - 0.1, MIN_IBU),
    ibu_lt: ibu + 1,
    ebc_gt: Math.max(ebc - 0.1, MIN_EBC),
    ebc_lt: ebc + 1,
  };

  if (abv === MIN_ABV && ibu === MIN_IBU && ebc === MIN_EBC) {
    searchParams = {
      beer_name: searchText,
    };
  }

  const pageParams = { page, per_page: ITEMS_PER_LANDING_PAGE };

  const url = `${API_URL}?${
    searchText ? queryString.stringify(searchParams) : queryString.stringify(pageParams)
  }`;

  console.log(url);

  dispatch(requestBeers());

  requests
    .GET(url)
    .then(response => response.json())
    .then(json => (searchText ? dispatch(replaceBeers(json)) : dispatch(receiveBeers(json))))
    .catch(errorMessage => errorBeers(errorMessage));
};

export const clearBears = createAction('CLEAR_BEARS');

export const searchChange = createAction('SEARCH_CHANGE', (searchText, abv, ibu, ebc) => ({
  searchText,
  abv,
  ibu,
  ebc,
}));

export const searchDataChange = (searchText, abv, ibu, ebc) => (dispatch, getStore) => {
  let newAbv = abv;
  let newIbu = ibu;
  let newEbc = ebc;

  if (!searchText && searchText !== getStore().get('searchText')) {
    dispatch(clearBears());
    newAbv = MIN_ABV;
    newIbu = MIN_IBU;
    newEbc = MIN_EBC;
  }

  dispatch(searchChange(searchText, newAbv, newIbu, newEbc));
};

export const addFavorite = createAction('ADD_FAVORITE');
export const removeFavorite = createAction('REMOVE_FAVORITE');
