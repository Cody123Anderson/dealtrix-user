import {
  CLEAR_USER,
  GET_USER,
  UPDATE_USER
} from '../actions/types';

const initialState = {
  email: '',
  favorites: []
};

export default function (state = initialState, action) {
  switch(action.type) {
    case CLEAR_USER:
      return initialState;
    case GET_USER:
      return { ...state, ...action.payload };
    case UPDATE_USER:
      return { ...state, ...action.payload };
  }

  return state;
}
