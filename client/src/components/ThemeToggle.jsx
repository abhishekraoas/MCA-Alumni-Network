import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark'; // Default to light mode if no preference is found
  });
  
    useEffect(() => {
      document.body.classList.toggle('dark', isDarkMode); // Apply dark class to body
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Save theme preference
    }, [isDarkMode]);
  
    const toggleTheme = () => {
      setIsDarkMode((prev) => !prev); // Toggle the theme
    };

  return (
    <label className="flex cursor-pointer place-items-center">
      <input
        type="checkbox"
        checked={isDarkMode} // Bind the checked state
        onClick={toggleTheme} // Call the toggle function on change
        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
      />
      {/* Sun icon for light mode */}
      <svg
        className={`stroke-base-100 fill-base-100 col-start-1 row-start-1 ${isDarkMode ? 'hidden' : 'block'}`} // Show only in light mode
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
      {/* Moon icon for dark mode */}
      <svg
        className={`stroke-base-100 fill-base-100 col-start-2 row-start-1 ${isDarkMode ? 'block' : 'hidden'}`} // Show only in dark mode
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
    </label>
  );
};

export default ThemeToggle;
