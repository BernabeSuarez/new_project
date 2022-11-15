import React, { useState } from "react";
import { DateContainer, Input, FormAdd, Button } from "./addDateElements";
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
    alert("Turno Agendado");
    setDate("");
    setTime("");
    setInfo("");
    setObs("");

    //Agregar un toast con mensaje confirmacion
  };
  return (
    <DateContainer>
      <FormAdd>
        <form onSubmit={addDateHandler}>
          <label>Nombre</label>
          <Input
            type="text"
            placeholder="Nombre"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
          <label>Observaciones</label>
          <Input
            type="select"
            value={obs}
            placeholder="Observaciones"
            onChange={(e) => setObs(e.target.value)}
          />
          <label>Fecha</label>
          <Input
            type="date"
            placeholder="Fecha"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Hora</label>
          <Input
            type="time"
            placeholder="Hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Button> Agendar</Button>
        </form>
      </FormAdd>
    </DateContainer>
  );
};

export default AddDate;
