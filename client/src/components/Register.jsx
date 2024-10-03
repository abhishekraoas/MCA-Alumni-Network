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
    
    <form onChange={handleInputChange}>

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
                Register as Alumni
              </p>
              {error && <div className="text-red-500 text-center">{error}</div>}


              <div className="avatar mx-auto">
                <div className=" ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 mb-4">
                  <img src={image} />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Enter Your Full Name"
                  id="fullName"
                  type="text"
                  className="w-100"
                  required={true}
                  value={user.fullName}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Enter Your Email"
                  id="email"
                  type="email"
                  required={true}
                  value={user.email}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Enter Your Password"
                  id="password"
                  type="password"
                  required={true}
                  value={user.password}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fab icon="github me-3" size="lg" />
                <MDBInput
                  label="GitHub URL"
                  id="github"
                  type="github"
                  required={true}
                  value={user.github}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fab icon="linkedin me-3" size="lg" />
                <MDBInput
                  label="LinkedIn URL"
                  id="linkedIn"
                  type="linkedIn"
                  required={true}
                  value={user.linkedIn}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user-graduate me-3" size="lg" />
                <MDBInput
                  label="Pass Out Year"
                  id="passOutYear"
                  type="passOutYear"
                  required={true}
                  value={user.passOutYear}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="graduation-cap me-3" size="lg" />
                <MDBInput
                  label="University Roll No"
                  id="rollNo"
                  type="rollNo"
                  required={true}
                  value={user.rollNo}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user-tie me-3" size="lg" />
                <MDBInput 
                label="Job Role" 
                id="jobRole" 
                type="jobRole" 
                value={user.jobRole}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="building me-3" size="lg" />
                <MDBInput
                  label="Current Company"
                  id="currentCompany"
                  type="currentCompany"
                  value={user.currentCompany}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="users me-3" size="lg" />
                <div className="d-flex flex-row align-items-center space-x-3">
                  <select
                    name="gender"
                    id="gender"
                    className="w-full bg-white px-3 py-2 border focus:outline-none focus:ring focus:ring-blue-400 text-black"
                    required={true}
                    value={user.gender}
                  >
                    <option value="gendr">Please select Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                    <option value="Prefer not to answer">
                      Perfer not to Answer
                    </option>
                  </select>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="city me-3" size="lg" />
                <MDBInput 
                label="City" 
                id="city" 
                type="city" 
                required={true} 
                value={user.city}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="place-of-worship me-3" size="lg" />
                <MDBInput
                  label="State"
                  id="state"
                  type="state"
                  required={true}
                  value={user.state}
                />
              </div>

            {/* Photo upload
            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="image me-3" size="lg" />
              <input type="file" id="photo" name="photo" accept="image/*" />
            </div> */}

              <MDBBtn className="mb-4" size="lg" onClick={handleFormSubmit}>
                Register
              </MDBBtn>
             
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center w-30"
            >
              <MDBCardImage src="\src\assets\register.svg" fluid />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </form>
  );
};

export default Register;
