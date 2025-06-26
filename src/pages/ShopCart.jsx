import Footer from "../components/Footer";
import { useState } from "react";

export default function ShopCart() {
   const [items, setItems] = useState([
    { id: 1, name: "ZIA HERBAL HAIR SHAMPOO", size: "100 ML", price: 800, quantity: 2, img: "/images/h_shampoo.png" },
    { id: 2, name: "ZIA HERBAL HAIR SHAMPOO", size: "100 ML", price: 800, quantity: 2, img: "/images/h_shampoo.png" },
    { id: 3, name: "ZIA HERBAL HAIR SHAMPOO", size: "100 ML", price: 800, quantity: 2, img: "/images/h_shampoo.png" },
     { id: 4, name: "ZIA HERBAL HAIR SHAMPOO", size: "100 ML", price: 800, quantity: 2, img: "/images/h_shampoo.png" },
      { id: 5, name: "ZIA HERBAL HAIR SHAMPOO", size: "100 ML", price: 800, quantity: 2, img: "/images/h_shampoo.png" },
  ]);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 0.10;
  const total = subtotal - subtotal * discount;
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
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
    <div className="max-w-md mx-auto bg-white  font-archivo">
      <h2 className="text-center font-tenor text-[#2E3A27] text-[24px] mb-8 pt-8">Shopping Cart</h2>

      <div className="rounded-lg shadow-xl space-y-4 overflow-y-auto max-h-[calc(100vh-300px)]">
        {items.map((item) => (
          <div key={item.id} className="border-b-2  border-dashed border-[#D1D1D1] pb-4 relative">
            <button  onClick={() => handleRemove(item.id)} className="absolute top-0 right-4 text-[#D1D1D1] hover:text-red-500 text-4xl">&times;</button>
            <div className="flex gap-4">
              <img src={item.img} alt="shampoo" className="w-[84px] h-[110px] object-contain" />
              <div>
                <h3 className="font-medium text-[16px]">{item.name}</h3>
                <p className="text-[14px] text-[#AEAEAE]">{item.size}</p>
                <p className="text-[18px] font-semibold mt-1">₹ {item.price}</p>
               
              </div>
               <div className="flex items-center mt-12 gap-2 border border-[#D5D5D5]  rounded-full h-[36px] text-[20px]">
                  <button className=" px-3 "onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                 <div className="rounded-full border border-[#D5D5D5]  px-3 py-[1px]"> <button onClick={() => handleIncrement(item.id)} >+</button></div>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky bottom  */}
      <div className="sticky bottom-0 bg-white p-4 rounded-lg shadow-xl mt-4 space-y-2 pb-4">
        <div className="flex justify-between text-[14px] text-[#5E5C5C]">
          <span>Cart Items</span>
          <span className="text-[#727272] font-semibold text-[16px]">₹ {subtotal.toFixed(2)} INR</span>
        </div>
        <div className="flex justify-between text-[14px] text-[#5E5C5C]">
          <span>Discount</span>
          <span className="text-[#FF6565] font-semibold text-[16px]">-10%</span>
        </div>
        <div className="flex justify-between text-[14px] text-[#5E5C5C]">
          <span>Delivery Charges</span>
          <span className="text-[#727272] font-semibold text-[16px] line-through">₹ 80 INR</span>
        </div>
        <div className="flex justify-between font-semibold  text-[18px]">
          <span>Total:</span>
          <span>₹ {total.toFixed(2)} INR</span>
        </div>
        <p className="flex justify-end text-[#929292] text-[10px]">Free Shipping</p>

        <button className="w-full bg-[#111111] font-tenor text-[18px] text-white py-3 mt-2 rounded-lg">
          Proceed to checkout
        </button>
        
      </div>
    </div>
    <Footer/>
    </>
  );
}