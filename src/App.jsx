import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import UserPage from "./page/UserPage";
import AdminPage from "./page/AdminPage";
import RegisterPage from "./page/RegisterPage";
import SpecialistPage from "./page/SpecialistPage";
import LoginForm from "./components/forms/LoginForm";
import SpecialistDetailsPage from "./page/SpecialistDetailsPage";
import NavbarPage from "./components/layout/navbarComponent/NavbarIdPage";
import FooterC from "./components/layout/FooterComponent/FooterC";
import TurnSpecialist from "./page/TurnSpecialist";
import TurnUser from "./page/TurnUser";
import Eror404 from "./page/Eror404";
import MedicalAppointment from "./page/MedicalAppointment";
import MakeAppointment from "./page/MakeAppointment";

import RutaProtegida from "./utils/RutasProtegidas";
import WorikingPage from "./page/WorikingPage";
import "./App.css";

function App() {
  return (
    <Router>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inicio-de-sesion" element={<LoginForm />} />
        <Route path="/pagina-registro" element={<RegisterPage />} />
        <Route
          path="/detalle-especialista/:nombre"
          element={<SpecialistDetailsPage />}
        />

        <Route
          path="/pagina-de-usuario"
          element={
            <RutaProtegida>
              <UserPage />
            </RutaProtegida>
          }
         <Route path="/trabaja-con-nosotros" element={<WorikingPage />} />
        />
        <Route
          path="/pagina-de-administrador"
          element={
            <RutaProtegida>
              <AdminPage />
            </RutaProtegida>
          }
        />
        <Route
          path="/pagina-de-turnos"
          element={
            <RutaProtegida>
              <MakeAppointment />
            </RutaProtegida>
          }
        />
        <Route
          path="/pagina-especialista"
          element={
            <RutaProtegida>
              <SpecialistPage />
            </RutaProtegida>
          }
        />
        <Route
          path="/turnos-usuarios/:id"
          element={
            <RutaProtegida>
              <TurnSpecialist />
            </RutaProtegida>
          }
        />
        <Route
          path="/turnos-especialidades/:nombre"
          element={
            <RutaProtegida>
              <TurnUser />
            </RutaProtegida>
          }
        />
        <Route
          path="/pagina-de-turnos/:nombre"
          element={
            <RutaProtegida>
              <MedicalAppointment />
            </RutaProtegida>
          }
        />

        <Route path="/*" element={<Eror404 />} />
      </Routes>
      <FooterC />
    </Router>
  );
}

export default App;
