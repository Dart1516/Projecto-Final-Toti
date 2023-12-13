// Infografia.js
import React, { useState } from "react";
import moba from "../images/historia-moba.jpeg";
import styles from "./Infografia.module.css"; // Importa tus estilos CSS

function Infografia() {
  const [imagenAgrandada, setImagenAgrandada] = useState(false);

  const handleImagenClick = () => {
    setImagenAgrandada(!imagenAgrandada);
  };

  const modalStyle = {
    display: imagenAgrandada ? "flex" : "none",
  };

  const imagenStyle = {
    maxWidth: "80%", // Ajusta el tamaño máximo de la imagen directamente
    maxHeight: "80%", // Ajusta el tamaño máximo de la imagen directamente
  };


  return (
    <div>
      {/* Aplicar los estilos en línea */}
      <img
        src={moba}
        className={styles.infografia} // Aplica tus estilos CSS aquí
        alt="infografia"
        onClick={handleImagenClick}
        
      />

      {/* Contenedor modal */}
      <div className={styles.modal} style={modalStyle} onClick={handleImagenClick}>
        <div className={styles.modalContent}>
          <img src={moba} alt="infografia" style={imagenStyle} />
        </div>
      </div>
    </div>
  );
}

export default Infografia;
