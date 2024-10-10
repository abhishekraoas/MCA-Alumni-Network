// import * as React from 'react';


// const ThemeToggle = () => {
//   const [isDarkMode, setDarkMode] = React.useState(false);

//   const toggleDarkMode = (checked) => {
//     setDarkMode(checked);
//   };

//   return (
//     <label className="flex cursor-pointer place-items-center">
//             <input
//               type="checkbox"
//               value="synthwave"
//               className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
//             />
//             <svg
//               className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
//               xmlns="http://www.w3.org/2000/svg"
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle cx="12" cy="12" r="5" />
//               <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
//             </svg>
//             <svg
//               className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
//               xmlns="http://www.w3.org/2000/svg"
//               width="14"
//               height="14"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//             </svg>
//           </label>
//   );
// };

// export default ThemeToggle;


import * as React from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  React.useEffect(() => {
    // Set body class based on theme
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <label className="flex cursor-pointer place-items-center">
      <input
        type="checkbox"
        checked={isDarkMode} // Reflect the current dark mode state
        onChange={toggleDarkMode} // Update dark mode state on toggle
        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
        aria-label="Toggle dark mode" // Accessibility
      />
      <svg
        className={`stroke-base-100 fill-base-100 col-start-1 row-start-1 transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`} // Sun icon visibility
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
        className={`stroke-base-100 fill-base-100 col-start-2 row-start-1 transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} // Moon icon visibility
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