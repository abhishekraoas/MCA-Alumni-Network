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
    setUser((prevUser) => ({ ...prevUser, [id]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");

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
        alert("User signed up successfully");
        navigate("/login");
      } else {
        const errorResponse = await response.json();
        setError(errorResponse.message || "Registration failed");
        alert("Failed to sign up:", errorResponse.message);
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Error in signing up:", error);
    }
  };

  return (
    <div className="bg-[#e0e5ec] p-5 font-['Roboto',sans-serif]">
      <form onSubmit={handleFormSubmit}>
        <MDBContainer fluid className="">
          <MDBCard className="text-black">
            <MDBCardBody className="rounded-3xl bg-[#e0e5ec] p-[40px_30px] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] w-full text-center ps-5">
              <MDBRow className="justify-content-center items-center ps-5">
                <MDBCol md="10" lg="6" className="order-2 order-lg-1 ps-5">
                  <p className="text-center h3 fw-bold mx-1 mx-md-4 my-4 text-black font-bold">
                    Register As Alumni
                  </p>
                  {error && (
                    <div className="text-red-500 text-center">{error}</div>
                  )}
                  <MDBRow className="w-100">
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
                  <MDBRow className="w-100">
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
                  <MDBRow className="w-100">
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
                        <MDBIcon fas icon="user-graduate me-3" size="lg" />
                        <input
                          placeholder="Pass Out Year"
                          id="passOutYear"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.passOutYear}
                          onChange={handleInputChange}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="w-100">
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="id-card me-3" size="lg" />
                        <input
                          placeholder="Roll No"
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
                  <MDBRow className="w-100">
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="briefcase me-3" size="lg" />
                        <input
                          placeholder="Job Role"
                          id="jobRole"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.jobRole}
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
                  <MDBRow className="w-100">
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
                        <MDBIcon fas icon="map-marked-alt me-3" size="lg" />
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
                  <div className="flex items-center justify-center gap-x-4 my-4">
                    <button
                      type="submit"
                      className="mb-4 w-40 rounded-xl py-2 bg-[#e0e5ec] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] text-[#333] text-[1rem] font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#d1d9e6] hover:shadow-[4px_4px_8px_#b3b9c5,-4px_-4px_8px_#ffffff]"
                      size="lg"
                    >
                      Register
                    </button>

                    <button
                      type="button"
                      onClick={() => navigate("/login")}
                      className="mb-4 w-40 bg-[#e0e5ec] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] text-[#333] text-[1rem] font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#d1d9e6] hover:shadow-[4px_4px_8px_#b3b9c5,-4px_-4px_8px_#ffffff] rounded-xl py-2"
                      size="lg"
                    >
                      Login
                    </button>
                  </div>
                </MDBCol>
                <MDBCol
                  md="10"
                  lg="4"
                  className="order-1 order-lg-2 d-flex justify-content-center align-items-center"
                >
                  <MDBCardImage
                    src={registerImage}
                    fluid
                    className="w-3/4"
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
