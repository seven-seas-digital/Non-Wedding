import {
  CHANGE_CHECKLIST
} from '../actions/types';

export default function(state = 'budget', action) {
  switch (action.type) {
    case CHANGE_CHECKLIST:
      return action.payload;
  }
  return state;
}