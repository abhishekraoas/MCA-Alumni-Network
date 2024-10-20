import React from 'react';
import SocialMedia from './SocialMedia';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform duration-300 hover:scale-105 p-2">
      <div className="flex flex-col items-center">
        <img
          className="h-28 w-28 rounded-full border-4 border-indigo-500"
       main
          src={user.avatar}
          alt={`${user.name}'s avatar`}
        />
        <h2 className="text-lg font-semibold text-gray-800 mt-1 leading-0">{user.name}</h2>
        <h3 className="text-sm text-gray-600 leading-0">{user.role}</h3>
        <p className="text-xs text-gray-500 leading-0">{user.city} | {user.passOut}</p>
      </div>
       main

      <div className="">
        <div className="flex flex-wrap justify-center mt-1">
          {user.skills.map((skill) => (
            <span
              key={skill}
              className="bg-indigo-100 text-indigo-700 text-xs font-medium mr-1 mb-1 px-2 py-0.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center">{user.bio}</p>
        {user.worksAt && (
          <p className="text-xs text-gray-500 text-center">
            Currently at: <span className="text-indigo-600 cursor-pointer">{user.worksAt}</span>
          </p>
        )}

        {/* Add Social Media Section */}
        <div className="mt-2">
          <SocialMedia user={user} />
        </div>

        <div className="flex justify-center mt-4">
          <button className="text-white bg-indigo-600 hover:bg-indigo-500 px-3 py-1 rounded-full text-xs">
            View Profile
          </button>
        </div>
         main
      </div>
    </div>
  );
};

export default UserCard;
