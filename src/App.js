import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Login from './views/Auth/Login'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirigir desde "/" a "/login" */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
