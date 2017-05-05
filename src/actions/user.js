import axios from 'axios';

import { API_URL } from '../config';
import {
  GET_USER,
  UPDATE_USER
} from './types';

export function getUser(token) {
  return (dispatch) => {
    const options = { headers: { Authorization: token } };

    axios.get(`${API_URL}/user`, options)
      .then((response) => {
        const user = response.data.user;

        // Update user in Redux state
        dispatch({ type: GET_USER, payload: user });
      })
      .catch((err) => {
        console.error('error getting the user: ', err);
      });
  };
}

export function updateUser(body, token) {
  return (dispatch) => {
    const options = { headers: { Authorization: token } };

    axios.put(`${API_URL}/user`, body, options)
      .then((response) => {
        const user = response.data.user;

        // Update user in Redux state
        dispatch({ type: UPDATE_USER, payload: user });
      })
      .catch((err) => {
        console.error('error updating the user: ', err);
      });
  };
}
