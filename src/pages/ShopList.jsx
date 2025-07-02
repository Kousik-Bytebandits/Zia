import  { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const products = Array(20).fill({
  name: "Good Mood + Sun Skin",
  image: "/images/lemonwash.png",
  originalPrice: 900,
  salePrice: 400,
});

function ProductCard({ product }) {
  const navigate = useNavigate();
const handleChange=()=>{
navigate("/shopdetails");
}
  return (
    <div className=" bg-white lg:rounded-md lg:h-[430px] shadow-xl border border-gray-200 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[160px] lg:h-[200px] object-contain p-2 lg:mt-4 lg:mb-3"
      />
      <div className=" flex flex-col  items-center text-center flex-grow justify-between">
        <h2 className="text-[16px] lg:text-[24px] font-medium leading-snug">{product.name}</h2>
        <img src="/images/stars-num.png" className="w-[95px] my-2 lg:my-0 lg:h-[22px] lg:w-[120px]" alt="rating" />
        <div className="font-semibold tracking-wide font-archivo mb-2">
          <span className="line-through text-[18px]  mr-1 lg:hidden text-gray-400">₹{product.originalPrice}</span>
          <span className="text-black  text-[18px] lg:text-[28px]">₹{product.salePrice}</span>
        </div>
        <button onClick={handleChange} className="w-full bg-[#2B452C] text-white py-3 lg:py-4 lg:rounded-b text-[18px] lg:text-[24px] tracking-wider font-medium rounded-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}


export default function ShopList() {
  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState([54, 2500]);
  const [sortOption, setSortOption] = useState("Relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    };
    if (showFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFilter]);

  const totalProducts = 518;
  const perPage = 20;
  const totalPages = Math.ceil(totalProducts / perPage);

  const FilterSidebar = (
    <div ref={filterRef} className="lg:mt-[24.5%] bg-white shadow-xl border border-[#D8DCCB] rounded-md p-4 text-[#676A5E] font-archivo w-full lg:w-[270px]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm ">51 Results</h2>
        <button
          className="font-tenor bg-[#3A753C] text-[14px] text-white tracking-wide px-3 py-1 rounded-full"
          onClick={() => setPriceRange([54, 2500])}
        >
          Clear Filter
        </button>
      </div>
      <div className="w-full h-px bg-[#C5C5C5] mb-3" />

      <div className="mb-4">
        <h3 className="text-[15px] lg:text-[20px] text-center font-tenor mb-2 tracking-widest">FILTER BY PRICE</h3>
        <input
          type="range"
          min={54}
          max={2500}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([54, parseInt(e.target.value)])}
          className="w-full accent-[#3A753C] mb-4"
        />
        <div className="text-[#768445] flex justify-between items-center text-sm">
          <p>Price: ${priceRange[0]} — ${priceRange[1]}</p>
          <button className="font-tenor bg-[#3A753C] text-white px-5 text-[16px] py-[4px] rounded-full tracking-wide">
            Filter
          </button>
        </div>
      </div>

      <div className="mb-4 ">
        <h3 className="text-md lg:text-[20px] font-tenor mb-2 tracking-widest">PRODUCT TYPE</h3>
        {["Beauty Cosmetic", "Meli Cream", "Skin Care", "Costume Care", "JUJU Cream"].map((type) => (
          <div key={type} className="mb-2 lg:mb-4 ">
            <label className="text-[14px] lg:text-[16px] ">
              <input type="checkbox" className="mr-2 lg:mr-4 accent-[#676A5E] rounded-none" />
              {type}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-2">
        <h3 className="text-md lg:text-[20px] font-tenor mb-2 tracking-widest">DISCOUNT</h3>
        {["10% Off or more", "25% Off or more", "35% Off or more", "50% Off or more", "60% Off or more"].map((discount) => (
          <div key={discount} className="mb-2 lg:mb-4">
            <label className="text-[14px] lg:text-[16px]">
              <input type="checkbox" className="mr-2 lg:mr-4 accent-[#676A5E] rounded-none" />
              {discount}
            </label>
          </div>
        ))}
      </div>

      <img src="/images/beauty.png" alt="banner" className="mt-6 hidden lg:block absolute left-8 top-100 w-[270px]" />
    </div>
  );

  return (
    <div>
    <div className="pt-[18%] min-h-screen mb-20 bg-white pt-[17px] lg:px-8 lg:pt-8 overflow-hidden font-archivo text-[#676A5E]">
      <div className="hidden lg:flex justify-between items-center mb-4 px-4">
       
      </div>

      <div className="lg:hidden bg-[#2E3A2714] py-2 rounded flex items-center text-[#676A5E] justify-center mb-4">
        <div className="flex-1  flex items-center justify-center  font-archivo text-gray-700">
          Sort by :
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-transparent text-[16px] tracking-wide font-archivo focus:outline-none"
          >
            <option value="Relevance">Bestselling</option>
            <option value="PriceLowHigh"> Low to High</option>
            <option value="PriceHighLow"> High to Low</option>
            <option value="Newest">Newest Arrivals</option>
          </select>
        </div>

        <div className="w-px h-10 bg-gray-900 "></div>

        <div className="flex-1 relative flex justify-center">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="font-archivo tracking-wider text-md flex items-center gap-1"
          >
            Filter By <FaFilter className="text-sm" />
          </button>

          {showFilter && (
            <div className="absolute -right-2 top-[calc(100%+15px)] w-[300px] z-40">
              <div
                className="w-4 h-4 bg-white absolute right-[35%] -top-4 shadow-xl z-10"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              ></div>
              {FilterSidebar}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 px-3 pb-4 pt-2 font-archivo text-[#676A5E] lg:hidden">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="grid lg:grid-cols-[270px_1fr] gap-8 hidden lg:grid">
        <div>{FilterSidebar}</div>
        <div className="flex flex-col gap-8">
         <div className="flex justify-between items-center"> 
       <div className="text-md text-[#797979] tracking-wide">{(currentPage - 1) * perPage + 1} - {Math.min(currentPage * perPage, totalProducts)} of {totalProducts} Products</div>
        <div className="bg-[#F0F0F0] flex items-center gap-2 text-sm border border-[#C5C5C5] px-3 py-1 rounded-lg">
          Sort by:
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-[#F0F0F0] text-[14px] text-[#797979] tracking-wider focus:outline-none"
          >
            <option value="Relevance">Bestselling</option>
            <option value="PriceLowHigh"> Low to High</option>
            <option value="PriceHighLow"> High to Low</option>
            <option value="Newest">Newest Arrivals</option>
          </select>
        </div>
        </div>

          <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

         <div className="hidden lg:flex justify-end items-center text-[18px] text-[#676A5E] mt-8 mb-20">
  <div className="flex gap-2">
    <button
      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
      className="w-[64px] h-[64px] text-[#2B452C] font-bold rounded flex items-center justify-center"
    >
      Prev
    </button>

    {[...Array(totalPages).keys()].slice(0, 3).map((i) => (
      <button
        key={i + 1}
        className={`w-[64px] h-[64px] border border-[#2B452C] rounded flex items-center justify-center ${
          currentPage === i + 1 ? "bg-[#2B452C] text-white" : ""
        }`}
        onClick={() => setCurrentPage(i + 1)}
      >
        {i + 1}
      </button>
    ))}

    <div className="w-[64px] h-[64px] flex items-center justify-center">...</div>

    <button
      className={`w-[64px] h-[64px] border border-[#2B452C] rounded flex items-center justify-center ${
        currentPage === totalPages ? "bg-[#2B452C] text-white" : ""
      }`}
      onClick={() => setCurrentPage(totalPages)}
    >
      {totalPages}
    </button>

    <button
      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
      className="w-[64px] h-[64px] text-[#2B452C] font-bold  rounded flex items-center justify-center"
    >
      Next
    </button>
  </div>
</div>

        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
}
