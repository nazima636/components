import React from 'react';
import { Link } from 'react-router-dom'; // import links using react-router-dom
import { FaHome, FaBook, FaClipboardList, FaBriefcase } from 'react-icons/fa'; // react-icons import
import { BsCCircle } from "react-icons/bs";
import logo from '../images/logo.png'; // import logo

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b-[1px] p-4 flex justify-between items-center max-w-[1289px] mx-auto z-50">
      <div className="flex items-center">
        {/* logo on left side of header */}
        <img src={logo} alt="Automation Logo" className="h-10 mr-3" />    
      </div>
      <input type="text" placeholder="Search courses" className="px-4 py-1 border rounded-md focus:outline-none focus:border-blue-500" />
      {/* navigation bar starts */}
      <nav className="flex space-x-4">
        <Link to="/" className="flex items-center flex-col hover:text-black">
          <FaHome className="text-2xl" />
          <span className="text-sm">Home</span>
        </Link>
        <Link to="" className="flex items-center flex-col hover:text-black">
          <FaBook className="text-2xl" />
          <span className="text-sm">Trainings</span>
        </Link>
        <Link to="" className="flex items-center flex-col hover:text-black">
          <FaClipboardList className="text-2xl" />
          <span className="text-sm">Records</span>
        </Link>
        <Link to="" className="flex items-center flex-col hover:text-black">
          <FaBriefcase className="text-2xl" />
          <span className="text-sm">Internships</span>
        </Link>
        <Link to="" className="flex items-center flex-col hover:text-black">
        <BsCCircle className='text-2xl' />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
