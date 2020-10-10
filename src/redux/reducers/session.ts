import { LOGIN } from "../actions/types";

interface ActionTypes {
    type: string;
    token: string;
}

const defaultState = {
  token: localStorage.getItem("token") || "",
};

const session = (state = defaultState, action: ActionTypes): {token: string} => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.token};

    default:
      return state;
  }
};

export default session
