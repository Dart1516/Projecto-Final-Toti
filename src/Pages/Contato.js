import React from "react";
import Menu from "../assets/funciones/Menu";
import Footer from "../componentes/Footer";
import BodyContato from "../componentes/BodyContato";

const Contato = () => {
  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #282c34, #282c34)",
      color: "#282c34"
    }}>
      <header>
        <Menu />
      </header>
      <body style={{ flex: 1 }}>
        <BodyContato />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contato;
