import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase/firebaseConfig";
import {
  MenuContainer,
  H3,
  CalendarIcon,
  AddDate,
  Signout,
} from "./menuElements";

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
