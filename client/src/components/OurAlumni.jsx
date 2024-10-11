import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import UserCards from "./UserCards";

const OurAlumni = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  const users = [
    {
      name: "AbhiShek Rao",
      email: "johndoe@example.com",
      avatar: "https://i.postimg.cc/q7HVzS6f/Abhi.jpg",
      city: "Gorakhpur",
      role: "Web Developer",
      passOut: "MCA 2025",
    },
    {
      name: "Ananya Singh",
      email: "ananya@example.com",
      avatar: "https://i.postimg.cc/6QYvNbhj/Ananya.jpg",
      city: "Lucknow",
      role: "Data Scientist",
      passOut: "MCA 2024",
    },
    {
      name: "Rahul Verma",
      email: "rahul@example.com",
      avatar: "https://i.postimg.cc/FK0jDddF/Rahul.jpg",
      city: "Delhi",
      role: "Software Engineer",
      passOut: "MCA 2023",
    },
    // Add more users as needed
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8"
            data-aos="fade-up" // AOS effect
          >
            <UserCards user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAlumni;
