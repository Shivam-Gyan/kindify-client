import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home/Home';
import Headers from './components/Auth/header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/*"
          element={
            <>
              <Headers />
              <div className="relative bg-white">
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                  <svg viewBox="0 0 1440 120" fill="#0A2A5C" xmlns="http://www.w3.org/2000/svg" className="w-full h-32">
                    <path
                      d="M0,80 C480,160 960,0 1440,80 L1440,120 L0,120 Z"
                      fill="#0A2A5C" // Use your desired color
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <Home />
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
