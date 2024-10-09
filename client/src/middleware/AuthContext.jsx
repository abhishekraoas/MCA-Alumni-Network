import React, { createContext, useState, useContext, useEffect } from 'react'; // Added React import

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on component mount
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('userData');

    if (token && userData) {
      try {
        // Optional: Validate the token with your backend here before setting the user
        setUser(JSON.parse(userData)); // Parse and set user data if available
      } catch (error) {
        console.error('Error parsing userData:', error);
        // Handle any potential errors with parsing or invalid data
        logout();
      }
    }
    setLoading(false); // Loading done, either user is set or remains null
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem('token', token);
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children} {/* Render children only after loading is complete */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
