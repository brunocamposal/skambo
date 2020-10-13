import { combineReducers } from 'redux';

import session from './session';
import user from './user'
import userIdJwt from "./user-id-jwt"

export const rootReducer = combineReducers({
  session, user, userIdJwt
});

export type RootState = ReturnType<typeof rootReducer>;

export default combineReducers({ session, user, userIdJwt });
