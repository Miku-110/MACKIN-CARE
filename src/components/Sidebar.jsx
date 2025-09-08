import React from 'react';
import { NavLink } from 'react-router-dom';

// FIX: Replaced react-icons with inline SVGs to permanently resolve module resolution errors.
// This removes the external dependency and ensures the icons always render.

function Sidebar() {
  // Helper function untuk class NavLink agar bisa mendeteksi state 'active'
  const getNavLinkClass = ({ isActive }) => {
    const baseClasses = "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ease-in-out";
    if (isActive) {
      return `${baseClasses} bg-blue-600 text-white font-semibold shadow-lg`;
    }
    return `${baseClasses} text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700`;
  };

  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-800 shadow-2xl flex flex-col fixed">
      {/* Header Sidebar */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400 tracking-wider">
          MACKIN CARE
        </h2>
      </div>

      {/* Navigasi Utama */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          <li>
            <NavLink to="/admin" end className={getNavLinkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dokter" className={getNavLinkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 11a1 1 0 01-1 1h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 112 0v1h1a1 1 0 011 1z" />
              </svg>
              <span>Data Dokter</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/pasien" className={getNavLinkClass}>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Data Pasien</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Footer Sidebar / Info User */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <img 
            className="w-12 h-12 rounded-full object-cover" 
            src="https://placehold.co/100x100/60A5FA/FFFFFF?text=A" 
            alt="Admin Avatar" 
          />
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-100">Admin</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
          </div>
        </div>
        <button className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-red-50 hover:bg-red-100 dark:bg-red-900 dark:hover:bg-red-800 text-red-600 dark:text-red-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;

