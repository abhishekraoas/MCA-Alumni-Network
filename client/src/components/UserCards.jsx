import React from 'react';
import SocialMedia from './SocialMedia';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto pr-14 pl-14 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center mt-2">
        <img
          className="h-32 w-32 rounded-full border-4 border-primary-500 shadow-md"
          src={user.avatar}
          alt={`${user.name} avatar`}
        />
      </div>
      <div className="text-center mt-3">
        <h2 className="text-xl font-semibold text-primary-700">{user.name}</h2>
        <h3 className="text-l font-normal text-grey-600">{user.city}</h3>
        <h3 className="text-l font-normal text-grey-600">{user.role}</h3>
        <h3 className="text-l font-normal text-grey-600">{user.passOut}</h3>

       <SocialMedia/>

      {/* Badges or Tags */}
      <div className="flex justify-center mt-4">
          {user.skills.map((skill, index) => (
            <span key={index} className="bg-primary-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {skill}
            </span>
          ))}
        </div>

      </div>
      <div className="flex justify-center mt-4 mb-4">
        <button className="text-white bg-primary-500 hover:bg-primary-400 px-4 py-2 rounded-full transition duration-300 transform hover:scale-105">
          View Profile
        </button>
        </div>
      {/* Social Media Links Section */}
      <div className="flex justify-center space-x-4 mt-4">
        <a href={user.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-primary-500 hover:text-primary-700 transition duration-200" />
        </a>
        <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-primary-500 hover:text-primary-700 transition duration-200" />
        </a>
        <a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-primary-500 hover:text-primary-700 transition duration-200" />
        </a>
        <a href={user.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-primary-500 hover:text-primary-700 transition duration-200" />
        </a>
      </div>
    </div>
  );
};

export default UserCard;
