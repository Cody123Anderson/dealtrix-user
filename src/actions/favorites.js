import axios from 'axios';

import { API_URL } from '../config';
import { GET_USER_FAVORITES } from './types';

export function getUserFavorites(token) {
  return (dispatch) => {
    const options = { headers: { Authorization: token } };

    axios.get(`${API_URL}/user/favorites`, options)
      .then((response) => {
        const favorites = response.data;

        // Update user in Redux state
        dispatch({ type: GET_USER_FAVORITES, payload: favorites });
      })
      .catch((err) => {
        console.error('error getting user favorites: ', err);
      });
  };
}
