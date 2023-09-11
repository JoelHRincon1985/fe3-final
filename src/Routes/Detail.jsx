/*import React from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
*/      /* aqui deberan renderizar la informacion en detalle de un user en especifico */
      /* Deberan mostrar el name - email - phone - website por cada user en especifico */
/*    </>
  )
}

export default Detail

*/

import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";
import doctor from "../assets/images/doctor1.png";
import { THEME } from "../assets/themes/theme"; 
import axios from "axios";


const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const [dentist, setDentist] = useState({});

  const { id } = useParams();

  const fetchDentistByID = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setDentist(res.data);
      });
  };

  useEffect(() => {
    fetchDentistByID();
  }, []);

  return (
    <div className={theme === THEME.darkMode ? "dark home" : ""}>
      <h1 className="title">Dentista</h1>
      <div className="detail">
        <div className="detail-container">
          <h1>{dentist.id}</h1>
          <img src={doctor} alt="dentist-img" />
          <div className="right">
            <h2>{dentist.name}</h2>
            <h3>{dentist.username}</h3>
            <p>{dentist.email}</p>
            <p>{dentist.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
