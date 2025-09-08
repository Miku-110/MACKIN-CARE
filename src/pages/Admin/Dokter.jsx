import React, { useState } from 'react';

// Data dummy, nantinya bisa diganti dengan data dari API/Supabase
const initialDataDokter = [
  { id: 1, nama: 'Dr. Budi Santoso', spesialis: 'Jantung', jadwal: 'Senin, Rabu (08:00 - 12:00)', avatar: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=BS' },
  { id: 2, nama: 'Dr. Citra Lestari', spesialis: 'Anak', jadwal: 'Selasa, Kamis (10:00 - 14:00)', avatar: 'https://placehold.co/100x100/F472B6/FFFFFF?text=CL' },
  { id: 3, nama: 'Dr. Adi Nugroho', spesialis: 'Gigi', jadwal: 'Jumat (09:00 - 15:00)', avatar: 'https://placehold.co/100x100/10B981/FFFFFF?text=AN' },
  { id: 4, nama: 'Dr. Dewi Anggraini', spesialis: 'Kulit', jadwal: 'Senin, Kamis (13:00 - 17:00)', avatar: 'https://placehold.co/100x100/8B5CF6/FFFFFF?text=DA' },
  { id: 5, nama: 'Dr. Eko Prasetyo', spesialis: 'THT', jadwal: 'Rabu (16:00 - 20:00)', avatar: 'https://placehold.co/100x100/F59E0B/FFFFFF?text=EP' },
];

// Komponen Ikon SVG untuk digunakan di tombol
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
  </svg>
);

const DeleteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

function Dokter() {
  const [dataDokter, setDataDokter] = useState(initialDataDokter);

  // Fungsi untuk menghapus dokter (saat ini hanya di state)
  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      setDataDokter(dataDokter.filter(d => d.id !== id));
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Manajemen Data Dokter
        </h1>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          <span>Tambah Dokter</span>
        </button>
      </div>

      {/* Kontainer Tabel */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">Nama Dokter</th>
                <th scope="col" className="px-6 py-3">Spesialis</th>
                <th scope="col" className="px-6 py-3">Jadwal Praktek</th>
                <th scope="col" className="px-6 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataDokter.map((dokter) => (
                <tr key={dokter.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <img className="w-10 h-10 rounded-full object-cover" src={dokter.avatar} alt={dokter.nama} />
                      <span>{dokter.nama}</span>
                    </div>
                  </th>
                  <td className="px-6 py-4">{dokter.spesialis}</td>
                  <td className="px-6 py-4">{dokter.jadwal}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center space-x-4">
                      <button className="text-blue-500 hover:text-blue-700 transition-colors" aria-label="Edit">
                        <EditIcon />
                      </button>
                      <button onClick={() => handleDelete(dokter.id)} className="text-red-500 hover:text-red-700 transition-colors" aria-label="Hapus">
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dokter;
