import axios from 'axios';

// The base URL should match your backend server
const API_URL = 'http://localhost:3000/api/user';

// Create axios instance with default config
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const authService = {
    login: async (credentials, role) => {
        try {
            console.log('Attempting login with:', { ...credentials, role });
            const response = await api.post(`/login/${role}`, credentials);
            console.log('Login response:', response.data);
            
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            console.error('Login error:', error.response?.data || error.message);
            throw error.response?.data || { message: 'An error occurred during login' };
        }
    },

    register: async (userData, role) => {
        try {
            console.log('Attempting registration with:', { ...userData, role });
            const response = await api.post(`/register/${role}`, userData);
            console.log('Registration response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Registration error:', error.response?.data || error.message);
            throw error.response?.data || { message: 'An error occurred during registration' };
        }
    },

    // Google OAuth methods
    googleAuth: async (googleToken, role) => {
        try {
            console.log('Attempting Google auth with role:', role);
            const response = await api.post(`/google-auth/${role}`, { 
                googleToken,
                role 
            });
            console.log('Google auth response:', response.data);
            
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            console.error('Google auth error:', error.response?.data || error.message);
            throw error.response?.data || { message: 'An error occurred during Google authentication' };
        }
    },

    verifyOtp: async ({ email, otp, role }) => {
        try {
            console.log('Verifying OTP for:', { email, role });
            const response = await api.post(`/register/${role}/otp-verify`, { email, otp });
            console.log('OTP verification response:', response.data);
            return response.data;
        } catch (error) {
            console.error('OTP verification error:', error.response?.data || error.message);
            throw error.response?.data || { message: 'Failed to verify OTP' };
        }
    },

    resendOtp: async (email, role) => {
        try {
            console.log('Resending OTP to:', { email, role });
            const response = await api.post(`/resend-otp/${role}`, { email });
            console.log('Resend OTP response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Resend OTP error:', error.response?.data || error.message);
            throw error.response?.data || { message: 'Failed to resend OTP' };
        }
    },

    logout: () => {
        localStorage.removeItem('user');
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    }
};

export default authService; 