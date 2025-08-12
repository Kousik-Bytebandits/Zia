import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const TrackingStep = ({ icon, title, description, isCompleted }) => (
  <div className="relative flex items-start space-x-3 z-10 laptop:hidden">
    <div className="z-20">
      <div
        className={`w-3 h-3 rounded-full ${
          isCompleted ? "bg-[#388E3C]" : "bg-gray-300"
        } mt-[16px]`}
      />
    </div>
    <div className="flex space-x-2 font-archivo">
      <img src={icon} alt={title} className="w-[40px] h-[40px] mt-[1px]" />
      <div>
        <p
          className={`font-semibold text-[18px] ${
            isCompleted ? "text-[#4A4A4A]" : "text-gray-400"
          }`}
        >
          {title}
        </p>
        <p className="text-[14px] text-[#B6B6B6]">{description}</p>
      </div>
    </div>
  </div>
);

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
    <div className="hidden laptop:block">
      {/* Step Icons & Text */}
      <div className="flex justify-between w-full px-2 hd:px-6 xxxl:px-12 mt-8">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className="p-2 rounded-full">
              <img src={step.icon} alt={step.title} className="w-full h-14" />
            </div>
            <p className="mt-2 font-semibold xxxl:text-[24px] laptop:text-[18px] hd:text-[20px] text-[#4A4A4A]">
              {step.title}
            </p>
            <p className="xxxl:text-[20px] laptop:text-[14px] hd:text-[16px] text-[#B6B6B6] max-w-[280px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Progress Line with Segments */}
      <div className="relative mt-6 px-2 hd:px-6 xxxl:px-44 hd:px-40 laptop:px-36 mb-10">
        <div className="flex justify-between items-center relative z-10">
          {steps.map((_, idx) => (
            <div key={idx} className="flex items-center w-full last:w-auto">
              {/* Dot (always green) */}
              <div className="w-6 h-6 bg-[#388E3C] rounded-full" />
              {/* Line segment */}
              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 ${
                    idx < completedSteps ? "bg-[#388E3C]" : "bg-gray-300"
                  }`}
                  style={{ height: idx < completedSteps ? "4px" : "3px" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const OrderTrackingCard = ({ orderId, products, orderStatus }) => (
  <div className="border rounded-xl p-6 text-[#2B452C] shadow-around-soft bg-white ">
    {/* Top row: product + order ID */}
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center space-x-4">
        <img
          src={products[0].primary_image_url}
          alt={products[0].name}
          className="w-[163px] h-[220px] object-contain"
        />
        <div>
          <p className="text-lg font-semibold mb-2 uppercase text-[#333333] text-[29px]">
            {products[0].name}
          </p>
          <p className="text-[36px] font-bold text-[#151515] ">
            ₹{products[0].price}
          </p>
        </div>
      </div>
      <p className="text-[30px] mt-8 text-[#2B452C] font-medium">
        Order Id : {orderId}
      </p>
    </div>

    <hr className="border-t border-[#E5E5E5] mb-4" />

    {/* Pass actual orderStatus from API */}
    <StepTimeline orderStatus={orderStatus} />
  </div>
);



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
          Authorization: `Bearer ${token}`, // replace token with your auth token variable
        },
      }
    );

    const rawData = await res.json();

    // Ensure we have an array
    const ordersArray = Array.isArray(rawData) ? rawData : [rawData];

   
const groupedOrders = Object.values(
  ordersArray.reduce((acc, order) => {
    const orderId = order.razorpay_order_id;

    if (!acc[orderId]) {
      acc[orderId] = {
        razorpay_order_id: orderId,
        status: order.order_status, // store status
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

    setOrders(groupedOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};


    fetchOrders();
  }, [token]);

  return (
    <>
      <div className="min-h-screen pt-24 bg-white px-4 py-6 xxxl:px-60 xxxl:py-20 hd:px-36 laptop:px-36 font-archivo mx-auto">
        <h1 className="text-center text-[22px] font-tenor text-[#2E3A27] mb-5 hd:text-[40px] laptop:text-[36px] xxxl:text-[50px]">
          Track Order
        </h1>
        <div className="space-y-6">
         {orders.map((order) => (
 <OrderTrackingCard
  key={order.razorpay_order_id}
  orderId={order.razorpay_order_id}
  products={order.products}
  orderStatus={order.status}
/>

))}

        </div>
      </div>
      <Footer />
    </>
  );
}
