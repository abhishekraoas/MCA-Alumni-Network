import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css';
import { AuthProvider } from "./middleware/AuthContext";
import ProtectedRoute from "./middleware/ProtectedRoute";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Header from "./components/Header";
import Register from "./components/Register";
import About from "./components/About";
import OurAlumni from "./components/OurAlumni";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

// import Profile from "./components/Profile";

export default function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Header /> 
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/alumni" element={<OurAlumni />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/profile" element={<UserProfile />} /> */}
       </Routes>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
  );
}
