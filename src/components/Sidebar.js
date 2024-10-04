import React from "react";
import { NavLink } from "react-router-dom";
import ProlificsLogo from "../Assets/Images/Prolifics.webp";
import {
  FaTachometerAlt,
  FaUsers,
  FaListUl,
  FaBriefcase,
  FaPalette,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-800 text-white w-64 flex flex-col relative">
      <div className="p-4 text-xl font-bold">
        <img
          src={ProlificsLogo}
          alt="Prolifics_Logo"
          className=" mt-2 h-7 w-full shadow-lg mr-2 mb-6"
        />
      </div>
      <nav className="flex-1">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 p-4 block flex items-center"
                  : "p-4 block flex items-center hover:bg-gray-700"
              }
            >
              <FaTachometerAlt className="mr-2" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/talent-pool"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 p-4 block flex items-center"
                  : "p-4 block flex items-center hover:bg-gray-700"
              }
            >
              <FaUsers className="mr-2" />
              <span>Talent Pool</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-list"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 p-4 block flex items-center"
                  : "p-4 block flex items-center hover:bg-gray-700"
              }
            >
              <FaListUl className="mr-2" />
              <span>My List</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/opportunities"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 p-4 block flex items-center"
                  : "p-4 block flex items-center hover:bg-gray-700"
              }
            >
              <FaBriefcase className="mr-2" />
              <span>Opportunity</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/themes"
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 p-4 block flex items-center"
                  : "p-4 block flex items-center hover:bg-gray-700"
              }
            >
              <FaPalette className="mr-2" />
              <span>Themes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
