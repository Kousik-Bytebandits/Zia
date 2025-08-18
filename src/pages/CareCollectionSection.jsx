import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiStarSFill,RiStarHalfSFill } from "react-icons/ri";
import endpoint_prefix from "../config/ApiConfig";
import {  useNavigate } from "react-router-dom";
import { toast , ToastContainer} from "react-toastify";
import { showLoginToast } from "../components/ShowLoginToast";
import { showSessionExpiredToast } from "../components/showSessionExpiredToast";
export default function CareCollectionsSection() {
   const [selectedCategory, setSelectedCategory] = useState("handwash");
    const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  
  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem("accessToken");
  console.log("productId:", productId);
    if (!token || token === "forbidden") {
      showLoginToast(navigate);
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
   const contentType = response.headers.get("content-type");

      if (!response.ok) {
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to add product to cart");
        } else {
          const errorText = await response.text();
          throw new Error(errorText || "Failed to add product to cart");
        }
      }
      const data = await response.json();
       console.log("Add to cart from home:", data);
       
     toast.success("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      showSessionExpiredToast(navigate);
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
      {Array.isArray(products) && products.map((product) => (
    <div onClick={() => navigate(`/shopdetails/${product.product_id}`)}  
    className="bg-white w-[180px] h-[320px] lg:rounded-t-2xl xxxl:w-[270px] xxxl:h-[460px] laptop:w-[180px] laptop:h-[320px] hd:w-[220px] hd:h-[375px] shadow-around-soft rounded-t-2xl border border-[#D8DCCB] flex flex-col mb-10">
      <img
        src={product.primary_image_url || "/images/lemonwash.webp"}
        alt={product.name}
        className="w-[180px] h-[179px] rounded-t-2xl xxxl:w-[270px] xxxl:h-[270px] laptop:w-[180px] laptop:h-[180px] hd:w-[220px] hd:h-[220px] object-contain  "
      />
      <div className=" flex flex-col items-center text-center flex-grow justify-between">
        <h2 className="text-[16px] h-[25px] truncate max-w-[150px] xxxl:max-w-[240px] laptop:max-w-[160px] hd:max-w-[190px] mx-4 laptop:text-[18px] hd:text-[20px] xxxl:text-[24px] font-medium xxxl:h-[40px] laptop:h-[25px] hd:h-[30px]">
          {product.name}
        </h2>
           <div className="flex text-yellow-500 items-center  ">
    {[...Array(4)].map((_, i) => (
      <RiStarSFill key={i} />
    ))}
    <RiStarHalfSFill /> <p className="text-[#676A5E] ml-1  laptop:text-[12px] hd:text-[14px] xxxl:text-[18px]">(79)</p>
  </div>
        <div className="font-semibold tracking-wide font-archivo mb-2">
          
          <span className="text-black text-[18px] text-[20px] xxxl:text-[28px] laptop:text-[24px] hd:text-[26px]">
            ₹{product.price}
          </span>
        </div>
        <button onClick={(e) => { e.stopPropagation(); handleAddToCart(product.product_id); }} className="w-full bg-[#2B452C] text-white py-3 xxxl:py-4 laptop:py-2 hd:py-3 lg:rounded-b text-[18px] xxxl:text-[24px] laptop:text-[20px] tracking-wider font-medium rounded-none">
          Add to Cart
        </button>
      </div>
    </div>
))}

      </div>
    </div>

    {/* Right Image */}
    <div className="hidden lg:flex justify-end items-stretch">
      <img
        src="/images/pure.webp"
        alt="Offer Banner"
        className="h-[540px] laptop:h-[720px] hd:h-[760px] xxxl:h-[695px] w-[360px] laptop:w-[400px] hd:w-[430px] xxxl:w-[460px] -mt-48 hd:-mt-[85%] laptop:-mt-[90%] xxxl:-mt-64 object-contain"
      />
    </div>
  </div>

  {/* Mobile fallback image */}
  <div className="lg:hidden">
    <img
      src="/images/pure.webp"
      alt="Offer Banner"
      className="mx-auto mt-16 w-[85%]"
    />
  </div>
   <ToastContainer position="top-right" autoClose={3000} />
</div>

  );
}
