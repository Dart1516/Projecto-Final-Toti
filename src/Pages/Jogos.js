import React from "react";
import Menu from "../assets/funciones/Menu";
import BodyJogos from "../componentes/BodyJogos.js";
import Footer from "../componentes/Footer";

const Jogos = () => {
  return (
    <div >
      <header >
        <Menu/>
      </header>
      <body >
        <BodyJogos/>
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Jogos;
