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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formUserData = {
      ...user,
    };

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
    }
  };

  return (
    <div className="bg-[#e0e5ec] p-5 font-['Roboto',sans-serif]">
      <form onSubmit={handleFormSubmit}>
        <MDBContainer fluid>
          <MDBCard className="text-black">
            <MDBCardBody className="rounded-3xl bg-[#e0e5ec] p-[40px_30px] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] w-full text-center">
              <MDBRow className="justify-content-center">
                <MDBCol md="6" className="order-2 order-lg-1">
                  <p className="text-center h3 fw-bold mx-1 mx-md-4 my-4 text-black font-bold">
                    Register As Alumni
                  </p>
                  {error && <div className="text-red-500 text-center">{error}</div>}
                  <MDBRow className="w-100">
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
                  {/* Password, GitHub and LinkedIn */}
                  <MDBRow>
                    {/* Password Input */}
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
                    {/* GitHub Input */}
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
                  {/* LinkedIn, Pass Out Year, Roll No */}
                  <MDBRow>
                    {/* LinkedIn Input */}
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
                    {/* Pass Out Year Input */}
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="calendar me-3" size="lg" />
                        <input
                          placeholder="Pass Out Year"
                          id="passOutYear"
                          type="number"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.passOutYear}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  {/* Roll No, Job Role, Current Company */}
                  <MDBRow>
                    {/* Roll No Input */}
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="id-card me-3" size="lg" />
                        <input
                          placeholder="Enter Roll No"
                          id="rollNo"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.rollNo}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                    {/* Job Role Input */}
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
                  {/* Current Company Input */}
                  <MDBRow className="mb-4">
                    <MDBCol>
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
                  </MDBRow>
                  {/* Gender Input */}
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <select
                        id="gender"
                        className="w-full p-2 border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                        value={user.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </MDBCol>
                  </MDBRow>
                  {/* City Input */}
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="city me-3" size="lg" />
                        <input
                          placeholder="Enter Your City"
                          id="city"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.city}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  {/* State Input */}
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="map-marked-alt me-3" size="lg" />
                        <input
                          placeholder="Enter Your State"
                          id="state"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.state}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  {/* Submit Button */}
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <button
                        type="submit"
                        className="w-full py-2 px-4 text-white bg-blue-500 rounded-3xl hover:bg-blue-600"
                      >
                        Register
                      </button>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>

                {/* Image Column */}
                <MDBCol md="6" className="order-1 order-lg-2">
                  <MDBCardImage
                    src={registerImage}
                    alt="Register"
                    className="w-full"
                  />
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
