import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';
import {createLogger} from 'redux-logger';
import {  persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
let middleware = [thunk];

if (__DEV__) {
	// const reduxImmutableStateInvariant = require('redux-immutable-state-invariant')();
	const logger = createLogger({ collapsed: true });
	middleware = [...middleware,logger];
} else {
	middleware = [...middleware];
}
const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['navigation']
  }
  
  const combinedReducer = persistCombineReducers(persistConfig, rootReducer)
  
export default function configureStore(initialState) {
	return createStore(
		combinedReducer,
		initialState,
		applyMiddleware(...middleware)
    )
}