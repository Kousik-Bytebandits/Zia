import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { GoArrowBoth, GoArrowDown, GoArrowRight } from "react-icons/go";
import Footer from "../components/Footer";

export default function ShopDetails() {
  const [timer, setTimer] = useState(3 * 24 * 60 * 60 + 14 * 60 * 60 + 35 * 60 + 23);
  const [count, setCount] = useState(1); 

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => Math.max(1, prev - 1));
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}D : ${hours.toString().padStart(2, '0')}hours : ${minutes.toString().padStart(2, '0')} Mins : ${secs.toString().padStart(2, '0')} Sec`;
  };

  const relatedProducts = Array(12).fill({
    name: "Good Mood + Sun Skin",
    image: "images/lemonwash.png",
    originalPrice: 450,
    salePrice: 400,
  });

  return (
    <div className="  font-archivo pt-10 text-[#676A5E]">
      <div className="flex flex-col   lg:mt-20 gap-6 lg:gap-0 lg:flex-row">
        <div className=" flex flex-row gap-2 lg:flex-col lg:w-1/2 justify-evenly items-center">
          <div className="    rounded-md flex ">
            <img src="/images/3shampoo.png" alt="Zia Herbal Shampoo" className="w-[185px] h-[200px] lg:w-[720px] lg:h-[700px] " />
          </div>
          <div className="flex flex-col gap-1 lg:flex-row lg:gap-4">
            <img src="/images/small1.png" alt="thumb1" className="w-[55px] h-[58px] lg:w-[225px] lg:h-[200px] " />
            <img src="/images/small2.png" alt="thumb2" className="w-[55px] h-[64px] lg:w-[225px] lg:h-[230px] lg:-mt-2 " />
            <img src="/images/small3.png" alt="thumb3" className="w-[55px] h-[58px] lg:w-[225px] lg:h-[200px] " />
          </div>
          <div className="flex flex-col gap-1 lg:flex-row lg:gap-5">
            <img src="/images/small4.png" alt="thumb4" className="w-[72px] h-[92px] lg:w-[310px] lg:h-[390px] " />
            <img src="/images/small5.png" alt="thumb5" className="w-[72px] h-[92px] lg:w-[370px] lg:h-[390px] " />
          </div>
          <div className="mt-4">
            <img src="images/herb-s.png" className="w-[700px] hidden lg:block"/>
          </div>
        </div>
       
       
       <div className=" lg:flex lg:flex-col lg:w-[45%] ">
        <div className="px-4 flex flex-row justify-between mt-8 lg:mt-0  text-[#252525] ">
          <h1 className="text-[22px] lg:text-[40px] lg:tracking-widest  text-[#676A5E]  font-tenor tracking-wider uppercase">Zia Herbal<br/> Hair Shampoo</h1>
          <div className="mt-1">
          <div className="flex  items-center justify-end gap-2 text-[#FCA502] text-sm lg:text-[16px]">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            
          </div>
              <p className="text-[#676A5E] tracking-wide text-[14px] lg:text-[16px]">(1 Customer review)</p>
              </div>
              </div>
               <hr className="border-[#B2BA98] w-[90%] lg:w-[95%] mx-auto mt-5 mb-5" />
          <div className="  p-4">
            <div className="flex items-center gap-6">
              <span className="text-[#FF1010] text-[20px] lg:text-[24px]">- 7%</span>
              <span className="line-through text-[20x] text-[#B2BA98] lg:text-[24px]">MRP: ₹320.00</span>
              <span className="text-[25px] font-bold text-black lg:text-[32px]">₹400</span>
            </div>
            <div className="text-[16px] tracking-wider mt-1 ">Inclusive of all takes</div>
            <div className="flex items-center gap-1 mt-4 lg:gap-6">
               <div className="flex border border-[#B2BA98] overflow-hidden">
      <button
        onClick={decrement}
        className="px-2 lg:px-4 lg:py-1 text-[18px] lg:text-[22px] border-r border-[#B2BA98]"
      >
        -
      </button>
      <div className="px-2 lg:px-4 lg:py-1 text-[18px] lg:text-[22px]">
        {count}
      </div>
      <button
        onClick={increment}
        className="px-2 lg:px-4 lg:py-1 text-[18px] lg:text-[22px] border-l border-[#B2BA98]"
      >
        +
      </button>
    </div>
              <button className="bg-[#2B452C] text-white px-3 py-2 lg:py-3 lg:px-6 rounded-full font-tenor text-sm lg:text-[16px]">Buy Now <GoArrowRight className="inline text-[18px] lg:text-[20px]"/></button>
              <button className="border border-[#2B452C] text-[#2B452C] px-3 py-2 lg:py-3 lg:px-6 rounded-full font-tenor text-sm lg:text-[16px]">Add To Cart <GoArrowRight className="inline text-[18px] lg:text-[20px] "/></button>
            </div>
         

          <div className=" text-[15px] lg:text-[18px] mt-2 py-4 lg:tracking-wide">
            Hurry up! Deals end up : <span className="text-[#FF2B2B] font-bold ml-2">{formatTime(timer)}</span>
          </div>
          <div className="text-[15px] lg:text-[18px] lg:tracking-wide">Worldwide Shipping in all order $200, Delivery in 2-5 working days Shipping & Return</div>
         </div>
      

      {/* Description Section */}
         <hr className="border-[#B2BA98] w-[90%] lg:w-[95%] mx-auto " />
      <div className="p-4   pt-8 text-[#676A5E] mb-20">
        <p className="text-[14px] mb-4 lg:tracking-wide lg:text-[18px] lg:w-[75%]">
          This 10k Bags Solded features four asymmetric organic hand-cut London Blue Topaz leathers that each have their own unique beauty style;
        </p>
        <p className="text-[14px] mb-5 lg:text-[18px] lg:tracking-wide ">
          Specifications:
          <ul className="list-disc mt-2 pl-5 space-y-2">
            <li>Vibrant blue hues. This unique button features London Blue Topaz stones size 1.1mm</li>
            <li>10 USA Blue Topaz Materials</li>
            <li>1k Leather Productions</li>
          </ul>
        </p>
        
        <div className=" py-4">
          <h2 className="text-[18px]  lg:text-[22px] font-tenor tracking-[0.2em] uppercase flex justify-between items-center">About Puff Jerkin <GoArrowRight className="text-[25px]  lg:hidden text-[#B2BA98]" /><GoArrowDown className="text-[25px] hidden lg:block text-[#B2BA98]"/></h2>
           <hr className="border-[#B2BA98] w-[100%] mx-auto mb-4 mt-5" />
          <ul className="list-disc pl-5 mt-2 text-[14px] lg:text-[18px] lg:tracking-wide space-y-2 ">
            <li>12K Solid Productions</li>
            <li>Design Systems</li>
            <li>Free shipping for orders $75.00 USD+</li>
            <li>1-year warranty</li>
            <li>30-day returns</li>
            <li>Sustainable practices</li>
          </ul>
        </div>

        <div className="py-4">
          <h2 className="text-[18px] lg:text-[22px] font-tenor tracking-[0.2em] uppercase flex justify-between items-center">Description <GoArrowRight className="text-[25px] lg:hidden text-[#B2BA98]"/><GoArrowDown className="text-[25px]  hidden lg:block text-[#B2BA98]"/></h2>
           <hr className="border-[#B2BA98] w-[100%] mx-auto mb-5 mt-5" />
          <p className="text-[14px] mt-2 lg:text-[18px] lg:tracking-wide">
            In mollis nunc sed id semper risus in hendrerit gravida. Porta nibh venenatis cras sed. Nunc sed velit dignissim sodales ut eu. Lobortis feugiat vivamus at augue eget. Phasellus egestas tellus rutrum tellus pellentesque. Sed risus ultricies tristique nulla aliquet enim tortor. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Odio facilisis mauris sit amet massa vitae. Interdum consectetur libero id faucibus nisl tincidunt. Euismod in pellentesque massa placerat. Ut sem viverra aliquet eget. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Eget arcu dictum varius duis. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est.
          </p>
        </div>

        <div className="mt-4 text-[14px] space-y-3 lg:text-[18px] lg:tracking-wide">
          <p><RiArrowLeftWideLine className="inline mr-2 text-[20px]" /> We target your business</p>
          <p><RiArrowLeftWideLine className="inline mr-2 text-[20px]" /> Focus on Puff Materials</p>
          <p><RiArrowLeftWideLine className="inline mr-2 text-[20px]" /> We target your business</p>
          <p><RiArrowLeftWideLine className="inline mr-2 text-[20px]" /> Focus on Certificate</p>
        </div>
        </div>
         </div>
         </div>
        {/* Related Products */}
         <div className=" py-4 lg:hidden">
          <h2 className="text-[18px] px-4 font-tenor tracking-[0.2em] uppercase flex justify-between items-center mb-5 ">Additional Details <GoArrowRight className="text-[25px] lg:hidden text-[#B2BA98]"/> </h2>
           <hr className="border-[#B2BA98] w-[92%] mx-auto mb-5 mt-5" />
        </div>
        <div className=" p-2 lg:p-28 mb-20">
        
          <h2 className="text-[18px] lg:text-[32px] font-tenor tracking-[0.3em] mb-10 uppercase flex justify-center items-center">Related Products</h2>
         <div className="grid grid-cols-2 lg:grid-cols-6 gap-4  gap-y-6 lg:gap-y-20 mt-4">
      {relatedProducts.map((product, i) => {
        
        const shouldHideOnMobile = i >= 4 ? "hidden lg:block" : "block";

        return (
          <div
            key={i}
            className={`bg-white rounded-xl  shadow-xl border border-[#D8DCCB] flex flex-col ${shouldHideOnMobile}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[110px] lg:h-[200px] object-contain p-2 lg:mt-4 lg:mb-3"
            />
            <div className="flex flex-col items-center text-center flex-grow justify-between">
              <h2 className="text-[16px] lg:text-[24px] font-medium leading-snug">{product.name}</h2>
              <img
                src="/images/stars-num.png"
                className="w-[95px] my-2 lg:my-0 lg:h-[22px] lg:w-[120px]"
                alt="rating"
              />
              <div className="font-semibold tracking-wide font-archivo mb-2">
                <span className="text-black text-[18px] lg:text-[28px]">₹{product.salePrice}</span>
              </div>
              <button
                onClick={() => alert("Added to Cart")}
                className="w-full bg-[#2B452C] text-white py-2 lg:py-4 rounded-b-xl text-[18px] lg:text-[24px] tracking-wider font-medium rounded-none"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
        </div>
     
      <Footer/>
    </div>
  );
}
