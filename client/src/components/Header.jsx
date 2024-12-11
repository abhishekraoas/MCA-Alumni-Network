import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../middleware/AuthContext";
import ThemeToggle from "./ThemeToggle";
import gsap from 'gsap';
import { tl } from './gsap.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // GSAP animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.fromTo('.navGsap',
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "sine.in",
          stagger: 0.1,
        }
      );
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="navGsap">
          <a href="/" className="text-xl font-bold text-white">
            MCA Alumni Network
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 text-base font-medium">
          {['/', '/about-us', '/alumni', '/contact-us'].map((path) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${isActive ? "navGsap relative text-orange-600" : "navGsap relative text-white"} px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110`
              }
            >
              {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ')}
            </NavLink>
          ))}
          {user ? (
            <>
              <NavLink
                to="/user/dashboard"
                className={({ isActive }) =>
                  `${isActive ? "navGsap relative text-orange-600" : "navGsap relative text-white"} px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110`
                }
              >
                Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className="navGsap relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `${isActive ? "navGsap relative text-orange-600" : "navGsap relative text-white"} px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110`
                }
              >
                Register as Alumni
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${isActive ? "navGsap relative text-orange-600" : "navGsap relative text-white"} px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110`
                }
              >
                Log In
              </NavLink>
            </>
          )}
        </nav>

        {/* Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none transition duration-200 hover:text-gray-400"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white py-2">
          <div className="space-y-2 text-center text-lg font-semibold">
            {['/', '/about-us', '/alumni', '/contact-us'].map((path) => (
              <Link
                key={path}
                to={path}
                className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
              >
                {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ')}
              </Link>
            ))}
            {!user ? (
              <>
                <Link
                  to="/register"
                  className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
                >
                  Register as Alumni
                </Link>
                <Link
                  to="/login"
                  className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
                >
                  Log In
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
