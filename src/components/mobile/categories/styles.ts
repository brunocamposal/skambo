import styled from "styled-components";

import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
  display: none;
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 10px;
  font-size: 30px;
  z-index: 10;
  
  @media (max-width: 480px) {
    display: block;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 90px;
  left: 40px;
`;

export const SidebarSize = styled.div`
  width: 70%;
  background: white;
`;

export const IconClose = styled(AiOutlineClose)`
  position: absolute;
  top: 0px;
  left: 0px;
  margin: 20px;
  font-size: 35px;
  cursor: pointer;
`;
