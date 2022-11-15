import React, { useState } from "react";
import { DateContainer, Input } from "./addDateElements";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

//const turno = [];

const AddDate = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [info, setInfo] = useState("");
  const [obs, setObs] = useState("");

  const addDateHandler = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Turnos"), {
        Nombre: info,
        Fecha: date,
        Hora: time,
        Observaciones: obs,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    //Agregar un toast con mensaje confirmacion
  };
  return (
    <DateContainer>
      <form onSubmit={addDateHandler}>
        <Input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setInfo(e.target.value)}
        />
        <Input
          type="select"
          placeholder="Observaciones"
          onChange={(e) => setObs(e.target.value)}
        />

        <Input
          type="date"
          placeholder="Fecha"
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          type="time"
          placeholder="Hora"
          onChange={(e) => setTime(e.target.value)}
        />
        <input type="submit" value="ENVIAR" />
      </form>
    </DateContainer>
  );
};

export default AddDate;
