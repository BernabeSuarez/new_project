import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import styled from "styled-components";

import { BsTrash } from "react-icons/bs";

const Turnos = () => {
  /* Getting the current date and converting it to a string. */
  const fechaActual = Date.now();
  const hoy = new Date(fechaActual);
  const diaDeHoy = hoy.toLocaleDateString();

  console.log(diaDeHoy);
  const [data, setData] = useState([]);

  /**
   * GetData() is an async function that queries the database and returns the data in the form of an
   * array of objects.
   */
  const getData = async () => {
    const q = query(collection(db, "Turnos"));
    onSnapshot(q, (querySnapshot) => {
      const turnos = [];
      querySnapshot.forEach((doc) => {
        turnos.push({ ...doc.data(), id: doc.id });
      });
      setData(turnos);
    });
  };

  /**
   * If the user confirms the deletion, then delete the document from the database.
   */
  const deleteDate = async (id) => {
    if (window.confirm("Quieres Eliminar este cita?")) {
      await deleteDoc(doc(db, "Turnos", id));
      console.log("Cita Eliminada");
    }
  };
  /* A hook that is called when the component is mounted. */
  useEffect(() => {
    getData();
    console.log("Loading Data...");
  }, []);

  /*-------------------------------------------------------------------*/
  const Container = styled.div`
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const DataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
  `;
  const DataItem = styled.div`
    width: 80%;
    margin-top: 2%;
    margin-bottom: 2%;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;
  const DelIcon = styled(BsTrash)`
    color: red;
    font-size: 1.5rem;
    cursor: pointer;
  `;
  const H2 = styled.h2`
    font-size: 1.5rem;
    margin-top: 1%;
    margin-bottom: 4%;
    text-align: center;
  `;

  if (data.length === 0) {
    return (
      <Container>
        <H2>Agenda de Turnos</H2>
        <H2>No hay citas agendadas</H2>
      </Container>
    );
  }
  data.sort((a, b) => {
    if (a.Fecha < b.Fecha) {
      return -1;
    }
    if (a.Fecha > b.Fecha) {
      return 1;
    }
    return 0;
  });

  console.log(data);

  return (
    <Container>
      <H2>Agenda de Turnos</H2>
      <DataContainer>
        {data.map((item) => (
          <DataItem key={item.id}>
            <h2>{item.Nombre}</h2>
            <h5>{item.Estado}</h5>
            <h3>{item.Fecha}</h3>
            <h4>{item.Hora}</h4>
            <h4>{item.id}</h4>

            <DelIcon onClick={() => deleteDate(item.id)} />
          </DataItem>
        ))}
      </DataContainer>
    </Container>
  );
};

export default Turnos;
