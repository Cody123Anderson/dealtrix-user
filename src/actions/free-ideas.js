import axios from 'axios';

import { API_URL } from '../config';
import {
  CLEAR_FREE_IDEA,
  FETCH_FREE_IDEA,
  FETCH_FREE_IDEAS
} from './types';

export function fetchFreeIdea(id) {
  return (dispatch) => {
    axios.get(`${API_URL}/freeideas/${id}`)
      .then((response) => {
        // Request was successful
        // Update state with freeIdeas
        dispatch({
          type: FETCH_FREE_IDEA,
          payload: response.data.freeIdea
        });
      })
      .catch((err) => {
        console.error('error fetching freeIdea: ', err);
      });
  };
}

export function clearFreeIdea() {
  return (dispatch) => {
    dispatch({ type: CLEAR_FREE_IDEA });
  };
}

export function fetchFreeIdeas() {
  return (dispatch) => {
    axios.get(`${API_URL}/freeideas`)
      .then((response) => {
        // Request was successful
        // Update state with freeIdeas
        dispatch({
          type: FETCH_FREE_IDEAS,
          payload: response.data.freeIdeas
        });
      })
      .catch((err) => {
        console.error('error fetching freeIdeas: ', err);
      });
  };
}
