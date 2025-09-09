// src/pages/Dokter/DashboardDokter.jsx
import React, { useState, useEffect } from 'react'; // DIUBAH: import hooks
import DokterLayouts from '../../layouts/DokterLayouts';
import StatCard from '../../components/dokter/StatCard';
import { FiUserCheck, FiClock, FiMessageSquare } from 'react-icons/fi';
import { jadwalAwal } from '../../data/mockJadwal'; // BARU: import mock data

const DashboardDokter = () => {
  // BARU: State untuk menyimpan data jadwal
  const [jadwal, setJadwal] = useState([]);
  const [statistik, setStatistik] = useState({
    totalHariIni: 0,
    menunggu: 0,
    pesanBelumDibaca: 8, // Anggap ini data statis dulu
  });

  // BARU: useEffect untuk "mengambil" data saat komponen pertama kali render
  useEffect(() => {
    // Simulasi pengambilan data dari API
    setJadwal(jadwalAwal);
  }, []);
  
  // BARU: useEffect untuk menghitung ulang statistik setiap kali data jadwal berubah
  useEffect(() => {
    const total = jadwal.length;
    const menunggu = jadwal.filter(j => j.status === 'waiting').length;
    
    setStatistik(prev => ({ ...prev, totalHariIni: total, menunggu: menunggu }));
  }, [jadwal]);

  // BARU: Fungsi untuk menangani klik tombol
  const handleMulaiKonsultasi = (id) => {
    setJadwal(prevJadwal =>
      prevJadwal.map(j =>
        j.id === id ? { ...j, status: 'in-progress' } : j
      )
    );
    alert(`Konsultasi dengan ${jadwal.find(j => j.id === id).namaPasien} dimulai!`);
  };

  // Komponen kecil untuk tombol yang dinamis
  const TombolAksi = ({ jadwalItem }) => {
    if (jadwalItem.status === 'waiting') {
      return (
        <button 
          onClick={() => handleMulaiKonsultasi(jadwalItem.id)}
          className="bg-halodoc-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
          Mulai Konsultasi
        </button>
      );
    }
    if (jadwalItem.status === 'in-progress') {
      return (
         <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold cursor-not-allowed">
          Sedang Berlangsung
        </button>
      );
    }
    return (
      <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-semibold cursor-not-allowed">
        Menunggu
      </button>
    );
  };
  
  return (
    <DokterLayouts pageTitle="Dashboard">
      {/* Bagian Statistik - Sekarang dinamis */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard 
          icon={<FiUserCheck size={24} className="text-white"/>} 
          value={statistik.totalHariIni} 
          label="Konsultasi Hari Ini"
          color="bg-blue-500"
        />
        <StatCard 
          icon={<FiClock size={24} className="text-white"/>} 
          value={statistik.menunggu} 
          label="Menunggu Antrian"
          color="bg-yellow-500"
        />
        <StatCard 
          icon={<FiMessageSquare size={24} className="text-white"/>} 
          value={statistik.pesanBelumDibaca} 
          label="Pesan Belum Dibaca"
          color="bg-red-500"
        />
      </div>

      {/* Bagian Jadwal - Sekarang di-render dari state */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-bold text-halodoc-dark mb-4">Jadwal Konsultasi Berikutnya</h2>
        <div className="space-y-2">
          {jadwal
            .filter(j => j.status !== 'completed') // Hanya tampilkan yang belum selesai
            .map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
                <div>
                  <p className="font-semibold">{item.namaPasien}</p>
                  <p className="text-sm text-halodoc-gray">{item.waktu}</p>
                </div>
                <TombolAksi jadwalItem={item} />
              </div>
            ))
          }
        </div>
      </div>
    </DokterLayouts>
  );
};

export default DashboardDokter;