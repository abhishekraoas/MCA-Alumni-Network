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
import AdminDashboard from "./pages/admin/AdminDashboard";
import DashboardLayout from "./pages/alumini/DashboardLayout";
import UserProfile from "./pages/alumini/UserProfile";
import Dashboad from "./pages/alumini/Dashboad";
import Jobs from "./pages/alumini/Jobs";
import Events from "./pages/alumini/Events";

// import Profile from "./components/Profile";

export default function App() {
  return (
    <AuthProvider>
    <Router>
      <Header />
      {/* <Register /> */}
      {/* <SignUp/> */}
      <Login />
      {/* <Profile/> */}
      <Footer />
    </Router>
    </AuthProvider>
  );
}
