import React from 'react';
import SocialMedia from './SocialMedia';

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform duration-300 hover:scale-105 p-5">
      <div className="flex flex-col items-center">
        <img
          className="h-32 w-32 rounded-full border-4 border-indigo-500"
          src={user.avatar}
          alt={`${user.name} avatar`}
        />
        <h2 className="text-xl font-semibold text-gray-800 mt-2">{user.name}</h2>
        <h3 className="text-md text-gray-600">{user.role}</h3>
        <p className="text-sm text-gray-500">{user.city} | {user.passOut}</p>
      </div>

      <div className="mt-1">
        <div className="flex flex-wrap justify-center mt-1">
          {user.skills.map(skill => (
            <span
              key={skill}
              className="bg-indigo-100 text-indigo-700 text-xs font-medium mr-1 mb-1 px-2.5 py-0.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-2 text-center">{user.bio}</p>
        {user.worksAt && (
          <p className="text-xs text-gray-500 text-center">
          Currently at: <span className="text-indigo-600 cursor-pointer">{user.worksAt}</span>
        </p>
        )}
        {/* Add Social Media Section */}
        <div className="">
          <SocialMedia user={user} />
        </div>

        <div className="flex justify-center mt-5">
          <button className="text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-full text-sm">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
