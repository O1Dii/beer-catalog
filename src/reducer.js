import { combineReducers } from 'redux-immutable';
import beerReducer from './beer_project/reducers';

export default combineReducers({
  beer: beerReducer,
});
