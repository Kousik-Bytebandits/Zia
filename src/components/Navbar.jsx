import { useState } from 'react';
import {   FaTimes } from 'react-icons/fa';
import { BiSearchAlt } from "react-icons/bi";
import { HiMiniBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#2f3a27] flex items-center justify-between  p-4 text-white">
        
        <img src="images/zia_logo.png" alt="Zia Logo" className="h-10" />
        <div className="bg-[#545D4F] flex items-center px-2 py-2 rounded-xl -mr-7 w-55">
         <BiSearchAlt className='w-6 h-6 mr-2' />
          <input
            type="text"
            placeholder="Search your products"
            className="bg-transparent outline-none  text-sm w-full placeholder-white"
          />
        </div>
         <button
          onClick={() => setIsOpen(true)}
          className=" text-2xl "
        >
          <HiMiniBars3/>
        </button>
      </nav>

     
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#2f3a27] text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 shadow-xl`}
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-xl" />
          </button>
        </div>
        <ul className="space-y-4 p-4 text-lg">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
