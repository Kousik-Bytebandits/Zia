import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function CareCollectionsSection() {
   const [selected, setSelected] = useState("Hand Wash");
 
   useEffect(() => {
  AOS.init({
    duration: 1000,  
    once: true       
  });
}, []);
  const buttons = ["Hand Wash", "Hair Oil", "Soaps", "Serums"];

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
    <div className="lg:mt-40 mx-auto px-6 py-8 font-archivo laptop:px-16 hd:px-20 xxxl:px-28">
  {/* Title */}
  <h2
    data-aos="fade-up"
    data-aos-delay="100"
    className="text-left font-tenor tracking-widest laptop:tracking-[0.6rem] hd:tracking-[0.8rem] xxxl:tracking-[1rem] text-[20px] laptop:text-[26px] hd:text-[28px] xxxl:text-[32px] text-[#676A5E] mb-8"
  >
    CARE COLLECTIONS
  </h2>

  {/* Category Buttons */}
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="grid grid-cols-2 md:grid-cols-4 text-[12px] laptop:text-[12px] hd:text-[15px] gap-4 text-[#676A5E] mb-12 lg:mb-32 laptop:w-[60%] hd:w-[55%] xxxl:w-[40%]"
  >
    {buttons.map((btn) => (
      <button
        key={btn}
        onClick={() => setSelected(btn)}
        className={`py-3 px-3 border border-[#676A5E] rounded-full font-tenor transition-colors duration-300 ${
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
  <div className="lg:flex lg:items-start lg:gap-16 laptop:gap-20 hd:gap-24 xxxl:gap-28">
    {/* Product Scroll */}
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="overflow-x-auto scrollbar-none lg:max-w-[100%]"
    >
      <div className="flex gap-4 w-max">
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[250px] laptop:min-w-[240px] hd:min-w-[260px] xxxl:min-w-[280px] h-[335px] laptop:h-[345px] hd:h-[347px] xxxl:h-[405px] border-2 border-[#D8DCCB] rounded-xl flex flex-col items-center flex-shrink-0"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-32 laptop:h-18 hd:h-32 xxxl:h-44 object-contain mt-4"
            />
            <div className="text-center px-2 py-3">
              <p className="text-[20px] laptop:text-[22px] xxxl:text-[24px] text-[#676A5E]">{product.name}</p>
              <img
                src={product.stars}
                alt="Rating stars"
                className="mx-auto mt-1"
              />
              <div className="text-[24px] laptop:text-[26px] hd:text-[28px] mt-2 mb-3">
                ₹ {product.price}
              </div>
            </div>
            <button className="bg-[#2B452C] tracking-wide text-white w-full py-3 laptop:py-3 text-[18px] laptop:text-[20px] xxxl:text-[24px] rounded-b-xl">
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
        className="h-[540px] laptop:h-[720px] hd:h-[760px] xxxl:h-[695px] w-[360px] laptop:w-[400px] hd:w-[430px] xxxl:w-[460px] -mt-48 hd:-mt-[84%] laptop:-mt-[80%] xxxl:-mt-64 object-contain"
      />
    </div>
  </div>

  {/* Mobile fallback image */}
  <div className="lg:hidden">
    <img
      src="/images/pure.png"
      alt="Offer Banner"
      className="mx-auto mt-16 w-[85%]"
    />
  </div>
</div>

  );
}
