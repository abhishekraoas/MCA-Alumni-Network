import React, { useState } from "react";

import { Link } from "react-router-dom"; 

import { Link ,useNavigate} from "react-router-dom"; // Import Link from react-router-dom
import { useAuth } from "../middleware/AuthContext";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div>
          <Link to="/" className="text-2xl font-extrabold text-white tracking-wider transition transform hover:scale-105 hover:text-gray-300">
            MCA Alumni Network
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 text-base font-medium">
          <Link
            to="/"
            className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            Home
            <span className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link
            to="/about"
            className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            About Us
            <span className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link
            to="/alumni"
            className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            Our Alumni
            <span className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link
            to="/contact"
            className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            Contact Us
            <span className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link
            to="/admin"
            className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            Admin Dashboard
            <span className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link
            to="/register"
            className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            Register
            <span className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 ease-in-out"></span>
          </Link>
          <Link
            to="/login"
            className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            Log In
            <span className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 ease-in-out"></span>
          </Link>
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
              to="/about"
              className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
            >

            <Link to="/about-us" className="hover:text-gray-300">

              About Us
            </Link>
            <Link
              to="/alumni"
              className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
            >
              Our Alumni
            </Link>

            <Link
              to="/contact"
              className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/register"
              className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
            >
              Log In
            </Link>
          </div>
        </nav>
      )}
    </header>

            <Link to="/contact-us" className="hover:text-gray-300">
              Contact Us
            </Link>
            
            

            {!user ? (
              <>
                <Link to="/register" className="hover:text-gray-300">
                Register as Alumni
                </Link>
                <Link to="/login" className="hover:text-gray-300">
                  Log In
                </Link>
              </>
            ) : (
              <>
                <Link to="/admin" className="hover:text-gray-300">
                  Dashboard
                </Link>
                <Link to="/profile" className="hover:text-gray-300">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-gray-300 focus:outline-none"
                >
                  Logout
                </button>
              </>
            )}
          </nav>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden block focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
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
          <nav className="md:hidden">
            <div className="px-6 pt-4 pb-2 space-y-2">
              <Link
                to="/"
                className="block text-sm font-semibold hover:text-gray-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-sm font-semibold hover:text-gray-300"
              >
                About
              </Link>
              <Link
                to="/alumni"
                className="block text-sm font-semibold hover:text-gray-300"
              >
                Alumni
              </Link>
              <Link
                to="/contact"
                className="block text-sm font-semibold hover:text-gray-300"
              >
                Contact
              </Link>
              <Link
                to="/register"
                className="block text-sm font-semibold hover:text-gray-300"
              >
                Register as Alumni
              </Link>
              <Link
                to="/login"
                className="block text-sm font-semibold hover:text-gray-300"
              >
                Log In
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>

  );
};

export default Header;
