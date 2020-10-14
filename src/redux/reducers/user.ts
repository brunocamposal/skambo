import { FETCH_SUCCESS, REMOVE_SALE, CHANGE_PRODUCT_INFO } from '../actions/types'



const defaultState: any = {}

const user = (state = defaultState, action: any) => {
  switch (action.type) {

    case FETCH_SUCCESS:
      return {
        ...state,
        userSales: action.userSales
      }
    case REMOVE_SALE:
      return {
        ...state,
        userSales: state.userSales.filter((item: any) => item.id !== action.saleId)
      }
    case CHANGE_PRODUCT_INFO:
      const indexOfProduct = state.userSales.findIndex((item: any) => item.id === action.values.id)
      let newState = { userSales: [...state.userSales] }
      newState.userSales[indexOfProduct] = action.values
      return {
        ...state,
        ...newState
      }
    default:
      return { ...state }
  }
}

export default user