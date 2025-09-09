import React, { useState, useEffect } from 'react';
import DokterLayouts from '../../layouts/DokterLayouts';
import { jadwalAwal } from '../../data/mockJadwal'; // Import data

const JadwalPage = () => {
  const [semuaJadwal, setSemuaJadwal] = useState([]);
  const [jadwalTampil, setJadwalTampil] = useState([]);
  const [filterAktif, setFilterAktif] = useState('semua');

  // Load data saat komponen pertama kali render
  useEffect(() => {
    setSemuaJadwal(jadwalAwal);
    setJadwalTampil(jadwalAwal);
  }, []);

  // Fungsi untuk filter jadwal
  const handleFilter = (status) => {
    setFilterAktif(status);
    if (status === 'semua') {
      setJadwalTampil(semuaJadwal);
    } else {
      const jadwalTerfilter = semuaJadwal.filter(j => j.status === status);
      setJadwalTampil(jadwalTerfilter);
    }
  };
  
  // Komponen kecil untuk badge status
  const StatusBadge = ({ status }) => {
    const styles = {
      completed: 'bg-green-100 text-green-800',
      waiting: 'bg-yellow-100 text-yellow-800',
      upcoming: 'bg-blue-100 text-blue-800',
    };
    const text = {
      completed: 'Selesai',
      waiting: 'Menunggu',
      upcoming: 'Akan Datang',
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
        {text[status]}
      </span>
    );
  };
  
  return (
    <DokterLayouts pageTitle="Jadwal Konsultasi">
      <div className="bg-white p-6 rounded-xl shadow-md">
        {/* Tombol Filter */}
        <div className="flex space-x-2 mb-4 border-b pb-4">
          <button onClick={() => handleFilter('semua')} className={`px-4 py-2 rounded-lg text-sm font-semibold ${filterAktif === 'semua' ? 'bg-halodoc-blue text-white' : 'bg-gray-100 text-gray-700'}`}>Semua</button>
          <button onClick={() => handleFilter('waiting')} className={`px-4 py-2 rounded-lg text-sm font-semibold ${filterAktif === 'waiting' ? 'bg-halodoc-blue text-white' : 'bg-gray-100 text-gray-700'}`}>Menunggu</button>
          <button onClick={() => handleFilter('upcoming')} className={`px-4 py-2 rounded-lg text-sm font-semibold ${filterAktif === 'upcoming' ? 'bg-halodoc-blue text-white' : 'bg-gray-100 text-gray-700'}`}>Akan Datang</button>
          <button onClick={() => handleFilter('completed')} className={`px-4 py-2 rounded-lg text-sm font-semibold ${filterAktif === 'completed' ? 'bg-halodoc-blue text-white' : 'bg-gray-100 text-gray-700'}`}>Selesai</button>
        </div>

        {/* Tabel Jadwal */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-sm text-halodoc-gray uppercase bg-halodoc-light">
              <tr>
                <th className="p-4">Pasien</th>
                <th className="p-4">Tanggal</th>
                <th className="p-4">Waktu</th>
                <th className="p-4">Status</th>
                <th className="p-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {jadwalTampil.map(jadwal => (
                <tr key={jadwal.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold text-halodoc-dark">{jadwal.namaPasien}</td>
                  <td className="p-4 text-halodoc-gray">{jadwal.tanggal}</td>
                  <td className="p-4 text-halodoc-gray">{jadwal.waktu}</td>
                  <td className="p-4"><StatusBadge status={jadwal.status} /></td>
                  <td className="p-4">
                    <button className="text-halodoc-blue font-semibold text-sm">Lihat Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {jadwalTampil.length === 0 && (
            <p className="text-center py-8 text-halodoc-gray">Tidak ada jadwal untuk kategori ini.</p>
          )}
        </div>
      </div>
    </DokterLayouts>
  );
};

export default JadwalPage;