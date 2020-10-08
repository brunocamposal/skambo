import { USER_SALES, REMOVE_SALE, FETCH_SUCCESS } from './types'
import axios from 'axios'

export const userSales = () => ({
  type: USER_SALES,
})

export const removeSale = (saleId: string) => ({
  type: REMOVE_SALE,
  saleId
})

export const requestRemoveSale = (saleId: string, token: string) => (dispatch: any) => {
  axios.delete(`https://capstone-q2.herokuapp.com/products/${saleId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then((res) => {
      dispatch(removeSale(saleId))
    })
    .catch((err) => console.log(err))
}

export const fetchSuccess = (userSales: any) => ({
  type: FETCH_SUCCESS,
  userSales
})

export const fetchUserSales = (userId: string, token: string) => (dispatch: any) => {
  axios.get(`https://capstone-q2.herokuapp.com/products?userId=${userId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then((res) => {
      dispatch(fetchSuccess(res.data))
    })
    .catch(err => console.log(err))
}