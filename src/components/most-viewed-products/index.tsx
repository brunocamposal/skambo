import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import * as Styled from './styles'
import Card from '../../components/card'

const MostViewedProducts = () => {

  return (
    <div>
      <Styled.Title> <AiFillStar className="star-icon" />
        <h2>Mais procurados</h2>
      </Styled.Title>
      <Card title="Fifa 19" category="Jogos" imgUrl="https://images-na.ssl-images-amazon.com/images/I/61uwGK1Iz0L._AC_SL1000_.jpg" />

    </div>
  )
}

export default MostViewedProducts