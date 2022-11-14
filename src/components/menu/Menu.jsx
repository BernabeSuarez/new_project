import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase/firebaseConfig";
import { CalendarAdd, SignOut } from "@styled-icons/fluentui-system-filled";
import { Calendar3 } from "@styled-icons/bootstrap";

const MenuContainer = styled.div`
  width: 10%;
  height: 100vh;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const CalendarIcon = styled(Calendar3)`
  width: 2.6rem;
  margin: auto;
  color: #ffffff;
`;
const AddDate = styled(CalendarAdd)`
  width: 3rem;
  margin: auto;
  color: #ffffff;
`;
const Signout = styled(SignOut)`
  width: 3rem;
  margin: auto;
  color: #ffffff;
  cursor: pointer;
`;
const H3 = styled.div`
  color: white;
  text-align: center;
  text-transform: uppercase;
  margin-top: 1%;
  margin-bottom: 80%;
`;

const Menu = () => {
  const auth = getAuth(app);

  const signout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    });
    alert("Se ha cerrado la sesion").catch((error) => {
      // An error happened.
    });
  };

  return (
    <MenuContainer>
      <H3>Agenda de Citas</H3>
      <Link to={`/`}>
        <CalendarIcon />
      </Link>
      <Link to={`agregar_cita`}>
        <AddDate />
      </Link>
      <Signout onClick={signout} />
    </MenuContainer>
  );
};

export default Menu;
