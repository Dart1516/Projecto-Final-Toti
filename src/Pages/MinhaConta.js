import React from "react";
import Menu from "../assets/funciones/Menu";
import BodyMinhaConta from "../componentes/BodyMinhaConta.js";
import Footer from "../componentes/Footer";

const Jogos = () => {
  return (
    <div >
      <header >
        <Menu/>
      </header>
      <body >
        <BodyMinhaConta/>
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Jogos;
