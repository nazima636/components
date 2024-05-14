
import React from 'react';
import { FaHome, FaBook, FaClipboardList, FaBriefcase } from 'react-icons/fa';
import logo from '../images/logo.png'; 

const Header = () => {
  return (
    <header className="bg-gray-100 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Automation Logo" className="h-10 mr-3" />
      </div>
      <nav className="flex space-x-4">
        <a href="" className="flex items-center space-x-1 hover:text-black">
          <FaHome />
          <span>Home</span>
        </a>
        <a href="" className="flex items-center space-x-1 hover:text-black">
          <FaBook />
          <span>Trainings</span>
        </a>
        <a href="" className="flex items-center space-x-1 hover:text-black">
          <FaClipboardList />
          <span>Records</span>
        </a>
        <a href="" className="flex items-center space-x-1 hover:text-black">
          <FaBriefcase />
          <span>Internships</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
