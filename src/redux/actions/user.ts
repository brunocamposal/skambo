import { USER_SALES, REMOVE_SALE, FETCH_SUCESS } from './types'
import axios from 'axios'

export const userSales = () => ({
  type: USER_SALES,
})

export const removeSale = (saleName: string) => ({
  type: REMOVE_SALE,
  saleName
})

export const fetchSuccess = (userSales: any) => ({
  type: FETCH_SUCESS,
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