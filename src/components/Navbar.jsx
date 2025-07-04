import { useState, useEffect } from 'react';
import { FaTimes,  FaShoppingCart } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import {NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
const isHome = location.pathname === '/home'; 

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const handleChange=()=>{
  const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/profile"); 
    }  else {
      navigate("/login"); 
    }

}

const handleCart=()=>{
  navigate('/shopcart');
}
  return (
    <>
      <nav className="flex flex-col lg:flex-row text-white w-full ">
       
{/* Mobile Navbar*/}

<div
  className={`w-full lg:hidden px-4 py-3 pb-3 z-50 transition-all duration-300 fixed top-0 ${
    isScrolled ? 'bg-[#2f3a27] shadow-md' : 'bg-[#2f3a27]'
  }`}
>
  {/* Replace entire logic block inside here with this 👇 */}
  {!isScrolled ? (
    // 🟢 Full Top Layout for all pages before scroll
    <>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <button onClick={() => setIsOpen(true)} className="text-white">
            <IoMenu className="text-5xl" />
          </button>
          <img src="images/zia_logo.png" alt="Zia Logo" className="h-11" />
        </div>

        <div className="flex items-center gap-4">
          <FaUser onClick={handleChange} className="text-white text-3xl" />
          <div className="relative">
            <FaShoppingCart onClick={handleCart} className="text-white text-[30px]" />
            <span className="absolute -top-2 -right-1 bg-red-600 text-[10px] leading-none font-semibold text-white rounded-full px-[4px] py-[3px]">
              0
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#E9F8E5] flex items-center px-3 py-[6px] rounded-lg">
        <GoSearch className="w-6 h-6 mr-2 text-[#555]" />
        <input
          type="text"
          placeholder="Search for Products"
          className="bg-[#E9F8E5] outline-none text-lg w-full text-black placeholder:text-gray-700"
        />
      </div>
    </>
  ) : isHome ? (
    // 🟡 Scrolled Home Page Layout
    <div className="flex items-center justify-between">
      <button onClick={() => setIsOpen(true)} className="text-white">
        <IoMenu className="text-5xl" />
      </button>

      <div className="bg-[#E9F8E5] flex items-center px-3 py-[6px] rounded-lg w-full mx-2">
        <GoSearch className="w-6 h-6 mr-2 text-[#555]" />
        <input
          type="text"
          placeholder="Search for Products"
          className="bg-[#E9F8E5] outline-none text-lg w-full text-black placeholder:text-gray-700"
        />
      </div>

      <div className="relative ml-2">
        <FaShoppingCart className="text-white text-[28px]" onClick={handleCart} />
        <span className="absolute -top-2 -right-1 bg-red-600 text-[10px] leading-none font-semibold text-white rounded-full px-[4px] py-[3px]">
          0
        </span>
      </div>
    </div>
  ) : (
    // 🔴 Scrolled Other Page Layout
    <div className="flex items-center justify-between">
      <button onClick={() => navigate(-1)} className="text-white text-3xl">
        <FaArrowLeft />
      </button>

      <div className="bg-[#E9F8E5] flex items-center px-3 py-[6px] rounded-lg w-full mx-2">
        <GoSearch className="w-6 h-6 mr-2 text-[#555]" />
        <input
          type="text"
          placeholder="Search for Products"
          className="bg-[#E9F8E5] outline-none text-lg w-full text-black placeholder:text-gray-700"
        />
      </div>

      <div className="relative ml-2">
        <FaShoppingCart className="text-white text-[28px]" onClick={handleCart} />
        <span className="absolute -top-2 -right-1 bg-red-600 text-[10px] leading-none font-semibold text-white rounded-full px-[4px] py-[3px]">
          0
        </span>
      </div>
    </div>
  )}
</div>



        {/* Desktop View */}
        <div className="hidden lg:flex w-full fixed top-0 z-50 font-archivo">
          {/* Left Section */}
          <div className="bg-[#2f3a27] flex items-center px-6 py-3 gap-8 w-[50%]">
            <img src="images/zia_logo.png" alt="Zia Logo" className="h-14" />

           <ul className="flex gap-14 text-[20px] items-center tracking-widest">
  <NavLink
    to="/home"
    className={({ isActive }) =>
      `ml-10 ${isActive ? 'border-b-2 border-white' : ''}`
    }
  >
    Home
  </NavLink>
  <NavLink
    to="/shoplist"
    className={({ isActive }) =>
      `${isActive ? 'border-b-2 border-white' : ''}`
    }
  >
    Shop
  </NavLink>
  <NavLink
    to="/about"
    className={({ isActive }) =>
      `${isActive ? 'border-b-2 border-white' : ''}`
    }
  >
    About Us
  </NavLink>
  <NavLink
    to="/contactus"
    className={({ isActive }) =>
      `${isActive ? 'border-b-2 border-white' : ''}`
    }
  >
    Contact Us
  </NavLink>
   <NavLink
    to="/ordertracking"
    className={({ isActive }) =>
      `${isActive ? 'border-b-2 border-white' : ''}`
    }
  >
   Track Order
  </NavLink>
</ul>

          </div>

          {/* Right Section */}
          <div className="bg-[#1f210e] flex items-center gap-8 px-6 py-3 w-[60%] justify-start">
            <div className="flex items-center text-[20px] tracking-widest gap-2 mx-5 ">
              <GoLocation className="text-sm " />
              <span>Chennai</span>
            </div>

            <div className="bg-[#545D4F] flex items-center px-3 py-2 rounded-lg w-[100%] ">
              <BiSearchAlt className="w-7 h-7 mr-2" />
              <input
                type="text"
                placeholder="Search your products"
                className="bg-transparent outline-none tracking-widest text-md w-full placeholder-white"
              />
            </div>
            <FaShoppingCart className="text-4xl cursor-pointer" onClick={handleCart} />
            <FaUser onClick={handleChange}  className="cursor-pointer text-3xl mr-10" />
            
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
    {isOpen && (
  <div
    className="fixed inset-0 z-40 bg-black bg-opacity-40"
    onClick={() => setIsOpen(false)}
  />
)}

<div
  className={`fixed top-0 left-0 h-full w-64 transform ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } transition-transform duration-300 ease-in-out z-50 shadow-xl`}
  onClick={(e) => e.stopPropagation()}
>
  {/* Top Menu Header */}
  <div className="bg-[#2f3a27] text-white flex justify-between items-center py-[21px] px-4">
    <span className="text-[20px] font-bold">Menu</span>
    <button onClick={() => setIsOpen(false)}>
      <FaTimes className="text-xl" />
    </button>
  </div>

  {/* Remaining Slide Content */}
  <div
    className="h-[calc(100%-64px)] p-4 text-lg text-left text-[#2B452C]"
    style={{ backgroundColor: '#93A88DF2' }}
  >
    <ul className="space-y-6 font-medium  text-[20px]">
      <li><a href="/home">Home</a></li>
      <li><a href="/shoplist">Shop</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/contactus">Contact Us</a></li>
      <li><a href="/ordertracking">Track Order</a></li>

    </ul>
  </div>
</div>


    </>
  );
};

export default Navbar;
