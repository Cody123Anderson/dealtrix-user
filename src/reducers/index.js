import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import favoritesReducer from './favorites-reducer';
import freeIdeasReducer from './free-ideas-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  favorites: favoritesReducer,
  freeIdeas: freeIdeasReducer,
  user: userReducer
});

export default rootReducer;
