// src/layouts/DokterLayouts.jsx
import React from 'react';
import SidebarDokter from '../components/dokter/SidebarDokter';
import HeaderDokter from '../components/dokter/HeaderDokter';

const DokterLayouts = ({ children, pageTitle }) => {
  return (
    <div className="bg-halodoc-light min-h-screen flex">
      <SidebarDokter />
      <main className="flex-1 ml-64"> {/* ml-64 harus sama dengan lebar sidebar */}
        <HeaderDokter pageTitle={pageTitle} />
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DokterLayouts;