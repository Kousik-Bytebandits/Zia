import  { useState, useEffect } from "react";
import { FaSync, FaChevronDown } from "react-icons/fa";

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
    <div className="w-full bg-[#F7F9F3] font-inter overflow-y-auto scrollbar-none px-4 py-6">
      {/* Header */}
      <section className="flex flex-col justify-center lg:justify-between items-center lg:items-start text-white mb-4">
        <div className="rounded w-full py-4 bg-[#102B01] md:flex items-center px-6">
          <h2 className="text-[26px] md:text-[30px] font-bold uppercase flex-1 text-left">
            Product Grid
          </h2>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <p className="hidden md:inline text-[18px]">Data Refresh</p>
            <FaSync className="hidden md:inline cursor-pointer text-lg" title="Sync" />
            <span className="text-sm md:text-base text-[#102B01] border border-[#375683] px-3 py-1 rounded-md bg-white font-bold">
              {currentDate}
            </span>
          </div>
        </div>
      </section>

      <div className=" ">
        <div className="border border-[#CFCFCF] w-full shadow-lg bg-white rounded-xl p-4 lg:p-6">
          {/* Category + View Count */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <label className="font-semibold text-[18px] md:text-[20px] block mb-2">Category</label>
              <div className="relative w-full md:w-[300px]">
                <select
                  className="border border-[#D9D9D9] text-[#504F4F] rounded-md py-3 px-4 pr-8 w-full text-[15px] focus:outline-none appearance-none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Shampoo">Shampoo</option>
                  <option value="Oil">Oil</option>
                  <option value="Soap">Soap</option>
                </select>
                <FaChevronDown className="absolute top-4 right-3 text-[#B7B7B7]" />
              </div>
            </div>
            <div className="text-[18px] md:text-[22px] font-semibold text-right w-full md:w-auto">
              View Products : 12/24
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border hover:shadow-lg transition p-3 flex flex-col"
              >
                <div className="bg-[#F5F6F0] border border-[#E3E3E3] aspect-[4/3] flex items-center justify-center rounded-md mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[125px] object-contain"
                  />
                </div>
                <h2 className="font-semibold text-[15px] leading-snug">{product.name}</h2>
                <p className="text-[14px] text-[#555] mt-1">
                  Stock Available: <strong>{product.stock}</strong>
                </p>
                <p className="text-[14px] mt-1">
                  Price: <strong>₹{product.price}</strong>
                </p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center md:justify-end items-center gap-3 mt-8 text-[16px] font-medium text-[#2B452C]">
            <button className="font-bold">Prev</button>
            {[1, 2, 3, '...', 40].map((val, i) => (
              <button
                key={i}
                className={`w-[40px] h-[40px] rounded ${
                  val === 1
                    ? 'bg-[#2B452C] text-white'
                    : 'border border-[#ccc] text-[#2B452C]'
                }`}
              >
                {val}
              </button>
            ))}
            <button className="font-bold">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
