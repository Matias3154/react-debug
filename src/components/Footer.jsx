import React from "react";

const PieDePagina = () => {
  return <footer>
    <nav>
      <div>
        <a href="/">
          <img 
            src="https://play.cine.ar/content/images/98fd6ee3.logo-cinear-estrenos.svg" 
            alt="foto" 
          />
        </a>
      </div>
      <div>
        <span>Todos los derechos reservados 2003-2021. República Argentina. INCAA Lima 319; Código Postal: C1073AAG, CABA; República Argentina.</span>
        <ul className="PieDePagina">
          <li>
            <a href="#"><img src="http://cine.ar/img/logo-cinear.svg" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="http://cine.ar/img/logo-arsat.svg" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="http://cine.ar/img/logo-incaa.svg" alt="" /></a>
          </li>
        </ul>
      </div>
    </nav>
  </footer>;

};

export default PieDePagina;
