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
      price: 800,
      quantity: 2,
      img: "/images/h_shampoo.png",
    },
    {
      id: 2,
      name: "ZIA  HERBAL HAIR SHAMPOO",
      size: "100 ML",
      price: 800,
      quantity: 1,
      img: "/images/h_shampoo.png",
    },
    {
      id: 3,
      name: "ZIA  HERBAL HAIR SHAMPOO",
      size: "100 ML",
      price: 800,
      quantity: 3,
      img: "/images/h_shampoo.png",
    },
    {
      id: 4,
      name: "ZIA  HERBAL HAIR SHAMPOO",
      size: "100 ML",
      price: 800,
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
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      navigate("/"); 
    } else {
      navigate("/home");     }
  };

  return (
    <>
      <div className="max-w-[1600px] mx-auto py-8 font-archivo">
        <h2 className="lg:text-[32px] text-center lg:mt-10 lg:mb-10 py-4 font-tenor text-[#2E3A27] text-[28px]">
          Shopping Cart
        </h2>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[24px]">Your cart is empty.</p>
          </div>
        ) : (
          <>
            {/* ✅ Desktop View */}
            <div className="hidden lg:flex gap-6 mb-20">
              <div className="w-[100%] bg-white rounded-lg shadow-around-soft p-8">
                <div className="grid grid-cols-5 text-[26px] py-4 text-center text-[#373737] font-semibold border-b border-[#A3A3A3]">
                  <p className="text-left col-span-2 pl-16">Product Details</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p className="text-left ml-6">Total</p>
                </div>

                <div className="overflow-y-auto scrollbar-none max-h-[calc(100vh-400px)] mt-4 p-2 space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 shadow-around-soft rounded-lg"
                    >
                      <div className="flex gap-4 w-[40%] items-center">
                        <img
                          src={item.img}
                          alt="product"
                          className="w-[108px] h-[140px] object-contain"
                        />
                        <div>
                          <h3 className="text-[20px] font-semibold">
                            {item.name.split(" ").slice(0, 2).join(" ")} <br />
                            {item.name.split(" ").slice(2).join(" ")}
                          </h3>
                          <p className="text-[#AEAEAE] text-[18px] mt-4">
                            {item.size}
                          </p>
                        </div>
                      </div>

                      <div className="text-[24px] w-[15%] text-center font-semibold">
                        ₹ {item.price}
                      </div>

                      <div className="text-[20px] w-[15%] flex justify-center">
            <div className="shadow-around-soft flex items-center gap-2 border border-[#D5D5D5] rounded-full h-[35px] text-[18px]">
              <button className="px-3" onClick={() => handleDecrement(item.id)}>
                -
              </button>
              <span>{item.quantity}</span>
              <div className=" rounded-full border border-[#D5D5D5] px-3 py-[3px] ml-1">
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
            </div>
          </div>

                      <div className="text-[24px] w-[15%] text-center font-semibold">
                        ₹ {item.price * item.quantity}
                      </div>

                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-3xl font-bold mr-4"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ Right Sidebar */}
              <div className="w-[35%] space-y-6">
                <div className="bg-[#EFEFEF] rounded-lg shadow-around-soft px-6 pt-4">
                  <h3 className="text-[24px] border-b border-[#A3A3A3] pb-3 mb-4">
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

                  <div className="bg-[#E8E8E8] rounded-b-lg -mx-6 mt-4">
                    <div className="flex justify-between px-6 pt-5 pb-2 font-semibold text-[20px]">
                      <span>Total:</span>
                      <span>₹ {total.toFixed(2)} INR</span>
                    </div>
                    <p className="flex justify-end px-6 text-[#929292] text-[10px] pb-4">
                      Free Shipping
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#111111] text-[26px] text-white font-tenor py-4 rounded-lg"
                >
                  Proceed to checkout
                </button>

                <div className="bg-white rounded-lg shadow-around-soft p-6 space-y-10 ">
      <div className="flex gap-4 items-center">
        <img src="/icons/box.png" alt="box" className="" />
        <p className="text-[18px] text-[#7F7F7F] uppercase w-[55%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="flex gap-4 items-center ">
        <img src="/icons/wallet.png" alt="card" className="" />
        <p className="text-[18px] text-[#7F7F7F] uppercase  w-[55%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
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
                  <FaMinus/>
                </button>
                <span className="text-[#4C4B4B] text-[20px] font-bold">{item.quantity}</span>
                <div className="rounded-full border border-[#D5D5D5] px-2 py-2 bg-black  flex ml-3 ">
                  <button onClick={() => handleIncrement(item.id)}><FaPlus className="text-white " size={18}/></button>
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
