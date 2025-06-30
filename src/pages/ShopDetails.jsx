import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import { GoArrowDown, GoArrowRight } from "react-icons/go";
const images = [
  "/images/shampoo1.png",
  "/images/shampoo2.png",
  "/images/shampoo3.png",
  "/images/shampoo4.png",
  "/images/shampoo5.png",
];

export default function ShopDetails() {
  const [currentIndex, setCurrentIndex] = useState(2); // Middle image
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 35, seconds: 23 });
  const [openSections, setOpenSections] = useState({
    specifications: false,
    usage: false,
    ingredients: false,
    features: false,
  });

  const touchStartX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--; seconds = 59;
        } else if (hours > 0) {
          hours--; minutes = 59; seconds = 59;
        } else if (days > 0) {
          days--; hours = 23; minutes = 59; seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - touchStartX.current;
    if (deltaX > 50 && currentIndex > 0) setCurrentIndex((prev) => prev - 1);
    else if (deltaX < -50 && currentIndex < images.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
        <div className="p-4 py-10 max-w-lg mx-auto font-archivo">
      {/* Header */}
      <div className="flex items-start px-4">
        <h1 className="tracking-wide  text-[28px] text-[#676A5E]">ZIA HERBAL HAIR SHAMPOO</h1>
        <div className="flex items-center gap-1 mt-3 text-[12px] text-[#676A5E] ">
          <span>5.0</span>
          <img src="/images/5star.png" alt="star" className="" />
          <span className="text-[#676A5E] mr-2">(10)</span>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative my-8">
        <div
          className="overflow-hidden rounded-lg relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentIndex]}
            alt="Product"
            className="w-[380px] mx-auto h-auto object-contain transition-all duration-500"
          /> 
          {currentIndex === 2 && (
            <div className="absolute top-4 left-4 bg-[#C50000] text-white text-[14px] w-14 h-14 flex text-center items-center justify-center font-semibold rounded-full">
              28% <br/> Off
            </div>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center mt-6 gap-2">
          {images.map((_, i) => {
            const isSelected = i === currentIndex;
            const isAdjacent = Math.abs(i - currentIndex) === 1;
            const sizeClass = isSelected ? 'w-3 h-3' : isAdjacent ? 'w-3 h-3' : 'w-2 h-2';
            const bgColor = isSelected ? 'bg-black' : 'bg-[#9A9A9A]';
            return (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`rounded-full border-2 transition-all ${sizeClass} ${bgColor} ${bgColor === 'bg-black' ? 'border-black' : 'border-gray-400'}`}
              />
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-[#B2BA98]" />

      {/* Price + Delivery */}
      <div className="bg-[#FBFFFB] border border-black rounded-lg p-4 space-y-3">
        <p className="text-[20px] tracking-wide font-semibold text-black">Free and Fast Delivery</p>
        <p className="text-[#FF1010] text-[42px] mx-2 tracking-wide">-28% <span className="text-[#151515] font-bold ml-2"> ₹400</span> </p>
        <p className="text-[#757878] line-through text-[18px]">M.R.P: ₹320.00</p>
        <p className="text-[18px] text-[#757878]">Inclusive of all taxes</p>
        <p className="text-[18px] text-black">Use by: 31 AUG 2027</p>

        <p className="text-[18px] ">
          Hurry up! Deals end up in:
          <span className="text-[#FF0606] ml-2 font-semibold">
            {`${timeLeft.days}D : ${String(timeLeft.hours).padStart(2, '0')}H : ${String(timeLeft.minutes).padStart(2, '0')}Min : ${String(timeLeft.seconds).padStart(2, '0')}Sec`}
          </span>
        </p>

        <p className="text-[#08650B] text-[20px] font-bold  ">In Stock</p>
<div className="flex items-center bg-[#F0F2F2] w-[28%] border border-black  mt-2 gap-1 rounded-full px-4 py-1">
  <label htmlFor="qty" className="text-[18px] text-[#151515] ">
    Qty:
  </label>
  <select
    id="qty"
    className="bg-[#F0F2F2]   text-[18px] text-[#151515]  "
  >
    {[1, 2, 3, 4, 5].map((q) => (
      <option key={q} value={q}>
        {q}
      </option>
    ))}
  </select>
</div>

      </div>

      {/* Buttons */}
      <button className="mt-4 w-full py-2 tracking-wide border border-[#2F3A27] bg-[#AEBCA466] rounded-full text-[#2F3A27] text-[18px] font-semibold">
        Buy Now
      </button>
      <button className="mt-2 w-full py-2 tracking-wide rounded-full bg-[#2F3A27] border border-black text-white font-semibold text-[18px] ">
        Add to Cart
      </button>

       <hr className="my-8 border-[#B2BA98]" />

      {/* Product Details */}
      <div className="mt-6">
        <h2 className="text-[20px] tracking-wide font-semibold mb-2">Product Details:</h2>

        {/* Description */}
        <div className="text-[16px]  text-[#2B452C] space-y-2 mb-4">
          <p className="text-[18px] uppercase">
           Description
          </p>
          <ul className="list-disc ml-5">
            <li> Zia Herbal Hair Shampoo is a gentle yet effective herbal cleanser infused with time-honoured Ayurvedic ingredients known for their hair-strengthening and scalp-nourishing properties.</li>
            <li>This unique formula removes dirt, excess oil, and impurities without stripping away natural moisture, leaving your hair clean, soft, and vibrant.</li>
            <li>Enriched with Aloe Vera, Hibiscus, Amla, Neem, and Bhringraj, this shampoo deeply hydrates, enhances hair texture, and promotes natural shine.</li>
            <li>Its antibacterial and anti-inflammatory properties soothe the scalp, preventing dandruff and irritation.</li>
            <li>Regular use results in stronger, healthier, and more manageable hair.</li>
          </ul>
        </div>

        {/* Collapsible Sections */}
        {[
          {
            key: "specifications",
            label: "PRODUCT SPECIFICATIONS",
           content: (
  <div className="overflow-x-auto text-[#2B452C]">
    <table className="w-full text-[16px] text-left border border-[#B2BA98]">
      <tbody>
        {[
          ["Item Length", "5.5 cm"],
          ["Item Width", "5.5 cm"],
          ["Item Height", "12.5 cm"],
          ["Package Length", "6 cm"],
          ["Package Width", "6 cm"],
          ["Package Height", "15.5 cm"],
          ["Package Weight", "340 ml"]
        ].map(([label, value], idx) => (
          <tr key={idx} className="border-b border-[#B2BA98]">
            <td className="px-3 py-2 font-medium border-r border-[#B2BA98] w-1/2">{label}</td>
            <td className="px-3 py-2">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
          },
          {
            key: "usage",
            label: "HOW TO USE",
            content: (
              <ul className="text-[16px] text-[#2B452C] list-disc ml-5">
                <li>Wet your hair thoroughly.</li>
                <li>Take a sufficient amount of Zia Herbal Hair Shampoo and apply it to the scalp and hair.</li>
                <li> Gently massage for a few minutes, working up a rich lather.</li>
                <li> Rinse thoroughly with lukewarm water.</li>
                <li> For best results, follow up with Zia Herbal Hair Oil for deep nourishment.</li>
              </ul>
            )
          },
          {
            key: "ingredients",
            label: "INGREDIENTS",
            content: (
              <ul className="text-[16px] text-[#2B452C] list-disc ml-5">
                <li> Aloe Vera – Hydrates and repairs damaged hair, reducing frizz and dryness.</li>
                <li> Hibiscus – Strengthens roots, adds volume, and enhances natural shine.</li>
                <li> Neem & Tulsi – Detoxifies the scalp, prevents dandruff, and soothes irritation.</li>
                <li>Amla (Indian Gooseberry) – Rich in Vitamin C to promote hair growth and prevent premature graying</li>
                <li> Bhringraj – Revitalizes hair follicles, reduces hair fall, and nourishes the scalp.</li>
            <li> Shikakai & Reetha – Natural cleansers that gently wash away impurities while keeping hair soft and manageable.</li>
            <li> Fenugreek & Brahmi – Strengthen hair from the roots, preventing thinning and hair loss.</li>
              </ul>
            )
          },
          {
            key: "features",
            label: "FEATURES",
            content: (
              <ul className="text-[16px] text-[#2B452C] list-disc ml-5 ">
                <li> 100% Natural Formula – A powerful blend of herbal extracts and essential nutrients to gently cleanse and revitalize hair.</li>
                <li> Strengthens Hair & Reduces Breakage – Fortifies hair strands, prevents split ends, and minimizes hair fall.</li>
                <li> Promotes Hair Growth – Stimulates the scalp, nourishes roots, and encourages healthier hair growth.</li>
                <li>Soothes Scalp & Controls Dandruff – Fights dryness, flakiness, and itchiness while maintaining scalp balance.</li>
                <li> No Harsh Chemicals – Free from sulfates, parabens, artificial fragrances, and preservatives.</li>
              </ul>
            )
          }
        ].map(({ key, label, content }) => (
          <div key={key}>
            <div
              className="flex justify-between items-center py-3 cursor-pointer border-t border-[#B2BA98]"
              onClick={() => toggleSection(key)}
            >
              <span className="text-[18px] font-medium text-[#2B452C] ">{label}</span>
              {openSections[key] ? <GoArrowDown size={24} className="text-[#B2BA98]"/> : <GoArrowRight size={24}  className="text-[#B2BA98]" />}
            </div>
            {openSections[key] && <div className="pb-3">{content}</div>}
          </div>
        ))}
      </div>

       <hr className=" border-[#B2BA98]" />

      {/* Related Products */}
<div className="mt-8">
  <h2 className="text-[20px] font-semibold text-[#2B452C] mb-4">
    Related Products
  </h2>

  <div className="grid grid-cols-2 gap-2 mb-10">
    {/* Product 1 */}
    <div className="border rounded-xl p-3 w-[100%] ">
      <img
        src="/images/hairoil.png"
        alt="Zia Herbal Hair Shampoo"
        className="w-full h-[180px] object-contain"
      />
      <p className="mt-2 text-[16px] font-semibold text-[#676A5E]">
        Zia Herbal Hair Shampoo 300ml
      </p>
      <div className="flex items-center gap-1 mt-1">
    
            <img  src="/images/4star.png" alt="star" className="" />
         
      </div>
      <p className="text-[14px] text-[#676A5E] mt-1">10 Reviews</p>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-[18px] text-[#FF1010] ">-28%</p>
        <p className="line-through text-[#757878] text-[16px]">₹320.00</p>
        <p className="text-[18px] font-bold">₹400</p>
      </div>
    </div>

    {/* Product 2 */}
    <div className="border rounded-xl p-3 w-[100%]">
      <img
        src="/images/hairoil.png"
        alt="Zia Herbal Hair Oil"
        className="w-full h-[180px] object-contain"
      />
      <p className="mt-2 text-[16px] w-[80%] font-semibold text-[#676A5E]">
        Zia Herbal Hair Oil 300ml
      </p>
      <div className="flex items-center gap-1 mt-1">
      
            <img  src="/images/4star.png" alt="star" className="" />
          
      </div>
      <p className="text-[14px] text-[#676A5E] mt-1">10 Reviews</p>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-[18px] text-[#FF1010] ">-28%</p>
        <p className="line-through text-[#757878] text-[16px]">₹320.00</p>
        <p className="text-[18px] font-bold">₹400</p>
      </div>
    </div>
  </div>
</div>

    </div>
 <Footer/>
    </>

  );
}
