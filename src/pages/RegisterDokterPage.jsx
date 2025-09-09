import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import doctorImage from '../assets/halaman/doctor.jpg';

const EyeOpenIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeClosedIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 .946-3.11 3.52-5.448 6.813-6.138M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 2l20 20" />
    </svg>
);


export default function RegisterDokterPage() {
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [hospital, setHospital] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    specialChar: false,
    number: false,
  });

  useEffect(() => {
    setPasswordRequirements({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password),
      number: /[0-9]/.test(password),
    });
  }, [password]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const renderRequirement = (text, isMet) => (
    <span className={`flex items-center transition-colors duration-300 ${isMet ? 'text-green-600' : 'text-gray-500'}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-2 transition-colors duration-300 ${isMet ? 'bg-green-500' : 'bg-gray-400'}`}></span>
      {text}
    </span>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto lg:grid lg:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
          
          {/* --- Bagian Form --- */}
          <div className="bg-white p-8 sm:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Create Doctor Account</h1>
                <p className="mt-2 text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Log in
                  </Link>
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"/>
                </div>

                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                  <input type="text" id="username" name="username" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"/>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="relative mt-1">
                    <input
                      type={isPasswordVisible ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"
                    />
                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 px-3 flex items-center text-sm font-semibold text-gray-600 hover:text-indigo-500 focus:outline-none">
                      {isPasswordVisible ? <EyeClosedIcon className="h-5 w-5" /> : <EyeOpenIcon className="h-5 w-5" />}
                      <span className="ml-2">{isPasswordVisible ? 'Hide' : 'Show'}</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {renderRequirement('Use 8 or more characters', passwordRequirements.length)}
                  {renderRequirement('One uppercase character', passwordRequirements.uppercase)}
                  {renderRequirement('One lowercase character', passwordRequirements.lowercase)}
                  {renderRequirement('One special character', passwordRequirements.specialChar)}
                  {renderRequirement('One number', passwordRequirements.number)}
                </div>

                <div>
                  <label htmlFor="spesialisasi" className="block text-sm font-medium text-gray-700">Spesialisasi</label>
                  <select  
                    id="spesialisasi"  
                    name="spesialisasi"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow">
                    <option value="" disabled>Pilih Spesialisasi</option>
                    <option>Kardiologi (Jantung)</option>
                    <option>Dermatologi (Kulit)</option>
                    <option>Neurologi (Saraf)</option>
                    <option>Pediatri (Anak)</option>
                    <option>Ortopedi (Tulang)</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hospital" className="block text-sm font-medium text-gray-700">Hospital</label>
                  <select  
                    id="hospital"  
                    name="hospital"
                    value={hospital}
                    onChange={(e) => setHospital(e.target.value)}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow">
                    <option value="" disabled>Pilih Rumah Sakit</option>
                    <option>RS Cipto Mangunkusumo, Jakarta</option>
                    <option>RSUP Dr. Sardjito, Yogyakarta</option>
                    <option>RSUD Dr. Soetomo, Surabaya</option>
                    <option>RS Hasan Sadikin, Bandung</option>
                    <option>RS Sanglah, Denpasar</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                  Create an account
                </button>
              </form>
            </div>
          </div>
          
          {/* --- Bagian Gambar --- */}
          <div className="hidden lg:flex items-center justify-center bg-indigo-50 p-12">
            <img  
              src={doctorImage}  
              alt="A smiling doctor with arms crossed."  
              className="w-full h-full object-contain"
            />
          </div>

        </div>
      </div>
    </>
  );
}