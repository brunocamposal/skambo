import React from 'react';
import * as Styled from './styles.js';
import { motion } from 'framer-motion';
import { Popup } from 'semantic-ui-react';

interface PropTypes {
  title: string;
  category: string;
  imgUrl: string;
  onClick?: () => void;
}

const Card = ({ title, category, imgUrl, onClick }: PropTypes) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}>
      <Styled.Card onClick={onClick}>
        <img src={imgUrl} alt="card" />
        <div>
          <Popup content={title} trigger={<strong>{title}</strong>} />
          <p>{category}</p>
        </div>
      </Styled.Card>
    </motion.div>
  );
};

export default Card;
