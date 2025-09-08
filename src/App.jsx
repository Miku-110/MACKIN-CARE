import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginAdminPage from './pages/LoginAdminPage';
import LoginDokterPage from './pages/LoginDokterPage';
import RegisterAdminPage from './pages/RegisterAdminPage';
import RegisterDokterPage from './pages/RegisterDokterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login/admin" element={<LoginAdminPage />} />
      <Route path="/login/dokter" element={<LoginDokterPage />} />
      <Route path="/register/admin" element={<RegisterAdminPage />} />
      <Route path="/register/dokter" element={<RegisterDokterPage />} />
    </Routes>
  );
}

export default App;