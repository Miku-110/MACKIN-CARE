// src/components/dokter/SidebarDokter.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // DIUBAH: import Link dan useLocation
import { FiHome, FiCalendar, FiUsers, FiLogOut, FiSettings } from 'react-icons/fi';

const SidebarDokter = () => {
  const location = useLocation(); // BARU: Hook untuk mendapatkan path URL saat ini

  const NavItem = ({ icon, label, href }) => {
    const isActive = location.pathname === href; // BARU: Cek apakah link ini aktif

    return (
      <Link 
        to={href} 
        className={`flex items-center p-3 rounded-lg transition-colors duration-200
          ${isActive 
            ? 'bg-halodoc-light text-halodoc-blue' // Style untuk link aktif
            : 'text-halodoc-gray hover:bg-halodoc-light hover:text-halodoc-blue' // Style normal
          }`
        }
      >
        {icon}
        <span className="ml-4 font-semibold">{label}</span>
      </Link>
    );
  };

  return (
    <aside className="w-64 bg-white h-screen flex flex-col p-4 border-r border-gray-200 fixed top-0 left-0">
      <div className="text-2xl font-bold text-halodoc-blue mb-10 pl-3">
        Mitra Dokter
      </div>
      <nav className="flex-grow space-y-2"> {/* DIUBAH: tambah space-y-2 */}
        <NavItem icon={<FiHome size={20} />} label="Dashboard" href="/dokter/dashboard" />
        <NavItem icon={<FiCalendar size={20} />} label="Jadwal Konsultasi" href="/dokter/jadwal" />
        <NavItem icon={<FiUsers size={20} />} label="Pasien Saya" href="/dokter/pasien" />
        <NavItem icon={<FiSettings size={20} />} label="Pengaturan" href="#" />
      </nav>
      <div className="mt-auto">
        <NavItem icon={<FiLogOut size={20} />} label="Log Out" href="/login/dokter" />
      </div>
    </aside>
  );
};

export default SidebarDokter;