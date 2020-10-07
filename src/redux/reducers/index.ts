import { combineReducers } from 'redux';

import session from './session';

export const rootReducer = combineReducers({
  session,
});

export type RootState = ReturnType<typeof rootReducer>;

export default combineReducers({ session });
