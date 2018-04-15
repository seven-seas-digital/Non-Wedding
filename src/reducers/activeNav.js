import {
  UPDATE_NAV
} from '../actions/types';

export default function(state = 'budget', action) {
  switch (action.type) {
    case UPDATE_NAV:
      return action.payload;
  }
  return state;
}