import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  OPEN_AUTH_MODAL,
  CLOSE_AUTH_MODAL
} from '../actions/types';

const initialState = { authenticated: false };

export default function (state = initialState, action) {
  console.log('action.type: ', action.type);
  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case OPEN_AUTH_MODAL:
      return { ...state, modalIsOpen: true };
    case CLOSE_AUTH_MODAL:
      return { ...state, modalIsOpen: false };
  }

  return state;
}
