import React, { useState } from "react";
import image from "../assets/image.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../middleware/AuthContext";
import { FaUserCircle } from "react-icons/fa"; 
// Import React Icons
const Login = () => {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [error, setError] = useState({ email: "", password: "" });


  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    // Validate password (minimum 6 characters)
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      console.log("Validation failed");
      return;
    }

    console.log("Login Successful");
    try {
      const response = await fetch(`http://127.0.0.1:3000/alumni/login`, {
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
        navigate("/user/Dashboard"); // Redirect to dashboard or home page
      } else {
        setError(data.message || "Login failed");
      }
      const result = await response.json();
      console.log(result);
    } catch (err) {
      setError("An error occurred during login");
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#e0e5ec] font-['Roboto',sans-serif]">
      <div className="bg-[#e0e5ec] rounded-[20px] p-[40px_30px] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] max-w-[350px] w-full text-center">
        <div className="mb-[30px]">
          <FaUserCircle className="text-[80px] text-gray-500 mb-[10px] mx-auto" />
          <h2 className="text-[1.8rem] font-bold text-[#333]">MCA Alumni</h2>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-[20px] text-left">
            <label
              htmlFor="email"
              className="text-[0.9rem] font-bold text-[#333] block"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
              className="w-full p-[12px] mt-[8px] text-[1rem] border-none rounded-[30px] bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
              style={{
                WebkitBoxShadow:
                  "inset 8px 8px 16px #b3b9c5, inset -8px -8px 16px #ffffff",
                WebkitTextFillColor: "#333", // Ensures autofill text is visible
              }}
              required
            />
          </div>
          <div className="mb-[20px] text-left">
            <label
              htmlFor="password"
              className="text-[0.9rem] font-bold text-[#333] block"
            >
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Your Password"
              className="w-full p-[12px] mt-[8px] text-[1rem] border-none rounded-[30px] bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
              style={{
                WebkitBoxShadow:
                  "inset 8px 8px 16px #b3b9c5, inset -8px -8px 16px #ffffff",
                WebkitTextFillColor: "#333", // Ensures autofill text is visible
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-[12px] border-none rounded-[30px] bg-[#e0e5ec] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] text-[#333] text-[1rem] font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#d1d9e6] hover:shadow-[4px_4px_8px_#b3b9c5,-4px_-4px_8px_#ffffff]"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  )
};
export default Login;