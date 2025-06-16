import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const products = Array(14).fill({
  name: "Good Mood + Sun Skin",
  image: "/images/lemonwash.png",
  originalPrice: 900,
  salePrice: 400,
});

export default function ShopList() {
  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState([54, 2500]);
  const [sortOption, setSortOption] = useState("Relevance");

  return (
    <div className="min-h-screen bg-white lg:pt-[32px] relative overflow-hidden">
      {/* Sort and Filter Row */}
      <div className=" bg-[#2E3A2714] px-3 py-2 rounded flex items-center text-[#676A5E] justify-center mb-4">
        {/* Sort */}
        <div className="px-4 flex items-center justify-center gap-2  font-archivo text-gray-700">
          Sort by:
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-transparent text-[14px] tracking-wide font-archivo  focus:outline-none"
          >
            <option value="Relevance">Bestselling</option>
            <option value="PriceLowHigh">Price: Low to High</option>
            <option value="PriceHighLow">Price: High to Low</option>
            <option value="Newest">Newest Arrivals</option>
          </select>
        </div>

        {/* Divider */}
        <div className="w-px h-10 bg-gray-900 mx-2"></div>

        {/* Filter */}
        <div className="flex-1 relative flex justify-center">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className=" font-archivo tracking-wider text-md flex items-center gap-1"
          >
            Filter By  <FaFilter className=" text-sm" />
          </button>

          {/* Filter Popup */}
          {showFilter && (
            <div className="absolute -right-2 top-[calc(100%+15px)] w-[300px] z-40">
              {/* Triangle */}
              <div
                className="w-4 h-4 bg-white absolute right-[35%] -top-4 shadow-xl z-10"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></div>

              {/* Box */}
              <div className="bg-white shadow-lg  p-4 text-[#676A5E] font-archivo">
                {/* 51 Results */}
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-sm font-semibold">51 Results</h2>
                  <button
                    className="bg-[#3A753C] text-[14px] text-white tracking-wide px-3 py-1 rounded-full"
                    onClick={() => setPriceRange([54, 2500])}
                  >
                    Clear Filter
                  </button>
                </div>
                <div className="w-full h-px bg-[#C5C5C5] mb-3" />

                {/* Filter by Price */}
                <div className="mb-4">
                  <h3 className="text-[15px] text-center font-tenor mb-2 tracking-widest">
                    FILTER BY PRICE
                  </h3>
                  <input
                    type="range"
                    min={54}
                    max={2500}
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([54, parseInt(e.target.value)])
                    }
                    className="w-full accent-[#3A753C] mb-1"
                  />
                  <div className="text-[#768445] flex justify-between items-center text-sm">
                    <p>Price: ${priceRange[0]} — ${priceRange[1]}</p>
                    <button className="bg-[#3A753C] text-white px-5 text-[16px] py-[4px] rounded-full tracking-wide">
                      Filter
                    </button>
                  </div>
                </div>

                {/* Product Type */}
                <div className="mb-4">
                  <h3 className="text-md font-tenor  mb-2 tracking-widest">
                    PRODUCT TYPE
                  </h3>
                  {[
                    "Beauty Cosmetic",
                    "Meli Cream",
                    "Skin Care",
                    "Costume Care",
                    "JUJU Cream",
                  ].map((type) => (
                    <div key={type} className="mb-2">
                      <label className="text-[14px] ">
                        <input
                          type="checkbox"
                          className="mr-2 accent-green-900 rounded-none"
                        />
                        {type}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Discount */}
                <div className="mb-2">
                  <h3 className="text-md font-tenor  mb-2 tracking-widest">
                    DISCOUNT
                  </h3>
                  {[
                    "10% Off or more",
                    "25% Off or more",
                    "35% Off or more",
                    "50% Off or more",
                    "60% Off or more",
                  ].map((discount) => (
                    <div key={discount} className="mb-2">
                      <label className="text-[14px] ">
                        <input
                          type="checkbox"
                          className="mr-2 accent-[#676A5E] rounded-none"
                        />
                        {discount}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2  gap-2 p-4 font-archivo text-[#676A5E]">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border border-gray-200 "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[160px] object-contain p-2"
            />
            <div className="p- flex flex-col items-center text-center">
              <h2 className="text-[16px] font-medium leading-snug">
                {product.name}
              </h2>
              <img 
              src="images/stars-num.png"
              className="w-[95px] mb-2"
              />
              <div className="font-semibold tracking-wide font-archivo mt-1">
                <span className="line-through  mr-1">
                  ₹{product.originalPrice}
                </span>
                <span className="text-black">₹{product.salePrice}</span>
              </div>
              <button className="mt-2 w-full bg-[#2B452C] text-white py-2 tracking-wider font-medium rounded-none">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
