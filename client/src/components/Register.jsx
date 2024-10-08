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
 

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };


  const validateForm = () => {
    let formErrors = {};

    if (!user.fullName || user.fullName.length < 3) {
      formErrors.fullName =
        "Full Name is required and should be at least 3 characters.";
    }

    if (!user.email || !/\S+@\S+\.\S+/.test(user.email)) {
      formErrors.email = "A valid Email is required.";
    }

    if (!user.password || user.password.length < 6) {
      formErrors.password =
        "Password is required and should be at least 6 characters.";
    }

    if (
      !user.github ||
      !/^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+$/.test(user.github)
    ) {
      formErrors.github = "A valid GitHub URL is required.";
    }

    if (
      !user.linkedIn ||
      !/^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+$/.test(
        user.linkedIn
      )
    ) {
      formErrors.linkedIn = "A valid LinkedIn URL is required.";
    }

    if (
      !user.passOutYear ||
      isNaN(user.passOutYear) ||
      user.passOutYear.length !== 4
    ) {
      formErrors.passOutYear = "Valid Pass Out Year is required (4 digits).";
    }

    if (!user.rollNo) {
      formErrors.rollNo = "University Roll Number is required.";
    }

    if (!user.jobRole) {
      formErrors.jobRole = "Job Role is required.";
    }

    if (!user.currentCompany) {
      formErrors.currentCompany = "Current Company is required.";
    }

    if (!user.gender) {
      formErrors.gender = "Gender is required.";
    }

    if (!user.city) {
      formErrors.city = "City is required.";
    }

    if (!user.state) {
      formErrors.state = "State is required.";
    }

      return formErrors;
    };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // If no errors, submit the form data
      console.log("Form submitted successfully:", user);
    } else {
      setErrors(formErrors);
    }
  };

  return (

    <form>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h3 fw-bold mx-1 mx-md-4 mt-4 text-black font-bold">
                  Register As Alumni
                </p>

                <div className="avatar mx-auto">
                  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 mb-4">
                    <img src={image} alt="Avatar" />
                  </div>
                </div>

                {/* Full Name */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Enter Your Full Name"
                    id="fullName"
                    type="text"
                    className="w-100 "
                    value={user.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-danger">{errors.fullName}</p>
                )}

                {/* Email */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Enter Your Email"
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.email && <p className="text-danger">{errors.email}</p>}

                {/* Password */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    label="Enter Your Password"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}

                {/* GitHub */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fab icon="github me-3" size="lg" />
                  <MDBInput
                    label="GitHub URL"
                    id="github"
                    type="text"
                    value={user.github}
                    onChange={handleInputChange}
                  />
                </div>
                {/* {errors.github && <p className="text-danger">{errors.github}</p>} */}

                {/* LinkedIn */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fab icon="linkedin me-3" size="lg" />
                  <MDBInput
                    label="LinkedIn URL"
                    id="linkedIn"
                    type="text"
                    value={user.linkedIn}
                    onChange={handleInputChange}
                  />
                </div>
                {/* {errors.linkedIn && (
                  <p className="text-danger">{errors.linkedIn}</p>
                )} */}

                {/* Pass Out Year */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user-graduate me-3" size="lg" />
                  <MDBInput
                    label="Pass Out Year"
                    id="passOutYear"
                    type="text"
                    value={user.passOutYear}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.passOutYear && (
                  <p className="text-danger">{errors.passOutYear}</p>
                )}

                {/* Roll No */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="graduation-cap me-3" size="lg" />
                  <MDBInput
                    label="University Roll No"
                    id="rollNo"
                    type="text"
                    value={user.rollNo}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.rollNo && (
                  <p className="text-danger">{errors.rollNo}</p>
                )}

                {/* Job Role */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user-tie me-3" size="lg" />
                  <MDBInput
                    label="Job Role"
                    id="jobRole"
                    type="text"
                    value={user.jobRole}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.jobRole && (
                  <p className="text-danger">{errors.jobRole}</p>
                )}

                {/* Current Company */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="building me-3" size="lg" />
                  <MDBInput
                    label="Current Company"
                    id="currentCompany"
                    type="text"
                    value={user.currentCompany}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.currentCompany && (
                  <p className="text-danger">{errors.currentCompany}</p>
                )}

                {/* Gender */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="users me-3" size="lg" />
                  <select
                    name="gender"
                    id="gender"
                    className="w-full bg-white px-3 py-2 border focus:outline-none focus:ring focus:ring-blue-400 text-black"
                    value={user.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Please select Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {errors.gender && (
                  <p className="text-danger">{errors.gender}</p>
                )}

                {/* City */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="city me-3" size="lg" />
                  <MDBInput
                    label="City"
                    id="city"
                    type="text"
                    value={user.city}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.city && <p className="text-danger">{errors.city}</p>}

                {/* State */}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="map-marker-alt me-3" size="lg" />
                  <MDBInput
                    label="State"
                    id="state"
                    type="text"
                    value={user.state}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.state && <p className="text-danger">{errors.state}</p>}

                <MDBBtn className="mb-4" size="lg" onClick={handleFormSubmit}>
                  Register
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage src={image} fluid />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </form>
  )};

export default Register;
