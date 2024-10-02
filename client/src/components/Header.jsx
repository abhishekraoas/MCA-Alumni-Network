// src/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-800 text-white">
      <div className="text-2xl font-bold logo">
        MCA Alumni Network
      </div>
      <nav className="navbar hidden md:flex space-x-6 text-lg">
        <span className="hover:text-gray-400">Home</span>
        <span className="hover:text-gray-400">About</span>
        <span className="hover:text-gray-400">Alumni</span>
        <span className="hover:text-gray-400">Contact</span>
        <span className="hover:text-gray-400">Signup</span>
        <span className="hover:text-gray-400">Login</span>
      </nav>
    </header>
  );
};

export default Header;
