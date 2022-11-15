import styled from "styled-components";

import { BsTrash } from "react-icons/bs";


export const Container = styled.div`
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
export const DataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
  `;
export const DataItem = styled.div`
    width: 80%;
    margin-top: 1%;
    margin-bottom: 1%;
    padding-bottom: 1%;
    padding-left:1%;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & h5{
      width: 25%;
    }
    & h4{
      width: 25%;
    }
    & h3{
      width: 25%;
    }& h2{
      width: 25%;
    }
  `;
export const DelIcon = styled(BsTrash)`
    color: red;
    margin-right: 3%;
    font-size: 1.5rem;
    cursor: pointer;
  `;
export const H2 = styled.h2`
    font-size: 1.5rem;
    margin-top: 1%;
    margin-bottom: 4%;
    text-align: center;
  `;

export const Name = styled.h2`
    font-size: 1rem;
  `;
export const DataTitle = styled.div`
    width: 80%;
    margin-bottom: 2%;
    padding: 1%;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;
