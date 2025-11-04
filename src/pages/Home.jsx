
import Footer from "../components/Footer";
import GlowCards from "./GlowCards";
import CareCollectionsSection from "./CareCollectionSection";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useState } from 'react';
import { RiStarSFill, RiStarHalfSFill } from "react-icons/ri";
import endpoint_prefix from "../config/ApiConfig";
import { ToastContainer , toast } from "react-toastify";
import { showLoginToast } from "../components/ShowLoginToast";
import { showSessionExpiredToast } from "../components/showSessionExpiredToast";
export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  

  const testimonials = [
    {
      name: "Kishore B",
      location: "Madurai",
      gender: "male",
      comment:
        "I was skeptical about herbal products before, but Zia Herbals proved me wrong. Their lip pain balm works like magic better than most over-the-counter creams.",
    },
    {
      name: "Jenifer Nisha",
      location: "Kerala",
      gender: "female",
      comment:
        "Hair shampoo is works amazing for hair, removes dirt and treats hair and scalp really well. My hair are more manageable and healthier than before.",
    },
    {
      name: "Hari Haran",
      location: "Chennai",
      gender: "male",
      comment:
        "Zia Herbals has changed my wellness routine for the better. Their products are 100% natural and actually work. I feel so much more clean!",
    },
  ]


const handleAddToCart = async (productId) => {
  const token = localStorage.getItem("accessToken");

  if (!token ) {
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
 console.log("Add to cart response:", data);
   toast.success("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      showSessionExpiredToast(navigate);
    }
};


const handleAbout = () => {
  navigate('/about');
}


  const handleChange = () => {
    navigate('/shoplist');
  }
  useEffect(() => {
  AOS.init({
    duration: 1000,  
    once: false       
    });
}, []);


useEffect(() => {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch(`${endpoint_prefix}04_userProducts/api/user_products/featured-products`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      
      setProducts(result);
    })
    .catch((error) => console.error("Error fetching products:", error));
}, []);

  return (
    <>
    <div className="w-full bg-white  text-center font-sans "data-aos="fade-up">
     
  
 <section className="pt-[120px] lg:bg-[#F5F5F5] lg:pt-[110px] lg:pb-20 lg:flex lg:items-center lg:justify-between relative">
  {/* Left Content Block */}
  <div className=" xxxl:ml-52 hd:ml-40 laptop:ml-32 lg:ml-16 relative ">
    <h1 data-aos="fade-up" data-aos-delay="100" className="lg:w-[75%] laptop:w-[80%] text-[24px] laptop:text-[22px] hd:text-[30px]   xxxl:text-[40px] tracking-widest font-tenor text-[#333333] mb-4 lg:text-left ">
      NATURE’S TOUCH,
      <br />
      BOTTLED WITH CARE
    </h1>

    <p data-aos="fade-up" data-aos-delay="100" className="text-[14px] lg:mr-[14%] xxxl:text-[18px] font-archivo text-[#9D9C9C] max-w-[80%] mx-auto mb-6 text-center lg:text-left lg:max-w-[85%]">
      Zia Herbal brings you a range of 100% natural, farm-fresh skincare and wellness products crafted using traditional herbs and modern purity standards. Our products are handcrafted with ingredients sourced directly from our sustainable farmlands, ensuring nature’s finest reaches your skin.
    </p>

    <div data-aos="fade-up" data-aos-delay="100" className="flex justify-around mb-24 lg:justify-start lg:gap-20 font-tenor">
      <button onClick={handleChange} className="bg-black text-white text-[14px] px-5 py-2 rounded-full flex items-center gap-2">
        Shop Now <span className="text-lg ml-2">→</span>
      </button>
      <button onClick={handleChange} className="border text-[#2B452C] border-[#2B452C] text-[14px] px-5 py-2 rounded-full flex items-center gap-2">
        Explore <span className="text-lg ml-2 text-[#2B452C]">→</span>
      </button>
    </div>

    {/* Left Image  */}
    <div data-aos="fade-up" data-aos-delay="100" className="hidden relative lg:flex items-center justify-start gap-32 mt-8 -ml-[41%]">
      <img
        src="images/bg_left.webp"
        alt="Left Product"
        className="w-[600px] laptop:w-[400px] xxxl:w-[600px] hd:w-[500px]"
      />
      <div className="text-[20px] font-tenor text-[#676A5E] tracking-widest flex items-center">
        NEXT <span className="inline-block ml-3 -mt-1 text-3xl">→</span>
      </div>
    </div>
  </div>

  {/* Right Side Image - curved only bottom-left */}
  <img
    src="images/zia_shampoo_bg.webp"
    alt="Zia Herbal Products"
    className="w-full lg:hidden"
  />
  <img
    src="images/bg_right.webp"
    className="hidden lg:block w-[55%] xxxl:h-[750px] laptop:h-[500px] hd:h-[600px]  xxxl:-mt-[7.5%] laptop:-mt-[15%] hd:-mt-[9%] lg:-mt-[35%] rounded-bl-[200px]"
    alt="Background Right"
  />
</section>


{/* Bottom NEXT Section */}
<section data-aos="fade-up" data-aos-delay="100" className="relative lg:bg-[#F5F5F5]  py-5 flex items-center justify-between lg:justify-left   ">
  <img
    src="images/serum.webp"
    alt="Packshot"
    className="w-[55%] hidden lg:hidden"
  />
  
  <div className="hidden lg:hidden text-[16px] lg:text-[20px] mt-5 font-tenor text-[#676A5E] tracking-widest flex items-center justify-center lg:justify-start w-[40%] lg:w-[60%] h-full">
    NEXT <span className="inline-block ml-3 -mt-1 text-2xl lg:text-4xl lg:-mt-2">→</span>
  </div>
</section>
<CareCollectionsSection/>
<div className="px-6 mt-10 mb-10 text-left space-y-5 lg:space-y-8  xxxl:px-20 xxxl:mt-28 xxxl:mb-28 laptop:px-10 laptop:mt-12 laptop:mb-14 hd:px-16 hd:mt-20 hd:mb-20">
  {/* Box Grid for Desktop */}
 <div className="hidden laptop:grid laptop:grid-cols-4 hd:grid-cols-4 xxxl:grid-cols-4 gap-y-4 laptop:gap-x-2 hd:gap-x-2 hd:gap-y-4 xxxl:gap-x-8 xxxl:gap-y-10">

  {/* Box 1 - Tall */}
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="bg-[#D4480C] font-tenor text-white
      laptop:p-6 laptop:w-[280px] laptop:h-[280px]
      hd:p-8 hd:w-[340px] hd:h-[330px]
      xxxl:p-10 xxxl:w-[420px] xxxl:h-[430px]
      rounded-xl flex flex-col justify-between uppercase"
  >
    <div>
    <h2 className="text-[28px] hd:text-[32px] xxxl:text-[42px] border-b pb-2">Tradition</h2>
    <p className="text-[16px] hd:text-[20px] xxxl:text-[24px] mt-4 tracking-widest">Focus on quality</p>
    </div>
    <p className="text-[12px] hd:text-[14px] xxxl:text-[16px] font-archivo tracking-wide">
      From Sourcing to Packaging <br/> We ensure purity, consistency, and<br/> customer trust at every step.
    </p>
  </div>

  {/* Box 2 - Short */}
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="bg-[#2B452C] font-tenor text-white
      laptop:p-6 laptop:w-[280px] laptop:h-[160px]
      hd:p-8 hd:w-[340px] hd:h-[200px]
      xxxl:p-10 xxxl:w-[420px] xxxl:h-[260px]
      rounded-xl flex flex-col justify-between self-end uppercase"
  >
    <h2 className="text-[28px] hd:text-[32px] xxxl:text-[42px] border-b pb-2">Origin</h2>
    <p className="text-[18px] hd:text-[22px] xxxl:text-[26px] tracking-widest">Made In India</p>
  </div>

  {/* Box 3 - Tall */}
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="bg-[#151D10] font-tenor text-white
      laptop:p-6 laptop:w-[280px] laptop:h-[280px]
      hd:p-8 hd:w-[340px] hd:h-[330px]
      xxxl:p-10 xxxl:w-[420px] xxxl:h-[430px]
      rounded-xl flex flex-col justify-between uppercase"
  >
    <div>   
       <h2 className="text-[28px] hd:text-[32px] xxxl:text-[42px] border-b pb-2">100 %</h2>
    <p className="text-[16px] hd:text-[20px] xxxl:text-[24px] tracking-widest mt-4">Natural formulations</p>
    </div>

    <p className="text-[12px] hd:text-[14px] xxxl:text-[16px] font-archivo tracking-wide">
      Free from harsh chemicals and <br/> made with pure, plant-based <br/>goodness.
    </p>
  </div>

  {/* Box 4 - Short */}
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="bg-[#F6A903] font-tenor text-white
      laptop:p-6 laptop:w-[280px] laptop:h-[160px]
      hd:p-8 hd:w-[340px] hd:h-[200px]
      xxxl:p-10 xxxl:w-[420px] xxxl:h-[260px]
      rounded-xl flex flex-col justify-evenly self-start"
  >
    <h2 className="text-[28px] hd:text-[32px] xxxl:text-[42px] border-b pb-2">30<span className="ml-1">+</span></h2>
    <p className="text-[18px] hd:text-[22px] xxxl:text-[26px] tracking-widest">ORGANIC <br/> PRODUCTS</p>
  </div>
</div>


  {/* Mobile Layout (unchanged) */}
  <div className="lg:hidden space-y-5">
    {/* Tall Box */}
    <div data-aos="fade-up" data-aos-delay="100" className="uppercase bg-[#D4480C] font-tenor text-white p-10 min-h-[400px] rounded-xl flex flex-col justify-between">
     <div>
      <h2 className="text-[42px] border-b pb-3">Tradition</h2>
      <p className="text-[24px] mt-4  tracking-widest">focused on quality</p>
      </div>
      <p className="text-[14px] font-archivo tracking-wide">
         From Sourcing to Packaging <br/> We ensure purity, consistency, and<br/> customer trust at every step.
      </p>
    </div>

    {/* Short Box */}
    <div data-aos="fade-up" data-aos-delay="100" className="bg-[#2B452C] font-tenor text-white p-10 min-h-[270px] rounded-xl flex flex-col justify-evenly">
      <h2 className="text-[42px] border-b pb-3">Origin</h2>
      <p className="text-[24px] w-[100%] tracking-widest">Made in India</p>
    </div>

    {/* Tall Box */}
    <div data-aos="fade-up" data-aos-delay="100" className="uppercase bg-[#151D10] font-tenor text-white p-10 min-h-[400px] rounded-xl flex flex-col justify-between">
      <h2 className="text-[42px] border-b pb-3">100%</h2>
      <p className="text-[24px] w-[60%] -mt-16 tracking-widest">Natural Formulations</p>
      <p className="text-[14px] font-archivo tracking-wide">
          Free from harsh chemicals and <br/> made with pure, plant-based <br/>goodness.
      </p>
    </div>

    {/* Short Box */}
    <div data-aos="fade-up" data-aos-delay="100" className="bg-[#F6A903] font-tenor text-white p-10 min-h-[270px] rounded-xl flex flex-col justify-evenly">
      <h2 className="text-[42px] border-b pb-3">25<span className="ml-1">+</span></h2>
      <p className="text-[26px] w-[60%] tracking-widest">ORGANIC PRODUCTS</p>
    </div>
  </div>

  
  <div className="text-left pt-6 lg:flex lg:justify-start items-center">
  {/* Text Section */}
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="lg:mt-10 lg:w-[58%] hd:w-[65%] laptop:w-[75%] xxxl:w-[58%]"
  >
    <p className="text-[20px] laptop:text-[16px] hd:text-[20px] xxxl:text-[26px] leading-relaxed uppercase tracking-widest w-[95%] lg:w-[55%] text-[#676A5E] font-tenor">
      Trusted by over 250,000+ clients worldwide since 2000
    </p>
    <p className="text-[14px] laptop:text-[12px] hd:text-[14px] xxxl:text-[17px] text-[#676A5E] font-archivo mt-5">
      Rooted in tradition, trusted for purity.<br />
      Zia Herbal is redefining natural care, one product at a time.
    </p>
  </div>

  {/* Stats Section */}
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="flex text-[#676A5E] font-tenor gap-6 laptop:gap-10 hd:gap-16 xxxl:gap-20 mt-16 mb-10 lg:mr-28"
  >
    <div className="border-r-2 pr-6 laptop:pr-10 hd:pr-14 xxxl:pr-20 border-[#B2BA98]">
      <h3 className="text-[36px] laptop:text-[32px] hd:text-[40px] xxxl:text-[50px]">
        6<span className="mx-2">M</span>+
      </h3>
      <img src="images/stars.webp" className="mb-3 laptop:mb-4" />
      <p className="text-[13px] laptop:text-[12px] hd:text-[14px] xxxl:text-[16px] font-archivo">
        Worldwide Products<br />Sale Per Year
      </p>
    </div>
    <div>
      <h3 className="text-[36px] laptop:text-[32px] hd:text-[40px] xxxl:text-[50px]">
        4<span className="mx-2">.</span>8
      </h3>
      <img src="images/stars.webp" className="mb-3 laptop:mb-4" />
      <p className="text-[13px] laptop:text-[12px] hd:text-[14px] xxxl:text-[16px] font-archivo">
        2564+ Ratings<br />World Wide
      </p>
    </div>
  </div>

  {/* Button */}
  <button
    onClick={handleAbout}
    data-aos="fade-up"
    data-aos-delay="100"
    className="mt-4 bg-black font-tenor text-white text-[14px] laptop:text-[12px] hd:text-[12px] hd:p xxxl:text-[17px] px-4 py-2 rounded-full hd:w-[12%] laptop:w-[15%]"
  >
    More Details <span className="ml-2 text-base">→</span>
  </button>
</div>

</div>

<div className="bg-[#2f3a27] h-[100px] overflow-hidden flex items-center">
  <div className="flex gap-40 w-max animate-scroll-right lg:animate-scroll-right">
    {Array(6).fill(0).map((_, i) => (
      <img
        key={i}
        src="/images/BrandMarque.webp"
        alt="Brand Marque"
        className="h-[50px] object-cover"
      />
    ))}
  </div>
</div>




     <div className="px-4 py-10 laptop:px-10 hd:px-12 xxxl:px-16">
  {/* Text + Button */}
  <div className="text-center lg:text-left lg:flex lg:items-start lg:mb-10 gap-10">
    
    {/* Text Column */}
    <div data-aos="fade-up" data-aos-delay="100" className="lg:w-1/4 laptop:w-[30%] hd:w-[28%] xxxl:w-1/4 flex-shrink-0">
      <h2 className="text-[28px] laptop:text-[24px] hd:text-[26px] xxxl:text-[34px] font-tenor tracking-[0.3em] text-[#676A5E]">
        TRENDING
      </h2>
      <h2 className="text-[28px] laptop:text-[24px] hd:text-[26px] xxxl:text-[34px] font-tenor tracking-[0.3em] text-[#676A5E] mb-5">
        ITEMS
      </h2>
      <p className="text-[14px] laptop:text-[13px] hd:text-[14px] xxxl:text-[17px] mx-auto text-[#676A5E] w-[80%] lg:w-full mb-10 font-archivo">
        Discover our most-loved herbal essentials from refreshing Neem hand sanitizers to nourishing beetroot lip balms. Experience nature’s bestsellers, crafted to care.
      </p>
      <button
        onClick={handleChange}
        className="mt-2 mb-5 px-6 py-3 hd:py-2 xxxl:py-3 laptop:py-1 bg-black text-white rounded-full text-[14px] laptop:text-[12px] hd:text-[14px] xxxl:text-[17px] font-tenor"
      >
        All Products<span className="text-lg laptop:text-xl ml-3">→</span>
      </button>
    </div>

    {/* Product Grid */}
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="mt-10 lg:mt-0 flex-1 overflow-x-auto flex gap-4 scrollbar-none"
    >
      {Array.isArray(products) && products.length > 0 ? (
        products.slice(0, 4).map((product) => (
         <div 
  onClick={() => navigate(`/shopdetails/${product.product_id}`)}  
  className="bg-white mx-auto w-full h-auto sm:w-[180px] sm:h-[320px] lg:rounded-t-2xl 
             laptop:w-[180px] laptop:h-[320px] hd:w-[220px] hd:h-[375px] xxxl:w-[270px] xxxl:h-[460px] 
             shadow-around-soft rounded-t-2xl border border-[#D8DCCB] flex flex-col mt-4"
>
 
  <img
    src={product.primary_image_url || "/images/lemonwash.webp"}
    alt={product.name}
    className="w-full h-[172px] sm:h-[179px] laptop:h-[180px] hd:h-[220px] xxxl:h-[270px] 
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
        ))
      ) : (
        <p className="text-center text-gray-500 w-full">No featured products available.</p>
      )}
    </div>
  </div>
</div>


<div className="mx-auto px-4 laptop:px-10 hd:px-14 xxxl:px-16 py-10 lg:mt-10">
  <div data-aos="fade-up" data-aos-delay="100" className="overflow-hidden">
    <img
      src="images/handwash.webp"
      alt="Product Highlight"
      className="w-full mb-10 lg:hidden block"
    />
  </div>

  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10">
    {/* Left Section - Text */}
    <div className="space-y-6 text-center lg:text-left lg:max-w-[45%] laptop:max-w-[52%] hd:max-w-[50%] xxxl:max-w-[45%]">
      <p data-aos="fade-up" data-aos-delay="100" className="text-[14px] laptop:text-[14px] hd:text-[15px] text-[#676A5E] font-archivo">
        Special Products
      </p>

      {/* Large Heading for desktop */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="hidden lg:block font-tenor tracking-[0.2em] leading-snug uppercase text-[#676A5E] space-y-1 text-[28px] laptop:text-[24px] hd:text-[28px] xxxl:text-[34px]"
      >
        <p>EMBRACE FRESHNESS WITH A</p>
        <p>CITRUSY TOUCH</p>
      </div>

      {/* Smaller heading for mobile */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-[22px] laptop:text-[23px] hd:text-[18px] xxxl:text-[25px] font-tenor tracking-wide lg:hidden block leading-normal uppercase text-[#676A5E] flex flex-col items-center"
      >
        <p>Embrace the</p>
        <p>Unembrace</p>
        <p>Freshness With a</p>
        <p>Citrusy Touchseen</p>
        <p>Magic of Facial</p>
        <p>Touchup</p>
      </div>

      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-[14px] laptop:text-[13px] hd:text-[14px] xxxl:text-[17px] text-[#676A5E] font-archivo leading-relaxed lg:w-full"
      >
        Experience the power of nature with Zia Herbal's curated wellness essentials. From facial care to daily hygiene, our products are thoughtfully crafted to refresh, nourish, and protect all while staying true to herbal traditions. From skincare to hand care, our range keeps you naturally nourished. Zia Herbal Neem Hand Wash is crafted with antibacterial Neem and refreshing lemon, tough on germs, gentle on hands. Say goodbye to dryness and hello to farm-fresh hygiene.
      </p>

      {/* Features */}
      <div className="flex justify-between text-[13px] laptop:text-[14px] hd:text-[15px] xxxl:text-[16px] font-archivo text-[#676A5E] pt-4">
        {[{ icon: 'drops', text: ['Required Enamel', 'Solutions'] },
          { icon: 'hold', text: ['Stunning Solutions', 'in Face'] },
          { icon: 'leaf', text: ['Organic Natural', 'Products'] }].map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center lg:flex lg:items-center lg:gap-4 lg:mb-20"
          >
            <img
              src={`images/${item.icon}.webp`}
              alt={`Icon ${i + 1}`}
              className="mx-auto mb-2 w-12 h-12 laptop:w-[55px] laptop:h-[55px] hd:w-[60px] hd:h-[60px] xxxl:w-[75px] xxxl:h-[75px] lg:mb-0"
            />
            <div className="lg:text-left">
              {item.text.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Button + Reviews on Desktop */}
      <div className="lg:flex lg:justify-between">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex items-center justify-center lg:hidden block"
        >
          <img
            src="images/review.webp"
            alt="Reviews"
            className="max-w-[300px] laptop:max-w-[260px] hd:max-w-[300px] my-10"
          />
        </div>

        <div className="text-center lg:text-left font-tenor order-last lg:order-none">
          <button
            onClick={handleAbout}
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-black text-white px-6 py-3 rounded-full text-[14px] laptop:text-[13px] hd:text-[14px] xxxl:text-[17px] mt-5"
          >
            More Details <span className="ml-3 text-lg">→</span>
          </button>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex items-center justify-center hidden lg:block"
        >
          <img
            src="images/review.webp"
            alt="Reviews"
            className="lg:max-w-[350px] laptop:max-w-[320px] hd:max-w-[340px] xxxl:max-w-[360px] lg:my-5"
          />
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="relative w-full lg:w-[650px] laptop:w-[550px] hd:w-[580px] xxxl:w-[650px]"
    >
      <img
        src="images/bg_lemon.webp"
        alt="Product Highlight"
        className="w-full h-auto rounded-xl object-contain hidden lg:block"
      />
    </div>
  </div>
</div>



    <GlowCards/>
<div className="font-archivo lg:mt-80">
  {/* Split Section with Green Background */}
  <div className="lg:flex lg:h-[100vh] mx-auto py-16 lg:space-x-12 text-[#676A5E] space-y-10 lg:space-y-0 items-center lg:bg-[#2B452C] lg:text-white  lg:px-0">
    <div data-aos="fade-up" data-aos-delay="100" className="relative lg:w-1/2 ">
      <img
        src="images/before-after.webp"
        alt="Before and After"
        className="lg:z-10 relative lg:-top-80 laptop:w-[550px] laptop:h-[440px] hd:w-[700px] hd:h-[500px] xxxl:w-[850px] xxxl:h-[680px] lg:left-20"
      />
      <span className="absolute lg:hidden hidden top-2/3 left-5 xxxl:top-1/3 xxxl:left-40 hd:top-1/4 hd:left-40 laptop:top-10 laptop:left-40 lg:z-10 transform -translate-y-1/2 text-white text-[20px] laptop:text-[20px] hd:text-[21px] xxxl:text-[22px]">Before</span>
      <span className="absolute lg:hidden hidden top-2/3 right-5 xxxl:top-1/3 xxxl:right-20 hd:top-1/4 hd:right-10 laptop:top-10 laptop:right-10 lg:z-10 transform -translate-y-1/2 text-white text-[20px] laptop:text-[20px] hd:text-[21px] xxxl:text-[22px]">After</span>
    </div>

    {/* Right Side - Text Content on Green Background */}
    <div className="lg:w-1/2 w-full px-4 lg:px-6">
      {/* Heading */}
      <div data-aos="fade-up" data-aos-delay="100" className="text-[#676A5E] lg:z-10 xxxl:-mt-[58%] hd:-mt-[50%] laptop:-mt-[48%] text-[22px] laptop:text-[24px] hd:text-[24px] xxxl:text-[32px] font-tenor tracking-widest lg:tracking-[0.7rem] leading-relaxed uppercase mb-6 lg:text-left text-center">
        <p>WON’T KILL YOU BUT</p>
        <p>YOU CAN MAKE THEM</p>
        <p>DISAPPEAR</p>
      </div>

      {/* Problem */}
      <div data-aos="fade-up" data-aos-delay="100" className="mb-6 laptop:w-[90%] hd:w-[80%] xxxl:w-[70%] lg:mt-10 ">
        <h3 className="text-[22px] laptop:text-[22px] hd:text-[23px] xxxl:text-[24px] font-tenor text-left tracking-widest mb-2">PROBLEM</h3>
        <p className="text-[15px] laptop:text-[16px] hd:text-[17px] xxxl:text-[18px] leading-relaxed text-[#676A5E] text-left lg:text-white">
          Many skincare products promise glowing skin but contain harsh chemicals that can damage sensitive skin over time. There’s a need for natural, herbal solutions that safely promote skin brightness and radiance.
        </p>
      </div>

      {/* Solutions */}
      <div data-aos="fade-up" data-aos-delay="100" className="laptop:w-[90%] hd:w-[80%] xxxl:w-[70%]">
        <h3 className="text-[22px] laptop:text-[18px] hd:text-[21px] xxxl:text-[24px] font-tenor tracking-widest text-left mb-2">SOLUTIONS</h3>
        <ul className="list-decimal laptop:text-[14px] hd:text-[15px] xxxl:text-[18px] list-inside space-y-3 text-[15px] text-[#676A5E] lg:text-white text-left">
          <li>Zia Herbal’s Radiance Boost Solution is carefully crafted to naturally brighten your skin and restore its healthy glow.</li>
          <li>Herbal-Powered Glow: Made with traditional herbs known to enhance skin radiance.</li>
          <li>Farm-Fresh Purity: Ingredients are directly sourced from our sustainable farmlands for maximum freshness and potency.</li>
          <li>Gentle & Effective: Free from harsh chemicals, perfect for daily use without skin irritation.</li>
          <li>Skin-Loving Formula: Designed to promote even skin tone, reduce dullness, and leave your skin visibly glowing.</li>
        </ul>
      </div>

      {/* Button */}
      <div data-aos="fade-up" data-aos-delay="100" className="mt-8  lg:text-left">
        <button onClick={handleChange} className="px-6 py-3 xxxl:py-3 laptop:py-1 hd:py-2 bg-black text-white text-[14px] font-tenor rounded-full">
          See More <span className="text-lg ml-3">→</span>
        </button>
      </div>
    </div>
  </div>

  {/* Special Products Section */}
  <div className="bg-white px-4 py-16 lg:z-100 flex flex-col">
    <div data-aos="fade-up" data-aos-delay="100" className="text-center mb-10 lg:mb-14 xxxl:-mt-[18%] hd:-mt-[17%] laptop:-mt-[15%]">
      <h2 className="text-[26px] laptop:text-[22px] hd:text-[28px] xxxl:text-[32px] font-tenor lg:text-white uppercase tracking-widest text-[#676A5E] lg:flex lg:justify-center lg:gap-4">
        <p>Our Special</p>
        <p>Products</p>
      </h2>
    </div>
    <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col lg:flex-row lg:space-x-14 lg:justify-center space-y-8 lg:space-y-0 text-center">
      {[{ src: "images/herbal-handwash.webp", label: "Herbal Handwash" }, { src: "images/herbal-shampoo.webp", label: "Herbal Shampoo" }, { src: "images/herbal-soap.webp", label: "Herbal Soap" }].map((item, index) => (
        <div key={index} className="relative laptop:w-[340px] hd:w-[400px] xxxl:w-[500px] laptop:h-[250px] hd:h-[280px] xxxl:h-[340px]">
          <img src={item.src} alt={item.label} className="w-full h-full" />
          <div className="backdrop-blur-sm tracking-widest font-tenor uppercase w-full absolute bottom-0 lg:py-4 py-2 left-1/2 transform -translate-x-1/2 bg-white/70 text-[#1F1F1F] text-[20px] laptop:text-[22px] xxxl:text-[24px]">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



    <div className="mx-auto px-4 laptop:px-10 hd:px-20 xxxl:px-28 py-10 laptop:mt-10 hd:mt-16 xxxl:mt-20 font-archivo">
  <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">

    {/* Left Side: Product + Badges */}
    <div className="flex flex-col lg:flex-row lg:w-1/2">

      {/* Packs Image */}
      <div className="lg:w-2/3">
        <img
          src="images/packs.webp"
          alt="Zia Herbal Face Pack"
          className="w-full laptop:w-[400px] hd:w-[500px] xxxl:w-[560px] h-auto object-contain"
        />
      </div>

      {/* ISO and Smile Images */}
      <div data-aos="fade-up" data-aos-delay="100" className="flex flex-row lg:flex-col justify-center items-center gap-6 lg:pl-6 mt-6 lg:mt-0">
        <img src="images/iso.webp" alt="Certified" className="h-auto lg:hidden" />
        <img src="images/iso.webp" alt="Certified" className="h-auto hidden lg:block mb-10" />
        <img src="images/smile.webp" alt="Smiling Woman" className="h-auto laptop:w-[150px] hd:w-[180px] xxxl:w-[210px]" />
      </div>
    </div>

    {/* Right Side: Text Content */}
    <div className="lg:w-1/2 mt-10 lg:-mt-10">
      {/* Heading */}
      <div data-aos="fade-up" data-aos-delay="100" className="hidden text-left lg:flex lg:flex-col font-tenor uppercase tracking-[0.2em] text-[#676A5E] mb-8">
        <p className="text-[24px] laptop:text-[24px] hd:text-[28px] xxxl:text-[32px]">Best Selling Aesthetician</p>
        <p className="text-[24px] laptop:text-[24px] hd:text-[28px] xxxl:text-[32px]">Skincare Brands</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="100" className="lg:hidden block font-tenor uppercase tracking-[0.2em] text-[#676A5E] mb-8">
        <p className="text-[24px]">Best Selling</p>
        <p className="text-[24px]">Aesthetician</p>
        <p className="text-[24px]">Skincare Brands</p>
      </div>

      {/* Feature #1 */}
      <div data-aos="fade-up" data-aos-delay="100" className="flex items-start gap-4 lg:gap-8 text-left mb-6">
        <img src="images/ph.webp" alt="pH icon" className="mt-2 " />
        <div>
          <h3 className="text-[18px] laptop:text-[16px] hd:text-[18px] xxxl:text-[22px] text-[#B2BA98] font-semibold mb-4">
            Premium Natural Ingredients
          </h3>
          <p className="text-[14px] laptop:text-[13px] hd:text-[14px] xxxl:text-[16px] text-[#676A5E] leading-relaxed laptop:w-[90%] hd:w-[80%] xxxl:w-[75%]">
            Our Zia Herbal Face Pack is crafted using farm-fresh, 100% organic herbs. It
            naturally brightens the skin while nourishing it from within.
          </p>
        </div>
      </div>

      {/* Feature #2 */}
      <div data-aos="fade-up" data-aos-delay="100" className="flex items-start gap-4 lg:gap-8 text-left">
        <img src="images/spray.webp" alt="Bottle icon" className="mt-2 " />
        <div>
          <h3 className="text-[18px] laptop:text-[16px] hd:text-[18px] xxxl:text-[22px] text-[#B2BA98] mb-4">
            High-quality Raw Materials
          </h3>
          <p className="text-[14px] laptop:text-[13px] hd:text-[14px] xxxl:text-[16px] text-[#676A5E] leading-relaxed laptop:w-[90%] hd:w-[80%] xxxl:w-[75%]">
            Every ingredient is carefully selected from our sustainable farms to ensure
            purity, effectiveness, and the perfect skin-friendly formula.
          </p>
        </div>
      </div>

      {/* Button */}
      <div data-aos="fade-up" data-aos-delay="100" className="text-center lg:text-left font-tenor mt-10">
        <button onClick={handleChange} className="bg-black text-white px-6 py-3 rounded-full text-[14px]">
          See More <span className="text-lg ml-3">→</span>
        </button>
      </div>
    </div>
  </div>
</div>

    
   <div className="lg:mt-20 flex items-center justify-evenly tracking-widest space-x-2 laptop:space-x-4 hd:space-x-6 xxxl:space-x-8 text-[16px] laptop:text-[28px] hd:text-[34px] xxxl:text-[40px] font-tenor text-[#676A5E] mb-4">
  {/* Block 1 */}
  <div data-aos="fade-up" data-aos-delay="100" className="text-left leading-relaxed lg:flex  items-start">
    <p>35% OFFER</p>
    <p>ON BEAUTY</p>
  </div>

  <img src="/images/Star1.webp" alt="star" className="w-4 h-4 laptop:w-5 laptop:h-5 hd:w-6 hd:h-6" />

  {/* Block 2 */}
  <div data-aos="fade-up" data-aos-delay="100" className="text-left leading-relaxed lg:flex  items-start">
    <p>25% OFF</p>
    <p>SHINE</p>
  </div>

  <img src="/images/Star1.webp" alt="star" className="hidden lg:block w-4 h-4 laptop:w-5 laptop:h-5 hd:w-6 hd:h-6" />

  {/* Block 3 */}
  <div data-aos="fade-up" data-aos-delay="100" className="hidden lg:flex  items-start text-left leading-relaxed">
    <p>25% OFF</p>
    <p>SHINE</p>
  </div>
</div>


    

 <div className="lg:mt-20 p-6 text-left lg:text-center mb-10">
        <h2 className="text-[#686257] font-tenor text-[24px] lg:text-[32px] tracking-widest mb-10 uppercase">
          Customer Support Feedback
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-24 xxxl:w-[85%] mx-auto lg:mb-40">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col text-left text-[#686257]">
              <img src="images/quotes.webp" alt="Quotes" className="mb-4 " />
              <p className="font-archivo text-[#686257] text-[18px] leading-relaxed">
                {item.comment}
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <img
                  src={item.gender === "male" ? "images/male.webp" : "images/female.webp"}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-[16px] font-archivo">
                  {item.name} - {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>



    <Footer/>
    

     </div>
     <ToastContainer position="top-right" autoClose={2000} />
     </>
  );
}
