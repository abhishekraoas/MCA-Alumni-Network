import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css';
import UserCard from "./components/UserCards";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Header from "./components/Header";
import Register from "./components/Register";

import ScrollTop from "./components/ScrollTop";
import About from "./components/About";
import OurAlumni from "./components/OurAlumni";
import Contact from "./components/Contact";

import Contact from "./components/Contact"

// import Profile from "./components/Profile";

export default function App() {
  const user = {
    name: "AbhiShek Rao",
    email: "johndoe@example.com",
    avatar: "https://i.postimg.cc/q7HVzS6f/Abhi.jpg",
    city: "Gorakhpur",
    role: "Web Developer",
    passOut: "MCA 2025",
  };
  return (
    <BrowserRouter>
    {/* <div style={{
      height: '100vh',
      overflowY: 'scroll',
      scrollbarWidth: 'thin',
      scrollbarColor: '#d3d3d3 #f1f1f1',
      }}> */}
      

      <Header />
      <ScrollTop/>  
      <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-alumni" element={<OurAlumni />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/profile" element={<UserProfile />} /> */}
       </Routes>

      <Register />
      {/* <SignUp/> */}
      {/* <Login /> */}
      {/* <Profile/> */}
      <Contact />

      <Footer />
    {/* </div> */}
    </BrowserRouter>
  );
}
