import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom"; //renderiza las paginas del react-router V 6.4.2

import Menu from "../menu/Menu";

const RootContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const RootLayout = () => {
  return (
    <RootContainer id="detail">
      <Menu /> {/* Lo que se mostrara fijo en la pagina*/}
      <Outlet /> {/*Donde se renderizan los componentes*/}
    </RootContainer>
  );
};

export default RootLayout;

//aca se renderizan los componentes
