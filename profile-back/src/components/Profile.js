import React, { useState, useEffect, Profiler } from 'react';
import axios from 'axios';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    joinedDate: '',
    gender: '',
    birthdate: '',
    password: '',
    email: '',
    mobile: '',
  });

  useEffect(() => {
    // Fetch the profile details
    axios.get('http://localhost:5000/api/profile/david@yahoo.com')
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the profile!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveProfile = () => {
    axios.put(`http://localhost:5000/api/profile/${profile.email}`, profile)
      .then(response => {
        setProfile(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('There was an error updating the profile!', error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-[60em]">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center text-gray-500">
            100 x 100
          </div>
          <div>
            <h1 className="text-2xl font-bold">David</h1>
            <p className="text-gray-400">Regular</p>
          </div>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg space-y-4">
          <div className="flex justify-between">
            <span>Joined Date:</span>
            {isEditing ? (
              <input
                type="date"
                name="joinedDate"
                value={profile.joinedDate.split('T')[0]} // to handle date formatting
                onChange={handleInputChange}
                className="bg-gray-600 text-white rounded p-1"
              />
            ) : (
              <span>{new Date(profile.joinedDate).toLocaleDateString()}</span>
            )}
          </div>
          <div className="flex justify-between">
            <span>Gender:</span>
            {isEditing ? (
              <select
                name="gender"
                value={profile.gender}
                onChange={handleInputChange}
                className="bg-gray-600 text-white rounded p-1"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <span>{profile.gender}</span>
            )}
          </div>
          <div className="flex justify-between">
            <span>Birthdate:</span>
            {isEditing ? (
              <input
                type="date"
                name="birthdate"
                value={profile.birthdate.split('T')[0]} // to handle date formatting
                onChange={handleInputChange}
                className="bg-gray-600 text-white rounded p-1"
              />
            ) : (
              <span>{new Date(profile.birthdate).toLocaleDateString()}</span>
            )}
          </div>
          <div className="flex justify-between">
            <span>Password:</span>
            {isEditing ? (
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleInputChange}
                className="bg-gray-600 text-white rounded p-1"
              />
            ) : (
              <span>{profile.password}</span>
            )}
          </div>
          <div className="flex justify-between">
            <span>Email:</span>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="bg-gray-600 text-white rounded p-1"
              />
            ) : (
              <span>{profile.email}</span>
            )}
          </div>
          <div className="flex justify-between">
            <span>Mobile:</span>
            {isEditing ? (
              <input
                type="text"
                name="mobile"
                value={profile.mobile}
                onChange={handleInputChange}
                className="bg-gray-600 text-white rounded p-1"
              />
            ) : (
              <span>{profile.mobile}</span>
            )}
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={saveProfile}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={toggleEdit}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={toggleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
