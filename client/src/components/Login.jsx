import React, { useState } from "react";

import image from "../assets/image.png";

const Login = () => {

import { useNavigate } from "react-router-dom";
import { useAuth } from "../middleware/AuthContext";
import { FaUserCircle } from "react-icons/fa"; // Import React Icons

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const [errors, setErrors] = useState({ email: "", password: "" });

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
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="bg-black">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-white-800 text-center mb-4">
                Log In Alumni
              </h2>
              <img
                className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2"
                src={image}
                alt="logo"
              />
            </div>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="loginEmail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required=""
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="loginPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.password}
                    onChange={handleChange}
                    required=""
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>


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
  );
};

export default Login;
