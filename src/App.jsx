import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import UserPage from "./page/UserPage";
import AdminPage from "./page/AdminPage";
import RegisterPage from "./page/RegisterPage";
import SpecialistPage from "./page/SpecialistPage";
import LoginForm from "./components/forms/LoginForm";
import SpecialistDetailsPage from "./page/SpecialistDetailsPage";
import NavbarPage from "./components/layout/navbarComponent/NavbarIdPage";

import "./App.css";

function App() {
  return (
    <Router>
      <NavbarPage idPage='administrador' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/inicio-de-sesion' element={<LoginForm />} />
        <Route path='/pagina-de-usuario' element={<UserPage />} />
        <Route path='/pagina-de-administrador' element={<AdminPage />} />
        <Route path='/pagina-registro' element={<RegisterPage />} />
        <Route path='/detalle-especialista/:nombre' element={<SpecialistDetailsPage />} />
        <Route path='/pagina-especialista' element={<SpecialistPage />} />
      </Routes>
    </Router>
  );
}

export default App;