import React, { useState, useEffect } from 'react'
import * as Styled from './styles'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux';
import Card from '../../components/card'

interface stateProps {
  session: { token: string }
}



const UserSales: React.FC = () => {
  const [userProducts, setUserProducts] = useState([])
  console.log(userProducts)
  const token = useSelector((state: stateProps) => state.session.token)
  const decoded: { sub: string } = jwt_decode(token)
  console.log('decoded', decoded)

  useEffect(() => {
    axios.get(`https://capstone-q2.herokuapp.com/products?userId=${2}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => setUserProducts(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log('user')
  return (
    <Styled.Container>
      {userProducts && userProducts.map((product: any, key: number) =>
        (<Card
          key={key}
          category={product.category}
          imgUrl={product.thumbnail}
          title={product.name}

        />)
      )}
    </Styled.Container>
  )
}

export default UserSales