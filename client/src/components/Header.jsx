import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Single import for Link
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
          <Link
            to="/"
            className="text-2xl font-extrabold text-white tracking-wider transition transform hover:scale-105 hover:text-gray-300"
          >
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
          </Link>
          <Link
            to="/about"
            className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            About Us
          </Link>
          <Link
            to="/alumni"
            className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            Our Alumni
          </Link>
          <Link
            to="/contact"
            className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
          >
            Contact Us
          </Link>
          {user && (
            <Link
              to="/admin"
              className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
            >
              Admin Dashboard
            </Link>
          )}
          {!user ? (
            <>
              <Link
                to="/register"
                className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
              >
                Log In
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="relative text-white px-3 py-2 rounded-lg hover:text-gray-300 transition duration-300 ease-in-out hover:scale-110"
              >
                Logout
              </button>
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
              to="/about"
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
              to="/contact"
              className="block hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
            >
              Contact Us
            </Link>
            {!user ? (
              <>
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
