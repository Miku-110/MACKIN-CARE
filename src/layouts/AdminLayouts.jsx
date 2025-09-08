import React from 'react';
import { Outlet } from 'react-router-dom';
// Pastikan path ke komponen Sidebar Anda sudah benar
// Sesuaikan jika folder Anda berbeda, misalnya './components/Sidebar'
import Sidebar from '../components/Sidebar'; 

function AdminLayout() {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar akan diposisikan secara fixed di kiri */}
      <Sidebar />

      {/* Konten utama dengan margin kiri seukuran lebar sidebar (w-64 -> ml-64) */}
      <main className="ml-64">
        {/* Outlet akan merender komponen halaman (Dashboard, Dokter, Pasien) */}
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;


