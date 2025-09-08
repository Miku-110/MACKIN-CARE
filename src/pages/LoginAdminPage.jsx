import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import doctorImage from 'C:/Users/Kirouch Alqornie Gym/Documents/Kuliah/Semester 6/PKN/Tahap/Tahap 1/MACKIN-CARE/src/assets/admin.jpg';
// --- SVG Icon Components ---
const HidePasswordIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
    </svg>
);

const ShowPasswordIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const FacebookIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const GoogleIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.956 0 8.522-3.469 8.522-8.753 0-.638-.057-1.25-.157-1.853z" />
    </svg>
);


export default function LoginAdminPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          background-color: #f8fafc; // bg-slate-50
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-5xl mx-auto lg:grid lg:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden bg-white">
          
          {/* --- Bagian Form --- */}
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <div className="w-full max-w-md mx-auto">
              
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Log in to your account</h1>
                <p className="mt-3 text-slate-600">
                  Welcome Admin! Please enter your details.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
                  <div className="relative mt-1">
                    <input
                      type={isPasswordVisible ? 'text' : 'password'}
                      id="password"
                      name="password"
                      className="block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 px-4 flex items-center text-sm font-semibold text-slate-600 hover:text-indigo-500">
                      {isPasswordVisible ? <HidePasswordIcon className="h-5 w-5 mr-1.5" /> : <ShowPasswordIcon className="h-5 w-5 mr-1.5" />}
                      {isPasswordVisible ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button type="submit" className="w-full sm:w-auto px-10 py-3 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                    Log in
                  </button>
                  <a href="#" className="font-semibold text-sm text-indigo-600 hover:text-indigo-500">
                    Forget your password?
                  </a>
                </div>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-slate-500">Or log in with</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="#" className="flex items-center justify-center w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                  <FacebookIcon className="w-5 h-5 mr-3" />
                  Facebook
                </a>
                <a href="#" className="flex items-center justify-center w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                  <GoogleIcon className="w-5 h-5 mr-3" />
                  Google
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-600">Don't have an account?</p>
                <Link to="/" className="inline-block mt-2 px-8 py-3 border border-slate-300 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                  Choose your role to register
                </Link>
              </div>

            </div>
          </div>
          
          {/* --- Bagian Gambar --- */}
          <div className="hidden lg:flex items-center justify-center bg-indigo-500">
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