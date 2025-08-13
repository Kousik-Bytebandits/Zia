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
 
  {!isScrolled ? (
   
    <>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <button onClick={() => setIsOpen(true)} className="text-white">
            <IoMenu className="text-5xl" />
          </button>
          <img src="/images/zia_logo.png" alt="Zia Logo" className="h-11" />
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
    // Home Page Layout
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
    //  Other Page Layout
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
  <div className="hidden laptop:flex w-full fixed top-0 z-50 font-archivo overflow-x-auto">
  {/* Left Section */}
  <div className="bg-[#2f3a27] flex items-center px-4 laptop:px-4 xxxl:px-10 py-3 gap-6 hd:gap-10 laptop:gap-6 xxxl:gap-14 laptop:w-[45%] xxxl:w-[45%] ">
    <img src="/images/zia_logo.png" alt="Zia Logo" className="h-12 laptop:h-14 xxxl:h-16 px-2 shrink-0" />

    <ul className="flex gap-6 laptop:gap-6 xxxl:gap-14 hd:gap-10 hd:text-[18px] text-[16px] laptop:text-[17px] xxxl:text-[20px] items-center justify-start ">
      <NavLink
        to="/home"
        className={({ isActive }) => `ml-2 ${isActive ? 'border-b-2 border-white' : ''}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/shoplist"
        className={({ isActive }) => `${isActive ? 'border-b-2 border-white' : ''}`}
      >
        Shop
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `${isActive ? 'border-b-2 border-white' : ''}`}
      >
        About Us
      </NavLink>
      <NavLink
        to="/contactus"
        className={({ isActive }) => `${isActive ? 'border-b-2 border-white' : ''}`}
      >
        Contact Us
      </NavLink>
       <NavLink
        to="/order-tracking"
        className={({ isActive }) => `${isActive ? 'border-b-2 border-white' : ''}`}
      >
        Track Order
      </NavLink>
     
    </ul>
  </div>

  {/* Right Section */}
  <div className="bg-[#1f210e] flex items-center gap-4 laptop:gap-6 xxxl:gap-10 px-4 laptop:px-6 xxxl:px-14 py-3  justify-start w-[55%] xxxl:w-[55%]">
    <div className="flex items-center text-[14px] laptop:text-[16px] xxxl:text-[20px] gap-2 shrink-0">
      <GoLocation className="text-sm xxxl:text-lg" />
      <span>Chennai</span>
    </div>

    <div className="bg-[#545D4F] flex items-center px-3 py-3 laptop:py-2 rounded-lg w-full ">
      <BiSearchAlt className="w-5 h-5 laptop:w-6 laptop:h-6 mr-2 shrink-0" />
      <input
        type="text"
        placeholder="Search your products"
        className="bg-transparent outline-none xxxl:text-lg laptop:text-sm w-full placeholder-white"
      />
    </div>

    <FaShoppingCart
      className="text-2xl laptop:text-2xl xxxl:text-3xl cursor-pointer shrink-0"
      onClick={handleCart}
    />
    <FaUser
      onClick={handleChange}
      className="cursor-pointer text-2xl laptop:text-2xl xxxl:text-3xl shrink-0"
    />
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
      <li><a href="/order-tracking">Track Order</a></li>

    </ul>
  </div>
</div>


    </>
  );
};

export default Navbar;
