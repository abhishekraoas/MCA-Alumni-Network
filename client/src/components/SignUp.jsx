import React, { useState } from "react";
import image from "../assets/image.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    linkedin: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Register as a Alumni
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex justify-center flex-col"
        >
          <div className="avatar mx-auto">
            <div className=" ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src={image} />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full bg-white mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-2 bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="linkedin">
              LinkedIn
            </label>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full mt-2 bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your LinkedIn"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="github">
              GitHub
            </label>
            <input
              type="text"
              name="github"
              id="github"
              value={formData.github}
              onChange={handleChange}
              className="w-full mt-2 bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your Github"
            />
          </div>

          

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="passOut">
              Pass Out Year
            </label>
            <input
              type="number"
              name="passOut"
              id="passOut"
              value={formData.github}
              onChange={handleChange}
              className="w-full bg-white mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your Github"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="rollNo">
              University Roll No
            </label>
            <input
              type="number"
              name="rollNo"
              id="rollNo"
              value={formData.github}
              onChange={handleChange}
              className="w-full mt-2 bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your University Roll No"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="jobRole">
              Job Role
            </label>
            <input
              type="text"
              name="jobRole"
              id="jobRole"
              value={formData.github}
              onChange={handleChange}
              className="w-full mt-2 bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your Github"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="gender">
              Gender
            </label>
            <select name="gender" className="w-full bg-white mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-black">
              <option value="">Please select one…</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
              <option value="Prefer not to answer">Perfer not to Answer</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="district">
              District
            </label>
            <input
              type="text"
              name="district"
              id="district"
              value={formData.github}
              onChange={handleChange}
              className="w-full mt-2 bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your District"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="state">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              value={formData.github}
              onChange={handleChange}
              className="w-full mt-2 bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your State"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
