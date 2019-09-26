import 'babel-polyfill';
import { createAction } from 'redux-actions';

import * as requests from '../requests';

import {
  API_URL, MIN_ABV, MIN_IBU, MIN_EBC, ITEMS_PER_LANDING_PAGE,
} from '../constants';

export const requestBeers = createAction('REQUEST_BEERS');
export const receiveBeers = createAction('RECEIVE_BEERS');
export const errorBeers = createAction('ERROR_BEERS');

export const replaceBeers = createAction('REPLACE_BEERS');

export const getBeers = (page = 1) => async (dispatch, getStore) => {
  const store = getStore().get('beer');

  const searchText = store.get('searchText');
  const abv = store.get('abv');
  const ibu = store.get('ibu');
  const ebc = store.get('ebc');

  const searchParams = {
    beer_name: searchText,
  };

  if (abv !== MIN_ABV || ibu !== MIN_IBU || ebc !== MIN_EBC) {
    searchParams.abv_gt = Math.max(abv - 0.1, MIN_ABV);
    searchParams.abv_lt = abv + 1;
    searchParams.ibu_gt = Math.max(ibu - 0.1, MIN_IBU);
    searchParams.ibu_lt = ibu + 1;
    searchParams.ebc_gt = Math.max(ebc - 0.1, MIN_EBC);
    searchParams.ebc_lt = ebc + 1;
  }

  const pageParams = { page, per_page: ITEMS_PER_LANDING_PAGE };

  dispatch(requestBeers());

  try {
    const response = await requests.GET(API_URL, searchText ? searchParams : pageParams);
    const json = await response.json();

    if (searchText) {
      dispatch(replaceBeers(json));
      return;
    }

    dispatch(receiveBeers(json));
  } catch (errorMessage) {
    dispatch(errorBeers(errorMessage));
  }
};

export const clearBears = createAction('CLEAR_BEARS');

export const changeSearch = createAction('SEARCH_CHANGE', (searchText, abv, ibu, ebc) => ({
  searchText,
  abv,
  ibu,
  ebc,
}));

export const changeSearchData = (searchText, abv, ibu, ebc) => (dispatch, getStore) => {
  let newAbv = abv;
  let newIbu = ibu;
  let newEbc = ebc;

  if (!searchText && searchText !== getStore().getIn(['beer', 'searchText'])) {
    dispatch(clearBears());
    newAbv = MIN_ABV;
    newIbu = MIN_IBU;
    newEbc = MIN_EBC;
  }

  dispatch(changeSearch(searchText, newAbv, newIbu, newEbc));
};

export const addFavorite = createAction('ADD_FAVORITE');
export const removeFavorite = createAction('REMOVE_FAVORITE');
