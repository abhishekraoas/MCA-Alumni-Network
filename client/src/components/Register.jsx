import React from "react";
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

const Register = () => {
  return (
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
            <div className=" ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 mb-4">
              <img src={image} />
            </div>
          </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Enter Your Full Name"
                  id="form1"
                  type="text"
                  className="w-100"
                  required={true}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Enter Your Email"
                  id="form2"
                  type="email"
                  required={true}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Enter Your Password"
                  id="form3"
                  type="password"
                  required={true}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fab icon="github me-3" size="lg" />
                <MDBInput
                  label="GitHub URL"
                  id="form4"
                  type="github"
                  required={true}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fab icon="linkedin me-3" size="lg" />
                <MDBInput
                  label="LinkedIn URL"
                  id="form4"
                  type="linkedin"
                  required={true}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user-graduate me-3" size="lg" />
                <MDBInput
                  label="Pass Out Year"
                  id="form4"
                  type="passOutYear"
                  required={true}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="graduation-cap me-3" size="lg" />
                <MDBInput
                  label="University Roll No"
                  id="form4"
                  type="rollNo"
                  required={true}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user-tie me-3" size="lg" />
                <MDBInput label="Job Role" id="form4" type="jobRole" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="building me-3" size="lg" />
                <MDBInput
                  label="Current Company"
                  id="form4"
                  type="currentCompany"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="users me-3" size="lg" />
                <div className="d-flex flex-row align-items-center space-x-3">
                  <select
                    name="gender"
                    className="w-full bg-white mt-2 px-4 py-2 border focus:outline-none focus:ring focus:ring-blue-400 text-black"
                  >
                    <option value="">Please select one…</option>
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
                <MDBInput label="City" id="form4" type="city" required={true} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="place-of-worship me-3" size="lg" />
                <MDBInput
                  label="State"
                  id="form4"
                  type="state"
                  required={true}
                />
              </div>

              <MDBBtn className="mb-4" size="lg">
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage src="\src\assets\register.svg" fluid />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Register;
