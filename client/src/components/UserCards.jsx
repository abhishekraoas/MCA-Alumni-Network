import React from "react";
import SocialMedia from "./SocialMedia";

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform duration-300 hover:scale-105 dark:bg-gray-800 p-4">
      <div className="flex flex-col items-center">
        <img
          className="h-32 w-32 rounded-full border-4 border-indigo-500"
          src={user.avatar}
          alt={`${user.name}'s avatar`}
        />
        <h2 className="text-xl font-semibold text-black dark:text-white mt-3">
          {user.name}
        </h2>
        <h3 className="text-lg font-regular text-black dark:text-gray-300">
          {user.city}
        </h3>
        <h3 className="text-lg font-regular text-black dark:text-gray-300">
          {user.role}
        </h3>
        <h3 className="text-lg font-regular text-black dark:text-gray-300">
          {user.passOut}
        </h3>
      </div>

      <div className="flex flex-wrap justify-center mt-2">
        {user.skills.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-100 text-indigo-700 text-xs font-medium mr-1 mb-1 px-2 py-0.5 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="text-xs text-gray-500 text-center dark:text-gray-300">
        {user.bio}
      </p>
      {user.worksAt && (
        <p className="text-xs text-gray-500 text-center dark:text-gray-300">
          Currently at: <span className="text-indigo-600 cursor-pointer">{user.worksAt}</span>
        </p>
      )}

      {/* Add Social Media Section */}
      <div className="mt-2">
        <SocialMedia user={user} />
      </div>

      <div className="flex justify-center mt-4 mb-4">
        <button className="text-white bg-indigo-500 hover:bg-indigo-400 px-4 py-2 rounded-full">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;

