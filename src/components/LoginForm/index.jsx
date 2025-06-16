import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [role, setRole] = useState('donor'); // Default role
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { message, email } = location.state || {};

  // If email is provided from registration, pre-fill it
  React.useEffect(() => {
    if (email) {
      setFormData(prev => ({ ...prev, email }));
    }
  }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData, role);
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (err) {
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="w-full mt-6" onSubmit={handleSubmit}>
      {message && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {message}
        </div>
      )}
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {/* Role Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Login as<span className="text-orange-400">*</span></label>
        <select
          value={role}
          onChange={handleRoleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 text-base"
        >
          <option value="donor">Donor</option>
          <option value="ngo">NGO</option>
        </select>
      </div>

      {/* Social login buttons */}
      <div className="flex gap-4 mb-6">
        <button type="button" className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2 font-medium text-gray-700 hover:bg-gray-50 transition">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          Log in with Facebook
        </button>
        <button type="button" className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2 font-medium text-gray-700 hover:bg-gray-50 transition">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.36 1.53 7.82 2.81l5.75-5.75C34.64 3.54 29.74 1.5 24 1.5 14.98 1.5 6.98 7.98 3.68 16.44l6.68 5.19C12.08 15.08 17.56 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.5c0-1.64-.15-3.22-.42-4.74H24v9.04h12.42c-.54 2.9-2.18 5.36-4.66 7.04l7.18 5.59C43.98 37.02 46.1 31.22 46.1 24.5z"/><path fill="#FBBC05" d="M10.36 28.13A14.5 14.5 0 019.5 24c0-1.43.24-2.81.66-4.13l-6.68-5.19A23.94 23.94 0 001.5 24c0 3.77.9 7.34 2.48 10.47l6.68-5.19z"/><path fill="#EA4335" d="M24 46.5c6.48 0 11.92-2.14 15.89-5.82l-7.18-5.59c-2.01 1.35-4.6 2.16-8.71 2.16-6.44 0-11.92-5.58-13.64-12.94l-6.68 5.19C6.98 40.02 14.98 46.5 24 46.5z"/></g></svg>
          Log in with Google
        </button>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email<span className="text-orange-400">*</span></label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 text-base placeholder-gray-400"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Password */}
      <div className="mb-2">
        <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password<span className="text-orange-400">*</span></label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-900 text-base placeholder-gray-400"
          placeholder="Enter a password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {/* Forgot password */}
      <div className="mb-6 text-right">
        <Link to="/forgot-password" className="text-sm text-orange-500 font-medium hover:underline">Forgot your password?</Link>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 rounded-full text-lg transition mb-3 shadow-md ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Logging in...' : 'Log in'}
      </button>

      {/* Sign up link */}
      <div className="text-center text-gray-700 text-base">
        Not a member?{' '}
        <Link to="/signup" className="text-orange-500 font-semibold hover:underline">Sign Up</Link>
      </div>
    </form>
  );
};

export default LoginForm; 