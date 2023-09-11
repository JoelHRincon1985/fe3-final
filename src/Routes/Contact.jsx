/*import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact

*/

import React, { useContext } from "react";
import Form from "../Components/Form";
import { THEME } from "../assets/themes/theme"; //1
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;
  return (
    <main className={theme === THEME.darkMode ? "dark home" : ""}>
      <h1 className="title">Contacto</h1>
      <div className="contact">
        <div className="contact-container">
          <h2>¿Quiere saber más?</h2>
          <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
          <div className="form">
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
