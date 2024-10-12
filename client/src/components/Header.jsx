import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../middleware/AuthContext";
import ThemeToggle from "./ThemeToggle";
import gsap from 'gsap'
import {tl} from './gsap.js'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
     // Initialize the timeline
  
    const ctx = gsap.context(() => {
      tl.fromTo('.header',
        {
          y: -100, // Starting position (from)
          opacity: 0, // Starting opacity (from)
        },
        {
          y: 0, // Ending position (to)
          opacity: 1, // Ending opacity (to)
          duration: 1, // Animation duration
          ease: "power2.inOut", // Easing function
           // Stagger the animations for smoother effect
        }
      );
      tl.fromTo('.navbar',
        {
          y: -100, // Starting position (from)
          opacity: 0, // Starting opacity (from)
        },
        {
          y: 0, // Ending position (to)
          opacity: 1, // Ending opacity (to)
          duration: 1, // Animation duration
          ease: "power2.inOut", // Easing function
          stagger: 0.3, // Stagger the animations for smoother effect
        }
      );
    });
  
    return () => ctx.revert(); // Cleanup when the component unmounts
  }, []);
  

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className=" header bg-black text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div>
          <a href="/" className="navbar text-xl font-bold text-white">
            MCA Alumni Network
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 text-base font-medium">
          <Link
            to="/"
            className="navbar relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="navbar relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            About Us
          </Link>
          <Link
            to="/alumni"
            className="navbar relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            Our Alumni
          </Link>
          <Link
            to="/contact-us"
            className="navbar relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            Contact Us
          </Link>

          {/* Conditional Links */}
          {user ? (
            <>
              <Link
                to="/user/dashboard"
                className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
              >
                Register as Alumni
              </Link>
              <Link
                to="/login"
                className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
              >
                Log In
              </Link>
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
            <Link
              to="/"
              className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
            >
              About Us
            </Link>
            <Link
              to="/alumni"
              className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
            >
              Our Alumni
            </Link>
            <Link
              to="/contact-us"
              className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
            >
              Contact Us
            </Link>

            {/* Conditional Links for Mobile */}
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
