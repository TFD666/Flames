import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"; // Import the CSS file

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    joinedDate: "",
    gender: "",
    birthdate: "",
    password: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    // Fetch the profile details
    axios
      .get("http://localhost:5000/api/profile/david@yahoo.com")
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the profile!", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && !/^\d*$/.test(value)) {
      // If the value is not numeric, do nothing
      return;
    }
    setProfile({ ...profile, [name]: value });
  };

  const validateProfile = () => {
    const errors = {};

    if (!profile.joinedDate) {
      errors.joinedDate = "Joined Date is required";
    }
    if (!profile.gender) {
      errors.gender = "Gender is required";
    }
    if (!profile.birthdate) {
      errors.birthdate = "Birthdate is required";
    }
    if (!profile.password) {
      errors.password = "Password is required";
    }
    if (!profile.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(profile.email)) {
      errors.email = "Email address is invalid";
    }
    if (!profile.mobile) {
      errors.mobile = "Mobile number is required";
    }

    return errors;
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveProfile = () => {
    const validationErrors = validateProfile();
    if (Object.keys(validationErrors).length > 0) {
      alert("Please fill out all required fields correctly.");
      return;
    }

    axios
      .put(`http://localhost:5000/api/profile/${profile.email}`, profile)
      .then((response) => {
        setProfile(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("There was an error updating the profile!", error);
      });
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">100 x 100</div>
          <div>
            <h1 className="profile-name">David</h1>
            <p className="profile-role">Regular</p>
          </div>
        </div>
        <div className="profile-details">
          <div className="profile-detail">
            <span>Joined Date:</span>
            {isEditing ? (
              <input
                type="date"
                name="joinedDate"
                value={profile.joinedDate.split("T")[0]}
                onChange={handleInputChange}
                className="profile-input"
              />
            ) : (
              <span>{new Date(profile.joinedDate).toLocaleDateString()}</span>
            )}
          </div>
          <div className="profile-detail">
            <span>Gender:</span>
            {isEditing ? (
              <select
                name="gender"
                value={profile.gender}
                onChange={handleInputChange}
                className="profile-input"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <span>{profile.gender}</span>
            )}
          </div>
          <div className="profile-detail">
            <span>Birthdate:</span>
            {isEditing ? (
              <input
                type="date"
                name="birthdate"
                value={profile.birthdate.split("T")[0]}
                onChange={handleInputChange}
                className="profile-input"
              />
            ) : (
              <span>{new Date(profile.birthdate).toLocaleDateString()}</span>
            )}
          </div>
          <div className="profile-detail">
            <span>Password:</span>
            {isEditing ? (
              <input
                name="password"
                value={profile.password}
                onChange={handleInputChange}
                className="profile-input"
              />
            ) : (
              <span>{profile.password}</span>
            )}
          </div>
          <div className="profile-detail">
            <span>Mobile:</span>
            {isEditing ? (
              <input
                type="text"
                name="mobile"
                value={profile.mobile}
                onChange={handleInputChange}
                className="profile-input"
                pattern="[0-9]*"
                title="Please enter a valid mobile number"
              />
            ) : (
              <span>{profile.mobile}</span>
            )}
          </div>
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button onClick={saveProfile} className="profile-button save">
                Save
              </button>
              <button onClick={toggleEdit} className="profile-button cancel">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={toggleEdit} className="profile-button edit">
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
