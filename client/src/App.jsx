import React from "react";
import "./index.css";
import UserCard from "./components/UserCards";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Header from "./components/Header";
import Register from "./components/Register";
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
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <UserCard user={user} />
      </div>
      <Register />
      <SignUp/>
      {/* <Login /> */}
      {/* <Profile/> */}
      <Footer />
    </>
  );
}
