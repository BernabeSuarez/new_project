import React, { useState, useEffect } from "react";

const Turnos = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    setCurrentDate(year + "-" + month + "-" + date);
  }, []);

  console.log(currentDate);

  return <div>Turnos</div>;
};

export default Turnos;
