import axios from 'axios';
import { hashHistory } from 'react-router';

import { API_URL } from '../config';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  OPEN_AUTH_MODAL,
  CLOSE_AUTH_MODAL
} from './types';

export function loginUser(email, password) {
  return (dispatch) => {
    axios.post(`${API_URL}/user/login`, { email, password })
      .then((response) => {
        // Request was successful
        // Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });

        // Save the token to local storage
        localStorage.setItem('token', response.data.token);

        // Close the auth modal
        dispatch({ type: CLOSE_AUTH_MODAL });

        // Clear existing error messages if any
        dispatch(authError(''));
      })
      .catch((err) => {
        console.error('error loggin in user: ', err);
        // Invalid Email and Password
        dispatch(authError('Incorrect email and password'));
      });
  };
}

export function registerUser(email, password) {
  return (dispatch) => {
    axios.post(`${API_URL}/user/signup`, { email, password })
      .then((response) => {
        // Request was successful
        // Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });

        // Save the token to local storage
        localStorage.setItem('token', response.data.token);

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
  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER
  };
}

export function openAuthModal() {
  return {
    type: OPEN_AUTH_MODAL
  };
}


export function closeAuthModal() {
  console.log('in action!')
  return {
    type: CLOSE_AUTH_MODAL
  };
}
