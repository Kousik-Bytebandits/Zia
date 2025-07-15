import Footer from "../components/Footer";
import { useState } from "react";
import endpoint_prefix from "../config/ApiConfig";
import NotificationPopup from "./NotificatioPopup"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

   const [popup, setPopup] = useState({
    show: false,
    type: "success",
    message: "",
  });

  const showPopup = (type, message) => {
    setPopup({ show: true, type, message });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(formData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${endpoint_prefix}05_contact/submit-form`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        showPopup("success","Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        showPopup("error","Failed to send message.");
      });
  };


  return (
    <>
      <div className="pt-[17%] lg:pt-[0] bg-white  text-[#676A5E] w-full text-[#4A4A4A] font-archivo py-3">
        {/* Top Image */}
        <div className="w-full">
          <img
            src="/images/header-products.png"
            alt="Products Header"
            className="h-[185px] xxxl:h-[884px] laptop:h-[600px] hd:h-[700px] mx-auto w-full object-cover"
          />
        </div>

        {/* Contact Info + Form Section */}
     {/* Main Section */}
<div className="w-full px-6 py-10 lg:px-16 lg:py-20 bg-white">
  <h2 className="lg:text-center  text-[16px] xxxl:text-[60px] laptop:text-[32px] hd:text-[40px] text-left mb-2 lg:mb-10">Contact Us</h2>

  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-y-10 lg:gap-x-4 items-start">


    {/* Left Column - Contact Info */}
    <div className="lg:ml-20 ">
      <h2 className="text-[23px] xxxl:text-[32px] laptop:text-[24px] hd:text-[28px] font-tenor tracking-widest mb-2">OUR BRANCH OFFICE</h2>
      <p className="text-[16px] xxxl:text-[30px] laptop:text-[18px] hd:text-[20px] mb-6">Chennai Head office</p>

      {/* Visit Branch */}
      <div className="flex items-start gap-4 mb-6">
        <img src="/icons/loc.png" alt="Location" className="mt-2" />
        <div>
          <p className="text-[16px] xxxl:text-[26px] laptop:text-[16px] hd:text-[18px] font-bold tracking-wide uppercase">Visit Our Office Branch</p>
          <p className="text-[14px] xxxl:text-[24px] laptop:text-[14px] hd:text-[16px] mt-2">
            ZIA HERBAL PRO PVT LTD.,<br />
            ISO 9001:2015 Certified Company<br />
            No. 5-9, I Floor,<br />
            Thiru Vi Ka Industrial Estate,<br />
            Guindy, Chennai - 600 032, Tamilnadu
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4 mb-6">
        <img src="/icons/e-mail.png" alt="Email" className="mt-2" />
        <div>
          <p className="text-[16px] xxxl:text-[26px] laptop:text-[16px] hd:text-[18px] font-bold tracking-wide uppercase">Mail Us</p>
          <p className="text-[14px] xxxl:text-[24px] laptop:text-[14px] hd:text-[16px] mt-2">ziaherbalpro@gmail.com</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4 mb-6">
        <img src="/icons/call.png" alt="Call" className="mt-2" />
        <div>
          <p className="text-[16px] xxxl:text-[26px] laptop:text-[16px] hd:text-[18px] font-bold tracking-wide uppercase">Contact Us</p>
          <p className="text-[14px] xxxl:text-[24px] laptop:text-[14px] hd:text-[16px] mt-2">+91 - 8939834383</p>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="flex items-start gap-4 mb-6">
        <img src="/icons/w-app.png" alt="WhatsApp" className="mt-2" />
        <div>
          <p className="text-[16px] xxxl:text-[26px] laptop:text-[16px] hd:text-[18px] font-bold tracking-wide uppercase">Reach Us Via WhatsApp</p>
          <p className="text-[14px] xxxl:text-[24px] laptop:text-[14px] hd:text-[16px] mt-2">+91 - 8939834383</p>
        </div>
      </div>
       <div className="flex items-start gap-4">
        <img src="/icons/clock.png" alt="Office timing" className="mt-2" />
        <div>
          <p className="text-[16px] xxxl:text-[26px] laptop:text-[16px] hd:text-[18px] font-bold tracking-wide uppercase">Office Timings</p>
          <p className="text-[14px] xxxl:text-[24px] laptop:text-[14px] hd:text-[16px] mt-2">10 am - 5:00 pm</p>
        </div>
      </div>
    </div>

    {/* Mobile Map View - Above Form */}
<div className="block lg:hidden mb-8 mt-10">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4156299442507!2d80.20612547598967!3d13.009183487309697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267145aaaaaab%3A0x1d2abba58b5d7aba!2sZIA%20HERBAL%20PRO%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1752570630044!5m2!1sen!2sin%22"
    width="100%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg"
  ></iframe>
</div>


    {/* Right Column - Form */}
  <div className="w-full  ">
 

  
  <p className="mb-4 text-[16px] font-semibold text-center lg:text-left xxxl:text-[30px] laptop:text-[18px] hd:text-[20px]">
    Leave us a message and we’ll get back to you
  </p>

  <form  onSubmit={handleSubmit} className="space-y-4 bg-white border border-[#B2BA98] p-6  rounded-xl w-full ">
    {/* Name & Contact Inputs */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <label className="hidden lg:block text-black text-[16px] mb-2">First Name*</label>
       <input
  type="text"
  name="firstName"
  placeholder="First Name*"
  required
  value={formData.firstName}
  onChange={handleChange}
    className="w-full bg-[#E6F2E9] border border-[#8EB490] rounded-md p-4 xxxl:p-4 laptop:p-2 hd:p-2 placeholder:text-[#41734C66] text-[18px] outline-none"
/>
      </div>
      

      <div>
        <label className="hidden lg:block text-black text-[16px] mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
  placeholder="Last Name"
  value={formData.lastName}
  onChange={handleChange}
          className="w-full bg-[#E6F2E9] border border-[#8EB490] rounded-md p-4 xxxl:p-4 laptop:p-2 hd:p-2 placeholder:text-[#41734C66] text-[18px] outline-none"
        />
      </div>
      <div>
        <label className="hidden lg:block text-black text-[16px] mb-2">Email Address*</label>
        <input
          type="email"
           name="email"
  placeholder="Email Address*"
  required
  value={formData.email}
  onChange={handleChange}
          className="w-full bg-[#E6F2E9] border border-[#8EB490] rounded-md p-4 xxxl:p-4 laptop:p-2 hd:p-2 placeholder:text-[#41734C66] text-[18px] outline-none"
       
        />
      </div>
      <div>
        <label className="hidden lg:block text-black text-[16px] mb-2">Phone Number</label>
        <input
          type="text"
         name="phoneNumber"
  placeholder="Phone Number"
  value={formData.phoneNumber}
  onChange={handleChange}
          className="w-full bg-[#E6F2E9] border border-[#8EB490] rounded-md p-4 xxxl:p-4 laptop:p-2 hd:p-2 placeholder:text-[#41734C66] text-[18px] outline-none"
        />
      </div>
    </div>

    {/* Message Textarea */}
    <div>
      <label className="hidden lg:block text-black text-[16px] mb-2">Message*</label>
      <textarea
       name="message"
  placeholder="Message*"
  required
  value={formData.message}
  onChange={handleChange}
        className="w-full hd:h-[200px] laptop:h-[150px] xxxl:h-[300px] h-[150px] bg-[#E6F2E9] border border-[#8EB490] rounded-md p-4 xxxl:p-4 laptop:p-2 hd:p-2 placeholder:text-[#41734C66] text-[18px] outline-none resize-none"
      />
    </div>

    {/* Submit Button */}
    <div className="pt-4 w-[60%] lg:w-[30%] mx-auto">
      <button
        type="submit"
        className="w-full font-tenor text-[14px] xxxl:text-[18px] laptop:text-[14px] bg-black text-white py-4 xxxl:p-5 laptop:p-4 hd:p-4 rounded-full hover:opacity-90"
      >
        Send Message
        <span className="ml-4">→</span>
      </button>
    </div>
  </form>
</div>

  </div>
</div>

{/* Features Row Below */}
<div className="hidden lg:flex items-start justify-evenly w-full mt-20 mb-20">
  <div className="flex w-full max-w-[1400px] mx-auto text-center divide-x divide-[#B2BA98]">
    {/* Returns */}
    <div className="w-1/3 px-6">
      <img src="/icons/return-icon.png" alt="Returns" className="mx-auto mb-4" />
      <h4 className="uppercase lg:text-[20px] tracking-widest mb-2 text-[#676A5E] font-tenor">Returns & Exchange</h4>
      <p className="text-[14px] lg:text-[16px] text-[#676A5E]">
        Hassle-free returns and easy exchanges within 30<br/> days of purchase.
      </p>
    </div>
    {/* Shipping */}
    <div className="w-1/3 px-6">
      <img src="/icons/shipping-icon.png" alt="Shipping" className="mx-auto mb-4" />
      <h4 className="uppercase tracking-widest mb-2 text-[#676A5E] lg:text-[20px] font-tenor">Fast Shipping</h4>
      <p className="text-[14px] lg:text-[16px] text-[#676A5E]">
        Get your order delivered quickly with our reliable,<br/> express shipping service.
      </p>
    </div>
    {/* Support */}
    <div className="w-1/3 px-6">
      <img src="/icons/support-icon.png" alt="Support" className="mx-auto mb-4" />
      <h4 className="uppercase tracking-widest mb-2 lg:text-[20px] text-[#676A5E] font-tenor">Support 24 / 7</h4>
      <p className="text-[14px] lg:text-[16px] text-[#676A5E]">
        Our customer support team is here for you anytime, <br/>day or night.
      </p>
    </div>
  </div>
</div>

{/* Desktop Map View - Below Features */}
<div className="hidden lg:block w-full  px-4 lg:px-16 mb-16">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4156299442507!2d80.20612547598967!3d13.009183487309697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267145aaaaaab%3A0x1d2abba58b5d7aba!2sZIA%20HERBAL%20PRO%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1752570630044!5m2!1sen!2sin%22"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className=" shadow-lg h-[700px]"
  ></iframe>
</div>



 <div className="text-center px-6 lg:hidden">
      <img src="/icons/return-icon.png" alt="Returns" className="mx-auto mb-4" />
      <h4 className="uppercase lg:text-[20px] tracking-widest mb-2 text-[#676A5E] text-[18px] font-tenor">
        Returns & Exchange
      </h4>
      <p className="text-[16px] lg:text-[16px] text-[#676A5E]">
        Hassle-free returns and easy exchanges within 30<br/> days of purchase.
      </p>
    </div>
<div className="text-center px-6 py-10 lg:hidden">
  
  <img
    src="/icons/shipping-icon.png"
    alt="Shipping Icon"
    className="mx-auto mb-6"
  />
  <h4 className="uppercase tracking-widest mb-4 text-[#676A5E] text-[20px] font-tenor">
    Fast Shipping
  </h4>
  <p className="text-[16px] text-[#676A5E] leading-snug">
   Get your order delivered quickly with our reliable,<br/> express shipping service.
  </p>
</div>
 <div className="text-center px-6 mb-10 lg:hidden">
      <img src="/icons/support-icon.png" alt="Support" className="mx-auto mb-4" />
      <h4 className="uppercase tracking-widest mb-2 lg:text-[20px] text-[#676A5E] text-[18px] font-tenor">
        Support 24 / 7
      </h4>
      <p className="text-[16px] text-[#676A5E] lg:text-[16px]">
        Our customer support team is here for you anytime,<br/> day or night.
      </p>
    </div>
     <NotificationPopup
        show={popup.show}
        type={popup.type}
        message={popup.message}
        onClose={() => setPopup({ ...popup, show: false })}
      />
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
