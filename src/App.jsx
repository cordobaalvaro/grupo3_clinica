import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterPage from "./page/RegisterPage";

import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App;
