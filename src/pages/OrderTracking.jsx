import { useState, useEffect } from "react";
import Footer from "../components/Footer";

// ------------------ Mobile Components ------------------ //

const MobileOrderTrackingCard = ({ orderId, products, orderStatus }) => {
  const steps = [
    {
      title: "Shipped",
      icon: "/icons/shipped.png",
    },
    {
      title: "Out of delivery",
      icon: "/icons/ood.png",
    },
    {
      title: "Delivered",
      icon: "/icons/delivered.png",
    },
  ];

  const statusMap = {
    shipped: 0,
    "out of delivery": 1,
    delivered: 2,
  };

  const completedSteps = statusMap[orderStatus?.toLowerCase()] ?? 0;

  return (
    <div className="laptop:hidden border rounded-xl p-4 bg-white shadow-around-soft">
      {/* Top Row: Image + Details */}
      <div className="flex space-x-4">
        {/* Image */}
        <div className=" flex items-center justify-center w-[80px] h-[120px] rounded-md">
          <img
            src={products[0].primary_image_url}
            alt={products[0].name}
            className="w-[90px] h-[120px] object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex-1">
          <p className="text-[12px] text-[#555] mb-1">Order Id : {orderId}</p>
          <p className="uppercase text-[#333] font-semibold text-[20px]">{products[0].name}</p>
          <p className="text-[28px] font-bold text-black mt-1">₹{products[0].price}</p>
        </div>
      </div>

      {/* Step line */}
     {/* Step line */}
<div className="mt-4 relative">
  {/* Background line */}
  <div className="absolute top-[10px] left-[14px] right-[16px] h-[2px] bg-[#A9A9A9]"></div>

  {/* Completed line */}
  <div
    className="absolute top-[10px] left-[14px] right-[16px] h-[2px] bg-[#388E3C]"
    style={{
      width: `${(completedSteps / (steps.length - 1)) * 88}%`,
    }}
  ></div>

  {/* Steps */}
  <div className="flex justify-between relative z-10">
    {steps.map((step, idx) => (
      <div key={step.title} className="flex flex-col items-center">
        <div
          className={`w-5 h-5 rounded-full border-2 border-white ${
            idx <= completedSteps ? "bg-[#388E3C]" : "bg-[#A9A9A9]"
          }`}
        ></div>
        <p className="text-[15px] mt-1 text-[#4A4A4A]">{step.title}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};



// ------------------ Desktop Components  ------------------ //
const StepTimeline = ({ orderStatus }) => {
  const steps = [
    {
      title: "Shipped",
      description: "Your order has been handed over to our delivery partner and is on its way.",
      icon: "/icons/shipped.png"
    },
    {
      title: "Out of delivery",
      description: "Your package is arriving today. Please keep your phone nearby.",
      icon: "/icons/ood.png"
    },
    {
      title: "Delivered",
      description: "Your package was successfully delivered. We hope you love it!",
      icon: "/icons/delivered.png"
    }
  ];

  const statusMap = {
    pending: 0,
    shipped: 1,
    delivered: 2
  };

  const completedSteps = statusMap[orderStatus?.toLowerCase()] ?? 0;

  return (
    <div className="mt-6">
      {/* Progress Line */}
      <div className="relative w-full mb-8">
        {/* Background line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#A9A9A9] -translate-y-1/2"></div>
        {/* Completed line */}
        <div
          className="absolute top-1/2 left-0   h-[4px] bg-[#388E3C] -translate-y-1/2"
          style={{
            width: `${(completedSteps / (steps.length - 1)) * 100}%`
          }}
        ></div>
        {/* Step Circles */}
        <div className="flex justify-between relative z-10">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                idx <= completedSteps ? "bg-[#388E3C]" : "bg-[#A9A9A9]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step Icons & Text */}
      <div className="flex justify-between">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center text-center max-w-[240px]">
            <div className="p-2 rounded-full mb-2">
              <img src={step.icon} alt={step.title} className="w-full h-14" />
            </div>
            <p className="font-semibold text-[18px] text-[#4A4A4A]">{step.title}</p>
            <p className="text-[14px] text-[#B6B6B6]">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const OrderTrackingCard = ({ orderId, products, orderStatus }) => (
  <div className="hidden lg:flex border rounded-xl p-6 text-[#2B452C] shadow-around-soft bg-white space-x-6">
    {/* Left side - Image */}
    <div className="bg-gray-100 flex items-center justify-center w-[300px] h-[320px] rounded-md">
      <img
        src={products[0].primary_image_url}
        alt={products[0].name}
        className="w-[260px] h-[300px] object-contain"
      />
    </div>

    {/* Right side - Details + Timeline */}
    <div className="flex-1 flex flex-col justify-between">
      {/* Top section */}
      <div className="flex justify-between items-start">
        <div>
          <p className="uppercase text-[#333333] font-semibold text-[28px]">{products[0].name}</p>
          <p className="text-[36px] font-bold text-[#151515]">₹{products[0].price}</p>
        </div>
        <p className="text-[16px]  text-[#2B452C] font-medium">
          Order Id : {orderId}
        </p>
      </div>

      {/* Bottom section - Timeline */}
      <StepTimeline orderStatus={orderStatus} />
    </div>
  </div>
);


// ------------------ Main Component ------------------ //
export default function OrderTracking() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(
          "https://api.ziaherbalpro.com/Microservices/07_orders/order_management/user_orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const rawData = await res.json();
        const ordersArray = Array.isArray(rawData) ? rawData : [rawData];

        const groupedOrders = Object.values(
          ordersArray.reduce((acc, order) => {
            const orderId = order.razorpay_order_id;

            if (!acc[orderId]) {
              acc[orderId] = {
                razorpay_order_id: orderId,
                status: order.order_status,
                products: [],
              };
            }

            acc[orderId].products.push({
              product_id: order.product_id,
              name: order.name,
              price: order.price,
              primary_image_url: order.primary_image_url,
            });

            return acc;
          }, {})
        );

        setOrders(groupedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [token]);

  

   if (!token) {
    return (
      <div className="text-center mt-[20%] text-[40px] font-semibold text-gray-700">
        Please Login to track the order
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen pt-24 bg-white px-4 py-6 xxxl:px-60 xxxl:py-20 hd:px-36 laptop:px-36 font-archivo mx-auto">
        <h1 className="text-center text-[22px] font-tenor text-[#2E3A27] mb-5 hd:text-[40px] laptop:text-[36px] xxxl:text-[50px]">
          Track Order
        </h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.razorpay_order_id}>
              {/* Mobile */}
              <MobileOrderTrackingCard
                orderId={order.razorpay_order_id}
                products={order.products}
                orderStatus={order.status}
              />

              {/* Desktop */}
              <OrderTrackingCard
                orderId={order.razorpay_order_id}
                products={order.products}
                orderStatus={order.status}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
