import { combineReducers } from 'redux-immutable';
import beerReducer from '../beer-project/reducers';

export default combineReducers({
  beer: beerReducer,
});
