import {
  CLEAR_FREE_IDEA,
  FETCH_FREE_IDEA,
  FETCH_FREE_IDEAS
} from '../actions/types';

const initialState = { all: [], current: null };

export default function (state = initialState, action) {
  switch(action.type) {
    case CLEAR_FREE_IDEA:
      return { ...state, current: null };
    case FETCH_FREE_IDEA:
      return { ...state, current: action.payload };
    case FETCH_FREE_IDEAS:
      return { ...state, all: action.payload };
  }

  return state;
}
