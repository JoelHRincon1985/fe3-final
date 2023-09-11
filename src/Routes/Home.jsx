/*import React from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */
/*      </div>
    </main>
  )
}

export default Home

*/  


import React, { useContext,} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { THEME } from "../assets/themes/theme"; //1

const Home = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const dentists = state.dentists;
  const favs = state?.favs;



  return (
    <main className={theme === THEME.darkMode ? "dark home" : ""}>
      <h1 id="title">Home</h1>
      <div className="card-grid">
        {dentists.map((dentist, index) => {
          return <Card dentist={dentist} key={index} />;
        })}
      </div>
    </main>
  );
};

export default Home;
