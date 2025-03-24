
import { Routes, Route, Navigate } from 'react-router-dom';
import Turnos from './turnos';
import Medicos from './medicos';
import Vistamedicos from './vistamedicos'


function App() {
  return (
    <Routes>
      {<Route path="/" element={<Medicos />} />}
      <Route path="/turnos" element={<Turnos />} />
      <Route path="/vistamedicos" element={<Vistamedicos />} />
      {/* Agrega otras rutas según sea necesario */}
    </Routes>
  );
}

export default App;