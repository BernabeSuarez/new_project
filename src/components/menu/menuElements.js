import styled from "styled-components";
import { CalendarAdd, SignOut } from "@styled-icons/fluentui-system-filled";
import { Calendar3 } from "@styled-icons/bootstrap";


export const MenuContainer = styled.div`
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

export const CalendarIcon = styled(Calendar3)`
  width: 2.6rem;
  margin: auto;
  color: #ffffff;
  &:hover{
    color: lightgreen;
  }
`;
export const AddDate = styled(CalendarAdd)`
  width: 3rem;
  margin: auto;
  color: #ffffff;
  &:hover{
    color: lightgreen;
  }
`;
export const Signout = styled(SignOut)`
  width: 3rem;
  margin: auto;
  color: #ffffff;
  cursor: pointer;
  &:hover{
    color: lightgreen;
  }
  
`;
export const H3 = styled.div`
  color: white;
  text-align: center;
  text-transform: uppercase;
  margin-top: 1%;
  margin-bottom: 80%;
`;
