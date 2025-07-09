import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white px-6 py-12 font-sans">
      <div className="max-w-[75%] mx-auto space-y-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between  gap-10">

          {/* Logo & Address */}
          <div className="lg:w-1/3 text-center lg:text-left space-y-4 lg:mb-16">
            <img
              src="images/zia_footer.png"
              alt="Zia Logo"
              className="mx-auto lg:mx-0 w-[140px] laptop:w-[140px] hd:w-[180px] xxxl:w-[200px]"
            />
            <p className="text-[15px] laptop:text-[14px] hd:text-[15px] xxxl:text-[18px] leading-relaxed lg:leading-7 tracking-wide whitespace-pre-line">
              {`ZIA HERBAL PRO PVT LTD.,
ISO 9001:2015 Certified Company
No. S-9, I Floor,
Thiru Vi Ka Industrial Estate,
Guindy, Chennai - 600 032., Tamilnadu`}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-row sm:flex-row justify-around gap-10 lg:gap-40 text-center lg:text-left">

            {/* Useful Links */}
            <div className="lg:mt-8 space-y-4">
              <h3 className="font-archivo text-[18px] laptop:text-[19px] hd:text-[20px] xxxl:text-[21px] text-left">Useful links</h3>
              <ul className="space-y-3 text-[15px] laptop:text-[16px] hd:text-[17px] xxxl:text-[18px] font-archivo text-left">
                <li><Link to="/shoplist" className="hover:underline hover:text-[#00FF94]">Skin Care</Link></li>
                <li><Link to="/shoplist" className="hover:underline hover:text-[#00FF94]">Hair Care</Link></li>
                <li><Link to="/ordertracking" className="hover:underline hover:text-[#00FF94]">Track Order</Link></li>
              </ul>
            </div>

            {/* About */}
            <div className="lg:mt-8 space-y-4">
              <h3 className="font-archivo text-[18px] laptop:text-[19px] hd:text-[20px] xxxl:text-[21px] text-left">About</h3>
              <ul className="space-y-3 text-[15px] laptop:text-[16px] hd:text-[17px] xxxl:text-[18px] text-left">
                <li><Link to="/about" className="hover:underline hover:text-[#00FF94]">About Us</Link></li>
                <li><Link to="/contactus" className="hover:underline hover:text-[#00FF94]">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:mt-8 font-archivo text-center lg:text-left space-y-4 order-last lg:order-none">
            <h3 className="text-[18px] laptop:text-[19px] hd:text-[20px] xxxl:text-[21px]">Contact Us</h3>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[15px] laptop:text-[16px]">
              <img src="icons/whatsapp.png" className="w-5 h-5" alt="whatsapp" />
              <span>+91 - 8939843483</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[15px] laptop:text-[16px]">
              <img src="icons/mail.png" className="w-6" alt="email" />
              <span>Ziaherbalpro@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 lg:hidden" />

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-gray-400 text-[14px] laptop:text-[12px] hd:text-[14px] xxxl:text-[17px] tracking-wide mt-6 space-y-4 lg:space-y-0 text-center">
          <p>© 2025. Zia. All rights reserved.</p>
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-20 text-white l">
            <p className="hover:text-[#00FF94] cursor-pointer">Terms & Conditions</p>
            <p className="hover:text-[#00FF94] cursor-pointer">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
