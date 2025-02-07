import React, { useEffect, useState } from "react";
import UserCard from "./UserCards";
import Search from "./Search";

export const OurAlumni = () => {
  const [alumni, setAlumni] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "http://localhost:3000/api/alumni";

  const fetchAlumni = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      // console.log(data); // Debug API response
      setAlumni(data || []); // Adjust based on API structure
      setFilteredUsers(data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching alumni data:", error);
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchAlumni();
  }, []);
  

  const handleSearch = (query, filter) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = alumni.filter((user) => {
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

  if (loading) {
    return <p className="text-center">Loading alumni data...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 pt-4">
      <h1 className="text-3xl font-bold text-center mb-4">Our Alumni</h1>
      <Search onSearch={handleSearch} />
      <div className="flex flex-wrap -mx-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8" key={index}>
              <UserCard user={user} />
            </div>
          ))
        ) : (
          <p className="text-center w-full">No alumni found.</p>
        )}
      </div>
    </div>
  );
};

export default OurAlumni;
