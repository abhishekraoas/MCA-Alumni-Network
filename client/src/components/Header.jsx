import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-neutral-900 text-white">
        <div className="container px-6 py-4 mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="text-lg font-bold">
              MCA Alumni Network
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4 text-sm">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </nav>

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
              <a
                href="#"
                className="block text-sm font-semibold hover:text-gray-300"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-sm font-semibold hover:text-gray-300"
              >
                About
              </a>
              <a
                href="#"
                className="block text-sm font-semibold hover:text-gray-300"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-sm font-semibold hover:text-gray-300"
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
