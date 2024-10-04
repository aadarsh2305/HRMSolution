import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const MainContent = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default MainContent;
