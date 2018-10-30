import { combineReducers } from 'redux';
import { Alert } from './alert.reducer';
const rootReducer = combineReducers({ 
  Alert
});
export default {
  reducer: rootReducer
};
