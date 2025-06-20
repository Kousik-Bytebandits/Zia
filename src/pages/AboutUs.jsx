import Footer from "../components/Footer";


export default function AboutUs(){
        return(
            <>
             <div className="pt-10 p-4 space-y-4 text-center lg:text-left lg:max-w-[45%]">
      <p className="text-[16px] font-archivo text-[#676A5E]">Special Products</p>
      <div className="text-[32px] hidden  lg:block font-tenor tracking-[0.2em] leading-snug uppercase text-[#676A5E] space-y-1">
        <p>EMBRACE FRESHNESS WITH A</p>
        <p>CITRUSY TOUCH</p>
      </div>
       <div className="text-[24px]  font-tenor tracking-widest lg:hidden block leading-normal uppercase text-[#676A5E] flex flex-col items-center">
       <p> Embrace the</p>   
         <p> Unembrace</p> 
         <p> Freshness With a</p>
         <p> Citrusy Touchseen</p>
          <p> Magic of Facial</p>
         <p>  Touchup</p>
        </div>
      <p className="text-[14px] lg:text-[16px] text-[#676A5E] font-archivo  lg:w-[100%] leading-relaxed">
        Experience the power of nature with Zia Herbal's curated wellness essentials. From facial care to daily hygiene, our products are thoughtfully crafted to refresh, nourish, and protect all while staying true to herbal traditions. From skincare to hand care, our range keeps you naturally nourished. Zia Herbal Neem Hand Wash is crafted with antibacterial Neem and refreshing lemon, tough on germs, gentle on hands. Say goodbye to dryness and hello to farm-fresh hygiene.
      </p>

     
      <div className="flex justify-between text-[14px] lg:text-[16px] font-archivo text-[#676A5E] pt-4 ">
        <div className="text-center lg:flex lg:items-center lg:gap-4 lg:mb-20">
          <img src="images/drops.png" alt="Icon 1" className="mx-auto mb-2 w-16 h-16 lg:mb-0 lg:w-[75px] lg:h-[75px]" />
          <div className="lg:text-left">
            <p>Required Enamel</p>
            <p>Solutions</p>
          </div>
        </div>
        <div className="text-center lg:flex lg:items-center lg:gap-4 lg:mb-20">
          <img src="images/hold.png" alt="Icon 2" className="mx-auto mb-2 w-16 h-16 lg:mb-0 lg:w-[75px] lg:h-[75px]" />
          <div className="lg:text-left">
            <p>Stunning Solutions</p>
            <p>in Face</p>
          </div>
        </div>
        <div className="text-center lg:flex lg:items-center lg:gap-4 lg:mb-20">
          <img src="images/leaf.png" alt="Icon 3" className="mx-auto mb-2 w-16 h-16 lg:mb-0 lg:w-[75px] lg:h-[75px]" />
          <div className="lg:text-left">
            <p>Organic Natural</p>
            <p>Products</p>
          </div>
        </div>
      </div>

     
      <div className="lg:flex lg:justify-between ">
         <div className="flex items-center justify-center lg:hidden block ">
        <img src="images/review.png" alt="Reviews" className="lg:max-w-[350px] lg:my-5 max-w-[300px] my-10" />
      </div>
      <div className="text-center lg:text-left font-tenor order-last lg:order-none">
        
        <button className="bg-black text-white px-6 py-3 rounded-full text-[14px] mt-5">
          More Details <span className="text-lg ml-3">→</span>
        </button>
      </div>

     
      <div className="flex items-center justify-center hidden lg:block ">
        <img src="images/review.png" alt="Reviews" className="lg:max-w-[350px] lg:my-5 max-w-[300px] my-10" />
      </div>
    </div>

     <div className="overflow-hidden ">
        <img
          src="images/handwash.png" 
          alt="Product Highlight "
          className="w-full mb-10 mt-10 lg:hidden block"
        />
      </div>

       <div className="font-tenor text-center text-[#676A5E] px- py-8   mx-auto">
     
      <h2 className="text-[20px] tracking-[0.2em] font-medium  mb-4 uppercase">
        CARE COLLECTIONS
      </h2>

     
      <p className="text-[16px]  mb-6 font-archivo">
        Creation timelines for the standard lorem ipsum passage vary, with some
        citing the 15th century and others the 20th. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
        pellentesque.
      </p>

     
      <h3 className="text-[18px] tracking-[0.1em] uppercase text-[#5E5E5E] leading-relaxed mb-6">
        Our Philosophy Revolves<br />
        The Idea That Each<br />
        Individual<br />
        Uniqu Products
      </h3>

     
      <div className="w-full max-w-[200px] mx-auto mb-6">
        <img
          src="/images/massageoil.png" 
          alt="Zija Body Massage Oil"
          className="w-full rounded-md"
        />
      </div>

     
      <button className="bg-black text-white px-6 py-3 rounded-full text-[14px] mt-4">
          More Details <span className="text-lg ml-3">→</span>
        </button>
    </div>
    
    <div className=" w-full  lg:px-6 text-[#676A5E]">
         <div className="relative mb-20 font-archivo">
      <img
        src="images/face.png"
        alt="Before and After"
        className="lg:z-10 relative lg:-top-80 lg:w-[850px] lg:h-[680px] lg:left-20"
      />
      <span className="absolute top-2/3 left-5 lg:top-1/3 lg:left-40 lg:z-10  transform -translate-y-1/2 text-[#4B4B4B] text-[22px]">Before</span>
      <span className="absolute top-2/3 right-5  lg:top-1/3 lg:right-20 lg:z-10 transform -translate-y-1/2 text-[#4B4B4B] text-[22px]">After</span>
    </div>

     
      <div className="lg:z-10 lg:-mt-[58%] lg:text-[32px] lg:tracking-[0.7rem] lg:text-[#676A5E] font-tenor text-[24px] tracking-widest leading-relaxed uppercase mb-6  lg:text-left text-center">
        <p>WON’T KILL YOU BUT</p>
        <p>YOU CAN MAKE THEM</p>
        <p>DISAPPEAR</p>
      </div>

     
      <div className="mb-6 lg:w-[70%] lg:mt-10 px-2">
        <h3 className="text-[24px] font-tenor text-left  tracking-widest mb-2">PROBLEM</h3>
        <p className="text-[16px] font-archivo lg:text-[18px] leading-relaxed text-[#676A5E] text-left lg:text-white">
          Many skincare products promise glowing skin but contain harsh chemicals that can damage sensitive skin over time. There’s a need for natural, herbal solutions that safely promote skin brightness and radiance.
        </p>
      </div>

      
      <div className="lg:w-[70%] px-2">
        <h3 className="text-[24px] font-tenor tracking-widest  text-left mb-2">SOLUTIONS</h3>
        <ul className="list-decimal font-archivo lg:text-[18px] list-inside space-y-3 text-[16px] text-[#676A5E] lg:text-white text-left">
          <li>Zia Herbal’s Radiance Boost Solution is carefully crafted to naturally brighten your skin and restore its healthy glow.</li>
          <li>Herbal-Powered Glow: Made with traditional herbs known to enhance skin radiance.</li>
          <li>Farm-Fresh Purity: Ingredients are directly sourced from our sustainable farmlands for maximum freshness and potency.</li>
          <li>Gentle & Effective: Free from harsh chemicals, perfect for daily use without skin irritation.</li>
          <li>Skin-Loving Formula: Designed to promote even skin tone, reduce dullness, and leave your skin visibly glowing.</li>
        </ul>
      </div>

      
      <div className="mt-12 lg:text-left">
        <button className="px-6 py-3 bg-black text-white text-[14px] font-tenor rounded-full">
          See More <span className="text-lg ml-3">→</span>
        </button>
      </div>
    </div>
  </div>

 
  <div className="bg-white px-4 py-16 lg:z-100  flex flex-col ">
    <div className="text-center mb-10 lg:mb-14 lg:-mt-[18%]">
      <h2 className="text-[32px] font-tenor lg:text-white uppercase tracking-widest text-[#676A5E] lg:flex lg:justify-center lg:gap-4">
        <p>Our Special</p>
        <p>Products</p>
      </h2>
    </div>
<div className="flex flex-col lg:flex-row lg:space-x-14 lg:justify-center space-y-8 lg:space-y-0 text-center">
  {[
    { src: "images/herbal-handwash.png", label: "Herbal Handwash" },
    { src: "images/herbal-shampoo.png", label: "Herbal Shampoo" },
    { src: "images/herbal-soap.png", label: "Herbal Soap" },
  ].map((item, index) => (
    <div key={index} className="relative lg:w-[500px] lg:h-[340px]">
      <img
        src={item.src}
        alt={item.label}
        className="w-full h-full "
      />
      <div className="backdrop-blur-sm tracking-widest  font-tenor uppercase w-full absolute bottom-0 lg:py-4  py-2 left-1/2 transform -translate-x-1/2 bg-white/70  text-[#1F1F1F] text-[24px]  ">
        {item.label}
      </div>
    </div>
  ))}
</div>
</div>
 <div className="lg:mt-20  p-4 text-left lg:text-center mb-16">
 
  <h2 className="text-[#686257] font-tenor text-[24px] lg:mb-20 lg:text-[32px] tracking-widest mb-10 uppercase">
    Customer Support Feedback
  </h2>

  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap- lg:ml-40 lg:px-24 lg:mb-40">
   
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
    </div>
 </div>

<Footer/>
 </>
        );
}