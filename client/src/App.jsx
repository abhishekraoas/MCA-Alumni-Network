import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Header from "./components/Header";
import Register from "./components/Register";
import About from "./components/About";
import OurAlumni from "./components/OurAlumni";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DashboardLayout from "./pages/alumini/DashboardLayout";
import UserProfile from "./pages/alumini/UserProfile";
import Dashboad from "./pages/alumini/Dashboad";
import Jobs from "./pages/alumini/Jobs";
import Events from "./pages/alumini/Events";
import ProtectedRoute from "./middleware/ProtectedRoute"; // Ensure this is imported

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/alumni" element={<OurAlumni />} />
        <Route path="/contact-us" element={<Contact />} />

        {/* User Protected Routes */}
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboad />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/jobs"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Jobs />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/events"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Events />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/profile"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <UserProfile />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Admin Protected Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
