import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "",
    profilePicture: "", // Add profile picture URL
  });

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [profilePreview, setProfilePreview] = useState(null);

  useEffect(() => {
    // Simulate fetching user data (including profile picture)
    setUser({
      name: "John Doe",
      email: "john.doe@example.com",
      profilePicture: "https://via.placeholder.com/150", // Placeholder image
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // Handle profile picture upload
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Simulate updating user profile
  const handleUpdate = (e) => {
    e.preventDefault();
    setMessage("Profile updated successfully!");
    setIsEditing(false);
    if (profilePreview) {
      setUser((prevUser) => ({ ...prevUser, profilePicture: profilePreview }));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md relative">
      {/* Edit button */}
      {!isEditing && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-0 right-0 mt-4 mr-4 text-blue-500 hover:text-blue-600"
        >
          Edit
        </button>
      )}

      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          {/* Profile picture */}
          <img
            src={profilePreview || user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full border"
          />

          {/* Edit profile picture */}
          {isEditing && (
            <label className="absolute bottom-0 right-0 p-2 bg-gray-300 rounded-full cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536M9 11.268V14l2.268-2.268m2-2L18 5l-3.536-3.536-4.536 4.536a2 2 0 01-.548.435l-2 1a2 2 0 01-2.832-2.832l1-2a2 2 0 01.435-.548l4.536-4.536L5 2l4.732 4.732m1.536 1.536l3.536 3.536"
                />
              </svg>
            </label>
          )}
        </div>
      </div>

      {message && (
        <div className="mb-4 text-green-500 text-center">{message}</div>
      )}

      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          {!isEditing ? (
            <p className="mt-1 text-gray-600">{user.name}</p>
          ) : (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          {!isEditing ? (
            <p className="mt-1 text-gray-600">{user.email}</p>
          ) : (
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        </div>

        {isEditing && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter new password"
            />
          </div>
        )}

        {isEditing && (
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Save Changes
          </button>
        )}
      </form>
    </div>
  );
};

export default UserProfile;
