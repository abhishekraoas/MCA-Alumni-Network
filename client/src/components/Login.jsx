import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../middleware/AuthContext";
import { FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";

const InputField = ({ label, type, name, value, onChange, error, placeholder }) => (
  <div className="mb-[20px] text-left">
    <label htmlFor={name} className="text-[0.9rem] font-bold text-[#333] block">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-[12px] mt-[8px] text-[1rem] border-none rounded-[30px] bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
      required
    />
    {error && <p className="text-red-500">{error}</p>}
  </div>
);

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "", general: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError((prevErrors) => ({ ...prevErrors, general: "" }));

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/alumni/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.user, data.token);
        setFormData({ email: "", password: "", rememberMe: false });
        setTimeout(() => {
          navigate("/user/dashboard");
        }, 1000);
      } else {
        setError((prevErrors) => ({
          ...prevErrors,
          general: data.message || "Login failed",
        }));
      }
    } catch (err) {
      setError((prevErrors) => ({
        ...prevErrors,
        general: "An error occurred during login",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 font-['Roboto',sans-serif] p-4">
      <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full text-center">
        <div className="mb-4 ">
          <FaUserCircle className="text-7xl text-black mb-4 mx-auto" />
          <h2 className="text-3xl font-bold text-gray-800">MCA Alumni Login</h2>
        </div>
        {error.general && (
          <div className="text-red-500 text-center mb-4 bg-red-100 p-2 rounded-lg">{error.general}</div>
        )}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-left">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 block mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none transition duration-200"
              required
            />
            {error.email && <p className="text-red-500 text-xs mt-1">{error.email}</p>}
          </div>
          <div className="text-left">
            <label htmlFor="password" className="text-sm font-semibold text-gray-700 block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none transition duration-200"
              required
            />
            {error.password && <p className="text-red-500 text-xs mt-1">{error.password}</p>}
          </div>

          <button
            type="submit"
            className={`w-full bg-black text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out ${
              isLoading
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-blue-600 focus:outline-none focus:shadow-outline'
            }`}
            disabled={isLoading}
          >
            {isLoading ? <FaSpinner className="animate-spin mx-auto" /> : "LOGIN"}
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-600">
          Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
