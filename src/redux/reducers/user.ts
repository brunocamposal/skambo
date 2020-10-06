import { USER_SALES, REMOVE_SALE } from '../actions/types'



const defaultState: any = []

const user = (state = defaultState, action: any) => {
  switch (action.type) {

    case "FETCH_SUCCESS":
      return {
        ...state,
        userSales: action.userSales
      }
    case REMOVE_SALE:
      return {
        ...state
      }

    default:
      return state
  }
}

export default user