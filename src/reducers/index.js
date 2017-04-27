import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import freeIdeasReducer from './free-ideas-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  freeIdeas: freeIdeasReducer,
  user: userReducer
});

export default rootReducer;
