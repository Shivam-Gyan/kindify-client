import axios from "axios";


const API_URL = import.meta.env.VITE_BACKEND_URI || "http://localhost:3000/api";

const token = localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZhbWd1cHRhMTlhQGdtYWlsLmNvbSIsInJvbGUiOiJkb25vciIsImlhdCI6MTc1MDE1ODg4MSwiZXhwIjoxNzUwMjQ1MjgxfQ.Xz-lRY9nNBu2_mwLoRx3_khh7PG6V6CkZL-vn4KYfh8'



const donorDatabaseService = {

    uploadProfileImage:async(image) => {
        try {
            const response = await axios.post(`${API_URL}/user/upload-profile-picture`, {image}, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` // Assuming you store the token in localStorage
            }});
            return response.data;
        } catch (error) {
            console.error("Error uploading profile image:", error);
            throw error;
        }
    },
    updateDonorPersonalInformation: async (formatedPersonalInformation) => {
        try {
            const response = await axios.post(`${API_URL}/donor/update-personal-information`, formatedPersonalInformation, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Assuming you store the token in localStorage
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error updating personal information:", error);
            throw error;
        }
    },
    updateDonorPassword: async (formatedPassword) => {
        try {
            const response = await axios.post(`${API_URL}/user/update-password`, formatedPassword, {
                headers: {
                    'Content-Type': 'application/json',
                   'Authorization': `Bearer ${token}` // Assuming you store the token in localStorage
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error updating password:", error);
            throw error;
        }
    },

    deleteDonorAccount: async () => {
        try {
            const response = await axios.delete(`${API_URL}/user/delete-account`, {
                headers: {
                    'Content-Type': 'application/json',
                   'Authorization': `Bearer ${token}` // Assuming you store the token in localStorage
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error deleting donor account:", error);
            throw error;
        }
    }
}


export default donorDatabaseService;