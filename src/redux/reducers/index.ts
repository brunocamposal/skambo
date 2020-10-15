import { combineReducers } from 'redux';

import session from './session';
import user from './user';
import favoriteProducts from './favorites';

export const rootReducer = combineReducers({
  session, user, favoriteProducts
});

export type RootState = ReturnType<typeof rootReducer>;

export default combineReducers({ session, user, favoriteProducts });
