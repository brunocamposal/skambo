import React from 'react'
import * as Styled from './styles'
import { motion } from "framer-motion"

interface PropTypes {
  title: string,
  category: string,
  imgUrl: string
}

const Card = ({ title, category, imgUrl }: PropTypes) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >

      <Styled.Card>
        <img src={imgUrl} />
        <div>
          <strong>{title}</strong>
          <p>{category}</p>
        </div>
      </Styled.Card>
    </motion.div>

  )
}

export default Card