import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon
import { useNavigate } from "react-router-dom";
import registerImage from "../assets/register.svg";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    github: "",
    linkedin: "",
    passOutYear: "",
    rollNo: "",
    jobRole: "",
    currentCompany: "",
    gender: "",
    city: "",
    state: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true); // Set loading state
    const formUserData = { ...user };

    try {
      const response = await fetch("http://localhost:3000/alumni/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formUserData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("User signed up successfully", result);
        navigate("/login");
      } else {
        const errorResponse = await response.json();
        setError(errorResponse.message || "Registration failed");
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Error in signing up:", error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="bg-[#e0e5ec] p-5 font-['Roboto',sans-serif]">
      <form onSubmit={handleFormSubmit}>
        <MDBContainer fluid>
          <MDBCard className="text-black">
            <MDBCardBody className="rounded-3xl bg-[#e0e5ec] p-[40px_30px] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] w-full text-center">
              <p className="text-center h3 fw-bold mx-1 mx-md-4 my-4 text-black font-bold">
                Register As Alumni
              </p>
              <MDBRow className="justify-content-center">
                {/* Image Column */}
                <MDBCol md="6" className="order-1 order-lg-2 p-12">
                  <div className="flex justify-center items-center">
                    <MDBCardImage
                      src={registerImage}
                      alt="Register"
                      className="w-72" // Adjust the width to reduce image size
                    />
                  </div>
                </MDBCol>

                {/* Form Fields Column */}
                <MDBCol md="6" className="order-2 order-lg-1 ps-5">
                  {error && (
                    <div className="text-red-500 text-center">{error}</div>
                  )}
                  <MDBRow className="justify-content-start">
                    {/* Name Input */}
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="user me-3" size="lg" />
                        <input
                          placeholder="Enter Your Name"
                          id="fullName"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          required
                          value={user.fullName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                    {/* Email Input */}
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="envelope me-3" size="lg" />
                        <input
                          placeholder="Enter Your Email"
                          id="email"
                          type="email"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          required
                          value={user.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                  {/* Password, GitHub, LinkedIn */}
                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="lock me-3" size="lg" />
                        <input
                          placeholder="Enter Your Password"
                          id="password"
                          type="password"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          required
                          value={user.password}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fab icon="github me-3" size="lg" />
                        <input
                          placeholder="GitHub URL"
                          id="github"
                          type="url"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.github}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                  {/* LinkedIn, Pass-Out Year, Roll No */}
                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fab icon="linkedin me-3" size="lg" />
                        <input
                          placeholder="LinkedIn URL"
                          id="linkedin"
                          type="url"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.linkedin}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="calendar me-3" size="lg" />
                        <input
                          placeholder="Pass-Out Year"
                          id="passOutYear"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.passOutYear}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                  {/* Roll No, Job Role */}
                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="id-card me-3" size="lg" />
                        <input
                          placeholder="Roll Number"
                          id="rollNo"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.rollNo}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="briefcase me-3" size="lg" />
                        <input
                          placeholder="Current Job Role"
                          id="jobRole"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.jobRole}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>

                  {/* Current Company, Gender */}
                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="building me-3" size="lg" />
                        <input
                          placeholder="Current Company"
                          id="currentCompany"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.currentCompany}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                    <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="users me-3" size="lg" />
                        <select
                          name="gender"
                          id="gender"
                          required
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.gender}
                        >
                          <option value="" disabled className="text-gray-400">
                            Select Gender
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </MDBCol>
                  </MDBRow>

                  {/* City, State */}
                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="city me-3" size="lg" />
                        <input
                          placeholder="City"
                          id="city"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.city}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="map-marker-alt me-3" size="lg" />
                        <input
                          placeholder="State"
                          id="state"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.state}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              {/* Buttons (Login & Register) */}
              <MDBRow className="mb-4">
                <MDBCol className="text-center">
                  <div className="flex justify-center gap-4">
                    {/* Register Button */}
                    <button
                      type="submit"
                      className={`p-[12px] px-[60px] border-none rounded-[15px] bg-[#e0e5ec] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] text-[#333] text-[1rem] font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#d1d9e6] ${
                        isLoading ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <FaSpinner className="animate-spin mx-auto" />
                      ) : (
                        "REGISTER"
                      )}
                    </button>

                    {/* Login Button */}
                    <button
                      type="button"
                      onClick={() => navigate("/login")}
                      className="p-[12px] px-[50px] border-none rounded-[15px] bg-[#e0e5ec] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] text-[#333] text-[1rem] font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#d1d9e6]"
                    >
                      LOGIN
                    </button>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>
    </div>
  );
};

export default Register;
