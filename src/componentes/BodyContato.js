import React, { useState } from "react";
import "../assets/styles/BodyContato.css";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    pergunta: "",
  });

  const handleChange = (e) => {
    setFormData({
       formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí tendría que estar el código para enviar al backend, para consultar los datos  
    console.log("Formulario enviado:", formData);
    // Puedes agregar la lógica de enviar datos a un servidor, etc.
  };

  return (
    <div className="contato-container">
      <h2>Formulário de Contato</h2>
      <form onSubmit={handleSubmit} className="formulario-contato">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />

        <label htmlFor="pergunta">Pergunta:</label>
        <textarea
          id="pergunta"
          name="pergunta"
          value={formData.pergunta}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
