import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./index.css";

// Components
const Header = () => <header>Header Component</header>;
const Footer = () => <footer>Footer Component</footer>;
const ScrollToTop = () => <div>ScrollToTop Component</div>;
const Home = () => <div>Home Page</div>;
const Register = () => <div>Register Page</div>;
const Login = () => <div>Login Page</div>;
const About = () => <div>About Us Page</div>;
const OurAlumni = () => <div>Our Alumni Page</div>;
const Contact = () => <div>Contact Us Page</div>;

// Pages (User and Admin)
const DashboardLayout = ({ children }) => <div>Dashboard Layout {children}</div>;
const Dashboard = () => <div>User Dashboard Page</div>;
const Jobs = () => <div>Jobs Page</div>;
const Events = () => <div>Events Page</div>;
const UserProfile = () => <div>User Profile Page</div>;
const AdminDashboard = () => <div>Admin Dashboard Page</div>;

// Authentication Logic (Simulated)
const isAuthenticated = () => !!localStorage.getItem("token"); // Check if a token exists
const isAdminAuthenticated = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role === "admin"; // Check if the user is admin
};

// ProtectedRoute Component
const ProtectedRoute = ({ children, isAdmin = false }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }
  if (isAdmin && !isAdminAuthenticated()) {
    return <Navigate to="/login" />; // Redirect to login if not an admin
  }
  return children; // Render the protected content
};

// Main App Component
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
                <Dashboard />
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
            <ProtectedRoute isAdmin={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}
