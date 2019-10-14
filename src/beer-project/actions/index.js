import { createAction } from 'redux-actions';

import * as requests from '../requests';

import {
  API_URL, MIN_ABV, MIN_IBU, MIN_EBC, ITEMS_PER_LANDING_PAGE,
} from '../constants';
import { storage } from '../utils';

function getSearchParams(store) {
  const searchText = store.get('searchText');
  const abv = store.get('abv');
  const ibu = store.get('ibu');
  const ebc = store.get('ebc');
  const page = store.get('currentPage');

  const searchParams = {
    beer_name: searchText,
  };

  if (abv !== MIN_ABV) {
    searchParams.abv_gt = Math.max(abv - 0.1, MIN_ABV);
    searchParams.abv_lt = abv + 0.1;
  }

  if (ibu !== MIN_IBU) {
    searchParams.ibu_gt = Math.max(ibu - 0.1, MIN_IBU);
    searchParams.ibu_lt = ibu + 1;
  }

  if (ebc !== MIN_EBC) {
    searchParams.ebc_gt = Math.max(ebc - 0.1, MIN_EBC);
    searchParams.ebc_lt = ebc + 1;
  }

  const pageParams = { page, per_page: ITEMS_PER_LANDING_PAGE };

  return searchText ? searchParams : pageParams;
}

export const requestBeers = createAction('REQUEST_BEERS');
export const receiveBeers = createAction('RECEIVE_BEERS');
export const errorBeers = createAction('ERROR_BEERS');

export const getBeers = params => async (dispatch, getStore) => {
  const store = getStore().get('beer');

  dispatch(requestBeers());

  try {
    const response = await requests.GET(API_URL, params || getSearchParams(store));
    const json = await response.json();

    dispatch(receiveBeers(json));
  } catch (errorMessage) {
    dispatch(errorBeers(errorMessage));
  }
};

export const getFavoriteBeers = () => (dispatch, getStore) => {
  const ids = getStore().getIn(['beer', 'favoritesIds']);
  const params = {
    ids: `${ids.join('|')}`,
  };

  dispatch(getBeers(params));
};

export const getDetailPageBeer = id => (dispatch) => {
  const params = {
    ids: id,
  };

  dispatch(getBeers(params));
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
export const replaceFavorites = createAction('REPLACE_FAVORITES');

export const addFavoriteWithStorage = id => (dispatch) => {
  if (storage.has('favorites')) {
    storage.set('favorites', storage.get('favorites').concat(id));
  } else {
    storage.set('favorites', [id]);
  }

  dispatch(addFavorite(id));
};

export const removeFavoriteWithStorage = id => (dispatch) => {
  const favoriteIdsList = storage.get('favorites');
  favoriteIdsList.splice(favoriteIdsList.indexOf(id), 1);

  storage.set('favorites', favoriteIdsList);

  dispatch(removeFavorite(id));
};

export const loadFavoritesFromStorage = () => (dispatch) => {
  console.log(storage);

  if (storage.has('favorites')) {
    console.log(storage.get('favorites'));
    dispatch(replaceFavorites(storage.get('favorites')));
  }
};
