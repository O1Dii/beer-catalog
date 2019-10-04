import { createStore, applyMiddleware } from 'redux';
import Immutable from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducer';

export default createStore(reducer, Immutable.Map(), composeWithDevTools(applyMiddleware(thunk)));
