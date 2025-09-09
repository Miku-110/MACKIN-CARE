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
import DashboardDokter from './pages/Dokter/DashboardDokter';
import JadwalPage from './pages/Dokter/JadwalPage';
import PasienPage from './pages/Dokter/PasienPage';

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

        <Route path="/dokter/dashboard" element={<DashboardDokter />} />'
        <Route path="/dokter/jadwal" element={<JadwalPage />} /> {/* RUTE BARU */}
        <Route path="/dokter/pasien" element={<PasienPage />} /> {/* RUTE BARU */}
        {/* Tambahkan rute dokter lainnya di sini */}
        {/* Contoh: <Route path="/dokter/jadwal" element={<JadwalDokterPage />} /> */}
    </Routes>
  );
}

export default App;