import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import authService from '../services/auth.service';
import ngoDatabaseServices from '../databaseService/ngo.database.service';
import { use } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [NgoByFilter, setNgoByFilter] = useState([]);
  const [ngos, setNgos] = useState([]); // optional: full NGO data if needed

  // Fetch user profile on app load
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setLoading(false);
          return;
        }

        const data = await authService.getUserProfile();
        console.log('Fetched user profile:', data);
        setUser(data);
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    
  }, []);

  const fetchNgos = useCallback(async () => {
    try {
      const params = {
        country: '',
        state: '',
        city: '',
        category: [],
        certified: null,
      };
      setLoading(true);
      const data = await ngoDatabaseServices.filterNgo(params);
      setNgoByFilter(data);
      console.log('Fetched NGOs:', data);
      setNgos(data.data || []); // Assuming data is in data.data
      setError('');
    } catch (err) {
      console.error('Error fetching NGOs:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    // Fetch NGOs with default filters on initial load
    fetchNgos();
  }, [ fetchNgos]);

  // Login function
  const login = async (credentials, role) => {
    try {
      setError(null);
      const data = await authService.login(credentials, role);
      setUser(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Google login function
  const googleAuth = async (googleToken, role) => {
    try {
      setError(null);
      const data = await authService.googleAuth(googleToken, role);
      setUser(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Logout function
  const logout = () => {
    authService.logout();
    setUser(null);
    localStorage.removeItem('token');
    window.location.href = '/'; // Optional: redirect on logout
  };

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    error,
    setError,
    login,
    googleAuth,
    NgoByFilter,
    setNgoByFilter,
    ngos,
    setNgos,
    fetchNgos, // renamed from `ngos` to `fetchNgos` for clarity
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="p-8 text-center text-gray-500">Loading...</div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
