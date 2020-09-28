import React from "react";

import Menu from "../menu";
import Sidebar from "../sidebar";

import { Container, Content } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Menu />
      <Content>
        <Sidebar />
        {children}
      </Content>
    </Container>
  );
};

export default Layout;
