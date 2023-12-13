import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Principal from "./Pages/Principal";
import Jogos from "./Pages/Jogos";
import FAQ from "./Pages/FAQ";
import Contato from "./Pages/Contato";
import MinhaConta from "./Pages/MinhaConta"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Principal" element={<Principal />} />
        <Route path="/Jogos" element={<Jogos />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/MinhaConta" element={<MinhaConta />} />
        {/* Ruta predeterminada */}
        <Route path="/*" element={<Navigate to="/Principal" />} />
      </Routes>
    </Router>
  );
}

export default App;
