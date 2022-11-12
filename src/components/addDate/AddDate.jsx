import React, { useState } from "react";

const turno = [];

const AddDate = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [info, setInfo] = useState("");
  const [state, setState] = useState("");

  const data = (e) => {
    e.preventDefault();
    turno.push({
      fecha: date,
      hora: time,
      detalle: info,
      estado: state,
    });
    console.log(turno);
  };
  return (
    <div>
      <form onSubmit={data}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setInfo(e.target.value)}
        />
        <input
          type="select"
          placeholder="Estado"
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="date"
          placeholder="Fecha"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          placeholder="Hora"
          onChange={(e) => setTime(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default AddDate;
