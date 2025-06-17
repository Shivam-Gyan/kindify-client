import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';
import Home from './pages/Home/Home';
import Headers from './components/Auth/header';
import DonorDashboard from './pages/Dashboard/donor.dashborad';
import { DonorDashboardContent, DonorSettingsContent } from './components';
import { Toaster } from 'react-hot-toast';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

function AppContent() {
  return (
      <Routes>
       
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-dashboard" element={<DonorDashboard />} >
          <Route path='setting' element={<DonorSettingsContent/>} />
          <Route path='dashboard' element={<DonorDashboardContent/>} />


        </Route>

      <Route path="/verify-email" element={<VerifyEmail />} />
        <Route
          path="/*"
          element={
          <ProtectedRoute>
            <>
              <Headers />
              <div className="relative bg-white">
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                  <svg viewBox="0 0 1440 120" fill="#0A2A5C" xmlns="http://www.w3.org/2000/svg" className="w-full h-32">
                    <path
                      d="M0,80 C480,160 960,0 1440,80 L1440,120 L0,120 Z"
                      fill="#0A2A5C"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <Home />
                </div>
              </div>
            </>
          </ProtectedRoute>
          }
        />
      </Routes>
  );
}

function App() {
  return (
    <Router>
       <Toaster/>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
