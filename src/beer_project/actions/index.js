import { createAction } from 'redux-actions';

export const errorBeers = createAction('ERROR_BEERS');
export const requestBeers = createAction('REQUEST_BEERS');
export const receiveBeers = createAction('RECEIVE_BEERS');
export const getBeersData = (page = 1) => (dispatch) => {
  dispatch(requestBeers());
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.punkapi.com/v2/beers?page=${page}&per_page=9`);

  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return;
    }

    if (xhr.status !== 200) {
      dispatch(errorBeers());
    }

    dispatch(receiveBeers(JSON.parse(xhr.responseText)));
  };
};

export const addFavorite = createAction('ADD_FAVORITE');
export const removeFavorite = createAction('REMOVE_FAVORITE');

export const searchChange = createAction('SEARCH_CHANGE');
