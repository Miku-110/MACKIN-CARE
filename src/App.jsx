import React, { useState, useEffect } from 'react';
import doctorImage from 'C:/Users/Kirouch Alqornie Gym/Documents/Kuliah/Semester 7/PKN/proyek/MACKIN-CARE/src/assets/9bc0ceb83d86f8767d2f02151de1ee7c.jpg';
import { supabase } from './supabaseClient';

// Icon component for the checkmark
const CheckIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// Main App Component
export default function App() {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('doctor'); // Tambahkan state role
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // State for the password input
  const [password, setPassword] = useState('');
  // State to toggle password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  // State object to track all password requirements
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    specialChar: false,
    uppercase: false,
    number: false,
    lowercase: false,
  });

  // Effect to validate password requirements whenever the password changes
  useEffect(() => {
    setPasswordRequirements({
      length: password.length >= 8,
      specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      lowercase: /[a-z]/.test(password),
    });
  }, [password]);

  // Toggles the password visibility between 'text' and 'password'
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Renders a single list item for a password requirement
  const renderRequirement = (text, isMet) => (
    <li className={`flex items-center transition-colors duration-300 ${isMet ? 'text-green-500' : 'text-gray-500'}`}>
      <CheckIcon className={`w-4 h-4 mr-2 p-0.5 rounded-full ${isMet ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`} />
      {text}
    </li>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Validasi password requirements
    if (!Object.values(passwordRequirements).every(Boolean)) {
      setError('Password belum memenuhi semua syarat.');
      setLoading(false);
      return;
    }
    // Registrasi ke Supabase Auth
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username }
      }
    });
    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }
    // Insert ke tabel profiles
    const user = data.user;
    if (user) {
      await supabase
        .from('profiles')
        .insert([
          {
            user_id: user.id,
            nama: username,
            email: email,
            role: role
          }
        ]);
    }
    setError('');
    alert('Akun berhasil dibuat! Silakan cek email untuk verifikasi.');
    setEmail('');
    setUsername('');
    setPassword('');
    setRole('doctor');
    setLoading(false);
  };

  return (
    <>
      {/* --- FONT IMPORT --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      {/* --- MAIN CONTAINER --- */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto lg:grid lg:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
          
          {/* --- FORM SECTION --- */}
          <div className="bg-white p-8 sm:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Welcome Dokter</h1>
                <p className="mt-2 text-gray-600">
                  Already have an account?{' '}
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Log in
                  </a>
                </p>
              </div>

              {/* --- FORM --- */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"
                    required
                  />
                </div>

                {/* Username Input */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"
                    required
                  />
                </div>

                {/* Role Input */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Pilih Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                    required
                  >
                    <option value="admin">Admin</option>
                    <option value="doctor">Doctor</option>
                    <option value="user">User</option>
                  </select>
                </div>

                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative mt-1">
                    <input
                      type={isPasswordVisible ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 px-4 flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500 focus:outline-none"
                    >
                      {isPasswordVisible ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                {/* Password Requirements Checklist */}
                <ul className="space-y-2 text-sm">
                  {renderRequirement('Use 8 or more characters', passwordRequirements.length)}
                  {renderRequirement('One special character', passwordRequirements.specialChar)}
                  {renderRequirement('One uppercase character', passwordRequirements.uppercase)}
                  {renderRequirement('One number', passwordRequirements.number)}
                  {renderRequirement('One lowercase character', passwordRequirements.lowercase)}
                </ul>
                {error && <div className="text-red-500 text-sm">{error}</div>}

                {/* Subscribe Checkbox */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="subscribe"
                      name="subscribe"
                      type="checkbox"
                      defaultChecked
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="subscribe" className="text-gray-600">
                      I want to receive emails about the product, feature updates, events, and marketing promotions.
                    </label>
                  </div>
                </div>

                {/* Terms and Privacy */}
                <p className="text-xs text-gray-500">
                  By creating an account, you agree to the{' '}
                  <a href="#" className="font-medium text-indigo-600 hover:underline">
                    Terms of use
                  </a>{' '}
                  and{' '}
                  <a href="#" className="font-medium text-indigo-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  disabled={loading}
                >
                  {loading ? 'Membuat akun...' : 'Create an account'}
                </button>

                {/* Footer Login Link (for smaller screens) */}
                <p className="text-center text-sm text-gray-600 lg:hidden">
                  Already have an account?{' '}
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Log in
                  </a>
                </p>
              </form>
            </div>
          </div>
          
          {/* --- IMAGE SECTION --- */}
          <div className="hidden lg:flex items-center justify-center bg-indigo-50">
            <img 
              src={doctorImage} 
              alt="A smiling doctor with arms crossed." 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </>
  );
}