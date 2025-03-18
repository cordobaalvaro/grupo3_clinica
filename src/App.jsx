import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";

import "./App.css";
import HomePage from "./page/HomePage";
import SpecialistDetailsPage from "./page/SpecialistDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/registerpage" element={<RegisterPage />} /> */}
        <Route path="/pagina_especialista" element={<SpecialistDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

