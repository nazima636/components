import React from 'react';
import Image from './images/Studentslearning.png'; // student image imported
import { Link } from 'react-router-dom';

const Herosection = () => {
  return (

    <div className="flex items-center justify-between p-28 max-w-[1289px] bg-white">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold ">
          Here to transform <span className="text-blue-500">your</span> career
        </h1>
        <p className="mt-4 text-gray-600">
          The perfect blend of theoretical knowledge and practical experience is the key to a successful career. Here at Automation, we bridge that gap by offering comprehensive courses alongside real-world internship opportunities.
        </p>
        <br></br>
        <h2 className='text-blue-500 font-bold'>
            10<span className="text-green-500">X</span> <span className="text-black">Your Career Growth</span>
        </h2>
        <Link to="">
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md">
              Explore Upskill Programs
            </button>
          </Link>
      </div>
      <div className="z-10">
          <img src={Image} alt="Students Learning" className="h-96 w-96 object-cover rounded-full" />
        </div>
    </div>
  
  );
};

export default Herosection;
