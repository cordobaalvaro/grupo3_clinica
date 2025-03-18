import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";
import NavbarPage from "./components/layout/navbarComponent/NavbarIdPage";

import "./App.css";
import HomePage from "./page/HomePage";
import SpecialistDetailsPage from "./page/SpecialistDetailsPage";
import SpecialistPage from "./page/SpecialistPage";

function App() {
  return (
    <Router>
      <NavbarPage idPage='administrador' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/registerpage' element={<RegisterPage />} />
        <Route path='/detalle-especialista' element={<SpecialistDetailsPage />} />
        <Route path='/pagina-especialista' element={<SpecialistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
