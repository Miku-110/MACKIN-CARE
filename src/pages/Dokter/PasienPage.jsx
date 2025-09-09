import React, { useState, useEffect } from 'react';
import DokterLayouts from '../../layouts/DokterLayouts';
import { daftarPasien } from '../../data/mockPasien'; // Import data
import { FiSearch } from 'react-icons/fi';

const PasienPage = () => {
  const [semuaPasien, setSemuaPasien] = useState([]);
  const [pasienTampil, setPasienTampil] = useState([]);
  const [kataKunci, setKataKunci] = useState('');

  // Load data
  useEffect(() => {
    setSemuaPasien(daftarPasien);
    setPasienTampil(daftarPasien);
  }, []);
  
  // Efek untuk melakukan pencarian setiap kali kata kunci berubah
  useEffect(() => {
    const hasil = semuaPasien.filter(pasien => 
      pasien.nama.toLowerCase().includes(kataKunci.toLowerCase())
    );
    setPasienTampil(hasil);
  }, [kataKunci, semuaPasien]);

  return (
    <DokterLayouts pageTitle="Pasien Saya">
      <div className="bg-white p-6 rounded-xl shadow-md">
        {/* Header dengan Search Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-halodoc-dark">Daftar Pasien</h2>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-halodoc-gray" />
            <input 
              type="text"
              placeholder="Cari nama pasien..."
              value={kataKunci}
              onChange={(e) => setKataKunci(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-halodoc-blue"
            />
          </div>
        </div>

        {/* Grid Kartu Pasien */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pasienTampil.map(pasien => (
            <div key={pasien.id} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <img src={pasien.avatar} alt={pasien.nama} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-lg text-halodoc-dark">{pasien.nama}</h3>
                  <p className="text-sm text-halodoc-gray">{pasien.usia} tahun, {pasien.jenisKelamin}</p>
                </div>
              </div>
              <p className="text-sm text-halodoc-gray mb-4">
                Konsultasi terakhir: <span className="font-medium text-halodoc-dark">{pasien.terakhirKonsultasi}</span>
              </p>
              <button className="w-full bg-halodoc-light text-halodoc-blue font-semibold py-2 rounded-lg hover:bg-blue-100 transition-colors">
                Lihat Rekam Medis
              </button>
            </div>
          ))}
        </div>
         {pasienTampil.length === 0 && (
            <p className="text-center py-12 text-halodoc-gray">Pasien tidak ditemukan.</p>
          )}
      </div>
    </DokterLayouts>
  );
};

export default PasienPage;