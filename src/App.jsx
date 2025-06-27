import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';
import Home from './pages/Home/Home';
import Headers from './components/Auth/Header';
import DonorDashboard from './pages/Dashboard/donor.dashborad';
import { ContactAndHelpComponent, DonorAccountContent, DonorDashboardContent, DonorDonations, DonorFollowedNGOs, DonorNotifications, DonorSettingsContent, LogoutComponent } from './components';
import { Toaster } from 'react-hot-toast';
import Landing from './pages/Landing/Landing';
import CTAPage from './pages/CTA';
import NGODashboard from './pages/Dashboard/ngo.dashboard';
import {
  NGODashboardContent,
  CampaignsNGO,
  DonationsNGO,
  ImpactReportsNGO,
  MessagesNGO,
  WithdrawalsNGO,
  NotificationsNGO
} from './components';


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
        

        {/* donor dashboard routing */}
        <Route path="/donor-dashboard" element={<DonorDashboard />} >
          <Route path='setting' element={<DonorSettingsContent/>} />
          <Route path='dashboard' element={<DonorDashboardContent/>} />
          <Route path='account' element={<DonorAccountContent/>} />
          <Route path='donations' element={<DonorDonations/>} />
          <Route path='notifications' element={<DonorNotifications/>} />
          <Route path='followed-ngos' element={<DonorFollowedNGOs/>} />
          <Route path='contact&help' element={<ContactAndHelpComponent/>} />
          <Route path='logout' element={<LogoutComponent/>} />
        </Route>

        {/* NGO dashboard routing */}
        <Route path="/ngo-dashboard" element={<NGODashboard />} >
          <Route path='dashboard' element={<NGODashboardContent/>} />
          <Route path='campaigns' element={<CampaignsNGO/>} />
          <Route path='donations' element={<DonationsNGO/>} />
          <Route path='impact-reports' element={<ImpactReportsNGO/>} />
          <Route path='messages' element={<MessagesNGO/>} />
          <Route path='withdrawals' element={<WithdrawalsNGO/>} />
          <Route path='notifications' element={<NotificationsNGO/>} />
          {/* Add profile, settings, logout, contact&help as needed */}
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
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/donate" element={<CTAPage />} />
          <Route path="/*" element={<AppContent />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
