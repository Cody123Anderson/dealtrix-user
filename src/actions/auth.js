import axios from 'axios';
import { hashHistory } from 'react-router';

import { API_URL } from '../config';
import {
  AUTH_USER,
  AUTH_ERROR,
  CLEAR_USER,
  GET_USER,
  CLOSE_AUTH_MODAL,
  OPEN_AUTH_MODAL,
  UNAUTH_USER
} from './types';

export function loginUser(email, password) {
  return (dispatch) => {
    axios.post(`${API_URL}/user/login`, { email, password })
      .then((response) => {
        const token = response.data.token;

        // Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER, payload: token });

        // Save the token to local storage
        localStorage.setItem('token', token);

        // Close the auth modal
        dispatch({ type: CLOSE_AUTH_MODAL });

        // Clear existing error messages and user if any
        dispatch(authError(''));
      })
      .catch((err) => {
        console.error('error logging in user: ', err);
        // Invalid Email and Password
        dispatch(authError('Incorrect email and password'));
      });
  };
}

export function registerUser(email, password) {
  return (dispatch) => {
    axios.post(`${API_URL}/user/signup`, { email, password })
      .then((response) => {
        const token = response.data.token;

        // Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER, payload: token });

        // Save the token to local storage
        localStorage.setItem('token', token);

        // Close the auth modal
        dispatch({ type: CLOSE_AUTH_MODAL });

        // Clear existing error messages if any
        dispatch(authError(''));
      })
      .catch((err, response) => {
        console.error('error registering user: ', err);
        // Email already exists
        dispatch(authError('An account with this email already exists'));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function logoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: UNAUTH_USER });
    dispatch({ type: CLEAR_USER });
  }
}

export function openAuthModal() {
  return {
    type: OPEN_AUTH_MODAL
  };
}


export function closeAuthModal() {
  return {
    type: CLOSE_AUTH_MODAL
  };
}
