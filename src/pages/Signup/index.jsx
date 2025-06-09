import React from 'react';
import SignupForm from '../../components/SignupForm';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl p-8 md:p-16">
        {/* Left: Signup Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-2">Sign Up<span className="text-orange-400">.</span></h2>
          <SignupForm />
        </div>
        {/* Right: Image */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Happy children"
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup; 