import React, { useEffect } from 'react'
import * as Styled from './styles'
import axios from 'axios'

const UserSales: React.FC = () => {
  useEffect(() => {
    axios.get('https://capstone-q2.herokuapp.com/')
      .then((res) => console.log(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log('user')
  return (
    <Styled.Container>

    </Styled.Container>
  )
}

export default UserSales