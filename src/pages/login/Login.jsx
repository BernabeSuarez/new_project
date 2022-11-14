import React, { useState } from "react";
import {
  LoginContainer,
  ImageLogin,
  ImageContainer,
  FormLogin,
  FormContainer,
  Input,
  ButtonLogin,
} from "./loginElements";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/firebaseConfig";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const user = auth.currentUser;

  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      alert("Usuario Logueado");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (user) {
    return (
      <>
        <Link to={`/`}>
          <h2>Turnos</h2>
        </Link>
      </>
    );
  }
  return (
    <LoginContainer>
      <ImageLogin>
        <ImageContainer>
          <img
            src="https://doodleipsum.com/350/flat?i=7877005830df351b1e37f3769d479f63"
            alt="Login Img"
          />
        </ImageContainer>
      </ImageLogin>
      <FormLogin>
        <FormContainer>
          <form onSubmit={LoginUser}>
            <Input
              type="text"
              placeholder="Usuario"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonLogin> LOGIN </ButtonLogin>
          </form>
        </FormContainer>
      </FormLogin>
    </LoginContainer>
  );
};

export default Login;
