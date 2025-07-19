import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import blackLogo from "../../image/logoblack.png";

const DashboardNavigator = ({ data, isMenuOpen, setIsMenuOpen, setActiveTab }) => {
  const { user } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleActiveTabClick = (name) => {
    setActiveTab(name);
    if (isMobile) setIsMenuOpen(false); // Close sidebar on mobile after nav
  };

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: isMenuOpen || !isMobile ? 0 : -300 }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      className={`bg-[#F1F2F7] text-slate-800 px-6 py-6 shadow-md z-40 absolute lg:relative top-0 left-0 h-screen lg:w-64 w-screen space-y-8 ${
        isMobile && !isMenuOpen ? "hidden" : ""
      }`}
    >
      {/* Logo + Toggle Button */}
      <div className="flex items-center justify-between">
        <Link
          to={`/${user?.user?.role}-home`}
          className="flex items-center gap-2"
        >
          <img src={blackLogo} alt="Logo" className="w-28" />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-xl"
        >
          <i className={`fi fi-rr-angle-double-${isMenuOpen ? "left" : "right"}`}></i>
        </button>
      </div>

      {/* Menu Section */}
      <nav className="space-y-8">
        <div>
          <p className="uppercase text-xs font-semibold text-slate-400 mb-3">Menu</p>
          <div className="flex flex-col gap-2">
            {data.menu.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                onClick={() => handleActiveTabClick(item.name)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#E4E7F4] hover:text-indigo-500 transition-all duration-150 ${
                    isActive
                      ? "bg-[#E4E7F4] text-indigo-500 font-semibold"
                      : "text-slate-600"
                  }`
                }
              >
                <i className={`${item.icon} text-md`}></i>
                <span className="text-sm">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Other Section */}
        <div>
          <p className="uppercase text-xs font-semibold text-slate-400 mb-3">Others</p>
          <div className="flex flex-col gap-2">
            {data.other.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                onClick={() => handleActiveTabClick(item.name)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#E4E7F4] hover:text-indigo-500 transition-all duration-150 ${
                    isActive
                      ? "bg-[#E4E7F4] text-indigo-500 font-semibold"
                      : "text-slate-600"
                  }`
                }
              >
                <i className={`${item.icon} text-md`}></i>
                <span className="text-sm">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </motion.aside>
  );
};

export default DashboardNavigator;
