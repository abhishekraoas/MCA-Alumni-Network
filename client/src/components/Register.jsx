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
      const response = await fetch("http://localhost:3000/alumni/signup", {
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
        // Handling non-2xx responses (like 400, 500)
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
    <div className="bg-white">
      <form onChange={handleInputChange}>
        <MDBContainer fluid>
          <MDBCard className="text-black m-5 ">
            <MDBCardBody className="rounded-3xl py-4">
            <MDBRow className="justify-content-center">
  <MDBCol
    md="10"
    lg="6"
    className="order-1 order-lg-2 d-flex justify-content-center align-items-center"
  >
    <MDBCardImage src="\src\assets\register.svg" fluid className="w-3/4" />
  </MDBCol>
</MDBRow>


              <MDBRow>
                <MDBRow
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h3 fw-bold mx-1 mx-md-4 mt-4 text-black font-bold">
                    Register As Alumni
                  </p>
                  {error && <div className="text-red-500 text-center">{error}</div>}

                  <div className="flex justify-center items-center py-4">
  <div className="avatar">
    <div className="flex items-center justify-center ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 mb-4">
      <img src={image} className="w-24 rounded-full" alt="Avatar" />
    </div>
  </div>
</div>



                  <MDBRow className="w-100">
                    <MDBCol md="4" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="user me-3" size="lg" />
                        <input
                          placeholder="Enter Your Name"
                          id="fullName"
                          type="text"
                          className="border-t-[#d0d3d6] border-l-[#e1e3e5] 
                                      border-r-[#fbfcfd] border-b-[#ecf0f3] border-4 bg-[#ECF0F3] w-full rounded-3xl px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66B2FF] 
                                        bg-gradient-to-l from-[#e2e4e6] via-[#e9edf0] to-[#e3e5e7]"
                          required
                          value={user.fullName}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="envelope me-3" size="lg" />
                        <input
                          placeholder="Enter Your Email"
                          id="email"
                          type="email"
                          className="border-t-[#d0d3d6] border-l-[#e1e3e5] 
                                      border-r-[#fbfcfd] border-b-[#ecf0f3] border-4 bg-[#ECF0F3] w-full rounded-3xl px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66B2FF] 
                                        bg-gradient-to-l from-[#e2e4e6] via-[#e9edf0] to-[#e3e5e7]"required
                          value={user.email}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="lock me-3" size="lg" />
                        <input
                          placeholder="Enter Your Password"
                          id="password"
                          type="password"
                          className="border-t-[#d0d3d6] border-l-[#e1e3e5] 
                                      border-r-[#fbfcfd] border-b-[#ecf0f3] border-4 bg-[#ECF0F3] w-full rounded-3xl px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66B2FF] 
                                        bg-gradient-to-l from-[#e2e4e6] via-[#e9edf0] to-[#e3e5e7]"required
                          value={user.password}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fab icon="github me-3" size="lg" />
                        <input
                          placeholder="GitHub URL"
                          id="github"
                          type="url"
                          className="border-t-[#d0d3d6] border-l-[#e1e3e5] 
                                      border-r-[#fbfcfd] border-b-[#ecf0f3] border-4 bg-[#ECF0F3] w-full rounded-3xl px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66B2FF] 
                                        bg-gradient-to-l from-[#e2e4e6] via-[#e9edf0] to-[#e3e5e7]"value={user.github}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fab icon="linkedin me-3" size="lg" />
                        <input
                          placeholder="LinkedIn URL"
                          id="linkedIn"
                          type="url"
                          className="border-t-[#d0d3d6] border-l-[#e1e3e5] 
                                      border-r-[#fbfcfd] border-b-[#ecf0f3] border-4 bg-[#ECF0F3] w-full rounded-3xl px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66B2FF] 
                                        bg-gradient-to-l from-[#e2e4e6] via-[#e9edf0] to-[#e3e5e7]"value={user.linkedIn}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="user-graduate me-3" size="lg" />
                        <input
                          placeholder="Pass Out Year"
                          id="passOutYear"
                          type="text"
                          className="border-t-[#d0d3d6] border-l-[#e1e3e5] 
                                      border-r-[#fbfcfd] border-b-[#ecf0f3] border-4 bg-[#ECF0F3] w-full rounded-3xl px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66B2FF] 
                                        bg-gradient-to-l from-[#e2e4e6] via-[#e9edf0] to-[#e3e5e7]"value={user.passOutYear}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="graduation-cap me-3" size="lg" />
                        <input
                          placeholder="University Roll No"
                          id="rollNo"
                          type="text"
                          className="border-t-[#d0d3d6] border-l-[#e1e3e5] 
                                      border-r-[#fbfcfd] border-b-[#ecf0f3] border-4 bg-[#ECF0F3] w-full rounded-3xl px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66B2FF] 
                                        bg-gradient-to-l from-[#e2e4e6] via-[#e9edf0] to-[#e3e5e7]"value={user.rollNo}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="user-tie me-3" size="lg" />
                        <input
                          placeholder="Job Role"
                          id="jobRole"
                          type="text"
                          className="border-t-[#d0d3d6] border-l-[#e1e3e5] 
                                      border-r-[#fbfcfd] border-b-[#ecf0f3] border-4 bg-[#ECF0F3] w-full rounded-3xl px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66B2FF] 
                                        bg-gradient-to-l from-[#e2e4e6] via-[#e9edf0] to-[#e3e5e7]"value={user.jobRole}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="building me-3" size="lg" />
                        <input
                          placeholder="Current Company"
                          id="currentCompany"
                          type="text"
                          className="border-t-[#d0d3d6] border-l-[#e1e3e5] 
                                      border-r-[#fbfcfd] border-b-[#ecf0f3] border-4 bg-[#ECF0F3] w-full rounded-3xl px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66B2FF] 
                                        bg-gradient-to-l from-[#e2e4e6] via-[#e9edf0] to-[#e3e5e7]"value={user.currentCompany}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="users me-3" size="lg" />
                        <select
                          name="gender"
                          id="gender"
                          required
                          className="border-t-[#d0d3d6] border-l-[#e1e3e5] 
                                      border-r-[#fbfcfd] border-b-[#ecf0f3] border-4 bg-[#ECF0F3] w-full rounded-3xl px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66B2FF] 
                                        bg-gradient-to-l from-[#e2e4e6] via-[#e9edf0] to-[#e3e5e7]"value={user.gender}
                        >
                          <option value="" disabled className="text-gray-700">
        Select Gender
      </option>
      <option value="Male" className="text-gray-700">Male</option>
      <option value="Female" className="text-gray-700">Female</option>
      <option value="Other" className="text-gray-700">Other</option>
    </select>
                      </div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <MDBIcon fas icon="city me-3" size="lg" />
                        <input
                          placeholder="City"
                          id="city"
                          type="text"
                          className="border-t-[#d0d3d6] border-l-[#e1e3e5] 
                                      border-r-[#fbfcfd] border-b-[#ecf0f3] border-4 bg-[#ECF0F3] w-full rounded-3xl px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66B2FF] 
                                        bg-gradient-to-l from-[#e2e4e6] via-[#e9edf0] to-[#e3e5e7]"
                          value={user.city}
                        />
                      </div>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                      <div className="d-flex flex-row align-items-center text-gray-700">
                        <MDBIcon fas icon="flag me-3" size="lg" />
                        <input
                          placeholder="State"
                          id="state"
                          type="text"
                          className="border-t-[#d0d3d6] border-l-[#e1e3e5] 
                                      border-r-[#fbfcfd] border-b-[#ecf0f3] border-4 bg-[#ECF0F3] w-full rounded-3xl px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66B2FF] 
                                        bg-gradient-to-l from-[#e2e4e6] via-[#e9edf0] to-[#e3e5e7]"value={user.state}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBRow>
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
