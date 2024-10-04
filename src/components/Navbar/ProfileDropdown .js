import React, { useState } from "react";
import ProfilePage from "./ProfilePage";

const ProfileDropdown = ({ onLogout, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = ()=>{
    setShowProfile(true);
    setIsOpen(false); //closing the dropdown after opening the profile section
  }

  const closeProfile = () =>{
    setShowProfile(false);
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-10 h-10 bg-blue-950 text-white rounded-full flex items-center justify-center focus:outline-none"
      >
        <span className="text-lg font-semibold">{user[0]}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <ul className="py-1">
            <li
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={handleProfileClick}
            >
              Profile
            </li>
            <li
              onClick={onLogout}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
      {/* Profile Card Popup */}
      {showProfile && <ProfilePage user={user} onClose={closeProfile} />}
    </div>
  );
};

export default ProfileDropdown;
