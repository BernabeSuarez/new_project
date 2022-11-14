import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase/firebaseConfig";

const MenuContainer = styled.div`
  width: 10%;
  height: 100vh;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  background-color: blue;
  & a {
    text-decoration: none;
    color: white;
    margin: 10%;
  }
  & h2 {
    cursor: pointer;
    color: white;
    margin: 10%;
  }
`;

const Menu = () => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  const signout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    });
    alert("Se ha cerrado la sesion").catch((error) => {
      // An error happened.
    });
  };
  if (user) {
    return (
      <MenuContainer>
        <Link to={`agregar_cita`}>
          <h2>Agregar Cita</h2>
        </Link>
        <Link to={`login`}>
          <h2>Login</h2>
        </Link>
        <Link to={`/`}>
          <h2>Turnos</h2>
        </Link>

        <h2 onClick={signout}>Salir</h2>
      </MenuContainer>
    );
  }
  return (
    <MenuContainer>
      <Link to={`agregar_cita`}>
        <h2>Agregar Cita</h2>
      </Link>
      <Link to={`login`}>
        <h2>Login</h2>
      </Link>
      <Link to={`/`}>
        <h2>Turnos</h2>
      </Link>
    </MenuContainer>
  );
};

export default Menu;
