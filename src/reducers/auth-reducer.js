import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  OPEN_AUTH_MODAL,
  CLOSE_AUTH_MODAL
} from '../actions/types';

const initialState = {
  authenticated: false,
  error: null,
  modalIsOpen: false,
  token: null
};

export default function (state = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, token: action.payload };
    case UNAUTH_USER:
      return { ...state, authenticated: false, token: null };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case OPEN_AUTH_MODAL:
      return { ...state, modalIsOpen: true };
    case CLOSE_AUTH_MODAL:
      return { ...state, modalIsOpen: false };
  }

  return state;
}
