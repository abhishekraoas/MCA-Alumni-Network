import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-[#f0f0f3] rounded-2xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] p-6 transition-transform transform hover:scale-105">
      <div className="flex flex-col items-center text-center">
        
        {/* Profile Photo */}
        <img
          src={user.profilePhoto}
          alt={user.fullName}
          className="w-28 h-28 rounded-full shadow-md border-4 border-[#e0e0e0] mb-4"
        />

        {/* Full Name */}
        <h2 className="text-2xl font-semibold text-gray-900">{user.fullName}</h2>
        
        {/* Job Role */}
        <p className="text-gray-700 text-sm font-medium">{user.jobRole}</p>

        {/* City & Passout Year */}
        <p className="text-gray-600 text-sm mt-1">
          📍 {user.city} | 🎓 Passout: {user.passOutYear}
        </p>

        {/* Current Company */}
        <p className="text-gray-600 text-sm">🏢 Works at: <strong>{user.currentCompany}</strong></p>

        {/* Skills Section */}
        <div className="mt-4 w-full">
          <strong className="text-gray-800">Skills:</strong>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium text-gray-700 bg-[#e0e0e0] rounded-lg shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]"
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
