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
    <div className="flex justify-center items-center h-screen bg-[#e0e5ec] font-['Roboto',sans-serif]">
      <div className="bg-[#e0e5ec] rounded-[20px] p-[40px_30px] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] max-w-[350px] w-full text-center">
        <div className="mb-[30px]">
          <FaUserCircle className="text-[80px] text-gray-500 mb-[10px] mx-auto" />
          <h2 className="text-[1.8rem] font-bold text-[#333]">MCA Alumni</h2>
        </div>

        {error.general && <div className="text-red-500 text-center">{error.general}</div>}

        <form onSubmit={handleLogin}>
          <InputField
            label="EMAIL"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={error.email}
            placeholder="Enter Your Email"
          />
          <InputField
            label="PASSWORD"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            error={error.password}
            placeholder="Enter Your Password"
          />
          <div
            className="relative top-[-52px] left-[265px] cursor-pointer"
            onClick={handlePassword}
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-500" />
            ) : (
              <FaEye className="text-gray-500" />
            )}
          </div>

          <div className="flex items-center mb-[20px] text-left">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="mr-[8px]"
            />
            <label htmlFor="rememberMe" className="text-[0.9rem] font-bold text-[#333]">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className={`w-full p-[12px] border-none rounded-[30px] bg-[#e0e5ec] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] text-[#333] text-[1rem] font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#d1d9e6] ${isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            disabled={isLoading}
          >
            {isLoading ? <FaSpinner className="animate-spin mx-auto" /> : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
