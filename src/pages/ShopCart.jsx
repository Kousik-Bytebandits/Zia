import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function ShopCart() {
  const navigate = useNavigate();

 
  const [items, setItems] = useState([
    {
      id: 1,
      name: "ZIA HERBAL HAIR SHAMPOO",
      size: "100 ML",
      originalPrice: 400,
       price: 320,
      quantity: 2,
      img: "/images/h_shampoo.png",
    },
    {
      id: 2,
      name: "ZIA  HERBAL HAIR SHAMPOO",
      size: "100 ML",
        originalPrice: 400,
       price: 320,
      quantity: 1,
      img: "/images/h_shampoo.png",
    },
    {
      id: 3,
      name: "ZIA  HERBAL HAIR SHAMPOO",
      size: "100 ML",
        originalPrice: 400,
       price: 320,
      quantity: 3,
      img: "/images/h_shampoo.png",
    },
    {
      id: 4,
      name: "ZIA  HERBAL HAIR SHAMPOO",
      size: "100 ML",
        originalPrice: 400,
       price: 320,
      quantity: 1,
      img: "/images/h_shampoo.png",
    },
  ]);

  // ✅ Cart Calculations
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = 0.1;
  const total = subtotal - subtotal * discount;

  // ✅ Functions
  const handleIncrement = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
  };

  const handleCheckout = () => {
   const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/startscreen"); 
    } else {
      navigate("/home");     }
  };

  return (
    <>
      <div className="xxxl:max-w-[80%] laptop:max-w-[90%]  pt-20 mx-auto py-8 font-archivo">
        <h2 className="xxxl:text-[50px] text-center laptop:text-[35px] hd:text-[40px] lg:mb-10 py-4 font-tenor text-[#2E3A27] text-[28px]">
          Shopping Cart
        </h2>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[35px]">Your cart is empty.</p>
          </div>
        ) : (
          <>
            {/*  Desktop View */}
            <div className="hidden lg:flex gap-6 mb-20">
             <div className="w-full bg-white shadow-around-soft rounded-xl p-6 font-archivo">
  {items.map((item) => (
    <div
      key={item.id}
      className="flex justify-between py-6 items-center border-b-2 border-dashed border-[#B7B7B7] last:border-none"
    >
      {/* Product Image + Details */}
      <div className="flex items-center gap-6 xxxl:w-[40%] laptop:w-[50%] hd:w-[45%]">
        <img src={item.img} alt="product" className="xxxl:w-[110px] xxxl:h-[150px] laptop:w-[88px] laptop:h-[110px] hd:w-[100px] hd:h-[120px] object-contain" />
        <div className="space-y-1">
          <p className="text-[18px] xxxl:text-[24px] laptop:text-[20px] hd:text-[22px] font-semibold uppercase text-[#202020]">
            {item.name}
          </p>
          <p className="text-[#A0A0A0] text-[20px]">100 ML</p>
          <div className="flex items-center gap-1 mt-2 text-[#676A5E] text-[18px]">
            <span>5.0</span>
            <img src="/images/5star.png" alt="star" />
            <span className="ml-1">(10)</span>
          </div>
        </div>
      </div>

      {/* Price Column */}
      <div className=" text-[20px] font-semibold text-right w-[16%]">
        <div className="flex  items-center justify-end gap-4">
          <span className="text-[#FF1010]">-28%</span>
          <div className="flex items-center gap-4">
            <span className="line-through text-[#A3A3A3] text-[20px]">₹{item.originalPrice}</span>
            <span className="text-black text-[20px]">₹{item.price}</span>
          </div>
        </div>
      </div>

      {/* Quantity + Delete */}
      <div className="flex items-center gap-3 w-[30%] justify-center">
        <div className="flex items-center border border-[#D5D5D5] rounded-full px-6 py-1 gap-3">
          <button className="text-[14px]" onClick={() => handleDecrement(item.id)}><FaMinus/></button>
          <span className="text-[22px] font-medium">{item.quantity}</span>
          <button className="text-[14px]" onClick={() => handleIncrement(item.id)}><FaPlus/></button>
        </div>
        <button
          onClick={() => handleRemove(item.id)}
          className="bg-[#BE0000] text-white px-8 py-2 text-[16px] font-semibold rounded-full"
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>


              {/* ✅ Right Sidebar */}
              <div className="w-[35%] space-y-6">
                <div className="bg-[#EFEFEF] rounded-lg shadow-around-soft px-6 pt-6">
                  <h3 className="text-[24px] border-b border-[#A3A3A3] pb-6 mb-6">
                    Order Summary
                  </h3>

                  <div className="space-y-6">
                    <div className="flex justify-between text-[18px] text-[#5E5C5C]">
                      <span>Cart Items</span>
                      <span className="font-semibold">
                        ₹ {subtotal.toFixed(2)} INR
                      </span>
                    </div>
                    <div className="flex justify-between text-[18px] text-[#5E5C5C]">
                      <span>Discount</span>
                      <span className="text-[#FF6565] font-semibold">
                        -10%
                      </span>
                    </div>
                    <div className="flex justify-between text-[18px] text-[#5E5C5C]">
                      <span>Delivery Charges</span>
                      <span className="line-through font-semibold">
                        ₹ 80 INR
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#E8E8E8] rounded-b-lg -mx-6 mt-8">
                    <div className="flex justify-between px-6 pt-5 pb-2 font-semibold text-[20px]">
                      <span>Total:</span>
                      <span>₹ {total.toFixed(2)} INR</span>
                    </div>
                    <p className="flex justify-end px-6 text-[#929292] text-[10px] pb-4">
                      Free Shipping
                    </p>
                  
                    <button
                  onClick={handleCheckout}
                  className="w-[80%] mx-10 bg-[#111111] xxxl:text-[26px] laptop:text-[16px] hd:text-[18px] text-white font-tenor xxxl:py-4 laptop:py-2 hd:py-3 rounded-lg mb-8 mt-4"
                >
                  Proceed to checkout
                </button>
                </div>
                </div>

              

               
      </div>
      </div>
           

            {/* ✅ Mobile View */}
            <div className="lg:hidden">
              <div className="max-w-md mx-auto bg-white rounded-lg p-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="border-b-2 mt-8 ...987\l
                    border-dashed border-[#D1D1D1] pb-4 relative"
                  >
                  
                    <div className="flex gap-">
                      <img
                        src={item.img}
                        alt="product"
                        className="w-[117px] h-[155px] "
                      />
                      <div className="flex flex-col justify-between py-2 w-full">
                        <div>
                          <h3 className="font-medium text-[18px] leading-tight tracking-wider">
                            {item.name}
                          </h3>
                          <p className="text-[14px] text-[#AEAEAE]">
                            {item.size}
                          </p>
                        </div>
                         <div className="flex items-center gap-2 text-[12px] text-[#676A5E] ">
                         <span>5.0</span>
                      <img src="/images/5star.png" alt="star" className="" />
                      <span className="text-[#676A5E] mr-2">(10)</span>
                        </div>
                         <div className="flex items-center gap-3">
        <p className="text-[20px] text-[#FF1010] ">-28%</p>
        <p className="line-through text-[#AEAEAE] text-[20px]">₹320.00</p>
        <p className="text-[24px] font-bold">₹400</p>
      </div>
                        <div className="flex justify-start gap-4 items-center mt-2">
                         
                         <div className="shadow-around-soft flex items-center gap-1 border border-[#D5D5D5] rounded-full h-[34px]">
                <button
                  className="px-3"
                  onClick={() => handleDecrement(item.id)}
                >
                  <FaMinus size={16}/>
                </button>
                <span className="text-[#4C4B4B] text-[20px] ">{item.quantity}</span>
                <div className="px-3 items-center flex">
                  <button onClick={() => handleIncrement(item.id)}><FaPlus className=" " size={16}/></button>
                </div>
              </div>
              <div>
                <button  onClick={() => handleRemove(item.id)} className="rounded-full bg-[#BE0000] text-white px-8 py-1.5">Delete</button>
                </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sticky bottom-0 bg-white p-4 rounded-lg shadow-xl mt-4 space-y-2 pb-4">
                <div className="flex justify-between text-[14px] text-[#5E5C5C]">
                  <span>Cart Items</span>
                  <span className="font-semibold text-[16px]">
                    ₹ {subtotal.toFixed(2)} INR
                  </span>
                </div>
                <div className="flex justify-between text-[14px] text-[#5E5C5C]">
                  <span>Discount</span>
                  <span className="text-[#FF6565] font-semibold text-[16px]">
                    -10%
                  </span>
                </div>
                <div className="flex justify-between text-[14px] text-[#5E5C5C]">
                  <span>Delivery Charges</span>
                  <span className="line-through font-semibold text-[16px]">
                    ₹ 80 INR
                  </span>
                </div>
                <div className="flex justify-between font-semibold tracking-wide text-[18px]">
                  <span>Total:</span>
                  <span>₹ {total.toFixed(2)} INR</span>
                </div>
                <p className="flex justify-end text-[#929292] text-[11px]">
                  Free Shipping
                </p>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#111111] font-tenor text-[18px] text-white py-3 mt-2 rounded-lg"
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
