import React from 'react';
import { Link } from 'react-router-dom'; // import links using raect dom
import { FaHome, FaBook, FaClipboardList, FaBriefcase, } from 'react-icons/fa';  //raect icons import
import logo from '../images/logo.png'; //impot logo

const Header = () => {
  return (
    <header className=" border-b-[1px] p-4 flex justify-between items-center">
      <div className="flex items-center">
      {/* logo on left side of header */}
        <img src={logo} alt="Automation Logo" className="h-10 mr-3" />    
      </div>
      <input type="text" placeholder="Search cources" className="px-4 py-1 border rounded-md focus:outline-none focus:border-blue-500" />
      {/* navigatin bar starts */}
      <nav className="flex space-x-4">
        <Link to="/" className="flex items-center flex-col space-x-1  hover:text-black">
          <FaHome className=' text-2xl' />
          <span  className=' text-sm'>Home</span>
        </Link>
        <Link to="" className="flex items-center flex-col space-x-1  hover:text-black">
          <FaBook className=' text-2xl'/>
          <span className=' text-sm'>Trainings</span>
        </Link>
        <Link to="" className="flex items-center flex-col space-x-1  hover:text-black">
          <FaClipboardList className=' text-2xl'/>
          <span className=' text-sm'>Records</span>
        </Link>
        <Link to="" className="flex items-center flex-col space-x-1 hover:text-black">
          <FaBriefcase className=' text-2xl'/>
          <span className=' text-sm'>Internships</span>
        </Link>
      </nav>

    </header>
  );
};

export default Header;
