import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import {
  Container,
  H2,
  DataContainer,
  DataTitle,
  DataItem,
  Name,
  DelIcon,
} from "./turnosElements";

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

  /* Checking if the data array is empty. If it is, then it will return the message "No hay citas
 agendadas". */
  if (data.length === 0) {
    return (
      <Container>
        <H2>Agenda de Turnos</H2>
        <H2>No hay citas agendadas</H2>
      </Container>
    );
  }

  /* Sorting the data array by date. */
  data.sort((a, b) => {
    if (a.Fecha < b.Fecha) {
      return -1;
    }
    if (a.Fecha > b.Fecha) {
      return 1;
    }
    return 0;
  });

  return (
    <Container>
      <H2>Agenda de Turnos</H2>
      <DataContainer>
        <DataTitle>
          <h4>Nombre</h4>
          <h4>Observaciones</h4>
          <h4>Fecha</h4>
          <h4>Hora</h4>
          <h4>Eliminar</h4>
        </DataTitle>

        {data.map((item) => (
          <DataItem key={item.id}>
            <Name>{item.Nombre}</Name>
            <h5>{item.Observaciones}</h5>
            <h3>{item.Fecha}</h3>
            <h4>{item.Hora}</h4>

            <DelIcon onClick={() => deleteDate(item.id)} />
          </DataItem>
        ))}
      </DataContainer>
    </Container>
  );
};

export default Turnos;
