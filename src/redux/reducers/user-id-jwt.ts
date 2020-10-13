import { USER_ID_JWT } from '../actions/types';

interface ActionTypes {
  type: string;
  userId: string;
}


const userIdJwt = (state = [], action: ActionTypes) => {
  switch (action.type) {
    case USER_ID_JWT:
      return { ...state, userId: action.userId };

    default:
      return state;
  }
};

export default userIdJwt;
