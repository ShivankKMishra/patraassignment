"use client"; // Add this at the top of the file

import Link from 'next/link';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import './page.css'; // Import the CSS file

export default function Register() {
  return (
    <div className="register-container">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Form Container */}
      <div className="form-container">
        <h3 className="text-white text-lg text-center  tagline  lg:text-xs">Journey to a trillion miles starts from here!!</h3>
        <div className="form-box">
          <h2 className="text-2xl font-bold text-center text-white">Sign up</h2>
          <h5 className="flex justify-center pb-16">Choose a sign up method</h5> 
          <div className="space-y-6">
            <button
              className="w-full px-4 py-2 flex items-center justify-center space-x-2 text-white bg-[#192734] border-2 border-[#425568] rounded-md shadow-sm hover:bg-[#192734] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#425568]"
            >
              <img className="h-6 w-6" src="/Icon/google.svg" alt="Google icon"/> 
              <span>Sign in with Google</span>
            </button>
            <Link href="/auth/login">
              <button
                className="w-full my-5 px-4 py-2 flex items-center justify-center space-x-2 text-white bg-[#192734] border-2 border-[#425568] rounded-md shadow-sm hover:bg-[#192734] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#425568]"
              >
                <EmailRoundedIcon />
                <span>Sign up with Email</span>
              </button>
            </Link>
          </div>
          <p className="text-sm pt-5 text-center text-gray-400">
            Already have an account? <Link href="/login" className="text-indigo-600 hover:text-indigo-500">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
