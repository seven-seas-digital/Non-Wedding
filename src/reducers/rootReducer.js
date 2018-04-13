import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import activeChecklistReducer from './activeChecklist';

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  activeChecklist: activeChecklistReducer
});

export default rootReducer;