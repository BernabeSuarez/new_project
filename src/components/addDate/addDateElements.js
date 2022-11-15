import styled from 'styled-components';

export const DateContainer = styled.div`
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`;
export const FormAdd = styled.div`
width:80%;
height:80%;
margin:auto;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background-color:beige;
border-radius: 12px;
& form {
  display: row;
}

`

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 2%;
  border-bottom: 2px solid black;
  background-color: white;
  border-radius:8px;
  &:focus {
    outline:none;
  }
  &:active {
    outline:none;
  }
`;
export const Button = styled.button`
  width: 50%;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 50%;;
  border-radius: 10px;
  border: none;
  background-color: #0000FF;
  color: white;
  &:hover {
    background-color: #24B9CD;
  }
`;

export const H2 = styled.h2`
    font-size: 1.5rem;
    margin-top: 3%;
    margin-bottom: 1%;
    text-align: center;
  `;

