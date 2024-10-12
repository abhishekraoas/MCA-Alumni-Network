import * as React from "react";

const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <img
      src="https://user-images.githubusercontent.com/64256342/151416170-51c1f8ec-28bd-41b0-bf9c-837509e5460e.png"
      class="h-6 w-6 lg:block"
      alt="Switch to dark theme"
    ></img>
  );
};

export default ThemeToggle;
