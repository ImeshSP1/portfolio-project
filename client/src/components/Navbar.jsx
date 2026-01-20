import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
// We can keep the icons for mobile, or remove them to match the clean design exactly. 
// I will hide them on desktop to match the JDeo design, but show them on mobile.
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  // Helper to check active state
  const isActive = (path) => location.pathname === path;

  // Navigation Items Array for cleaner code
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="bg-[#F8F7F1] dark:bg-gray-900 text-[#1F3E3D] dark:text-gray-100 px-8 py-6 font-['Poppins'] transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* 1. Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight mb-4 md:mb-0">
          S<span className="font-normal">ashika.</span>
        </Link>

        {/* 2. Center Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative px-2 transition-all duration-300 flex items-center gap-2
                ${isActive(item.path) 
                  ? "text-[#1F3E3D] dark:text-white font-bold" 
                  : "text-gray-500 dark:text-gray-400 hover:text-[#F4B956] dark:hover:text-[#F4B956]"
                }`}
            >
              {/* Show icon only on mobile, hide on desktop to match JDeo design */}
              <span className="md:hidden">{item.icon}</span>

              {/* Decorative brackets for Active state */}
              {isActive(item.path) && (
                <span className="hidden md:inline absolute -left-2 top-0 text-lg opacity-50 font-light">(</span>
              )}
              
              {item.name}
              
              {isActive(item.path) && (
                <span className="hidden md:inline absolute -right-2 top-0 text-lg opacity-50 font-light">)</span>
              )}
            </Link>
          ))}
        </div>

        {/* 3. Right Side: Theme Toggle & CV Button */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[#1F3E3D] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <MdDarkMode size={22} /> : <MdLightMode size={22} />}
          </button>

          {/* Download CV Button */}
          <button className="bg-[#2C5F58] hover:bg-[#224b45] dark:bg-[#F4B956] dark:hover:bg-[#d9a34a] dark:text-[#1F3E3D] text-white px-6 py-2.5 rounded shadow-sm transition-all text-sm font-medium">
            Download CV
          </button>
          
        </div>

      </div>
    </nav>
  );
}

export default Navbar;