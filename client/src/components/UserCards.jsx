import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-[#e0e5ec] rounded-[20px] p-[25px] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] max-w-[250px] w-full text-center">
      <div className="flex flex-col items-center">
        
        {/* Profile Photo */}
        <img
          src={user.profilePhoto}
          alt={user.fullName}
          className="w-20 h-20 rounded-full shadow-md border-2 border-[#d1d9e6] mb-3"
        />

        {/* Full Name */}
        <h2 className="text-[1.3rem] font-bold text-[#333]">{user.fullName}</h2>

        {/* Job Role */}
        <p className="text-gray-700 text-sm font-medium">{user.jobRole}</p>

        {/* City & Passout Year */}
        <p className="text-gray-600 text-xs mt-1">
          📍 {user.city} | 🎓 {user.passOutYear}
        </p>

        {/* Current Company */}
        <p className="text-gray-600 text-xs mt-1">
          🏢 Work at: {user.currentCompany}
        </p>

        {/* Skills Section */}
        <div className="w-full mt-2">
          <strong className="text-gray-800 text-xs">Skills:</strong>
          <div className="flex flex-wrap justify-center gap-1 mt-1">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium text-gray-700 bg-[#e0e0e0] rounded-lg shadow-[inset_4px_4px_8px_#b3b9c5,inset_-4px_-4px_8px_#ffffff]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
