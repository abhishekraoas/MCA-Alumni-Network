import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../middleware/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Our Alumni",
      path: "/alumni",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Register",
      path: "/register",
    },
  ];

  //conditional rendering

  const navItems = !user // this part of the code defines whether the user should see the profile and logout links
    ? navLinks
    : [
        ...navLinks,
        { name: "Profile", path: "/profile" },
        { name: "Logout", path: "/logout" },
      ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <header className="shadow relative">
        <nav className="flex justify-between px-4 py-2 items-center fixed z-50 w-full bg-gray-900">
          <Link
            to="/"
            className="text-3xl font-light text-white hover:text-gray-300 transition-all ease-linear duration-150"
          >
            MCA Alumni Network
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            {!user && (
              <ul className="flex items-center m-0 p-0 gap-4">
                {navItems.map((link, index) => (
                  <li key={index} className="relative group">
                    <Link
                      to={link.path}
                      className="text-1xl text-white group-hover:text-orange-500 group-hover:text-xl transition-all ease-linear duration-150"
                    >
                      {link.name.toUpperCase()}
                    </Link>
                    <span className="block w-0 h-[3.5px] bg-white absolute rounded-bl-lg rounded-br-lg left-0 top-7 transition-all duration-150 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>
            )}
            <div>
              <ThemeToggle />
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none transition duration-200 hover:text-gray-400"
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
        </nav>

        {isOpen && (
          <nav className="absolute top-[52px] left-0 w-full bg-gray-800 text-white py-2 z-50 lg:hidden">
            <div className="space-y-2 text-center text-lg font-light">
              {navItems.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block hover:bg-gray-700 text-white py-2 rounded transition ease-in-out duration-300"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {link.name}
                </Link>
              ))}

              {user && (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left hover:bg-gray-700 py-2 rounded transition ease-in-out duration-300"
                >
                  Logout
                </button>
              )}
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
