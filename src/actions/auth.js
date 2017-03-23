import axios from 'axios';
import { hashHistory } from 'react-router';

import { API_URL } from '../config/settings';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from './types';

export function loginUser(username, password) {
  return function(dispatch) {
    axios.post(`${API_URL}/admin/login`, { username, password})
      .then((response) => {
        // Request was successful
        // Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });

        // Save the token to local storage
        localStorage.setItem('token', response.data.token);

        // Navigate user to homepage
        hashHistory.push('/');
      })
      .catch(() => {
        // Invalid Username and Password
        dispatch(authError('Incorrect username and password'));
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
