import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="bg-white  text-[#676A5E] w-full text-[#4A4A4A] font-archivo py-3">
        {/* Top Image */}
        <div className="w-full">
          <img
            src="/images/header-products.png"
            alt="Products Header"
            className="h-[185px] lg:h-[884px] mx-auto w-full object-cover"
          />
        </div>

        {/* Contact Info + Form Section */}
        <div className="p-6 lg:flex lg:justify-center lg:items-start lg:gap-20">
          {/* Left Contact Info */}
          <div className="lg:w-[600px] lg:mt-28 ">
            <p className="text-[16px] mb-4">Contact Us</p>

            <h2 className="text-[24px] lg:text-[32px] mb-8 font-tenor leading-tight tracking-widest">
              OUR BRANCH <br /> OFFICE -
            </h2>

            <h3 className="text-[#B2BA98] lg:text-[20px] mb-8 tracking-widest font-tenor text-[18px] uppercase">
              Mumbai Head Office
            </h3>

            {/* Chat */}
            <div className=" flex items-start gap-4 mb-10">
              <img src="/icons/chat-icon.png" alt="Chat "className="lg:mt-2" />
              <div>
                <p className="lg:text-[20px] uppercase text-[14px] font-tenor tracking-widest">Chat To Us</p>
                <p className="lg:text-[20px] text-[14px] mt-2 tracking-wider">Info@example.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 mb-10">
              <img src="/icons/location-icon.png" alt="Location" className="lg:mt-2"/>
              <div>
                <p className="lg:text-[20px] uppercase text-[14px] font-tenor tracking-widest">Visit Our Office Branch</p>
                <p className="lg:text-[20px] text-[14px] mt-2 tracking-wider">
                  800 Nicollet Mall, Minneapolis, MN 55402,<br />United States
                </p>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-start gap-4">
              <img src="/icons/call-icon.png" alt="Call"className="lg:mt-2" />
              <div>
                <p className="lg:text-[20px] uppercase text-[14px] font-tenor tracking-widest">Call Us</p>
                <p className="lg:text-[20px] text-[14px] mt-2 tracking-wider">+1 502-240-6226 / +1 502-350-7116</p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="mt-10 lg:mt-16 ">
            <form className="border border-[#B2BA98] lg:w-[890px] lg:h-[700px] rounded-xl p-6 space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border-b border-[#B2BA98] outline-none py-3 lg:py-5 text-[16px] placeholder:text-[#676A5E]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border-b border-[#B2BA98] outline-none py-3 lg:py-5 text-[16px] placeholder:text-[#676A5E]"
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full border-b border-[#B2BA98] outline-none py-3 lg:py-5 text-[16px] placeholder:text-[#676A5E]"
                />
                <input
                  type="email"
                  placeholder="Email id"
                  className="w-full border-b border-[#B2BA98] outline-none py-3 lg:py-5 text-[16px] placeholder:text-[#676A5E]"
                />
              </div>

              <textarea
                rows="12"
                placeholder="Message"
                className="w-full hidden lg:block border-b border-[#B2BA98] outline-none py-3 text-[16px] placeholder:text-[#676A5E] resize-none"
              />
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full lg:hidden border-b border-[#B2BA98] outline-none py-3 text-[16px] placeholder:text-[#676A5E] resize-none"
              />

              <div className="flex justify-center pt-4 lg:justify-start  lg:pt-16">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2"
                >
                  Send Message <span className="text-lg">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>

{/* Desktop Footer Section with Lines */}
<div className="hidden lg:flex items-start justify-evenly w-full lg:mt-20 mb-20">
  <div className="flex w-full max-w-8xl text-center divide-x divide-[#B2BA98]">
    {/* Returns */}
    <div className="w-1/3 px-6">
      <img src="/icons/return-icon.png" alt="Returns" className="mx-auto mb-4" />
      <h4 className="uppercase lg:text-[20px] tracking-widest mb-2 text-[#676A5E] text-[18px] font-tenor">
        Returns & Exchange
      </h4>
      <p className="text-[14px] lg:text-[16px] text-[#676A5E]">
        Duis aute irure dolor in reprehenderit in voluptate <br />
        velit esse cillum dolore eu nulla pariatur.
      </p>
    </div>

    {/* Fast Shipping */}
    <div className="w-1/3 px-6">
      <img src="/icons/shipping-icon.png" alt="Shipping" className="mx-auto mb-4" />
      <h4 className="uppercase tracking-widest mb-2 text-[#676A5E] lg:text-[20px] text-[18px] font-tenor">
        Fast Shipping
      </h4>
      <p className="text-[14px] text-[#676A5E] lg:text-[16px]">
        Duis aute irure dolor in reprehenderit in voluptate <br />
        velit esse cillum dolore eu nulla pariatur.
      </p>
    </div>

    {/* Support */}
    <div className="w-1/3 px-6">
      <img src="/icons/support-icon.png" alt="Support" className="mx-auto mb-4" />
      <h4 className="uppercase tracking-widest mb-2 lg:text-[20px] text-[#676A5E] text-[18px] font-tenor">
        Support 24 / 7
      </h4>
      <p className="text-[14px] text-[#676A5E] lg:text-[16px]">
        Duis aute irure dolor in reprehenderit in voluptate <br />
        velit esse cillum dolore eu nulla pariatur.
      </p>
    </div>
  </div>
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
    Duis aute irure dolor in reprehenderit in voluptate <br />
    velit esse cillum dolore eunulla pariatur.
  </p>
</div>

      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
