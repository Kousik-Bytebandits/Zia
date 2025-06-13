import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlowCards from "./GlowCards";
import CareCollectionsSection from "./CareCollectionSection";

export default function Home() {
     const products = [
    {
      name: "Good Mood + Sun Skin",
      price: "₹ 400",
      inStock:true,
      image: "images/b5.png", 
    },
    {
      name: "Good Mood + Sun Skin",
      price: "₹ 400",
      inStock:true,
      image: "images/vc.png",
    },
    {
      name: "Body Massage Oil",
      price: "₹ 400",
      inStock:true,
      image: "images/oil.png",
    },
    {
      name: "Beetroot & Rose Lip Balm",
      price: "₹ 400",
      inStock:false,
      image: "images/lipbalm.png",
    },
     {
      name: "Herbal Face Pack",
      price: "₹ 400",
      inStock:true,
      image: "images/facepack.png",
    },
  ];
  return (
    <div className="w-full bg-white  text-center font-sans ">
      <Navbar/>
  
 <section className="pt-10 lg:bg-[#F5F5F5] lg:pt-20 lg:pb-24 lg:flex lg:items-center lg:justify-between relative">
  {/* Left Content Block */}
  <div className=" lg:ml-52 relative">
    <h1 className="lg:w-[75%] text-[24px] lg:text-[40px] tracking-widest font-tenor text-[#333333] mb-4 lg:text-left ">
      NATURE’S TOUCH,
      <br />
      BOTTLED WITH CARE
    </h1>

    <p className="text-[14px] lg:mr-[14%] lg:text-[18px] font-archivo text-[#9D9C9C] max-w-[80%] mx-auto mb-6 text-center lg:text-left lg:max-w-[85%]">
      Zia Herbal brings you a range of 100% natural, farm-fresh skincare and wellness products crafted using traditional herbs and modern purity standards. Our products are handcrafted with ingredients sourced directly from our sustainable farmlands, ensuring nature’s finest reaches your skin.
    </p>

    <div className="flex justify-around mb-24 lg:justify-start lg:gap-20 font-tenor">
      <button className="bg-black text-white text-[14px] px-5 py-2 rounded-full flex items-center gap-2">
        Shop Now <span className="text-lg ml-2">→</span>
      </button>
      <button className="border text-[#2B452C] border-[#2B452C] text-[14px] px-5 py-2 rounded-full flex items-center gap-2">
        Explore <span className="text-lg ml-2 text-[#2B452C]">→</span>
      </button>
    </div>

    {/* Left Image  */}
    <div className="hidden relative lg:flex items-center justify-start gap-32 mt-8 -ml-[41%]">
      <img
        src="images/bg_left.png"
        alt="Left Product"
        className="w-[600px] "
      />
      <div className="text-[20px] font-tenor text-[#676A5E] tracking-widest flex items-center">
        NEXT <span className="inline-block ml-3 -mt-1 text-3xl">→</span>
      </div>
    </div>
  </div>

  {/* Right Side Image - curved only bottom-left */}
  <img
    src="images/zia_shampoo_bg.png"
    alt="Zia Herbal Products"
    className="w-full lg:hidden"
  />
  <img
    src="images/bg_right.png"
    className="hidden lg:block w-[54.55%] h-[750px] -mt-[7.5%] rounded-bl-[200px]"
    alt="Background Right"
  />
</section>


{/* Bottom NEXT Section */}
<section className="relative lg:bg-[#F5F5F5]  py-5 flex items-center justify-between lg:justify-left   ">
  <img
    src="images/serum.png"
    alt="Packshot"
    className="w-[55%] block lg:hidden"
  />
  
  <div className="lg:hidden text-[16px] lg:text-[20px] mt-5 font-tenor text-[#676A5E] tracking-widest flex items-center justify-center lg:justify-start w-[40%] lg:w-[60%] h-full">
    NEXT <span className="inline-block ml-3 -mt-1 text-2xl lg:text-4xl lg:-mt-2">→</span>
  </div>
</section>

<div className="px-6 mt-10 mb-10 text-left space-y-5 lg:space-y-8 lg:px-20 lg:mt-28 lg:mb-28">
  {/* Box Grid for Desktop */}
  <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
    {/* Box 1 - Tall */}
    <div className="bg-[#D4480C] font-tenor text-white p-10 h-[430px] w-[420px] rounded-xl flex flex-col justify-between">
      <h2 className="text-[42px] border-b pb-3">38<span className="ml-1">+</span></h2>
      <p className="text-[24px] tracking-widest">YEARS IN BUSINESS</p>
      <p className="text-[16px] font-archivo tracking-wide">
        Creation timelines for the standard lorem ipsum passage vary, with some citing.
      </p>
    </div>

    {/* Box 2 - Short */}
    <div className="bg-[#2B452C] font-tenor text-white p-10 h-[260px] w-[420px] rounded-xl flex flex-col justify-evenly self-end">
      <h2 className="text-[42px] border-b pb-3">10<span className="ml-1">+</span></h2>
      <p className="text-[26px] tracking-widest">COSMETIC AWARDS</p>
    </div>

    {/* Box 3 - Tall */}
    <div className="bg-[#151D10] font-tenor text-white p-10 h-[430px] w-[420px] rounded-xl flex flex-col justify-between">
      <h2 className="text-[42px] border-b pb-3">750<span className="ml-1">+</span></h2>
      <p className="text-[24px] tracking-widest">PRODUCTS LAUNCHED</p>
      <p className="text-[16px] font-archivo tracking-wide">
        Standard reation timelines for the standard lorem ipsum passage vary, with some citing.
      </p>
    </div>

    {/* Box 4 - Short */}
   {/* Box 4 - Short (Yellow - Top Aligned) */}
<div className="bg-[#F6A903] font-tenor text-white p-10 h-[260px] w-[420px] rounded-xl flex flex-col justify-evenly self-start">
  <h2 className="text-[42px] border-b pb-3">25<span className="ml-1">+</span></h2>
  <p className="text-[26px] tracking-widest">ORGANIC PRODUCTS</p>
</div>

  </div>

  {/* Mobile Layout (unchanged) */}
  <div className="lg:hidden space-y-5">
    {/* Tall Box */}
    <div className="bg-[#D4480C] font-tenor text-white p-10 min-h-[400px] rounded-xl flex flex-col justify-between">
      <h2 className="text-[42px] border-b pb-3">38<span className="ml-1">+</span></h2>
      <p className="text-[24px] w-[60%] -mt-16 tracking-widest">YEARS IN BUSINESS</p>
      <p className="text-[16px] font-archivo tracking-wide">
        Creation timelines for the standard lorem ipsum passage vary, with some citing.
      </p>
    </div>

    {/* Short Box */}
    <div className="bg-[#2B452C] font-tenor text-white p-10 min-h-[270px] rounded-xl flex flex-col justify-evenly">
      <h2 className="text-[42px] border-b pb-3">10<span className="ml-1">+</span></h2>
      <p className="text-[26px] w-[60%] tracking-widest">COSMETIC AWARDS</p>
    </div>

    {/* Tall Box */}
    <div className="bg-[#151D10] font-tenor text-white p-10 min-h-[400px] rounded-xl flex flex-col justify-between">
      <h2 className="text-[42px] border-b pb-3">750<span className="ml-1">+</span></h2>
      <p className="text-[24px] w-[60%] -mt-16 tracking-widest">PRODUCTS LAUNCHED</p>
      <p className="text-[16px] font-archivo tracking-wide">
        Standard reation timelines for the standard lorem ipsum passage vary, with some citing.
      </p>
    </div>

    {/* Short Box */}
    <div className="bg-[#F6A903] font-tenor text-white p-10 min-h-[270px] rounded-xl flex flex-col justify-evenly">
      <h2 className="text-[42px] border-b pb-3">25<span className="ml-1">+</span></h2>
      <p className="text-[26px] w-[60%] tracking-widest">ORGANIC PRODUCTS</p>
    </div>
  </div>

  {/* Trust Section (same for all views) */}
  <div className="text-left pt-6 lg:flex lg:justify-start items-center">
    <div className="lg:mt-10 lg:w-[58%]">  
    <p className="text-[24px] leading-relaxed uppercase tracking-widest w-[95%] lg:w-[55%] text-[#676A5E] font-tenor">
      Trusted by over 250,000+ clients worldwide since 2000
    </p>
    <p className="text-[16px] text-[#676A5E] font-archivo mt-5">
      Rooted in tradition, trusted for purity.<br />
      Zia Herbal is redefining natural care, one product at a time.
    </p>
      </div>
    <div className="flex  text-[#676A5E] font-tenor gap-10 lg:gap-20 mt-16 mb-10 lg:mr-28">
      <div className="border-r-2 pr-8 lg:pr-20 border-[#B2BA98]">
        <h3 className="text-[50px]">6<span className="mx-2">M</span>+</h3>
        <img src="images/stars.png" className="mb-4" />
        <p className="text-[16px] font-archivo">Worldwide Products<br />Sale Per Year</p>
      </div>
      <div>
        <h3 className="text-[50px]">4<span className="mx-2">.</span>8</h3>
        <img src="images/stars.png" className="mb-4" />
        <p className="text-[16px] font-archivo">2564+ Ratingsa<br />World Wide</p>
      </div>
    </div>
    <button className="mt-4 bg-black font-tenor text-white text-[16px] px-5 py-3 lg:h-[5%]  rounded-full">
      More Details <span className="ml-3 text-lg">→</span>
    </button>
  </div>
</div>

   <div className="bg-[#2f3a27] h-[100px] flex items-center justify-center">
    <img src="images/BrandMarque.png" className="object-cover  h-[50%] lg:h-full lg:object-contain  "></img>
    </div>

     <div className="px-4 py-10 lg:px-16">
      {/* Text + Button */}
      <div className="text-center  lg:text-left lg:flex lg:items-center lg:justify-between lg:mb-10">
        <div className="lg:w-1/4">
          <h2 className="text-[32px] font-tenor tracking-[0.3em] text-[#676A5E]">
            TRENDING
          </h2>
          <h2 className="text-[32px] font-tenor tracking-[0.3em] text-[#676A5E] mb-5">
            ITEMS
          </h2>
          <p className="text-[16px] mx-auto  text-[#676A5E] w-[80%]  mb-10 font-archivo lg:w-full">
            Discover our most-loved herbal essentials from refreshing Neem hand
            sanitizers to nourishing beetroot lip balms. Experience nature’s
            bestsellers, crafted to care.
          </p>
          <button className="mt-2 mb-5 px-6 py-3 bg-black text-white rounded-full text-[14px] font-tenor">
            All Products<span className="text-xl ml-3">→</span>
          </button>
        </div>

        {/* Product Grid on desktop, scrollable on mobile */}
        <div className="mt-10 overflow-x-auto scrollbar-none ">
          <div className="flex space-x-5 w-max lg:grid lg:grid-cols-5 lg:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative min-w-[270px] h-[360px] font-archivo bg-white border-2 border-[#D8DCCB] rounded-xl overflow-hidden shadow-sm flex flex-col justify-between"
              >
                {/* Out of Stock Badge */}
                {!product.inStock && (
                  <span className="absolute top-2 left-2 bg-[#D12034] text-white text-[12px] px-3 py-[2px] rounded-full font-semibold z-10">
                    out of stock
                  </span>
                )}

                {/* Content */}
                <div className="p-4 flex flex-col items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-36 object-contain mb-2"
                  />
                  <h3 className="text-center text-[20px] text-[#676A5E] mt-2">
                    {product.name}
                  </h3>
                  <img src="images/stars-num.png" alt="stars" className="my-2" />
                  <div className="text-[24px] font-bold mb-2">{product.price}</div>
                </div>

                {/* Button */}
                <button
                  disabled={!product.inStock}
                  className={`w-full py-2 text-[18px] transition-all ${
                    product.inStock
                      ? 'bg-[#2B452C] text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Unavailable'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className=" mx-auto px-4 lg:px-16 py-10 lg:mt-10">
       <div className="overflow-hidden ">
        <img
          src="images/handwash.png" 
          alt="Product Highlight "
          className="w-full mb-10 lg:hidden block"
        />
      </div>
  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10">
    
    {/* Left Section - Text Content */}
    <div className=" space-y-6 text-center lg:text-left lg:max-w-[45%]">
      <p className="text-[16px] font-archivo text-[#676A5E]">Special Products</p>
      <div className="text-[32px] hidden lg:block font-tenor tracking-[0.2em] leading-snug uppercase text-[#676A5E] space-y-1">
        <p>EMBRACE FRESHNESS WITH A</p>
        <p>CITRUSY TOUCH</p>
      </div>
       <div className="text-[24px] font-tenor tracking-wide lg:hidden block leading-normal uppercase text-[#676A5E] flex flex-col items-center">
       <p>Embrace the</p>   
         <p>Unembrace</p> 
         <p>Freshness With a</p>
         <p> Citrusy Touchseen</p>
          <p>Magic of Facial</p>
         <p>   Touchup</p>
        </div>
      <p className="text-[14px] lg:text-[16px] text-[#676A5E] font-archivo  lg:w-[100%] leading-relaxed">
        Experience the power of nature with Zia Herbal's curated wellness essentials. From facial care to daily hygiene, our products are thoughtfully crafted to refresh, nourish, and protect all while staying true to herbal traditions. From skincare to hand care, our range keeps you naturally nourished. Zia Herbal Neem Hand Wash is crafted with antibacterial Neem and refreshing lemon, tough on germs, gentle on hands. Say goodbye to dryness and hello to farm-fresh hygiene.
      </p>

      {/* Features */}
      <div className="flex justify-between text-[14px] lg:text-[16px] font-archivo text-[#676A5E] pt-4 ">
        <div className="text-center lg:flex lg:items-center lg:gap-4 lg:mb-20">
          <img src="images/drops.png" alt="Icon 1" className="mx-auto mb-2 w-12 h-12 lg:mb-0 lg:w-[75px] lg:h-[75px]" />
          <div className="lg:text-left">
            <p>Required Enamel</p>
            <p>Solutions</p>
          </div>
        </div>
        <div className="text-center lg:flex lg:items-center lg:gap-4 lg:mb-20">
          <img src="images/hold.png" alt="Icon 2" className="mx-auto mb-2 w-12 h-12 lg:mb-0 lg:w-[75px] lg:h-[75px]" />
          <div className="lg:text-left">
            <p>Stunning Solutions</p>
            <p>in Face</p>
          </div>
        </div>
        <div className="text-center lg:flex lg:items-center lg:gap-4 lg:mb-20">
          <img src="images/leaf.png" alt="Icon 3" className="mx-auto mb-2 w-12 h-12 lg:mb-0 lg:w-[75px] lg:h-[75px]" />
          <div className="lg:text-left">
            <p>Organic Natural</p>
            <p>Products</p>
          </div>
        </div>
      </div>

      {/* Button - should appear before reviews on desktop */}
      <div className="lg:flex lg:justify-between ">
         <div className="flex items-center justify-center lg:hidden block ">
        <img src="images/review.png" alt="Reviews" className="lg:max-w-[350px] lg:my-5 max-w-[300px] my-10" />
      </div>
      <div className="text-center lg:text-left font-tenor order-last lg:order-none">
        
        <button className="bg-black text-white px-6 py-3 rounded-full text-[14px] mt-5">
          More Details <span className="text-lg ml-3">→</span>
        </button>
      </div>

      {/* Reviews - Last on desktop */}
      <div className="flex items-center justify-center hidden lg:block ">
        <img src="images/review.png" alt="Reviews" className="lg:max-w-[350px] lg:my-5 max-w-[300px] my-10" />
      </div>
    </div>
</div>
    {/* Right Section - Product Image */}
    <div className="relative w-full  lg:w-[650px] ">
      
       <img
        src="images/bg_lemon.png"
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
    
   
    <div className="relative lg:w-1/2 ">
      <img
        src="images/girl.png"
        alt="Before and After"
        className="lg:z-10 relative lg:-top-80 lg:w-[850px] lg:h-[680px] lg:left-20"
      />
      <span className="absolute top-2/3 left-5 lg:top-1/3 lg:left-40 lg:z-10  transform -translate-y-1/2 text-white text-[22px]">Before</span>
      <span className="absolute top-2/3 right-5  lg:top-1/3 lg:right-20 lg:z-10 transform -translate-y-1/2 text-white text-[22px]">After</span>
    </div>

    {/* Right Side - Text Content on Green Background */}
    <div className="lg:w-1/2 w-full px-4 lg:px-6">
      {/* Heading */}
      <div className="lg:z-10 lg:-mt-[58%] lg:text-[32px] lg:tracking-[0.7rem] lg:text-[#676A5E] font-tenor text-[24px] tracking-widest leading-relaxed uppercase mb-6  lg:text-left text-center">
        <p>WON’T KILL YOU BUT</p>
        <p>YOU CAN MAKE THEM</p>
        <p>DISAPPEAR</p>
      </div>

      {/* Problem */}
      <div className="mb-6 lg:w-[70%] lg:mt-10">
        <h3 className="text-[24px] font-tenor text-left  tracking-widest mb-2">PROBLEM</h3>
        <p className="text-[16px] lg:text-[18px] leading-relaxed text-[#676A5E] text-left lg:text-white">
          Many skincare products promise glowing skin but contain harsh chemicals that can damage sensitive skin over time. There’s a need for natural, herbal solutions that safely promote skin brightness and radiance.
        </p>
      </div>

      {/* Solutions */}
      <div className="lg:w-[70%]">
        <h3 className="text-[24px] font-tenor tracking-widest  text-left mb-2">SOLUTIONS</h3>
        <ul className="list-decimal lg:text-[18px] list-inside space-y-3 text-[16px] text-[#676A5E] lg:text-white text-left">
          <li>Zia Herbal’s Radiance Boost Solution is carefully crafted to naturally brighten your skin and restore its healthy glow.</li>
          <li>Herbal-Powered Glow: Made with traditional herbs known to enhance skin radiance.</li>
          <li>Farm-Fresh Purity: Ingredients are directly sourced from our sustainable farmlands for maximum freshness and potency.</li>
          <li>Gentle & Effective: Free from harsh chemicals, perfect for daily use without skin irritation.</li>
          <li>Skin-Loving Formula: Designed to promote even skin tone, reduce dullness, and leave your skin visibly glowing.</li>
        </ul>
      </div>

      {/* Button */}
      <div className="mt-12 lg:text-left">
        <button className="px-6 py-3 bg-black text-white text-[14px] font-tenor rounded-full">
          See More <span className="text-lg ml-3">→</span>
        </button>
      </div>
    </div>
  </div>

  {/* Special Products Section */}
  <div className="bg-white px-4 py-16 lg:z-100  flex flex-col ">
    <div className="text-center mb-10 lg:mb-14 lg:-mt-[18%]">
      <h2 className="text-[32px] font-tenor lg:text-white uppercase tracking-widest text-[#676A5E] lg:flex lg:justify-center lg:gap-4">
        <p>Our Special</p>
        <p>Products</p>
      </h2>
    </div>

    <div className="flex flex-col lg:flex lg:flex-row lg:space-x-14 lg:justify-center space-y-8 lg:space-y-0 text-center">
      <img src="images/herbal-handwash.png" className="lg:w-[500px] lg:h-[370px]" />
      <img src="images/herbal-shampoo.png" className="lg:w-[500px] lg:h-[370px]" />
      <img src="images/herbal-soap.png" className="lg:w-[500px] lg:h-[370px]" />
    </div>
  </div>
</div>


     <div className="mx-auto px-4 lg:px-28 py-10 lg:mt-20 font-archivo">
  <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">

    {/* Left Side: Product + Badges */}
    <div className="flex flex-col lg:flex-row lg:w-1/2">

      {/* Packs Image with Peach Background */}
      <div className=" lg:w-2/3 ">
        <img
          src="images/packs.png"
          alt="Zia Herbal Face Pack"
          className="w-full lg:w-[560px]  h-auto object-contain"
        />
      </div>

      {/* ISO and Smile Images - Vertically stacked */}
      <div className="flex flex-row lg:flex-col justify-center items-center gap-6 lg:pl-6 mt-6 lg:mt-0">
        <img
          src="images/approved.png"
          alt="Certified"
          className=" h-auto lg:hidden"
        />
        <img
          src="images/iso.png"
          alt="Certified"
          className=" h-auto hidden lg:block mb-10"
        />
        <img
          src="images/smile.png"
          alt="Smiling Woman"
          className="h-auto  lg:w-[210px]"
        />
      </div>
    </div>

    {/* Right Side: Text Content */}
    <div className="lg:w-1/2 mt-10 lg:-mt-10">
      {/* Heading */}
      <div className="lg:flex hidden lg:block lg:flex-col  lg:text-[32px] text-left font-tenor text-[24px]  tracking-[0.2em] text-[#676A5E] uppercase mb-8">
        <p>Best Selling Aesthetician</p>
        <p>Skincare Brands</p>
      </div>
      <div className="lg:hidden block lg:gap-5 lg:text-[32px] text-left font-tenor text-[24px] leading-relaxed tracking-[0.2em] text-[#676A5E] uppercase mb-8">
        <p>Best Selling</p>
        <p>Aesthetician</p> 
        <p>Skincare Brands</p>
      </div>

      {/* Feature #1 */}
      <div className="flex items-start gap-4 lg:gap-8 text-left mb-6">
        <img src="images/ph.png" alt="pH icon" className=" mt-2" />
        <div>
          <h3 className="text-[20px] text-[#B2BA98] font-semibold mb-4">
            Premium Natural Ingredients
          </h3>
          <p className="text-[16px] lg:w-[75%] text-[#676A5E] leading-relaxed">
            Our Zia Herbal Face Pack is crafted using farm-fresh, 100% organic herbs. It
            naturally brightens the skin while nourishing it from within.
          </p>
        </div>
      </div>

      {/* Feature #2 */}
      <div className="flex items-start gap-4 lg:gap-8 text-left">
        <img src="images/spray.png" alt="Bottle icon" className=" mt-2" />
        <div>
          <h3 className="text-[20px] text-[#B2BA98] mb-4">
            High-quality Raw Materials
          </h3>
          <p className="text-[16px] lg:w-[75%] text-[#676A5E] leading-relaxed">
            Every ingredient is carefully selected from our sustainable farms to ensure
            purity, effectiveness, and the perfect skin-friendly formula.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center lg:text-left font-tenor mt-10">
        <button className="bg-black text-white px-6 py-3 rounded-full text-[14px]">
          See More <span className="text-lg ml-3">→</span>
        </button>
      </div>
    </div>
  </div>
</div>

    
    <div className="lg:mt-20 flex items-center justify-evenly tracking-widest space-x-4 text-[20px] lg:text-[40px] font-tenor  text-[#676A5E] mb-4">
  <div className="text-left leading-relaxed lg:flex ">
    <p>35% OFFER</p>
    <p>ON BEAUTY</p>
  </div>

  <img src="/images/Star1.png" alt="star" className="w-6 h-6" />

  <div className="text-left leading-relaxed  lg:flex">
    <p>25% OFF</p>
    <p>SHINE</p>
  </div>


 <img src="/images/Star1.png" alt="star" className="hidden lg:block w-6 h-6" />

  <div className="text-left leading-relaxed hidden lg:block  lg:flex">
    <p>25% OFF</p>
    <p>SHINE</p>
  </div>
</div>

    <CareCollectionsSection/>

    <div className="lg:mt-20  p-6 text-left lg:text-center mb-10">
  {/* Title */}
  <h2 className="text-[#686257] font-tenor text-[24px] lg:mb-20 lg:text-[32px] tracking-widest mb-10 uppercase">
    Customer Support Feedback
  </h2>

  {/* Testimonials Container */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap- lg:ml-40 lg:px-24 lg:mb-40">
    {/* Testimonial Card 1 */}
    <div className="flex flex-col   text-left lg:w-[70%]  items-left text-[#686257]">
      <img src="images/quotes.png" className="mb-4" />
      <p className="font-archivo text-[18px] leading-relaxed">
        Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo.
        Cras eget lorem nunc. Fusce nec urna tempus tempus
      </p>
      <div className="flex items-center justify-left mt-6 space-x-4 ">
        <img src="images/manager1.png" alt="User" className="w-10 h-10 rounded-full" />
        <p className="text-[16px] font-archivo">Jenifer Nisha - Manager</p>
      </div>
    </div>

    {/* Testimonial Card 2 */}
    <div className="flex hidden lg:block flex-col items-left text-left lg:w-[70%]  text-[#686257]">
      <img src="images/quotes.png" className="mb-4 " />
      <p className="font-archivo text-[18px] text-left leading-relaxed">
        Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo.
        Cras eget lorem nunc. Fusce nec urna tempus tempus
      </p>
      <div className="flex items-center mt-6 space-x-4">
        <img src="images/manager1.png" alt="User" className="w-10 h-10 rounded-full" />
        <p className="text-[16px] font-archivo">Jenifer Nisha - Manager</p>
      </div>
    </div>

    {/* Testimonial Card 3 */}
    <div className="flex hidden lg:block flex-col items-left text-left lg:w-[70%]   text-[#686257]">
      <img src="images/quotes.png" className="mb-4 " />
      <p className="font-archivo text-[18px] text-left leading-relaxed">
        Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo.
        Cras eget lorem nunc. Fusce nec urna tempus tempus
      </p>
      <div className="flex items-center mt-6 space-x-4">
        <img src="images/manager1.png" alt="User" className="w-10 h-10 rounded-full" />
        <p className="text-[16px] font-archivo">Jenifer Nisha - Manager</p>
      </div>
    </div>
  </div>
</div>


    <Footer/>
     </div>
  );
}
