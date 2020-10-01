import React from "react";

import { Container, Categorie } from "./styles";
import "./sidebar.css";
import { categories } from "./helper";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <h3> Categorias </h3>
      {categories.map((item, index) => (
        <Categorie className={item.classStyle} key={index}>
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