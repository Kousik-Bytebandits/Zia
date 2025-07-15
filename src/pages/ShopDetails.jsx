import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import { GoArrowDown, GoArrowRight } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import { RiStarSFill, RiStarHalfSFill } from "react-icons/ri";
import endpoint_prefix from "../config/ApiConfig";


function ProductCard({ product }) {


  const navigate = useNavigate();
  
  const handleAddToCart = () => {
  window.open("https://www.whatsapp.com/catalog/918939843483/?app_absent=0", "_blank");
};

  
  return (
    <div onClick={() => navigate(`/shopdetails/${product.product_id}`)} 
     className=" bg-white  lg:rounded-md xxxl:w-[270px] xxxl:h-[430px] laptop:w-[180px] laptop:h-[300px] hd:w-[200px] hd:h-[350px] shadow-xl border border-[#D8DCCB] flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-[140px]  xxxl:w-[200px] xxxl:h-[200px] laptop:w-[140px] laptop:h-[140px] hd:w-[150px] hd:h-[150px] object-contain mx-auto p-2 lg:mt-2 lg:mb-2"
      />
      <div className=" flex flex-col  items-center text-center flex-grow justify-between">
        <h2 className="laptop:text-[15px] hd:text-[18px] xxxl:text-[24px] font-medium leading-snug">{product.name}</h2>
        <div className="flex text-yellow-500 items-center lg:text-[14px]">
                <p className="text-[#676A5E]   text-[12px] xxxl:text-[18px] hd:text-[15px] laptop:text-[12px] mr-1">4.5</p>
    {[...Array(4)].map((_, i) => (
      <RiStarSFill key={i} className="xxxl:text-[18px] hd:text-[15px] laptop:text-[12px]" />
    ))}
    <RiStarHalfSFill className="xxxl:text-[18px] hd:text-[15px] laptop:text-[12px]" /> <p className="text-[#676A5E] ml-1  text-[12px] xxxl:text-[18px] hd:text-[15px] laptop:text-[12px]">(79)</p>
  </div>
        <div className="font-semibold tracking-wide font-archivo mb-2">
          <span className="line-through xxxl:text-[28px] laptop:text-[24px] hd:text-[18px] mr-1 lg:hidden text-gray-400">{product.originalPrice}</span>
          <span className="text-black  xxxl:text-[28px] laptop:text-[24px] hd:text-[26px]">₹{product.salePrice}</span>
        </div>
        <button onClick={handleAddToCart} className="w-full bg-[#2B452C] text-white py-3 xxxl:py-4 laptop:py-2 hd:py-3 lg:rounded-b text-[18px] xxxl:text-[24px] laptop:text-[20px] tracking-wider font-medium rounded-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function ShopDetails() {
  const [productDetails, setProductDetails] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [images, setImages] = useState([]);
  const { productId } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 35, seconds: 23 });
  const [openSections, setOpenSections] = useState({
    specifications: false,
    usage: false,
    ingredients: false,
    features: false,
  });

const imgs = productDetails?.images?.map((img) => img.image_url) || [];

 useEffect(() => {
   console.log("useEffect triggered, productId =", productId);
  if (productId) {
    fetch(`${endpoint_prefix}04_userProducts/api/user_products/product-details/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); 

        const details = data.Product_details;
        setProductDetails(details);

        const imgs = details.images?.map(img => img.image_url) || [];
        setImages(imgs);

        setRelatedProducts(data.Related_Products);
      })
      .catch((err) => console.error("Fetch error:", err));
  }
}, [productId]);



useEffect(() => {
  if (productDetails?.category) {
    fetch(`${endpoint_prefix}04_userProducts/api/user_products/products-by-category?category=${productDetails.category}`)
      .then((res) => res.json())
      .then((data) => {
        const products = data[productDetails.category] || [];
        setRelatedProducts(products);
      });
  }
}, [productDetails]);


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
const handleAddToCart = () => {
  window.open("https://www.whatsapp.com/catalog/918939843483/?app_absent=0", "_blank");
};

  return (
    <>
      <div className="p-4 py-10 font-archivo  mx-auto ">
       
      <div className="hidden lg:flex flex-col   mx-auto py-10 px-6">
          <div className="flex  w-full">
            {/* Left Images */}
            <div className="w-1/2">
              <div className="relative">
               <img src={imgs[currentIndex]}
                  alt="Product"
                  className="xxxl:w-[750px] xxxl:h-[700px] laptop:w-[500px] laptop:h-[500px] hd:w-[600px] hd:h-[600px] object-contain rounded-md border-2 px-8 "
                />
                {currentIndex === 0 && (
                  <div className="hiiden lg:hidden absolute top-10 left-6 bg-[#C50000] text-white text-[18px] w-20 h-20 flex items-center justify-center text-center font-semibold rounded-full">
                    28% <br /> Off
                  </div>
                )}
              </div>
             <div className="flex gap-5 mt-4">
  {imgs.map((src, i) => (
    <img
      key={i}
      src={src}
      onClick={() => setCurrentIndex(i)}
      className={`xxxl:w-[170px] xxxl:h-[150px] hd:w-[135px] hd:w-[150px] laptop:w-[110px] laptop:h-[100px] object-contain border ${
        i === currentIndex ? 'border-black' : 'border-gray-300'
      } rounded-md cursor-pointer`}
      alt="thumb"
    />
  ))}
</div>

            </div>

            {/* Right Details */}
            <div className="w-1/2 space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="xxxl:text-[40px] laptop:text-[28px] hd:text-[30px] tracking-widest text-[#676A5E] font-bold">{productDetails?.name?.toUpperCase()}</h1>
               <div className="flex text-yellow-500 items-center lg:text-[14px]">
                <p className="text-[#676A5E]   text-[12px] lg:text-[18px] mr-1">4.5</p>
    {[...Array(4)].map((_, i) => (
      <RiStarSFill key={i} className="lg:text-[18px]" />
    ))}
    <RiStarHalfSFill className="lg:text-[18px]" /> <p className="text-[#676A5E] ml-1  text-[12px] lg:text-[18px]">(79)</p>
  </div>
              </div>

              <div className="bg-[#FBFFFB]  border border-black rounded-lg p-6 xxxl:space-y-4 laptop:space-y-2 hd:space-y-3">
                <p className="xxxl:text-[25px] laptop:text-[16px] hd:text-[20px] font-semibold text-black">Free and Fast Delivery</p>
              {productDetails && (
  <>
    <p className="text-[#FF1010] text-[42px] mx-2 tracking-wide">
      -{Math.round(productDetails.discount)}%
      <span className="text-[#151515] font-bold ml-2">₹{productDetails.price}</span>
    </p>
    <p className="text-[#757878] line-through text-[18px]">
      M.R.P: ₹{(parseFloat(productDetails.price) / (1 - parseFloat(productDetails.discount) / 100)).toFixed(2)}
    </p>
  </>
)}


                <p className="xxxl:text-[18px] laptop:text-[12px] hd:text-[14px] text-[#757878]">Inclusive of all taxes</p>
                <p className="xxxl:text-[18px] laptop:text-[12px] hd:text-[14px] text-black">Use by: 31 AUG 2027</p>
                <p className="xxxl:text-[18px] laptop:text-[12px] hd:text-[14px]">
                  Hurry up! Deals end up in:
                  <span className="text-[#FF0606] ml-2 font-semibold">
                    {`${timeLeft.days}D : ${String(timeLeft.hours).padStart(2, '0')}H : ${String(timeLeft.minutes).padStart(2, '0')}Min : ${String(timeLeft.seconds).padStart(2, '0')}Sec`}
                  </span>
                </p>
                <p className="text-[#08650B] xxxl:text-[20px] laptop:text-[14px] hd:text-[16px] font-bold">In Stock</p>
                <div className="flex items-center bg-[#F0F2F2] xxxl:w-[100px] laptop:w-[80px] hd:w-[90px] border border-black gap-2 rounded-full px-4 py-1">
                  <label htmlFor="qty" className="xxxl:text-[18px] laptop:text-[12px] hd:text-[14px] text-[#151515]">Qty:</label>
                  <select id="qty" className="bg-[#F0F2F2] xxxl:text-[18px] laptop:text-[12px] hd:text-[14px] text-[#151515]">
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>{q}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-4">
                <button onClick={handleAddToCart} className="w-[40%] py-2 tracking-wide border border-[#2F3A27] bg-[#AEBCA466] rounded-full text-[#2F3A27] text-[18px] font-semibold">
                  Buy Now
                </button>
                <button onClick={handleAddToCart} className="w-[40%] py-2 tracking-wide rounded-full bg-[#2F3A27] border border-black text-white font-semibold text-[18px]">
                  Add to Cart
                </button>
                </div>
              </div>

              {/* Product Details Collapsible */}
              <div className="pt-6">
                <div>
   <h2 className="text-[20px] tracking-wide font-semibold mb-2">Product Details:</h2>

        {/* Description */}
        <div className="text-[16px]  text-[#2B452C] space-y-2 mb-4">
          <p className="text-[18px] uppercase">
           Description
          </p>
         <ul className="list-disc ml-5">
 <p className="text-[16px] text-[#2B452C]">{productDetails?.description}</p>

</ul>

        </div>
      </div>
                {[
                  {
                    key: "specifications",
                    label: "PRODUCT SPECIFICATIONS",
                    content: (
                      <table className="w-full text-[16px] text-left border border-[#B2BA98] text-[#2B452C]">
                        <tbody>
                          {[
  ["Item Length", `${productDetails?.item_length} cm`],
  ["Item Width", `${productDetails?.item_width} cm`],
  ["Item Height", `${productDetails?.item_height} cm`],
  ["Package Length", `${productDetails?.package_length} cm`],
  ["Package Width", `${productDetails?.package_width} cm`],
  ["Package Height", `${productDetails?.package_height} cm`],
  ["Package Weight", `${productDetails?.package_weight} g`]
]
.map(([label, value], idx) => (
                            <tr key={idx} className="border-b border-[#B2BA98]">
                              <td className="px-3 py-2 font-medium border-r border-[#B2BA98] w-1/2">{label}</td>
                              <td className="px-3 py-2">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )
                  },
                {
  key: "how_to_use",
  label: "HOW TO USE",
  content: (
    productDetails && productDetails.how_to_use ? (
      <div className="text-[16px] text-[#2B452C] space-y-1">
       
        <ul className="list-disc ml-5">
          {productDetails.how_to_use.split(',').map((step, index) => (
            <li key={index}>{step.trim()}</li>
          ))}
        </ul>
      </div>
    ) : null
  )
}
,
               {
  key: "ingredients",
  label: "INGREDIENTS",
  content: (
    productDetails && productDetails.ingredients ? (
      <div className="text-[16px] text-[#2B452C] space-y-1">
       
        <ul className="list-disc ml-5">
          {productDetails.ingredients.split(',').map((ing, index) => (
            <li key={index}>{ing.trim()}</li>
          ))}
        </ul>
      </div>
    ) : null
  )
}

,
{
  key: "features",
  label: "FEATURES",
  content: (
    productDetails && productDetails.features ? (
      <div className="text-[16px] text-[#2B452C] space-y-1">
      
        <ul className="list-disc ml-5">
          {productDetails.features.split(',').map((feature, index) => (
            <li key={index}>{feature.trim()}</li>
          ))}
        </ul>
      </div>
    ) : null
  )
}



                ].map(({ key, label, content }) => (
                  <div key={key}>
                    <div
                      className="flex justify-between items-center py-5 cursor-pointer border-t border-[#B2BA98]"
                      onClick={() => toggleSection(key)}
                    >
                      <span className="text-[18px] font-medium text-[#2B452C]">{label}</span>
                      {openSections[key] ? (
                        <GoArrowDown size={24} className="text-[#B2BA98]" />
                      ) : (
                        <GoArrowRight size={24} className="text-[#B2BA98]" />
                      )}
                    </div>
                    {openSections[key] && <div className="pb-4">{content}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div  className="hidden lg:block  mx-auto px-6 pt-16 pb-10">
          <h2 className="xxxl:text-[32px] laptop:text-[26px] hd:text-[28px] font-tenor text-center mb-8 text-[#2B452C]">Related Products</h2>
          <div  className=" grid grid-cols-2 lg:grid-cols-6 gap-6 ">
          {relatedProducts.slice(0, 12).map((product, idx) => (
  <ProductCard
    key={idx}
    product={{
      name: product.name,
      image: product.primary_image_url,
      originalPrice: product.mrp,
      salePrice: product.price,
      product_id: product.product_id
    }}
  />
))}

          </div>
        </div>
</div>
        {/* Mobile Secti
        on - Original Layout */}
        <div className="lg:hidden">
          <div className="p-2 py-10 max-w-lg mx-auto font-archivo">
      {/* Header */}
      <div className="flex items-start px-2 justify-between">
      <h1 className="text-[28px] text-[#676A5E] uppercase font-semibold">{productDetails?.name}</h1>

        <div className="flex items-center gap-1 mt-3 text-[12px] text-[#676A5E] ">
          <div className="flex items-center gap-1">
  <span className="text-[12px] text-[#676A5E] ">4.5</span>
  <div className="flex text-yellow-500 items-center ">
    {[...Array(4)].map((_, i) => (
      <RiStarSFill key={i} />
    ))}
    <RiStarHalfSFill /> <p className="text-[#676A5E] ml-1  text-[12px]">(79)</p>
  </div>
  
</div>

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
          {currentIndex === 0 && (
            <div className="hidden lg:hidden absolute top-4 left-6 bg-[#C50000] text-white text-[14px] w-14 h-14 flex text-center items-center justify-center font-semibold rounded-full">
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
         {productDetails && (
  <>
    <p className="text-[#FF1010] text-[42px] mx-2 tracking-wide">
      -{Math.round(productDetails.discount)}%
      <span className="text-[#151515] font-bold ml-2">₹{productDetails.price}</span>
    </p>
    <p className="text-[#757878] line-through text-[18px]">
      M.R.P: ₹{(parseFloat(productDetails.price) / (1 - parseFloat(productDetails.discount) / 100)).toFixed(2)}
    </p>
  </>
)}
  
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
      <button onClick={handleAddToCart} className="mt-4 w-full py-2 tracking-wide border border-[#2F3A27] bg-[#AEBCA466] rounded-full text-[#2F3A27] text-[18px] font-semibold">
        Buy Now
      </button>
      <button onClick={handleAddToCart} className="mt-2 w-full py-2 tracking-wide rounded-full bg-[#2F3A27] border border-black text-white font-semibold text-[18px] ">
        Add to Cart
      </button>

       <hr className="my-8 border-[#B2BA98]" />

      {/* Product Details */}
      <div className="mt-6">
        <h2 className="text-[20px] tracking-wide font-semibold mb-2">Product Details:</h2>

        {/* Description */}
        <div className="text-[16px]  text-[#2B452C] space-y-2 mb-4">
         <p className="text-[18px] uppercase">Description</p>
<p>{productDetails?.description}</p>

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
  ["Item Length", `${productDetails?.item_length} cm`],
  ["Item Width", `${productDetails?.item_width} cm`],
  ["Item Height", `${productDetails?.item_height} cm`],
  ["Package Length", `${productDetails?.package_length} cm`],
  ["Package Width", `${productDetails?.package_width} cm`],
  ["Package Height", `${productDetails?.package_height} cm`],
  ["Package Weight", `${productDetails?.package_weight} g`]
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
            key: "how_to_use",
            label: "HOW TO USE",
            content: (
    productDetails && productDetails.how_to_use ? (
      <div className="text-[16px] text-[#2B452C] space-y-1">
       
        <ul className="list-disc ml-5">
          {productDetails.how_to_use.split(',').map((step, index) => (
            <li key={index}>{step.trim()}</li>
          ))}
        </ul>
      </div>
    ) : null
  )
          },
          {
            key: "ingredients",
            label: "INGREDIENTS",
            content: (
    productDetails && productDetails.ingredients ? (
      <div className="text-[16px] text-[#2B452C] space-y-1">
       
        <ul className="list-disc ml-5">
          {productDetails.ingredients.split(',').map((ing, index) => (
            <li key={index}>{ing.trim()}</li>
          ))}
        </ul>
      </div>
    ) : null
  )
          },
          {
            key: "features",
            label: "FEATURES",
            content: (
    productDetails && productDetails.features ? (
      <div className="text-[16px] text-[#2B452C] space-y-1">
      
        <ul className="list-disc ml-5">
          {productDetails.features.split(',').map((feature, index) => (
            <li key={index}>{feature.trim()}</li>
          ))}
        </ul>
      </div>
    ) : null
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

  <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 ">
          {relatedProducts.slice(0, 12).map((product, idx) => (
  <ProductCard
    key={idx}
    product={{
      name: product.name,
      image: product.primary_image_url,
      originalPrice: product.mrp,
      salePrice: product.price
    }}
  />
))}

          </div>
</div>

    </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
