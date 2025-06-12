export default function CareCollectionsSection() {
  const products = [
    {
      name: "Lemon Hand Wash",
      image: "/images/lemonwash.png",
      stars: "/images/stars-num.png",

      price: 400,
    },
    {
      name: "Herbal Hand Wash",
      image: "/images/herbalwash.png",
      stars: "/images/stars-num.png",

      price: 400,
    },
    {
      name: "Hair Oil",
      image: "/images/hairoil.png",
      stars: "/images/stars-num.png",

      price: 400,
    },
    {
      name: "Herbal Shampoo",
      image: "/images/h_shampoo.png",
      stars: "/images/stars-num.png",

      price: 400,
    },
  ];

  return (
    <div className=" mx-auto px-6 py-8 font-archivo">
      {/* Offers */}
      

      {/* Title */}
      <h2 className="text-center font-tenor tracking-widest text-[24px] text-[#676A5E] mb-8">
        CARE COLLECTIONS
      </h2>

      {/* Category Buttons */}
     <div className="grid grid-cols-2 text-[14px] gap-4 text-[#676A5E] mb-12 mx-auto mt-4">
  <button className="py-4 px-3 border border-[#676A5E] bg-[#2B452C] text-white rounded-full font-tenor">All Products</button>
  <button className="py-4 px-3 border border-[#676A5E] rounded-full font-tenor">Body Care</button>
  <button className="py-4 px-3 border border-[#676A5E] rounded-full font-tenor">Skin Care</button>
  <button className="py-4 px-3 border border-[#676A5E] rounded-full font-tenor">Moisture</button>
</div>


      {/* Product Cards */}
      <div className="overflow-x-auto scrollbar-none">
        <div className="flex gap-4 w-[1000px] mt-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[270px] h-[360px] border border-gray-200 rounded-xl shadow-sm flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-36 object-contain mt-4"
              />
              <div className="text-center px-2 py-3">
                <p className="text-[24px] text-[#676A5E] ">{product.name}</p>
                <img
                  src={product.stars}
                  alt="Rating stars"
                  className=" mx-auto mt-1"
                />
               
                <div className="text-[28px] mt-2">₹ {product.price}</div>
              </div>
              <button className="bg-[#2B452C] tracking-wide text-white w-full py-3 rounded-b-xl text-[24px]">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src="/images/pure.png" alt="Offer Banner" className="mx-auto mt-16" />
      </div>
    </div>
  );
}
