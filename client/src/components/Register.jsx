import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import image from "../assets/image.png";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

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
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      github: user.github,
      linkedin: user.linkedIn,
      passOutYear: user.passOutYear,
      rollNo: user.rollNo,
      jobRole: user.jobRole,
      currentCompany: user.currentCompany,
      gender: user.gender,
      city: user.city,
      state: user.state,
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
        console.error("Failed to sign up:", errorResponse);
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Error in signing up:", error);
    }
  };

  return (
    <div className="bg-[#e0e5ec] p-5 font-['Roboto',sans-serif]">
      <form onChange={handleInputChange}>
        <MDBContainer fluid className="">
          <MDBCard className="text-black ">
            <MDBCardBody className="rounded-3xl  bg-[#e0e5ec] p-[40px_30px] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] w-full text-center">
              <MDBRow className="justify-content-center">
                <MDBCol md="10" lg="6" className="order-2 order-lg-1">
                  <p className="text-center h3 fw-bold mx-1 mx-md-4 mt-4 text-black font-bold">
                    Register As Alumni
                  </p>
                  {error && <div className="text-red-500 text-center">{error}</div>}
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
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
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
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fab icon="linkedin me-3" size="lg" />
                        <input
                          placeholder="LinkedIn URL"
                          id="linkedIn"
                          type="url"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.linkedin}
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
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="graduation-cap me-3" size="lg" />
                        <input
                          placeholder="University Roll No"
                          id="rollNo"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.rollNo}
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md="6" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="user-tie me-3" size="lg" />
                        <input
                          placeholder="Job Role"
                          id="jobRole"
                          type="text"
                          className="w-full p-2 text-[1rem] border-none rounded-3xl bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
                          value={user.jobRole}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
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
                </MDBCol>
                <MDBCol
                  md="10"
                  lg="4"
                  className="order-1 order-lg-2 d-flex justify-content-center align-items-center"
                >
                  <MDBCardImage
                    src="\src\assets\register.svg"
                    fluid
                    className="w-3/4"
                  />
                </MDBCol>
              </MDBRow>

              <div className="flex items-center justify-center">
                <button
                  onClick={handleFormSubmit}
                  className="mb-4 w-40 bg-[#444444] text-white rounded-xl py-2"
                  size="lg"
                >
                  Register
                </button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>
    </div>
  );
};

export default Register;
