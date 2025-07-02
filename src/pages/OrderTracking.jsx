import  { useState } from "react";
import Footer from "../components/Footer";

export default function OrderTracking() {
  const [shipmentId, setShipmentId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
    <div className="h-[75vh] pt-20 lg:h-[90vh] flex flex-col justify-center items-center bg-white px-4 text-center">
      {/* Header */}
      <p className=" font-tenor mb-2 text-[40px] lg:hidden">Order Tracking</p>
      <p className="font-archivo text-[20px] text-[#676A5E] hidden lg:block tracking-wide mb-10">Track Your Shipment</p>
      <h1 className="text-[16px] lg:text-[34px] font-tenor lg:tracking-[0.2em] tracking-[0.1em] text-[#676A5E] uppercase mb-12">
        Need to see your shipment?
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md  lg:max-w-2xl space-y-10">
        {/* Shipment ID */}
        <div className="relative">
          <input
            type="text"
            value={shipmentId}
            onChange={(e) => setShipmentId(e.target.value)}
            placeholder="Enter Shipment ID no"
            className="w-full text-center text-[28px] placeholder-[#B2BA98] font-archivo border-b-2 border-[#676A5E] focus:outline-none pb-6"
          />
          <p className="text-[14px] lg:text-[18px] font-archivo text-[#676A5E] mt-2 ">
            For multiple queries use commas (,) eg: 79034111122, 79034111041
          </p>
        </div>

        {/* Email */}
        <div className="relative ">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email ID"
            className="w-full text-center text-[28px] placeholder-[#B2BA98] font-archivo border-b-2 lg:mt-12 border-[#676A5E] focus:outline-none pb-6"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white text-[16px] font-tenor px-7 py-4 rounded-full flex items-center justify-center mx-auto"
        >
          Submit Now <span className="ml-2 text-lg">→</span>
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
}
