import { USER_INFO } from '../actions/types';


const userInfo = localStorage.getItem('currentUser');

const defaultState = {
  token: localStorage.getItem('token') || '',
  currentUser: userInfo != null ? JSON.parse(userInfo) : {},
};

const session = (state = defaultState, action: any) => {
  switch (action.type) {
    case USER_INFO:
      console.log(action.currentUser)
      return { ...state, token: action.token, currentUser: action.currentUser };
    default:
      return state;
  }
};

export default session;
