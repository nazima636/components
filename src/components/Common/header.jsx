
import React from 'react';
import { FaHome, FaBook, FaClipboardList, FaBriefcase } from 'react-icons/fa';
import logo from '../images/logo.png'; 

const Header = () => {
  return (
    <header className=" border-b-[1px] p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Automation Logo" className="h-10 mr-3" />
      </div>
      <nav className="flex space-x-4">
        <a href="" className="flex items-center flex-col space-x-1  hover:text-black">
          <FaHome className=' text-2xl' />
          <span  className=' text-sm'>Home</span>
        </a>
        <a href="" className="flex items-center flex-col space-x-1  hover:text-black">
          <FaBook className=' text-2xl'/>
          <span className=' text-sm'>Trainings</span>
        </a>
        <a href="" className="flex items-center flex-col space-x-1  hover:text-black">
          <FaClipboardList className=' text-2xl'/>
          <span className=' text-sm'>Records</span>
        </a>
        <a href="" className="flex items-center flex-col space-x-1 hover:text-black">
          <FaBriefcase className=' text-2xl'/>
          <span className=' text-sm'>Internships</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
