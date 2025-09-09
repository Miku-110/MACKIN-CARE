import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase'; // ⬅ import client
import doctorImage from '../assets/admin.jpg';

const CheckIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function RegisterAdminPage() {
  const nav = useNavigate();

  // state untuk form
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    specialChar: false,
    uppercase: false,
    number: false,
    lowercase: false,
  });

  useEffect(() => {
    setPasswordRequirements({
      length: password.length >= 8,
      specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      lowercase: /[a-z]/.test(password),
    });
  }, [password]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const renderRequirement = (text, isMet) => (
    <li className={`flex items-center ${isMet ? 'text-green-500' : 'text-gray-500'}`}>
      <CheckIcon className={`w-4 h-4 mr-2 p-0.5 rounded-full ${isMet ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`} />
      {text}
    </li>
  );

  // 🔑 handler untuk submit form
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // 1) sign up di auth
    const { data: sign, error: signErr } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: username } }
    });
    if (signErr) {
      alert(signErr.message);
      setLoading(false);
      return;
    }

    // 2) insert ke tabel profiles
    const uid = sign.user?.id;
    const { error: pErr } = await supabase.from('profiles').insert([{
      user_id: uid,
      email,
      full_name: username,
      role: 'admin'
    }]);
    if (pErr) {
      alert(pErr.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    alert('Account created! Please log in.');
    nav('/login/admin');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto lg:grid lg:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
        
        {/* FORM */}
        <div className="bg-white p-8 sm:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Create Admin Account</h1>
              <p className="mt-2 text-gray-600">
                Already have an account?{' '}
                <Link to="/login/admin" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Log in
                </Link>
              </p>
            </div>

            {/* FORM INPUTS */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email" id="email" value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text" id="username" value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative mt-1">
                  <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    id="password" value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="block w-full px-4 py-3 border rounded-lg shadow-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-4 flex items-center text-sm font-semibold text-indigo-600"
                  >
                    {isPasswordVisible ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <ul className="space-y-2 text-sm">
                {renderRequirement('Use 8 or more characters', passwordRequirements.length)}
                {renderRequirement('One special character', passwordRequirements.specialChar)}
                {renderRequirement('One uppercase character', passwordRequirements.uppercase)}
                {renderRequirement('One number', passwordRequirements.number)}
                {renderRequirement('One lowercase character', passwordRequirements.lowercase)}
              </ul>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {loading ? 'Creating...' : 'Create an account'}
              </button>
            </form>
          </div>
        </div>

        {/* IMAGE */}
        <div className="hidden lg:flex items-center justify-center bg-indigo-50">
          <img src={doctorImage} alt="Admin panel illustration" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
