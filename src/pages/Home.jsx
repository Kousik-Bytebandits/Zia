import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlowCards from "./GlowCards";
import CareCollectionsSection from "./CareCollectionSection";

export default function Home() {
     const products = [
    {
      name: "Good Mood + Sun Skin",
      price: "₹ 400",
      
      image: "images/b5.png", 
    },
    {
      name: "Good Mood + Sun Skin",
      price: "₹ 400",
      
      image: "images/vc.png",
    },
    {
      name: "Body Massage Oil",
      price: "₹ 400",
      
      image: "images/oil.png",
    },
    {
      name: "Beetroot & Rose Lip Balm",
      price: "₹ 400",
      
      image: "images/lipbalm.png",
    },
     {
      name: "Herbal Face Pack",
      price: "₹ 400",
      
      image: "images/facepack.png",
    },
  ];
  return (
    <div className="w-full bg-white text-center font-sans">
      <Navbar/>
      <section className="px-2 pt-10">
        <h1 className="text-[24px] tracking-[0.2em] font-tenor font-medium text-[#333333]  mb-4">
          NATURE’S TOUCH,
          <br />
          BOTTLED WITH CARE
        </h1>
        <p className="text-[14px] font-archivo text-[#9D9C9C] max-w-[80%] mx-auto mb-6 text-center">
          Zia Herbal brings you a range of 100% natural, farm-fresh skincare and wellness products crafted using traditional herbs and modern purity standards. Our products are handcrafted with ingredients sourced directly from our sustainable farmlands, ensuring nature’s finest reaches your skin.
        </p>
       
        <div className="flex justify-around  mb-8 font-tenor">
          <button className="bg-black text-white text-[14px] px-5 py-2 rounded-full flex items-center gap-2">
            Shop Now <span className="text-lg ml-2">→</span>
          </button>
          <button className="border text-[#2B452C] border-[#2B452C] text-[14px] px-5 py-2 rounded-full flex items-center gap-2">
            Explore <span className="text-lg ml-2 text-[#2B452C]">→</span>
          </button>
        </div>
      </section>

      
      <section className="relative w-full ">
        <img
          src="images/zia_shampoo_bg.png"
          alt="Zia Herbal Products"
          className="mx-auto w-[100%]"
        />
        
      </section>

     
      <section className="relative  py-5 flex items-center justify-between">
        <img
          src="images/serum.png"
          alt="Packshot"
          className="w-[55%] "
        />
        <div className="text-[16px] mt-5 font-tenor text-[#676A5E] tracking-widest flex items-center justify-center w-[40%] h-full  ">
          NEXT <span className="inline-block ml-3 -mt-1 text-2xl">→</span>
        </div>
      </section>

      <div className="px-6 mt-10 mb-10 space-y-5 text-left">
  {/* Tall Box */}
  <div className="bg-[#D4480C] font-tenor text-white p-10 min-h-[400px] rounded-xl flex flex-col justify-between">
    <h2 className="text-[42px] border-b pb-3 ">38<span className=" ml-1">+</span></h2>
    <p className="text-[24px] w-[60%] -mt-16 tracking-widest">YEARS IN BUSINESS</p>
    <p className="text-[16px]  font-archivo tracking-wide ">
     Creation timelines for the standard lorem ipsum passage vary, with some citing.
    </p>
  </div>

  {/* Short Box */}
  <div className="bg-[#2B452C]   font-tenor text-white p-10 min-h-[270px] rounded-xl flex flex-col justify-evenly">
    <h2 className="text-[42px] border-b pb-3 ">10<span className=" ml-1">+</span></h2>
    <p className="text-[26px] w-[60%] tracking-widest">COSMETIC AWARDS</p>
  </div>

  {/* Tall Box */}
  <div className="bg-[#151D10] font-tenor text-white p-10 min-h-[400px] rounded-xl flex flex-col justify-between">
    <h2 className="text-[42px] border-b pb-3 ">750<span className=" ml-1">+</span></h2>
    <p className="text-[24px] w-[60%] -mt-16 tracking-widest">PRODUCTS LAUNCHED</p>
    <p className="text-[16px] font-archivo tracking-wide">
      Standard reation timelines for the standard lorem ipsum passage vary, with some citing.
    </p>
  </div>

  {/* Short Box */}
  <div className="bg-[#F6A903] font-tenor text-white p-10 min-h-[270px] rounded-xl flex flex-col justify-evenly">
    <h2 className="text-[42px] border-b pb-3 ">25<span className=" ml-1">+</span></h2>
    <p className="text-[26px] w-[60%] tracking-widest">ORGANIC PRODUCTS</p>
  </div>

  {/* Trust Text & Ratings */}
  <div className="text-left pt-6">
    <p className="text-[24px] uppercase tracking-widest w-[95%] text-[#676A5E] font-tenor">
      Trusted by over 250,000+ clients worldwide since 2000
    </p>
    <p className="text-[16px] text-[#676A5E] font-archivo mt-8">
      Rooted in tradition, trusted for purity .<br/>
Zia Herbal is redefining natural care, one product at a time.
    </p>
    <div className="flex text-[#676A5E] font-tenor  gap-10 mt-16 mb-10">
      <div className="border-r-2 pr-8 border-[#B2BA98]">
        <h3 className="text-[50px] ">6<span className="mx-2">M</span>+</h3>
        <img src="images/stars.png" className="mb-4"></img>
        <p className="text-[16px] font-archivo">Worldwide Products<br/>
Sale Per Year</p>
      </div>
      <div>
        <h3 className="text-[50px]">4<span className="mx-2">.</span>8</h3>
        <img src="images/stars.png" className="mb-4"></img>
        <p className="text-[16px] font-archivo">2564+ Ratingsa<br/>
World Wide</p>
      </div>
    </div>
    <button className="mt-4 bg-black font-tenor text-white text-[16px] px-5 py-3 rounded-full">
      More Details  <span className="ml-3 text-lg">→</span>
    </button>
  </div>
</div>
<div className="bg-[#2f3a27] h-[100px] flex items-center justify-center">
    <img src="images/BrandMarque.png" className="object-cover  h-[50%] py- "></img>
    </div>
      <div className="px-4 py-10">
      <div className="text-center ">
        <h2 className="text-[32px] font-tenor tracking-[0.3em] text-[#676A5E] ">TRENDING</h2>
        <h2 className="text-[32px] font-tenor tracking-[0.3em] text-[#676A5E] mb-5">ITEMS</h2>
        <p className="text-[16px] text-[#676A5E] w-[80%] mb-5 font-archivo mx-auto">
          Discover our most-loved herbal essentials from refreshing Neem hand sanitizers
          to nourishing beetroot lip balms. Experience nature’s bestsellers, crafted to care.
        </p>
        <button className="mt-2 mb-5 px-6 py-3 bg-black text-white rounded-full text-[14px] font-tenor">
          All Products<span className="text-xl ml-3">→</span> 
        </button>
      </div>

      {/* Scrollable Product Row */}
      <div className="mt-10 overflow-x-auto scrollbar-none">
        <div className="flex space-x-5 w-max">
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[270px] h-[360px] font-archivo bg-white border-2 border-[#D8DCCB] rounded-xl overflow-hidden shadow-sm"
            >
              <div className="p-4 flex flex-col items-center">
                <img src={product.image} alt={product.name} className="h-36 object-contain mb-2" />
                <h3 className="text-center text-[24px]  text-[#676A5E] mt-2">{product.name}</h3>
                <img src="images/stars-num.png"></img>
                <div className="text-[28px] font-bold mt-1 mb-2">{product.price}</div>
              </div>
              <button className="w-full bg-[#2B452C] border border-[#2B452C] text-white py-2 text-[24px] ">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

     <div className="max-w-md mx-auto px-4 py-10 space-y-8">
      {/* Top Image */}
      <div className="overflow-hidden ">
        <img
          src="images/handwash.png" // Replace with your image
          alt="Product Highlight"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title & Description */}
      <div className="text-center space-y-4">
        <p className="text-[16px] font-archivo text-[#676A5E] ">Special Products</p>
        <div className="text-[24px] font-tenor tracking-widest leading-normal uppercase text-[#676A5E] flex flex-col items-center">
       <p>Embrace the</p>   
         <p>Unembrace</p> 
         <p>Freshness With a</p>
         <p> Citrusy Touchseen</p>
          <p>Magic of Facial</p>
         <p>   Touchup</p>
        </div>
        <p className="text-[12px] text-[#676A5E] font-archivo leading-relaxed">
          Experience the power of nature with Zia Herbal's curated wellness essentials. From facial care to daily hygiene, our products are thoughtfully crafted to refresh, nourish, and protect all while staying true to herbal traditions. From skincare to hand care, our range keeps you naturally nourished. Zia Herbal Neem Hand Wash is crafted with antibacterial Neem and refreshing lemon, tough on germs, gentle on hands. Say goodbye to dryness and hello to farm-fresh hygiene.
        </p>
      </div>

      {/* Features Section */}
      <div className="flex justify-between text-center text-[16px] font-archivo text-[#676A5E]">
        <div className="">
          <img src="images/drops.png" alt="Icon 1" className="mx-auto  mb-2" />
          <p className="">Required</p>
          <p> Enamel </p>
          <p>Solutions</p>
        </div>
        <div className="">
          <img src="images/hold.png" alt="Icon 2" className="mx-auto  mb-2" />
          <p className="">Stunning </p>
          <p>Solutions</p>
          <p >in Face</p> 
        </div>
        <div className="">
          <img src="images/leaf.png" alt="Icon 3" className="mx-auto  mb-2" />
          <p className="">Organic</p>
          <p>Natural</p> 
          <p>  Products</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex items-center justify-between">
        <img src="images/review.png"></img>
      </div>

      {/* Button */}
      <div className="text-center font-tenor">
        <button className="bg-black text-white px-6 py-3 rounded-full text-[14px]">
          More Details <span className="text-lg ml-3">→</span>
        </button>
      </div>
    </div>

    <GlowCards/>

     <div className="max-w-md mx-auto  py-10 space-y-6 font-archivo">
      {/* Image */}
      <div className="relative">
        <img
          src="images/girl.png"
          alt="Before and After"
          className="w-full mb-16"
        />
        <span className="absolute top-2/3 left-5 transform -translate-y-1/2 text-white text-[22px] ">Before</span>
        <span className="absolute top-2/3 right-5 transform -translate-y-1/2 text-white text-[22px] ">After</span>
       
      </div>

      {/* Heading */}
      <div className="text-center  font-tenor text-[24px] tracking-widest leading-relaxed text-[#676A5E] uppercase">
      <p> WON’T KILL YOU BUT </p> 
       <p>YOU CAN MAKE THEM </p>  
       <p> DISAPPEAR</p>  
      </div>

      {/* Problem */}
      <div className="px-4 text-left">
        <h3 className="text-[24px] font-tenor text-[#676A5E] tracking-widest mb-1">
          PROBLEM
        </h3>
        <p className="text-[16px] font-archivo text-[#676A5E] leading-relaxed">
          Many skincare products promise glowing skin but contain harsh chemicals that can damage sensitive skin over time. There’s a need for natural, herbal solutions that safely promote skin brightness and radiance.
        </p>
      </div>

      {/* Solutions */}
      <div className="px-4 text-left ">
        <h3 className="text-[24px] font-tenor text-[#676A5E] tracking-widest mb-2">
          SOLUTIONS
        </h3>
        <ul className="text-[16px] font-archivo text-[#676A5E] space-y-3  list-decimal list-inside">
          <li>
            Zia Herbal’s Radiance Boost Solution is carefully crafted to naturally brighten your skin and restore its healthy glow.
          </li>
          <li>
            Herbal-Powered Glow: Made with traditional herbs known to enhance skin radiance.
          </li>
          <li>
            Farm-Fresh Purity: Ingredients are directly sourced from our sustainable farmlands for maximum freshness and potency.
          </li>
          <li>
            Gentle & Effective: Free from harsh chemicals, perfect for daily use without skin irritation.
          </li>
          <li>
            Skin-Loving Formula: Designed to promote even skin tone, reduce dullness, and leave your skin visibly glowing.
          </li>
        </ul>
      </div>

      {/* Button */}
      <div className="text-center ">
        <button className="mt-8 px-6 py-3 bg-black text-white text-[14px] font-tenor rounded-full">
          See More <span className="text-lg ml-3">→</span>
        </button>
      </div>
    </div>

    <div className="px-4 py-10 flex flex-col items-center space-y-6">
    <div className="text-[32px] font-tenor uppercase tracking-widest text-[#676A5E] mb-6">
  <p> Our Special</p>  
      <p> Products</p>     
      </div>
      <div className="space-y-8 text-center mb-6 ">
        <img src="images/herbal-handwash.png"></img>
        <img src="images/herbal-shampoo.png"></img>
        <img src="images/herbal-soap.png"></img>
        </div>
    </div>

     <div className=" mx-auto px-4 py-10 font-archivo">
      {/* Top Product Image */}
      <img
        src="images/packs.png"
        alt="Zia Herbal Face Pack"
        className="w-full rounded-lg"
      />

      {/* USDA Badge and Face Image */}
      <div className="flex justify-around items-center ">
        <img
          src="images/approved.png"
          alt="USDA Organic"
          className=" object-contain  "
        />
        <img
          src="images/smile.png"
          alt="Smiling Woman"
          className="mt-10 mb-12"
        />
      </div>

      {/* Heading */}
      <div className="text-left  font-tenor text-[24px] leading-relaxed tracking-widest text-[#676A5E] uppercase">
       <p> BEST SELLING </p>
      <p> AESTHETICIAN </p> 
      <p>SHINECARE BRANDS</p>  
      </div>

      {/* Feature #1 */}
      <div className="flex items-start gap-4 text-left mb-5 mt-8">
        <img src="images/ph.png" alt="pH icon" className="mt-10" />
        <div>
          <h3 className="text-[20px] text-[#B2BA98] font-semibold mb-3">
            Premium Natural Ingredients
          </h3>
          <p className="text-[16px] text-[#676A5E] leading-relaxed">
            Our Zia Herbal Face Pack is crafted using farm-fresh, 100% organic herbs. It
            naturally brightens the skin while nourishing it from within.
          </p>
        </div>
      </div>

      {/* Feature #2 */}
      <div className="flex items-start gap-4 text-left">
        <img src="images/spray.png" alt="Bottle icon" className="mt-10" />
        <div>
          <h3 className="text-[20px] text-[#B2BA98] mb-3 ">
            High-quality Raw Materials
          </h3>
          <p className="text-[16px] text-[#676A5E] leading-relaxed">
            Every ingredient is carefully selected from our sustainable farms to ensure
            purity, effectiveness, and the perfect skin-friendly formula.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center font-tenor mt-10">
        <button className="bg-black text-white px-6 py-3 rounded-full text-[14px]">
          See More <span className="text-lg ml-3">→</span>
        </button>
      </div>
    </div>
    
    <div className="flex items-center justify-evenly tracking-widest space-x-4 text-[20px] font-tenor  text-[#676A5E] mb-4">
  <div className="text-left leading-relaxed">
    <div>35% OFFER</div>
    <div>ON BEAUTY</div>
  </div>

  <img src="/images/Star1.png" alt="star" className="w-6 h-6" />

  <div className="text-left leading-relaxed">
    <div>25% OFF</div>
    <div>SHINE</div>
  </div>
</div>

    <CareCollectionsSection/>

    <div className="text-left mx-auto p-6 bg-white rounded-md">
  {/* Title */}
  <h2 className="text-[#686257] font-tenor text-[24px] tracking-widest mb-8">
    CUSTOMER SUPPORT FEEDBACK
  </h2>

  {/* Quote Section */}
  <div className="mb-8">
    <img src="images/quotes.png"></img>
  </div>

  {/* Quote Text */}
  <p className="mt-4 text-[#686257] font-archivo text-[20px] ">
    Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo. Cras eget lorem nunc. 
    Fusce nec urna tempus tempus
  </p>

  {/* Author */}
  <div className="flex items-center mt-10 space-x-5 mb-12">
    <img
      src="images/manager1.png"
      alt="User"
      className="w-10 h-10 rounded-full"
    />
    <p className="text-[16px] font-archivo text-[#686257]">
      Jenifer Nisha - Manager
    </p>
  </div>
</div>

    <Footer/>
     </div>
  );
}
