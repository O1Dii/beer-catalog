import { createSelector } from 'reselect';

const getBeers = state => state.get('beers');
const getFavoritesIds = state => state.get('favoritesIds');

export const getBeerById = (state, id) => state.getIn(['beers', id]);

export const isIdFavoriteSelector = (state, id) => state.get('favoritesIds').includes(id);

export const getMissingFavoriteIds = createSelector(
  [getBeers, getFavoritesIds],
  (beers, favorites) => favorites.filter(item => !Object.keys(beers).includes(item)),
);

export const getFavoriteBeers = createSelector(
  [getBeers, getFavoritesIds],
  (beers, favorites) => beers.filter(item => favorites.includes(item.get('id'))),
);
