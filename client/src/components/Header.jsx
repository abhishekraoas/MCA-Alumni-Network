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
              Our Alumni
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
            <a href="#" className="hover:text-gray-300">
              Sign Up
            </a>
            <a href="#" className="hover:text-gray-300">
              Log In
            </a>
            
          </nav>


          {/* For Dark theme */}

          {/* <label className="flex cursor-pointer place-items-center">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label> */}

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
              <a
                href="#"
                className="block text-sm font-semibold hover:text-gray-300"
              >
                Sign Up
              </a>

              <a
                href="#"
                className="block text-sm font-semibold hover:text-gray-300"
              >
                Log In
              </a>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
