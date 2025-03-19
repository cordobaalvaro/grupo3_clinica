import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";
import NavbarPage from "./components/layout/navbarComponent/NavbarIdPage";

import "./App.css";
import HomePage from "./page/HomePage";
import SpecialistDetailsPage from "./page/SpecialistDetailsPage";
import SpecialistPage from "./page/SpecialistPage";
import FooterC from "./components/layout/FooterComponent/FooterC";

function App() {
  return (
    <Router>
      <NavbarPage idPage="administrador" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pagina-registro" element={<RegisterPage />} />
        <Route
          path="/detalle-especialista/:nombre"
          element={<SpecialistDetailsPage />}
        />
        <Route path="/pagina-especialista" element={<SpecialistPage />} />
      </Routes>
      <FooterC />
    </Router>
  );
}

export default App;
