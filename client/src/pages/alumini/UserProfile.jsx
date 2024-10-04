import React, { useState, useEffect } from 'react';
import { useAuth } from '../../middleware/AuthContext'; // Import Auth context
import { apiRequest } from '../../utils/apiUtils'; // Helper for API requests
import { UserIcon } from '@heroicons/react/24/outline'; // Correct import for v2

const Profile = () => {
  const { user, login, loading } = useAuth(); // Get user, login method, and loading status from context
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch profile data from backend or local storage and set the form data
  useEffect(() => {
    const fetchUserProfile = async () => {
      const localStorageData = localStorage.getItem('userData');

      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        setFormData({ 
          name: parsedData.fullName, 
          email: parsedData.email, 
          password: '' 
        });
      } else if (user) {
        const rollNo = localStorage.getItem('rollNo');
        if (rollNo) {
          try {
            const userData = await apiRequest(`/alumni/${rollNo}`);
            setFormData({ 
              name: userData.fullName, 
              email: userData.email, 
              

              password: '' 
            });
          } catch (error) {
            console.error('Failed to fetch user data from API', error);
          }
        }
      }
    };

    fetchUserProfile(); // Invoke the function to fetch user data
  }, [user]);

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit updated profile data
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { 
        fullName: formData.name, 
        email: formData.email 
      };
      // if (formData.password) {
      //   updatedData.password = formData.password; // Only include password if provided
      // }

      // Use the rollNo from local storage to update user data
      const localStorageData = localStorage.getItem('userData'); // Get rollNo from local storage
      const parsedData = JSON.parse(localStorageData);

      const updatedUser = await apiRequest(`/alumni/${parsedData.rollNo}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedData),
      });

      login(updatedUser, localStorage.getItem('token')); // Re-login with updated data
      localStorage.setItem('userData', JSON.stringify(updatedUser)); // Update local storage

      setMessage('Profile updated successfully!'); // Success message
      setIsEditing(false); // Exit edit mode
    } catch (error) {
      console.error('Failed to update profile', error);
      setMessage('Error updating profile.'); // Error message
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please login to view your profile.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-8 px-10 rounded-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <UserIcon className="h-10 w-10 text-blue-500 mr-3" aria-hidden="true" /> {/* User Icon */}
        <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
      </div>

      {message && <div className="mb-4 text-green-500 text-center">{message}</div>}

      <form onSubmit={handleUpdate}>
        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          {!isEditing ? (
            <p className="mt-1 text-gray-600">{formData.name}</p>
          ) : (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          {!isEditing ? (
            <p className="mt-1 text-gray-600">{formData.email}</p>
          ) : (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>

        {/* Password Field (only shown in edit mode) */}
        {isEditing && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Toggle between Edit and Save modes */}
        <div>
          {isEditing ? (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Save Changes
            </button>
          ) : (
            <a
              onClick={() => setIsEditing(true)}
              className="w-full bg-blue-500 text-white font-bold py-2 px-5 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Edit Profile
            </a>
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile;
