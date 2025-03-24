import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";
import NavbarPage from "./components/layout/navbarComponent/NavbarIdPage";

import "./App.css";
import HomePage from "./page/HomePage";
import SpecialistDetailsPage from "./page/SpecialistDetailsPage";
import SpecialistPage from "./page/SpecialistPage";
import LoginForm from "./components/forms/LoginForm";
import AdminPage from "./page/AdminPage";
import UserPage from "./page/UserPage";
import TurnUser from "./page/TurnUser";
import TurnSpecialist from "./page/TurnSpecialist";

function App() {
  return (
    <Router>
      <NavbarPage idPage='visitante' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/inicio-de-sesion' element={<LoginForm />} />
        <Route path='/pagina-de-usuario' element={<UserPage />} />
        <Route path='/pagina-de-administrador' element={<AdminPage />} />
        <Route path='/pagina-registro' element={<RegisterPage />} />
        <Route path='/detalle-especialista/:nombre' element={<SpecialistDetailsPage />} />
        <Route path='/turno-especialistas/:id' element={<TurnUser />} />
        <Route path='/turnos-usuarios/:id' element={<TurnSpecialist />} />
        <Route path='/pagina-especialista' element={<SpecialistPage />} />
      </Routes>
    </Router>
  );
}

export default App;