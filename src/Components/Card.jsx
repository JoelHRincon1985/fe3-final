/*import React from "react";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */

        /* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */

        /* Ademas deberan integrar la logica para guardar cada Card en el localStorage */
/*     <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;*/



import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import doctor from "../assets/images/doctor1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const Card = (props) => {
  const { addFav, removeFav} = useContext(ContextGlobal);

  const location = useLocation();

  const [faved, isFaved] = useState(false);

  useEffect(() => {
    setIsSolid(props.dentist.isFav);
  }, [props.dentist.isFav]);

  const favs = JSON.parse(localStorage.getItem("favData")) || [];

  useEffect(() => {
    if (favs) {
      const isDentistFav = favs.some((fav) => fav.id === props.dentist.id);
      isFaved(isDentistFav);
    }
  }, [props.dentist.id, favs]);

  const handleFav = () => {
    addFav({ ...props.dentist, isFav: true });
    isFaved(true);
  };

  const handleDeleteFav = () => {
    removeFav(props.dentist.id);
  };

  const isFavPage = location.pathname === "/favs";

  const [isSolid, setIsSolid] = useState(props.dentist.isFav);

  return (
    <div className="card">
      <h4>{props.dentist.username}</h4>
      <img src={doctor} alt="dentist-img" />
      <h4>{props.dentist.name}</h4>
      <p>{props.dentist.id}</p>

      <Link className="col" to={`detail/${props.dentist.id}`} id="detail-link">
        Ir al detalle
      </Link>

      {!isFavPage ? (
        <button
          onClick={handleFav}
          className="favButton"
          id="btnStar"
          disabled={faved}
        >
          <FontAwesomeIcon
            icon={isSolid || faved ? solidStar : regularStar}
            style={{
              color: isSolid || props.dentist.isFav ? "white" : "white",
            }}
            id="star"
          />
        </button>
      ) : (
        <button
          onClick={isFavPage ? handleDeleteFav : handleFav}
          className="favButton"
          id="btnStar"
        >
          <FontAwesomeIcon
            icon={isSolid ? solidStar : regularStar}
            style={{ color: isSolid ? "#4d05f6" : "black" }}
            id="star"
          />
        </button>
      )}
    </div>
  );
};

export default Card;
