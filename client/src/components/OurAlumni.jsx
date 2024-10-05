import React from "react";
import UserCards from "./UserCards";

const OurAlumni = () => {

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
      <div className="container mt-10 px-4 ">
        <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p
        x-4 mb-8">
            <UserCards user={user} />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
            <UserCards user={user} />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
            <UserCards user={user} />
  
          </div>
          </div>

    </div>
</>
   
  );
};

export default OurAlumni;
