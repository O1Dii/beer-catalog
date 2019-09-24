import { createSelector } from 'reselect';

const getBeers = state => state.get('beers');
const getFavoritesIds = state => state.get('favoritesIds');

export const getBeerById = (state, id) => state.getIn(['beers', parseInt(id, 10)]);

export const isIdFavoriteSelector = (state, id) => state.get('favoritesIds').includes(parseInt(id, 10));

export const getFavoriteBeers = createSelector(
  [getBeers, getFavoritesIds],
  (beers, favorites) => beers.filter(item => favorites.includes(item.get('id'))),
);
