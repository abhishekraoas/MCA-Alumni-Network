import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./middleware/AuthContext";
import ProtectedRoute from "./middleware/ProtectedRoute";
import "./index.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Header from "./components/Header";
import Register from "./components/Register";
import About from "./components/About";
import OurAlumni from "./components/OurAlumni";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AdminDashboard from "./components/AdminDashboard";

// import Profile from "./components/Profile";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/alumni" element={<OurAlumni />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/profile" element={<UserProfile />} /> */}
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
