import { useState,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { FaMinus, FaPlus } from "react-icons/fa";
import AddressPopup from "./AddressPopup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import { showLoginToast } from "../components/ShowLoginToast";
 import { showSessionExpiredToast } from "../components/showSessionExpiredToast"; 
export default function ShopCart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const token = localStorage.getItem("accessToken");
const [subtotal, setSubtotal] = useState(0);
const [total, setTotal] = useState(0);
const [discountPercent, setDiscountPercent] = useState(0);
const [discountAmount, setDiscountAmount] = useState(0);
const [showPopup, setShowPopup] = useState(false);
const [loading, setLoading] = useState(false);
  const toastShown = useRef(false);


useEffect(() => {
  if (!token && !toastShown.current || token === "forbidden") {
    toastShown.current = true;
    showLoginToast(navigate);  // pass navigate directly
  } else if (token) {
    fetchCart();
  }
}, [token]);




const fetchCart = async () => {
  try {
    const res = await fetch("https://api.ziaherbalpro.com/Microservices/06_cart/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
      if (res.status === 401 || res.status === 403) {
      localStorage.removeItem("accessToken");
      showSessionExpiredToast(navigate);
      return null;
    }
    if (!res.ok) throw new Error("Failed to fetch cart");

    const data = await res.json();

    setItems(data.items || []);
    setSubtotal(Number(data.cart_items || 0));
    setTotal(Number(data.totalPrice || 0));
    setDiscountPercent(Number(data.discount_percent || 0));
    setDiscountAmount(Number(data.discount_amount || discountAmount));
  } catch (err) {
    console.error(err);
  }
};




 const updateQuantity = async (productId, quantity) => {
  try {
   
    setItems(prevItems =>
      prevItems.map(item =>
        item.product_id === productId
          ? { ...item, quantity }
          : item
      )
    );

   
    const res = await fetch(
      "https://api.ziaherbalpro.com/Microservices/06_cart/cart",
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product_id: productId, quantity }),
      }
    );

    if (!res.ok) throw new Error("Failed to update quantity");

    await fetchCart();

  } catch (err) {
    console.error(err);
  }
};




  const removeItem = async (productId) => {
    try {
      const res = await fetch(
        `https://api.ziaherbalpro.com/Microservices/06_cart/cart/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) throw new Error("Failed to remove item");
      await fetchCart(); // Refresh cart
    } catch (err) {
      console.error(err);
    }
  };



const handleIncrement = (id, currentQty) => {
  updateQuantity(id, currentQty + 1);
};

const handleDecrement = (id, currentQty) => {
  if (currentQty > 1) {
    updateQuantity(id, currentQty - 1);
  }
};



  const handleRemove = (id) => {
    removeItem(id);
  };

  
  const handleCheckout = () => {
    if (!token) {
       showLoginToast(navigate);

    } else {
      setShowPopup(true);
    }
  };

  const processBuyNowPayment = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
    toast.error("Session expired. Please log in again.");
    return;
  }
  
    try {
      setLoading(true);
     
     
      const orderRes = await fetch(
       "https://api.ziaherbalpro.com/Microservices/07_orders/order_management/create_order",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payment_method: "online",
            items: items,
          }),
        }
      );
     
      
      const data = await orderRes.json();
    


      if (!orderRes.ok || !data.razorpayOrder) {
      toast.error("Failed to create order.");
      setLoading(false);
      return;
    }

      if (data?.razorpayOrder) {
        const options = {
          key: "rzp_test_qQ40l1wBMtOxc0",
          amount: data.razorpayOrder.amount,
          currency: "INR",
          name: data.customer_details.name,
          description: "Purchase from Zia Herbal",
          image: data.theme?.logo || "/zia_logo.webp",
          order_id: data.razorpayOrder.id,
          handler: async function (response) {
            await verifyCratePayment(response, token);
          },
          prefill: {
            name: data.customer_details.name,
            email: data.customer_details.email,
            contact: data.customer_details.Phone,
          },
          notes: {
            address: data.customer_details.address,
          },
          theme: {
            color: data.theme?.color || "#00aaff",
          },
        };
  
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        toast.error(data.message || "Order creation failed");
      }
    } catch (error) {
      console.error("Checkout failed:", error);
      toast.error("An error occurred during checkout.");
    } finally {
      setLoading(false);
    }
  };


const verifyCratePayment = async (response, token) => {
  try {
    // Step 1: Verify payment
    const verifyRes = await fetch(
      "https://api.ziaherbalpro.com/Microservices/07_orders/order_management/verify_payment",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        }),
      }
    );

    if (!verifyRes.ok) {
      toast.error("Payment verification failed");
      return;
    }

    const result = await verifyRes.json();
    console.log("Payment verified:", result);

    if (result.success) {
      toast.success("Payment verified successfully");

      // Step 2: Call contact/payment API
      try {
        const contactRes = await fetch(
          "https://api.ziaherbalpro.com/Microservices/05_contact/payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              payment_id: response.razorpay_payment_id, // from Razorpay
            }),
          }
        );

        const contactData = await contactRes.json();
        console.log("Contact Payment Response:", contactData);

        if (contactRes.ok) {
          toast.success("Contact payment recorded successfully");
        } else {
          toast.error(contactData.message || "Failed to record contact payment");
        }
      } catch (contactErr) {
        console.error("Error sending payment_id to contact API:", contactErr);
        toast.error("Error recording contact payment");
      }
    } else {
      toast.error("Payment verification failed");
    }
  } catch (error) {
    console.error("Verification or callback error:", error);
    alert("Error verifying payment or sending payment ID.");
  }
};



  
  return (
    <>
     {loading && <Loader />}
         <AddressPopup
        isOpen={showPopup}
        onClose={() => {
          
          setShowPopup(false);
        }}
        onProceed={() => {
          setShowPopup(false);
          processBuyNowPayment();
        }}
      />
      <div className="xxxl:max-w-[80%] laptop:max-w-[90%]  pt-20 mx-auto py-8 font-archivo">
        <h2 className="xxxl:text-[50px] text-center laptop:text-[35px] hd:text-[40px] lg:mb-10 lg:py-4 font-tenor text-[#2E3A27] text-[28px]">
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
      key={item.product_id}
      className="flex justify-between py-6 items-center border-b-2 border-dashed border-[#B7B7B7] last:border-none"
    >
      {/* Product Image + Details */}
      <div className="flex items-center gap-6 xxxl:w-[40%] laptop:w-[50%] hd:w-[45%]">
        <img src={item.image_url} alt="product" className="xxxl:w-[110px] xxxl:h-[150px] laptop:w-[88px] laptop:h-[110px] hd:w-[100px] hd:h-[120px] object-contain" />
        <div className="space-y-1">
          <p className="text-[18px] xxxl:text-[24px] laptop:text-[20px] hd:text-[22px] font-semibold uppercase text-[#202020]">
            {item.name}
          </p>
         
          <div className="flex items-center gap-2 mt-2  text-[#676A5E] text-[18px]">
            <span>4.5</span>
            <img src="/images/5star.webp" alt="star" />
            <span className="ml-1">(79)</span>
          </div>
        </div>
      </div>

      {/* Price Column */}
      <div className=" text-[20px] font-semibold text-right w-[24%]">
        <div className="flex  items-center justify-end gap-4">
          <span className="text-[#FF1010]">- {item.discount}%</span>
          <div className="flex items-center gap-4">
            <span className="line-through text-[#A3A3A3] text-[20px]">₹{item.old_price}</span>
            <span className="text-black text-[20px]">₹{item.price}</span>
          </div>
        </div>
      </div>

      {/* Quantity + Delete */}
      <div className="flex items-center gap-3 w-[30%] justify-center">
        <div className="flex items-center border border-[#D5D5D5] rounded-full px-6 py-1 gap-3">
          <button  type="button" className="text-[14px]" onClick={() => handleDecrement(item.product_id, item.quantity)}><FaMinus/></button>
          <span className="text-[22px] font-medium">{item.quantity}</span>
          <button type="button" className="text-[14px]" onClick={() => handleIncrement(item.product_id, item.quantity)}><FaPlus/></button>
        </div>
        <button type="button"
          onClick={() => handleRemove(item.product_id)}
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
                        -{discountPercent.toFixed(0)}%
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
  <div className="max-w-md  mx-auto bg-white rounded-lg px-4">
    {items.map((item) => (
      <div
        key={item.product_id}
        className=" mt-4  shadow-around-soft rounded-md border-[#D1D1D1] px-3 py-5"
      >
        <div className="flex gap-3">
          {/* Product Image */}
          <img
            src={item.image_url}
            alt="product"
            className="w-28 h-32 object-contain"
          />

          {/* Product Details */}
          <div className="flex flex-col justify-between w-full">
            <h3 className="font-semibold text-[#333333] max-w-[80%] tracking-wide text-[16px] sm:text-base leading-snug">
              {item.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 text-sm text-[#676A5E] mt-1">
              <span className="mt-0.5">4.5</span>
              <img src="/images/5star.webp" alt="star" className="w-16" />
              <span className="text-[#676A5E]">(79)</span>
            </div>

            {/* Price Section */}
            <div className="flex items-center gap-2 mt-1">
              <p className="text-[18px] sm:text-base text-[#FF1010]">
                - {item.discount}%
              </p>
              <p className="line-through text-[#AEAEAE] text-[18px] sm:text-base">
                ₹ {item.old_price}
              </p>
              <p className="text-[22px] sm:text-xl font-bold">₹ {item.price}</p>
            </div>

            {/* Quantity + Delete */}
           <div className="flex w-full items-center mt-2 gap-3">
  {/* Quantity Box */}
  <div className="flex flex-1 items-center justify-between border border-[#D5D5D5] rounded-full h-9 shadow-around-soft">
    <button
      className="flex-1 h-full flex items-center justify-center"
      onClick={() => handleDecrement(item.product_id, item.quantity)}
    >
      <FaMinus size={14} />
    </button>
    <span className="text-[#4C4B4B] text-[18px] px-2">{item.quantity}</span>
    <button
      className="flex-1 h-full flex items-center justify-center"
      onClick={() => handleIncrement(item.product_id, item.quantity)}
    >
      <FaPlus size={14} />
    </button>
  </div>

  {/* Delete Button */}
  <button
    onClick={() => handleRemove(item.product_id)}
    className="flex-1 rounded-full bg-[#BE0000] text-white py-2 text-sm sm:text-base"
  >
    Delete
  </button>
</div>

          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Sticky Bottom Cart Summary */}
  <div className="sticky bottom-0 bg-white p-4 rounded-lg shadow-xl mt-4 space-y-2">
    <div className="flex justify-between text-sm text-[#5E5C5C]">
      <span>Cart Items</span>
      <span className="font-semibold text-base">
        ₹ {subtotal.toFixed(2)} INR
      </span>
    </div>
    <div className="flex justify-between text-sm text-[#5E5C5C]">
      <span>Discount</span>
      <span className="text-[#FF6565] font-semibold text-base">
        -{discountPercent.toFixed(0)}%
      </span>
    </div>
    <div className="flex justify-between text-sm text-[#5E5C5C]">
      <span>Delivery Charges</span>
      <span className="line-through font-semibold text-base">₹ 80 INR</span>
    </div>
    <div className="flex justify-between font-semibold tracking-wide text-lg">
      <span>Total:</span>
      <span>₹ {total.toFixed(2)} INR</span>
    </div>
    <p className="flex justify-end text-[#929292] text-[11px]">Free Shipping</p>

    <button
      onClick={handleCheckout}
      className="w-full bg-[#111111] font-tenor text-base sm:text-lg text-white py-3 mt-2 rounded-lg"
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
