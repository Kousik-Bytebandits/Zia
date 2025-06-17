import { useState } from "react";

export default function CareCollectionsSection() {
   const [selected, setSelected] = useState("All Products");

  const buttons = ["All Products", "Body Care", "Skin Care", "Moisture"];

  const products = [
    {
      name: "Lemon Hand Wash",
      image: "/images/lemonwash.png",
      stars: "/images/stars-num.png",
      price: 400,
    },
    {
      name: "Herbal Hand Wash",
      image: "/images/herbalwash.png",
      stars: "/images/stars-num.png",
      price: 400,
    },
    {
      name: "Hair Oil",
      image: "/images/hairoil.png",
      stars: "/images/stars-num.png",
      price: 400,
    },
    {
      name: "Herbal Shampoo",
      image: "/images/h_shampoo.png",
      stars: "/images/stars-num.png",
      price: 400,
    },
   
  ];

  return (
    <div className="lg:mt-40 mx-auto px-6 py-8 font-archivo lg:px-24 ">
      {/* Title */}
      <h2 className="text-left font-tenor tracking-widest lg:tracking-[1rem] lg:text-[32px] text-[24px] text-[#676A5E] mb-8 ">
        CARE COLLECTIONS
      </h2>

      {/* Category Buttons */}
    <div className="grid grid-cols-2 md:grid-cols-4 text-[14px] gap-4 text-[#676A5E] mb-12 lg:mb-32 lg:w-[40%]">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setSelected(btn)}
          className={`py-4 px-3 border border-[#676A5E] rounded-full font-tenor transition-colors duration-300 ${
            selected === btn
              ? "bg-[#2B452C] text-white"
              : "bg-transparent text-[#676A5E]"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>

      {/* Product + Right Image Section */}
      <div className="lg:flex lg:items-start lg:gap-28">
        {/* Product Scroll */}
        <div className="overflow-x-auto scrollbar-none lg:max-w-[1140px]">
          <div className="flex gap-4 w-max">
            {products.map((product, index) => (
              <div
                key={index}
                className="lg:h-[435px] min-w-[270px] h-[360px] border-2 border-[#D8DCCB] rounded-xl flex flex-col items-center flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-36 lg:h-44 lg:mb-4 object-contain mt-4"
                />
                <div className="text-center px-2 py-3">
                  <p className="text-[24px] text-[#676A5E]">{product.name}</p>
                  <img
                    src={product.stars}
                    alt="Rating stars"
                    className="mx-auto mt-1"
                  />
                  <div className="text-[28px] mt-2 lg:mb-7">₹ {product.price}</div>
                </div>
                <button className="bg-[#2B452C] tracking-wide text-white w-full py-3 rounded-b-xl text-[24px]">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex items-stretch">
          <img
            src="/images/pure.png"
            alt="Offer Banner"
            className="h-[695px] w-[460px] -mt-64 object-contain"
          />
        </div>
       
      </div>

      {/* Mobile fallback image (under cards) */}
      <div className="lg:hidden">
        <img
          src="/images/pure.png"
          alt="Offer Banner"
          className="mx-auto mt-16"
        />
      </div>
       
    </div>
  );
}
