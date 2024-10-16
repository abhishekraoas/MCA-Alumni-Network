import React from "react";
import SocialMedia from "./SocialMedia";

const UserCard = ({ user }) => {
	return (
		<div className="max-w-sm mx-auto pr-14 pl-14 bg-white shadow-lg rounded-lg overflow-hidden transition ease-in-out hover:scale-105 dark:bg-gray-800">
			<div className="flex justify-center mt-2">
				<img
					className="h-32 w-32 rounded-full border-4 border-indigo-500"
					src={user.avatar}
					alt={`${user.name} avatar`}
				/>
			</div>
			<div className="text-center mt-3">
				<h2 className="text-xl font-semibold text-black dark:text-white">
					{user.name}
				</h2>
				<h3 className="text-l font-regular text-black dark:text-gray-300">
					{user.city}
				</h3>
				<h3 className="text-l font-regular text-black dark:text-gray-300">
					{user.role}
				</h3>
				<h3 className="text-l font-regular text-black dark:text-gray-300">
					{user.passOut}
				</h3>

				<SocialMedia />

				{/* <p className="text-gray-600">{user.email}</p> */}
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
