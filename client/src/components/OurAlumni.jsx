import React, { useState } from "react";
import UserCard from "./UserCards";
import Search from "./Search";

const OurAlumni = () => {
  const users = [
    {
      name: "AbhiShek Rao",
      email: "abhi@example.com",
      avatar: "https://i.postimg.cc/q7HVzS6f/Abhi.jpg",
      city: "Gorakhpur",
      role: "Web Developer",
      passOut: "MCA 2025",
      skills: ["JavaScript", "React", "Node.js"],
      bio: "Passionate web developer with a love for building interactive applications.",
      worksAt: "TechSoft Pvt. Ltd.",
    },
    {
      name: "Satish Pandey",
      email: "sita@example.com",
      avatar: "https://i.postimg.cc/q7HVzS6f/Abhi.jpg",
      city: "Lucknow",
      role: "Data Scientist",
      passOut: "MCA 2024",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      bio: "Data scientist with a knack for uncovering insights from data.",
      worksAt: "DataMinds Corp.",
    },
    {
      name: "Suryam Shrivastav",
      email: "rahul@example.com",
      avatar: "https://i.postimg.cc/q7HVzS6f/Abhi.jpg",
      city: "Delhi",
      role: "UX Designer",
      passOut: "MCA 2023",
      skills: ["Figma", "Sketch", "User Research"],
      bio: "Creative UX designer focused on enhancing user experiences.",
      worksAt: "DesignHub",
    },
    {
      name: "Suryam Shrivastav",
      email: "rahul@example.com",
      avatar: "https://i.postimg.cc/q7HVzS6f/Abhi.jpg",
      city: "Delhi",
      role: "UX Designer",
      passOut: "MCA 2023",
      skills: ["Figma", "Sketch", "User Research"],
      bio: "Creative UX designer focused on enhancing user experiences.",
      worksAt: "DesignHub",
    },
    {
      name: "Suryam Shrivastav",
      email: "rahul@example.com",
      avatar: "https://i.postimg.cc/q7HVzS6f/Abhi.jpg",
      city: "Delhi",
      role: "UX Designer",
      passOut: "MCA 2023",
      skills: ["Figma", "Sketch", "User Research"],
      bio: "Creative UX designer focused on enhancing user experiences.",
      worksAt: "DesignHub",
    },
  ];
  

  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (query, filter) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = users.filter((user) => {
      if (filter === "name") {
        return user.name.toLowerCase().includes(lowerCaseQuery);
      } else if (filter === "city") {
        return user.city.toLowerCase().includes(lowerCaseQuery);
      } else if (filter === "skills") {
        return user.skills.some((skill) =>
          skill.toLowerCase().includes(lowerCaseQuery)
        );
      } else if (filter === "passOut") {
        return user.passOut.toLowerCase().includes(lowerCaseQuery); // Batch filter logic
      }
      return false;
    });
    setFilteredUsers(filtered);
  };
  

  return (
      <div className="container mx-auto px-4 pt-4">
        <h1 className="text-3xl font-bold text-center mb-4">Our Alumni</h1>
        <Search onSearch={handleSearch} />
        <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p
        x-4 mb-8 mt-10">
            <UserCards user={user} />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8 mt-10">
            <UserCards user={user} />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8 mt-10">
            <UserCards user={user} />
  
          </div>
          </div>

    </div>
</>

  );
};

export default OurAlumni;
