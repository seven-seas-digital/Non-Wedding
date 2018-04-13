import {
  CHANGE_AUTH,
  CHANGE_CHECKLIST
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