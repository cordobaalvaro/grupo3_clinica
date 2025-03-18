import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";
import NavbarPage from "./components/layout/NavbarIdPage";

import "./App.css";
import HomePage from "./page/HomePage";

function App() {
  return (
    <Router>
      <NavbarPage idPage='administrador' />
      <Routes>
        <Route path='/registerpage' element={<RegisterPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
