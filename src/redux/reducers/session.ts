import { LOGIN } from '../actions/types';

interface ActionTypes {
  type: string;
  token: string;
  currentUser: any;
}

const userInfo = localStorage.getItem('currentUser');

const defaultState = {
  token: localStorage.getItem('token') || '',
  currentUser: userInfo != null ? JSON.parse(userInfo) : {},
};

const session = (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.token, user: action.currentUser };
    default:
      return state;
  }
};

export default session;
