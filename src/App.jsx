import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginAdminPage from './pages/LoginAdminPage';
import LoginDokterPage from './pages/LoginDokterPage';
import RegisterAdminPage from './pages/RegisterAdminPage';
import RegisterDokterPage from './pages/RegisterDokterPage';
import DashboardAdmin from './pages//Admin/Dashboard';
import DataDokter from './pages/Admin/Dokter';
import DataPasien from './pages/Admin/Pasien';
import AdminLayout from './layouts/AdminLayouts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login/admin" element={<LoginAdminPage />} />
      <Route path="/login/dokter" element={<LoginDokterPage />} />
      <Route path="/register/admin" element={<RegisterAdminPage />} />
      <Route path="/register/dokter" element={<RegisterDokterPage />} />
       {/* Grup 2: Rute Admin (Dengan Sidebar) */}
        {/* Semua rute di dalam grup ini akan menggunakan AdminLayout sebagai kerangkanya */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Saat URL adalah "/admin", komponen Dashboard akan dirender di dalam <Outlet /> */}
          <Route index element={<DashboardAdmin />} /> 
          
          {/* Saat URL adalah "/admin/dokter", komponen Dokter akan dirender di dalam <Outlet /> */}
          <Route path="dokter" element={<DataDokter />} />

          {/* Saat URL adalah "/admin/pasien", komponen Pasien akan dirender di dalam <Outlet /> */}
          <Route path="pasien" element={<DataPasien />} />
        </Route>

        {/* Opsional: Halaman 404 Not Found */}
        <Route path="*" element={<h1>404: Halaman Tidak Ditemukan</h1>} />
    </Routes>
  );
}

export default App;