import styled from "styled-components";
import { BsCalendar3, BsCalendarPlus } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";


export const MenuContainer = styled.div`
  width: 10%;
  height: 100vh;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
  & a {
    margin: 15%;
  }
 
`;

export const CalendarIcon = styled(BsCalendar3)`
  font-size: 2.5rem;
  margin: auto;
  color: #ffffff;
  &:hover{
    color: lightgreen;
  }
`;
export const AddDate = styled(BsCalendarPlus)`
  font-size: 2.5rem;
  margin: auto;
  color: #ffffff;
  &:hover{
    color: lightgreen;
  }
`;
export const Signout = styled(GoSignOut)`
  font-size: 2.5rem;
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
