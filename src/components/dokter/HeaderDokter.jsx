// src/components/dokter/HeaderDokter.jsx
import React from 'react';
import { FiBell, FiSearch } from 'react-icons/fi';

const HeaderDokter = ({ pageTitle }) => {
  return (
    <header className="bg-white p-6 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-2xl font-bold text-halodoc-dark">{pageTitle}</h1>
      <div className="flex items-center space-x-6">
        <FiBell size={24} className="text-halodoc-gray cursor-pointer" />
        <div className="flex items-center space-x-3">
          <img 
            src="/src/assets/dokter.jpg" // Menggunakan gambar dari folder assets Anda
            alt="Doctor Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-halodoc-dark">Dr. Annisa</p>
            <p className="text-sm text-halodoc-gray">Spesialis Anak</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDokter;