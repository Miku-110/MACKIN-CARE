import React from 'react';
import { Link } from 'react-router-dom';

// SVG Icons for aesthetic touch
const AdminIcon = () => (
  <svg className="size-16 text-slate-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
);

const DoctorIcon = () => (
  <svg className="size-16 text-slate-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);


export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.15)_0%,_transparent_50%)]"></div>
      
      <div className="text-center z-10 mb-12">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">
        Selamat Datang di MACKIN Care
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Silakan pilih peran Anda untuk melanjutkan ke halaman login atau pendaftaran.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl z-10">
        {/* Admin Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 flex flex-col items-center text-center transform hover:scale-105 hover:border-sky-500 transition-all duration-300">
          <AdminIcon />
          <h2 className="text-3xl font-semibold text-slate-100">Saya seorang Admin</h2>
          <p className="text-slate-400 mt-2 mb-6">Akses panel administrasi untuk mengelola sistem.</p>
          <div className="flex items-center gap-4">
            <Link to="/login/admin" className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-500 transition-colors">
              Login
            </Link>
            <Link to="/register/admin" className="px-6 py-2 bg-slate-700 text-slate-200 font-semibold rounded-lg hover:bg-slate-600 transition-colors">
              Register
            </Link>
          </div>
        </div>

        {/* Doctor Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 flex flex-col items-center text-center transform hover:scale-105 hover:border-teal-500 transition-all duration-300">
          <DoctorIcon />
          <h2 className="text-3xl font-semibold text-slate-100">Saya seorang Dokter</h2>
          <p className="text-slate-400 mt-2 mb-6">Masuk ke dasbor Anda untuk melihat jadwal dan data pasien.</p>
          <div className="flex items-center gap-4">
            <Link to="/login/dokter" className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500 transition-colors">
              Login
            </Link>
            <Link to="/register/dokter" className="px-6 py-2 bg-slate-700 text-slate-200 font-semibold rounded-lg hover:bg-slate-600 transition-colors">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}