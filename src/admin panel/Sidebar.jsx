import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaBox } from 'react-icons/fa';

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(true);

  return (
    <aside className=" lg:min-w-[16%]  bg-[#102B01] text-white flex flex-col justify-between h-screen lg:h-auto shadow-lg">

      
      <div>
        {/* Logo */}
        <div className="p-4 flex justify-center">
          <img src="/images/zia_logo.png" alt="Zia Logo" className="h-[71px] object-contain" />
        </div>

        {/* Title */}
        <div className="text-center text-[26px] font-bold uppercase tracking-wider">
          Zia Herbal Pro
        </div>
        <div className="border-t-2 border-[#074D41] mx-6 my-2"></div>

       
        <nav className="px-4 mt-4">
          <div className="border border-[#FFFFFF] rounded mb-1 ">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full text-left px-3 py-2 flex items-center justify-between"
            ><span className="flex items-center gap-2">
              <FaBox className='text-[#D3AA40]' />
              <span className="font-bold text-[18px] ">Products</span></span>
              {openDropdown ? (
                <IoIosArrowUp className="text-[#102B01] bg-white rounded-full text-[20px]" />
              ) : (
                <IoIosArrowDown className="text-[#102B01] bg-white rounded-full text-[20px]" />
              )}
            </button>
          </div>

          
          {openDropdown && (
            <ul className="ml-4 mt-6 space-y-4">
              <li className="flex items-center gap-2">
                <span className=" text-xl">•</span>
                <NavLink
                  to="/admin/grid"
                  className={({ isActive }) =>
                    `block text-[16px] w-full px-3 py-2 rounded ${
                      isActive
                        ? 'bg-[#FFD25D] text-[#102B01] font-bold'
                        : 'hover:bg-green-700'
                    }`
                  }
                >
                  Product Grid
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <span className=" text-xl">•</span>
                <NavLink
                  to="/admin/home"
                  className={({ isActive }) =>
                    `block text-[16px] w-full px-3 py-2 rounded ${
                      isActive
                        ? 'bg-[#FFD25D] text-[#102B01] font-bold'
                        : 'hover:bg-green-700'
                    }`
                  }
                >
                  Products Editor
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
      </div>

     
      <div className="px-8 pt-2 pb-6 text-[16px]">
        <div className="flex items-center border-t border-[#074D41] pt-4 gap-4 mb-4 cursor-pointer ">
          <CgProfile className="text-[24px]" />
          <span>Profile</span>
        </div>
        <div className="border-t border-[#074D41] pt-8 text-xs text-white/50 text-center">
          Powered By Byte Bandits
        </div>
      </div>
    </aside>
  );
}
