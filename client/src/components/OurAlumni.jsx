import React, { useEffect } from "react";
import UserCards from "./UserCards";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const OurAlumni = () => {
  const user = {
    name: "AbhiShek Rao",
    email: "johndoe@example.com",
    avatar: "https://i.postimg.cc/q7HVzS6f/Abhi.jpg",
    city: "Gorakhpur",
    role: "Web Developer",
    passOut: "MCA 2025",
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8" data-aos="fade-up"> {/* AOS attribute */}
            <UserCards user={user} />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8" data-aos="fade-up"> {/* AOS attribute */}
            <UserCards user={user} />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8" data-aos="fade-up"> {/* AOS attribute */}
            <UserCards user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAlumni;
