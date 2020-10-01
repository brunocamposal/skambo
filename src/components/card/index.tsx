import React from 'react'
import * as Styled from './styles'

interface PropTypes {
  title: string,
  category: string,
  imgUrl: string
}

const Card = ({ title, category, imgUrl }: PropTypes) => {
  return (
    <Styled.CardWrapper>
      <img src={imgUrl} />
      <div>
        <strong>{title}</strong>
        <p>{category}</p>
      </div>
    </Styled.CardWrapper>
  )
}

export default Card