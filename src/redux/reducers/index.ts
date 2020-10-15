import { combineReducers } from 'redux';

import session from './session';
import user from './user';


export const rootReducer = combineReducers({
  session, user
});

export type RootState = ReturnType<typeof rootReducer>;

export default combineReducers({ session, user });
