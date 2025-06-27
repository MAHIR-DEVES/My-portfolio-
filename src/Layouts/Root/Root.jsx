import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';

const Root = () => {
  return (
    <div className="bg-[#0d1321] min-h-screen text-white">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
