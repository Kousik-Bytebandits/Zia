import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiStarSFill,RiStarHalfSFill } from "react-icons/ri";
import endpoint_prefix from "../config/ApiConfig";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CareCollectionsSection() {
   const [selectedCategory, setSelectedCategory] = useState("handwash");
    const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem("accessToken");
  
    if (!token || token === "forbidden") {
      navigate("/login");
      return;
    }
  
    try {
      const response = await fetch(
        "https://api.ziaherbalpro.com/Microservices/06_cart/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            product_id: productId,
            quantity: 1,
          }),
        }
      );
  
      const data = await response.json();
  
      if (response.ok) {
        toast.success( "Product added to cart", { autoClose: 2000 });
      } else {
        toast.error(data.message || "Failed to add item", { autoClose: 2000 });
      }
    } catch (err) {
      console.error("Error adding to cart:", err);
      toast.error("Failed to add item", { autoClose: 2000 });
    }
  };

   useEffect(() => {
  AOS.init({
    duration: 1000,  
    once: true       
  });
}, []);
  const categories = [
  { label: "Hand Wash", value: "handwash" },
  { label: "Soaps", value: "soap" },
  { label: "Shampoo", value: "shampoo" },
  { label: "Serums", value: "serum" },
];

useEffect(() => {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch(
    `${endpoint_prefix}04_userProducts/api/user_products/products-by-category?category=${selectedCategory}`,
    requestOptions
  )
  
    .then((response) => response.json())
    .then((result) => {
      // Extract product array from response object
      const categoryProducts = result[selectedCategory];
      setProducts(categoryProducts || []);
    })
    .catch((error) => console.error("Error fetching category products:", error));
}, [selectedCategory]);


  

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
  {categories.map((cat) => (
    <button
      key={cat.value}
      onClick={() => setSelectedCategory(cat.value)}
      className={`py-3 px-3 border border-[#676A5E] rounded-full font-tenor transition-colors duration-300 ${
        selectedCategory === cat.value
          ? "bg-[#2B452C] text-white"
          : "bg-transparent text-[#676A5E]"
      }`}
    >
      {cat.label}
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
      <div className="flex gap-4 w-[1000px]">
      {Array.isArray(products) && products.map((product, index) => (
  <div
     onClick={() => navigate(`/shopdetails/${product.product_id}`)}  
    key={product.product_id || index}
    className="min-w-[250px]  laptop:min-w-[260px] hd:min-w-[270px] xxxl:w-[320px] xxxl:h-[405px] h-[335px] laptop:h-[312px] hd:h-[347px] xxxl:h-[405px] border-2 border-[#D8DCCB] rounded-xl flex flex-col items-center flex-shrink-0 bg-white shadow-sm"
  >
    {/* Product Image */}
    <img
      src={product.primary_image_url}
      alt={product.name}
      className="h-32 laptop:h-24 hd:h-32 xxxl:h-44 object-contain mt-6"
    />

    {/* Product Details */}
    <div className="text-center px-3 py-4">
      <p className="text-[20px] laptop:text-[22px] xxxl:text-[24px] text-[#676A5E] mb-1">
        {product.name}
      </p>

      <div className="flex justify-center text-yellow-500 items-center ">
         {[...Array(4)].map((_, i) => (
           <RiStarSFill key={i} />
         ))}
         <RiStarHalfSFill /> <p className="text-[#676A5E] ml-1  text-[12px]">(79)</p>
       </div>

      {/* Price */}
      <div className="text-[24px] laptop:text-[26px] hd:text-[28px] mb-2">
        ₹ {product.price}
      </div>
    </div>

    {/* Add to Cart Button */}
    <button 
   onClick={(e) => {
    e.stopPropagation(); 
    handleAddToCart(product.product_id);
  }}
    className="bg-[#2B452C] tracking-wide text-white w-full py-3 laptop:py-3 text-[18px] laptop:text-[20px] xxxl:text-[24px] rounded-b-xl">
      Add to Cart
    </button>
  </div>
))}

      </div>
    </div>

    {/* Right Image */}
    <div className="hidden lg:flex justify-end items-stretch">
      <img
        src="/images/pure.png"
        alt="Offer Banner"
        className="h-[540px] laptop:h-[720px] hd:h-[760px] xxxl:h-[695px] w-[360px] laptop:w-[400px] hd:w-[430px] xxxl:w-[460px] -mt-48 hd:-mt-[85%] laptop:-mt-[90%] xxxl:-mt-64 object-contain"
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
