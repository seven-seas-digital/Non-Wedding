import {
  CHANGE_AUTH,
  CHANGE_CHECKLIST,
  UPDATE_NAV
} from './types';

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}


export function changeChecklist(checklistType) {
  return {
    type: CHANGE_CHECKLIST,
    payload: checklistType
  }
}

export function updateNav(checklistType) {
  return {
    type: UPDATE_NAV,
    payload: checklistType
  }
}