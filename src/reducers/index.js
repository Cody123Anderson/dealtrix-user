import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import freeIdeasReducer from './free-ideas-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  freeIdeas: freeIdeasReducer
});

export default rootReducer;
