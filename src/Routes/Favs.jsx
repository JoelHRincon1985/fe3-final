/*import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */
 /*       {/* Deberan renderizar una Card por cada uno de ellos */
/*      </div>
    </>
  );
};

export default Favs;

*/

import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const favs = state?.favs || []; 

  return (
    <div className="favs">
      <div className="row center-row title">
        <h1 style={{ marginRight: 40 }}>Dentistas Favoritos</h1>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Borrar Dentista
        </button>
      </div>
      {favs.length > 0 ? (
        <div className="card-grid">
          {favs.map((dentist) => (
            <Card dentist={dentist} key={dentist.id} />
          ))}
        </div>
      ) : (
        <p>No hay dentistas favoritos seleccionados</p>
      )}
    </div>
  );
};

export default Favs;
