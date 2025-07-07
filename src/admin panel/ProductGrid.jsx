import { useState,useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaSync } from 'react-icons/fa';

export default function ProductGrid() {
  const [category, setCategory] = useState("Shampoo");
  const products = new Array(12).fill({
    name: "Herbal Hair Shampoo",
    stock: 5213,
    price: 400,
    image: "/images/h_shampoo.png", 
  });

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
    <div className="p-6 w-[85%] bg-[#F7F9F3] font-inter  overflow-y-auto scrollbar-none">
         <section className="flex flex-col justify-center md:justify-between items-center text-center mb-4 text-white">
                <div className="rounded w-full h-[120px] md:h-[80px] bg-[#102B01] md:flex items-center px-6">
                  <h2 className="text-[30px] font-bold uppercase md:text-[30px] flex-1 text-left">Product Grid</h2>
                  <div className="flex items-center gap-4">
                    <p className="hidden md:inline text-[20px]">Data Refresh</p>
                    <FaSync className="hidden mr-6 md:inline cursor-pointer text-lg" title="Sync" />
                    <span className="text-[17px] text-[#102B01] border border-[#375683] px-4 py-2 rounded-md bg-white font-bold">
                      {currentDate}
                    </span>
                  </div>
                </div>
              </section>
    <div className="">
      <div className="border border-[#CFCFCF] shadow-lg bg-white rounded-xl p-4 md:p-6">
       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <label className="font-semibold text-[20px] block mb-2">Category</label>
            <div className="relative">
              <select
                className="border border-[#D9D9D9] text-[#504F4F] rounded-md py-3 px-4 pr-8 w-[400px] text-[15px] focus:outline-none appearance-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Shampoo">Shampoo</option>
                <option value="Oil">Oil</option>
                <option value="Soap">Soap</option>
              </select>
              <FaChevronDown className="absolute top-4 right-3 text-[#B7B7B7] cursor-pointer" />
            </div>
          </div>
          <div className="text-[22px] font-semibold text-right mr-6">
            View Products : 12/24
          </div>
        </div>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
          {products.map((product, index) => (
            <div key={index} className=" rounded-xl w-[220px] h-[270px] p-4 shadow-lg border hover:shadow-md transition">
              <div className="bg-[#F5F6F0] border border-[#E3E3E3] h-[150px] flex items-center justify-center rounded-md mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[140px] object-contain"
                />
              </div>
              <h2 className="font-semibold text-[15px]">{product.name}</h2>
              <p className="text-[15px] text-[]">Stock Available :<strong> {product.stock}</strong></p>
              <p className="text-[15px] mt-1">Price :<strong> ₹{product.price}</strong></p>
            </div>
          ))}
        </div>

       
        <div className="flex justify-end items-center text-[#BCBCBC] gap-4 mt-8 mr-6 text-[18px] font-medium">
          <button className="text-[#2B452C] gap-2 font-bold">Prev</button>
          <button className="bg-[#2B452C] text-white w-[45px] h-[45px] rounded">1</button>
          <button className="border border-[#ccc] w-[45px] h-[45px] rounded">2</button>
          <button className="border border-[#ccc] w-[45px] h-[45px] rounded">3</button>
          <button className="border border-[#ccc] w-[45px] h-[45px] rounded">..</button>
          <button className="border border-[#ccc] w-[45px] h-[45px] rounded">40</button>
          <button className="text-[#2B452C] gap-2 font-bold">Next</button>
        </div>
      </div>
    </div>
    </div>
  );
}
