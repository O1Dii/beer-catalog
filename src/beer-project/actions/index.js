import { createAction } from 'redux-actions';

import * as requests from '../requests';

import {
  API_URL, MIN_ABV, MIN_IBU, MIN_EBC, ITEMS_PER_LANDING_PAGE,
} from '../constants';

function getSearchParams(store) {
  const searchText = store.get('searchText');
  const abv = store.get('abv');
  const ibu = store.get('ibu');
  const ebc = store.get('ebc');
  const page = store.get('currentPage');

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

  return searchText ? searchParams : pageParams;
}

export const requestBeers = createAction('REQUEST_BEERS');
export const receiveBeers = createAction('RECEIVE_BEERS');
export const errorBeers = createAction('ERROR_BEERS');

export const getBeers = () => async (dispatch, getStore) => {
  const store = getStore().get('beer');

  dispatch(requestBeers());

  try {
    const response = await requests.GET(API_URL, getSearchParams(store));
    const json = await response.json();

    dispatch(receiveBeers(json));
  } catch (errorMessage) {
    dispatch(errorBeers(errorMessage));
  }
};

export const clearBeers = createAction('CLEAR_BEERS');

export const changeSearchText = createAction('CHANGE_SEARCH_TEXT');

export const changeAbv = createAction('CHANGE_ABV');

export const changeIbu = createAction('CHANGE_IBU');

export const changeEbc = createAction('CHANGE_EBC');

export const changeFiltersVisible = createAction('CHANGE_FILTERS_VISIBLE');

export const resetFilters = () => (dispatch) => {
  dispatch(changeAbv(MIN_ABV));
  dispatch(changeIbu(MIN_IBU));
  dispatch(changeEbc(MIN_EBC));
};

export const replaceBeers = () => (dispatch, getStore) => {
  const isSearchTextEmpty = !getStore().getIn(['beer', 'searchText']);

  if (isSearchTextEmpty) {
    dispatch(resetFilters());
  }

  dispatch(changeFiltersVisible(!isSearchTextEmpty));
  dispatch(clearBeers());
  dispatch(getBeers());
};

export const addFavorite = createAction('ADD_FAVORITE');
export const removeFavorite = createAction('REMOVE_FAVORITE');
