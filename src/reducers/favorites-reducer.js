import { GET_USER_FAVORITES } from '../actions/types';

const initialState = {
  freeIdeas: [],
  ideas: []
};

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_USER_FAVORITES:
      return { ...state, ...action.payload };
  }

  return state;
}
