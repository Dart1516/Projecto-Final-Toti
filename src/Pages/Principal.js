import React from "react";
import Menu from "../assets/funciones/Menu";
import BodyPrincipal from "../componentes/BodyPrincipal";
import Footer from "../componentes/Footer";



function Principal() {
  return (
    <div >
      <header >
        <Menu/>
      </header>
      <body >
        <BodyPrincipal />
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Principal;
