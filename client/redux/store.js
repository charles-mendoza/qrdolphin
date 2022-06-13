import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { themeReducer } from './reducers';

const rootReducer = combineReducers({themeReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
