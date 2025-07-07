import  { useState,useEffect } from 'react';
import { FaSync } from 'react-icons/fa';
import { FaRupeeSign, FaPercent } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
export default function ProductEditor() {
 

  const inputClasses = "w-full p-2 border border-gray-300 rounded-md bg-white text-sm ";

  const specifications= [
    { name: "Units", value: "5.5 cm" },
    { name: "Item LWH", value: "5.5 cm" },
    { name: "Package LWH", value: "5.5 cm" },
    { name: "Item Weight", value: "5.5 cm" },
     { name: "Package Weight", value: "5.5 cm" },
  ];

 

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      });

      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setCurrentDate(`${formattedDate} ${formattedTime} `);
    };

    updateDate();
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 flex flex-col p-6 bg-[#f1f2e9] overflow-y-auto scrollbar-none">
      {/* Header */}
      <section className="flex flex-col justify-center md:justify-between items-center text-center mb-4 text-white">
        <div className="rounded w-full h-[120px] md:h-[80px] bg-[#102B01] md:flex items-center px-6">
          <h2 className="text-[30px] font-bold uppercase md:text-[30px] flex-1 text-left">Product Editor</h2>
          <div className="flex items-center gap-4">
            <p className="hidden md:inline text-[20px]">Data Refresh</p>
            <FaSync className="hidden mr-6 md:inline cursor-pointer text-lg" title="Sync" />
            <span className="text-[17px] text-[#102B01] border border-[#375683] px-4 py-2 rounded-md bg-white font-bold">
              {currentDate}
            </span>
          </div>
        </div>
      </section>

   
     
      <h1 className="text-[24px] font-bold text-[#102B01] mb-4">Product Settings</h1>

    
      <div className="flex flex-wrap gap-8 items-start">
        {/* Product Images */}
        
        <div className="flex flex-col gap- w-[680px]">
          <h2 className="text-[16px] font-bold text-[#102B01]">Product Images</h2>
          <div className="flex gap-4">
           
            <div className="flex flex-row gap-4">
              {[1, 2].map((_, i) => (
                <div key={i} className="w-[270px] h-[270px] flex flex-col border-2 border-dashed border-[#102B01] flex items-center justify-center rounded-md bg-white">
                  <img src="/icons/img-icon.png" alt="Upload" className="w-10 h-10 opacity-70" />
                  <p className='text-sm'>  Click to upload</p>
                </div>
              ))}
            </div>
          
            <div className="flex flex-col justify-start gap-4">
              {[1, 2].map((_, i) => (
                <div key={i} className="w-[125px] h-[125px] flex flex-col border-2 border-dashed border-[#102B01] flex items-center justify-center rounded-md bg-white">
                  <img src="/icons/img-icon.png" alt="Upload" className="w-8 h-8 opacity-70" />
                   <p className='text-xs'>Click to upload</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="flex-1 space-y-2 ">
         
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[16px] font-bold  ">Product Name</label>
              <input type="text" className={inputClasses} />
            </div>
            <div>
              <label className="text-[16px] font-bold  ">SKU</label>
              <input type="text" className={inputClasses} />
            </div>
          </div>

         
           <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-[16px] font-bold text-[#102B01]">EAN</label>
              <input type="text" className={inputClasses} value="8901234500001" readOnly />
            </div>
            <div className="relative">
              <label className="text-[16px] font-bold text-[#102B01]">Category</label>
              <select className={`${inputClasses} pr-10 appearance-none`} defaultValue="Shampoo">
                <option>Shampoo</option>
              </select>
              <IoIosArrowDown  className="absolute right-3 top-[36px] text-gray-500" />
            </div>
            <div className="relative">
              <label className="text-[16px] font-bold text-[#102B01]">Manufacturing Date</label>
              <input type="text" className={`${inputClasses} pr-10`} value="28-02-2025" readOnly />
              <FiCalendar className="absolute right-3 top-[36px] text-gray-500" />
            </div>
            <div className="relative">
              <label className="text-[16px] font-bold text-[#102B01]">Price</label>
              <input type="number" className={`${inputClasses} pr-10`} value="99" readOnly />
              <FaRupeeSign className="absolute right-3 top-[36px] text-gray-500" />
            </div>
            <div className="relative">
              <label className="text-[16px] font-bold text-[#102B01]">Discount</label>
              <input type="number" className={`${inputClasses} pr-10`} value="20" readOnly />
              <FaPercent className="absolute right-3 top-[36px] text-gray-500" />
            </div>
            <div className="relative">
              <label className="text-[16px] font-bold text-[#102B01]">Expiry Date</label>
              <input type="text" className={`${inputClasses} pr-10`} value="28-02-2025" readOnly />
              <FiCalendar className="absolute right-3 top-[36px] text-gray-500" />
            </div>
            <div>
              <label className="text-[16px] font-bold text-[#102B01]">Warehouse Location</label>
              <input type="text" className={inputClasses} value="zia-guindy" readOnly />
            </div>
            <div>
              <label className="text-[16px] font-bold text-[#102B01]">Batch-code</label>
              <input type="number" className={inputClasses} value="5432" readOnly />
            </div>
            <div className="relative">
              <label className="text-[16px] font-bold text-[#102B01]">Is Active</label>
              <select className={`${inputClasses} pr-10 appearance-none`} defaultValue="Active">
                <option>Active</option>
              </select>
              <IoIosArrowDown  className="absolute right-3 top-[36px] text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      
    

      
      <div className="flex flex-col lg:flex-row gap-4 ">
        <div className="w-[1000px]">
         
          <div className="grid grid-cols-2 ">
            {[
              "Description",
              "Features",
              "How to use",
              "Ingredients"
            ].map((title, i) => (
              <div key={i}>
                <h3 className="text-[16px] font-bold text-[#102B01]  mt-4">{title}</h3>
              <div
              
                key={i}
                className="bg-white rounded-lg px-4 pt-3 pb-2 shadow-sm"
                style={{ width: "480px", height: "220px" }}
              >
               
                <textarea className="w-full h-full bg-transparent resize-none outline-none text-sm text-[#1F3612]" />
              </div>
              </div>
            ))}
          </div>
        </div>

      
        <div>
         <div className="w-[530px] h-[390px] bg-white rounded-xl shadow-md border border-[#E4E4E4] p-4 mt-10">
        <h2 className="text-[16px] font-bold text-[#102B01] mb-4">Product Specifications</h2>
        <div className="overflow-auto rounded-2xl border border-[#E4E4E4]">
          <table className="w-full text-[14px] text-left border border-[#E4E4E4]">
            <thead className=" text-[#534D59]">
              <tr className='bg-[#F9FAFC]'>
                <th className="px-4 py-3 border border-[#E4E4E4]">Name</th>
                <th className="px-4 py-3 border border-[#E4E4E4]">Value</th>
              </tr>
            </thead>
            <tbody className="text-[#1B2128]">
              {specifications.map((spec, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 border border-[#E4E4E4] whitespace-nowrap">{spec.name}</td>
                  <td className="px-4 py-3 border border-[#E4E4E4] whitespace-nowrap">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    
      <div className="mt-4">
        <button className="bg-[#EEB420] text-[#102B01] w-full text-[24px] font-bold py-4 px-6 rounded-full shadow-md hover:bg-[#d6a81f] transition-all">
          Publish Product
        </button>
      </div>
      </div>
        </div>
      
    </div>
   
  );
}
