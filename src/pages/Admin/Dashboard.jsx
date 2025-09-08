import React from 'react';

// Data dummy, nantinya bisa diganti dengan data dari API/Supabase
const dataDokter = [
  { id: 1, nama: 'Dr. Budi Santoso', spesialis: 'Jantung', avatar: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=BS' },
  { id: 2, nama: 'Dr. Citra Lestari', spesialis: 'Anak', avatar: 'https://placehold.co/100x100/F472B6/FFFFFF?text=CL' },
  { id: 3, nama: 'Dr. Adi Nugroho', spesialis: 'Gigi', avatar: 'https://placehold.co/100x100/10B981/FFFFFF?text=AN' },
  { id: 4, nama: 'Dr. Dewi Anggraini', spesialis: 'Kulit', avatar: 'https://placehold.co/100x100/8B5CF6/FFFFFF?text=DA' },
];

const dataPasien = [
  { id: 101, nama: 'Ahmad Subarjo', avatar: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=AS' },
  { id: 102, nama: 'Siti Aminah', avatar: 'https://placehold.co/100x100/F472B6/FFFFFF?text=SA' },
  { id: 103, nama: 'Rizky Pratama', avatar: 'https://placehold.co/100x100/10B981/FFFFFF?text=RP' },
  { id: 104, nama: 'Lina Marlina', avatar: 'https://placehold.co/100x100/8B5CF6/FFFFFF?text=LM' },
  { id: 105, nama: 'Joko Widodo', avatar: 'https://placehold.co/100x100/F59E0B/FFFFFF?text=JW' },
];

// Komponen Ikon SVG
const DoctorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const PatientIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.781-4.121M12 11c-3.333 0-6 2.686-6 6v1h12v-1c0-3.314-2.667-6-6-6z" />
    </svg>
);


function Dashboard() {
  const totalDokter = dataDokter.length;
  const totalPasien = dataPasien.length;
  const appointmentToday = 12; // Angka dummy

  return (
    <div className="p-4 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header Halaman */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Selamat Datang, Admin!</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Berikut adalah ringkasan aktivitas hari ini.</p>
      </div>

      {/* Grid Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Kartu Total Dokter */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center justify-between transition-transform transform hover:scale-105">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Dokter</p>
            <p className="text-3xl font-bold text-gray-800 dark:text-white">{totalDokter}</p>
          </div>
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
            <DoctorIcon />
          </div>
        </div>

        {/* Kartu Total Pasien */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center justify-between transition-transform transform hover:scale-105">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Pasien</p>
            <p className="text-3xl font-bold text-gray-800 dark:text-white">{totalPasien}</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
            <PatientIcon />
          </div>
        </div>
        
        {/* Kartu Janji Temu Hari Ini */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center justify-between transition-transform transform hover:scale-105">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Janji Temu Hari Ini</p>
            <p className="text-3xl font-bold text-gray-800 dark:text-white">{appointmentToday}</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Daftar Dokter & Pasien Terbaru */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Daftar Dokter Terbaru */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Dokter Terbaru</h2>
          <ul className="space-y-4">
            {dataDokter.slice(0, 3).map(dokter => (
              <li key={dokter.id} className="flex items-center space-x-4">
                <img className="w-10 h-10 rounded-full object-cover" src={dokter.avatar} alt={dokter.nama} />
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-200">{dokter.nama}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{dokter.spesialis}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Daftar Pasien Terbaru */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Pasien Terbaru</h2>
          <ul className="space-y-4">
            {dataPasien.slice(0, 3).map(pasien => (
              <li key={pasien.id} className="flex items-center space-x-4">
                <img className="w-10 h-10 rounded-full object-cover" src={pasien.avatar} alt={pasien.nama} />
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-200">{pasien.nama}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
