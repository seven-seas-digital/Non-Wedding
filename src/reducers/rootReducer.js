import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import activeChecklistReducer from './activeChecklist';
import activeNav from './activeNav';

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  activeChecklist: activeChecklistReducer,
  activeNav: activeNav
});

export default rootReducer;