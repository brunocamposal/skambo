import React from "react";

import { Container, Categorie } from "./styles";
import "./sidebar.css";
import { categories } from "./helper";
import { useHistory } from "react-router-dom";

const Sidebar: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      {categories.map((item, index) => (
        <Categorie className={item.classStyle} onClick={()=> history.push(`/category/${item.name.toLocaleLowerCase()}`)} key={index}>
          <item.icon className="icon-style" /> {item.name}
        </Categorie>
      ))}
      <Categorie>
        <h5> Ver todas as categorias </h5>
      </Categorie>
    </Container>
  );
};

export default Sidebar;