import { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import Footer from "../components/Footer";
import { RiStarSFill,RiStarHalfSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import endpoint_prefix from "../config/ApiConfig";
import { ToastContainer, toast } from "react-toastify";
import { showLoginToast } from "../components/ShowLoginToast";
import { showSessionExpiredToast } from "../components/showSessionExpiredToast";
function ProductCard({ product }) {
  
 const navigate = useNavigate();
  const handleAddToCart = async (id) => {
   
    const token = localStorage.getItem("accessToken");
      const reason = sessionStorage.getItem("tokenReason");
    if (!token && reason !== "expired") {
    showLoginToast(navigate);
}

sessionStorage.removeItem("tokenReason");

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
              product_id: id,
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

      const result = await response.json();
      console.log(result);
      toast.success("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      if(token) {
        showSessionExpiredToast(navigate);
      }
    }
  };

  const primaryImage = product.primary_image_url;
 


  return (
<div 
  onClick={() => navigate(`/shopdetails/${product.product_id}`)}  
  className="bg-white mx-auto w-full h-auto sm:w-[180px] sm:h-[320px] lg:rounded-t-2xl 
             laptop:w-[180px] laptop:h-[320px] hd:w-[220px] hd:h-[375px] xxxl:w-[270px] xxxl:h-[460px] 
             shadow-around-soft rounded-t-2xl border border-[#D8DCCB] flex flex-col mt-4"
>
 
  <img
    src={primaryImage || "/images/lemonwash.webp"}
    alt={product.name}
    className="w-full h-full sm:h-[179px] laptop:h-[180px] hd:h-[220px] xxxl:h-[270px] 
               object-contain rounded-t-2xl"
  />

  {/* Content */}
  <div className="flex flex-col items-center text-center flex-grow justify-between px-3 py-1">
    {/* Title */}
    <h2 className="text-[16px] laptop:text-[18px] hd:text-[20px] xxxl:text-[24px] 
                   font-medium truncate max-w-[150px] laptop:max-w-[160px] hd:max-w-[190px] 
                   xxxl:max-w-[240px] mx-auto h-[22px] laptop:h-[25px] hd:h-[30px] xxxl:h-[40px]">
      {product.name}
    </h2>

    {/* Stars */}
    <div className="flex text-yellow-500 items-center">
      {[...Array(4)].map((_, i) => (
        <RiStarSFill key={i} />
      ))}
      <RiStarHalfSFill />
      <p className="text-[#676A5E] ml-1 text-[12px] laptop:text-[12px] hd:text-[14px] xxxl:text-[18px]">
        (79)
      </p>
    </div>

    {/* Price */}
    <div className="font-semibold tracking-wide font-archivo">
      <span className="text-black text-[18px] laptop:text-[20px] hd:text-[26px] xxxl:text-[28px]">
        ₹{product.price}
      </span>
    </div>
  </div>

  {/* Button - full width, touches left & right */}
  <button
    onClick={(e) => { 
      e.stopPropagation(); 
      handleAddToCart(product.product_id); 
    }}
    className="w-full bg-[#2B452C] text-white py-3 sm:py-3 laptop:py-2 hd:py-3 xxxl:py-4 
               lg:rounded-b text-[16px] sm:text-[18px] laptop:text-[20px] hd:text-[22px] xxxl:text-[24px] 
               tracking-wider font-medium rounded-none"
  >
    Add to Cart
  </button>
</div>


  );
}

export default function ShopList() {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([40, 1500]);
  const [sortOption, setSortOption] = useState("price-high_to_low");
   const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);

  const filterRef = useRef(null);
const [selectedCategories, setSelectedCategories] = useState([]);
const toggleCategory = (category) => {
  setSelectedCategories((prev) =>
    prev.includes(category)
      ? prev.filter((c) => c !== category)
      : [...prev, category]
  );
};
const toggleDiscount = (Value) => {
  setSelectedDiscounts((prev) =>
    prev.includes(Value)
      ? prev.filter((d) => d !== Value)
      : [...prev, Value]
  );
};


const handleApplyFilter = () => {
  const categoryString = selectedCategories.join(",");
  fetch(`${endpoint_prefix}04_userProducts/api/user_products/all-products?sort_by=${sortOption}&min_price=${priceRange[0]}&max_price=${priceRange[1]}&categories=${categoryString}`)
    .then((res) => res.json())
    .then((data) => {
      let filteredProducts = Array.isArray(data) ? data : [];

      if (selectedDiscounts.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          const discount = parseFloat(product.discount || "0");

          return selectedDiscounts.some((value) => {
            const threshold = parseInt(value);
            if (threshold === 30) {
              return discount >= 30;
            } else {
              return discount <= threshold;
            }
          });
        });
      }

      setProducts(filteredProducts);
      setShowFilter(false);
    })
    .catch((err) => console.error("Failed to fetch filtered products", err));
};





 useEffect(() => {
  fetch(`${endpoint_prefix}04_userProducts/api/user_products/all-products?sort_by=${sortOption}&min_price=${priceRange[0]}&max_price=${priceRange[1]}`)
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
       
        setProducts(data);
      } else {
        console.error("Unexpected response format:", data);
        setProducts([]);
      }
    })
    .catch(err => console.error("Failed to fetch products", err));
}, [sortOption, priceRange]);



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

  const totalProducts = 350;
  const perPage = 20;
  const totalPages = Math.ceil(totalProducts / perPage);

 const FilterSidebar = (
  
  <div className="relative lg:top-[3.5%] top-[4%] -left-[56%] w-[111%] lg:w-[280px] bg-white    lg:left-[0%] lg:z-0 z-0  border-2 rounded-lg lg:border-[#D8DCCB] font-archivo text-[#2B452C]">

   

    <div className="bg-[#C7C7C7] lg:bg-white font-archivo flex justify-between items-center px-4 py-3">
      <button
        className="bg-[#3A753C] font-tenor text-white text-[14px] px-4 py-[6px] rounded-full "
        onClick={() => {
          setPriceRange([49, 1500]);
          setSelectedCategories([]);
        }}
      >
        Clear Filter
      </button>
      <button
        onClick={() => setShowFilter(false)}
        className="text-[24px] font-bold lg:hidden"
      >
        ✕
      </button>
       <button
            onClick={handleApplyFilter}
            className="bg-[#3A753C] hidden lg:block text-white px-4 py-[6px] font-tenor rounded-full text-[14px] "
          >
            Apply Filter
          </button>
    </div>
<div className="w-full hidden  lg:block h-px bg-[#C5C5C5] mb-3" />

    <div className="px-4 pb-6">

      {/* Price Filter */}
      <div className="mb-6">
        <div className="flex justify-between text-sm font-medium mb-2">
          <h3 className="tracking-wide text-[#676A5E] mt-4 text-[16px] lg:text-[22px] font-tenor uppercase">FILTER BY PRICE</h3>
          <span className="text-[16px] lg:hidden text-[#676A5E] mt-4">1 - 20 of 350 Products</span>
        </div>

        <input
          type="range"
          min={49}
          max={2500}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([49, parseInt(e.target.value)])}
          className="w-full h-1 bg-[#3A753C] rounded-lg appearance-none cursor-pointer"
          style={{ accentColor: "#3A753C" }}
        />

        <div className="flex justify-between items-center mt-2 text-sm">
          <p className="text-[16px] text-[#768445] ">Price: ₹{priceRange[0]} — ₹{priceRange[1]}</p>
          <button
            onClick={handleApplyFilter}
            className="bg-[#3A753C] text-white lg:hidden px-4 py-[6px] font-tenor rounded-full text-[14px] "
          >
            Apply Filter
          </button>
        </div>
      </div>

      {/* PRODUCT TYPE (Left column short, Right column long) */}
      <div className="mb-6">
        <p className="text-[18px] text-[#676A5E] font-tenor lg:text-[22px] uppercase mb-3">PRODUCT TYPE</p>
        <div className="grid grid-cols-2 gap-3 text-[14px]">

          {/* Left Column (Fewer items) */}
          <div className="space-y-2">
            {["handwash", "soap", "hairoil", "body_oil", "shampoo"].map((key, index) => (
  <label key={index} className="flex text-[#676A5E] text-[18px] lg:text-[17px] items-center space-x-2">
    <input
      type="checkbox"
      className="accent-[#676A5E] w-[18px] h-[18px]"
      checked={selectedCategories.includes(key)}
      onChange={() => toggleCategory(key)}
    />
    <span>{key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</span>
  </label>
))}

          </div>

          {/* Right Column (More items) */}
          <div className="space-y-2">
            {[ "face_pack", "lip_balm", "serum", "face_wash", "foot_gel", "foot_cream"].map((key, index) => (
              <label key={index} className="flex text-[#676A5E] text-[18px] lg:text-[17px] items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-[#B2BA98] w-[18px] h-[18px]"
                  checked={selectedCategories.includes(key)}
      onChange={() => toggleCategory(key)}
                />
                 <span>{key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</span>
              </label>
            ))}
          </div>

        </div>
      </div>

      {/* DISCOUNT */}
<div>
  <p className="text-[18px] font-tenor lg:text-[22px]  text-[#676A5E] uppercase mb-3">Discount</p>
  <div className="grid grid-cols-3 lg:grid-cols-2 gap-3 text-[14px]">
    {["5", "10", "15", "20", "25", "30"].map((discount) => (
      <label key={discount} className="flex items-center text-[#676A5E] text-[18px] space-x-2">
        <input
          type="checkbox"
          className="accent-[#B2BA98] w-[18px] h-[18px]"
          checked={selectedDiscounts.includes(discount)}
          onChange={() => toggleDiscount(discount)}
        />
        <span>{discount === "30" ? "30% Off" : `${discount}% Off`}</span>
      </label>
    ))}
  </div>
</div>


    </div>
   <img src="/images/beauty.webp" alt="banner" className="mt-6 hidden lg:block   top-100 w-[300px]" />
  </div>
  
);

  return (
    <div>
    <div className="pt-[19%] min-h-screen overflow-hidden  mb-20 bg-white  lg:px-8 lg:pt-8 font-archivo text-[#676A5E]">
      <div className="hidden lg:flex justify-between items-center px-4 ">
       
      </div>

      <div className="lg:hidden bg-[#2E3A2714] py-2 rounded flex items-center text-[#676A5E] justify-center ">
        <div className="flex-1  flex items-center justify-center  font-archivo text-gray-700">
          Sort by :
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-transparent text-[16px] tracking-wide font-archivo focus:outline-none"
          >
            <option value="Relevance">Bestselling</option>
            <option value="price-low_to_high"> Low to High</option>
            <option value="price-high_to_low"> High to Low</option>
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
    <div className="absolute top-full left-0 z-0 mt-3 w-[90vw]  rounded-lg  ">
      {/* Triangle */}
      <div className="absolute -top-2 left-[25%] w-5 h-5 bg-[#C7C7C7] rotate-45 " />

      {/* Filter Panel */}
      <div ref={filterRef} className="">
        {FilterSidebar}
      </div>
    </div>
  )}
</div>


      </div>

      <div className="grid grid-cols-2 gap-3 px-3 pb-4  font-archivo text-[#676A5E] lg:hidden">
       {Array.isArray(products) && products.map((product) => (
  <ProductCard key={product.product_id} product={product} />
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
            <option value="price-low_to_high"> Low to High</option>
            <option value="price-high_to_low"> High to Low</option>
            <option value="Newest">Newest Arrivals</option>
          </select>
        </div>
        </div>

          <div className="grid grid-cols-2  lg:grid-cols-5 lg:gap-4 ">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

      

        </div>
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
    <Footer/>
    <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
