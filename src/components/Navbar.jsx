import { useState } from 'react';
import { FaTimes, FaUser, FaShoppingCart } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { HiMiniBars3 } from 'react-icons/hi2';
import { GoLocation } from 'react-icons/go';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-col lg:flex-row text-white w-full ">
        {/*Mobile view */}
        <div className="bg-[#2f3a27] flex items-center justify-between p-4 w-full lg:hidden">
          <img src="images/zia_logo.png" alt="Zia Logo" className="h-10" />

          <div className="bg-[#545D4F] flex items-center px-3 py-2 rounded-lg ml-16 ">
            <BiSearchAlt className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search your products"
              className="bg-transparent outline-none text-sm w-full placeholder-white"
            />
          </div>

          <button onClick={() => setIsOpen(true)} className="text-2xl ml-3">
            <HiMiniBars3 />
          </button>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex w-full font-archivo">
          {/* Left Section */}
          <div className="bg-[#2f3a27] flex items-center px-6 py-3 gap-8 w-[50%]">
            <img src="images/zia_logo.png" alt="Zia Logo" className="h-14" />

            <ul className="flex gap-20 text-[24px] items-center tracking-widest">
              <li className="border-b-2 border-white ml-10">Home</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="bg-[#1f210e] flex items-center gap-10 px-6 py-3 w-[60%] justify-end">
            <div className="flex items-center text-[18px] tracking-widest gap-2 mr-10">
              <GoLocation className="text-lg " />
              <span>Chennai</span>
            </div>

            <div className="bg-[#545D4F] flex items-center px-3 py-2 rounded-lg w-96 mr-10">
              <BiSearchAlt className="w-7 h-7 mr-2" />
              <input
                type="text"
                placeholder="Search your products"
                className="bg-transparent outline-none tracking-widest text-md w-full placeholder-white"
              />
            </div>

            <FaUser className="text-xl" />
            <FaShoppingCart className="text-xl mr-28" />
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
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
