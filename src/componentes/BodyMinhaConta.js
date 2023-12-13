import React, { useState } from 'react';
import '../assets/styles/BodyMinhaConta.css'; // Importa el archivo de estilos CSS
const MinhaConta = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
      console.log('Nome de usuário:', username, 'Senha:', password);
    };
  
    return (
      <div className="login-page">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Inicie sessão com seu nome de usuário</h2>
          <label>
            Nome de usuário:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            <span>Senha:</span>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <div className="login-options">
            <a href="#recuperar-senha">Recuperar senha</a>
            <button type="submit">Iniciar sessão</button>
          </div>
        </form>
      </div>
    );
  };
export default MinhaConta;