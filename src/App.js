import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Body";
import Formulario from "./pages/Formulario";
import Admin from './pages/Admin';
import Login from "./pages/Login";
import Editar from './pages/EditarAluno';
import Header from "./components/Header";
function App() {
    return (
        <div>
            <Header />
      <div className="container mt-2" style={{ marginTop: 40 }}></div>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/formulario" element={<Formulario />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/edit/:id" element={<Editar />} />
            </Routes>
        </div>
    );
}

export default App;