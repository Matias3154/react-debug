import React from "react";
import "./styles/Footer.css"
const PieDePagina = () => {
  return <footer id = "PieDePagina">
        <p id = "ParrafoDelFooter">Todos los derechos reservados 2003-2021. República Argentina. <br /> INCAA Lima 319; Código Postal: C1073AAG, CABA; República Argentina.</p>
        <ul className="EnlacesDePieDePagina">
          <li>
            <a href="/"><img src="http://cine.ar/img/logo-cinear.svg" alt="" /></a>
          </li>
          <li>
            <a href="/"><img src="http://cine.ar/img/logo-arsat.svg" alt="" /></a>
          </li>
          <li>
            <a href="/"><img src="http://cine.ar/img/logo-incaa.svg" alt="" /></a>
          </li>
        </ul>
  </footer>;

};

export default PieDePagina;
