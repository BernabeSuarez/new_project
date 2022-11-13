import styled from "styled-components";
import { media_mobile } from "../../utils/mediaQ/mediaQ";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  ${media_mobile} {
    flex-direction: column;
  }
`;

export const ImageLogin = styled.div`
  width: 50%;
  height: 100vh;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media_mobile} {
    width: 100%;
  }
`;
export const ImageContainer = styled.div`
  width: 70%;
  height: 60%;
  margin: auto;
  padding: 5%;
  border-radius: 20px;
`;
export const FormLogin = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media_mobile} {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  width: 70%;
  height: 60%;
  margin: auto;
  padding: 5%;
  border-radius: 20px;
  background-color: antiquewhite;
  & form {
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 2%;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
`;
export const ButtonLogin = styled.button`
  width: 80%;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  border: none;
  background-color: coral;
  color: black;
  &:hover {
    color: white;
    background-color: red;
  }
`;