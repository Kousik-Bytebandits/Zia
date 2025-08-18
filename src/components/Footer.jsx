import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white px-4 md:px-6 py-12 font-sans">
      <div className="max-w-[90%] xxxl:max-w-[80%] mx-auto space-y-10">

        {/* Top Section */}
        <div className="flex flex-col laptop:flex-row justify-between laptop:items-start gap-10">

          {/* Logo & Address */}
          <div className="text-center lg:text-left space-y-4 laptop:w-[320px]">
            <img
              src="/images/zia_footer.webp"
              alt="Zia Logo"
              className="mx-auto laptop:mx-0 w-[140px] laptop:w-[140px] hd:w-[180px] xxxl:w-[200px]"
            />
            <p className="text-[15px] laptop:text-[14px] hd:text-[15px] xxxl:text-[17px] leading-relaxed tracking-wide whitespace-pre-line font-sans">
              {`ZIA HERBAL PRO PVT LTD.,\nISO 9001:2015 Certified Company\nNo. S-9, I Floor,\nThiru Vi Ka Industrial Estate,\nGuindy, Chennai – 600 032., Tamilnadu`}
            </p>
            <p className="font-semibold text-[14px] tracking-wider mt-2">GSTIN: 33AABCZ9392A1ZA</p>
          </div>

          {/* Link Sections */}
          <div className="flex flex-wrap justify-between lg:w-[65%] lg:mt-14 font-archivo">

            {/* Useful Links */}
            <div className="mt-6 space-y-3 min-w-[110px] text-left">
              <h3 className="text-[20px] laptop:text-[17px] font-semibold mb-2">Useful links</h3>
              <ul className="space-y-2 text-[16px] text-white tracking-wider">
                <li><Link to="/shoplist" className="hover:underline">Hand Wash</Link></li>
                <li><Link to="/shoplist" className="hover:underline">Soap</Link></li>
                <li><Link to="/shoplist" className="hover:underline">Oils</Link></li>
                <li><Link to="/shoplist" className="hover:underline">Shampoo</Link></li>
                <li><Link to="/shoplist" className="hover:underline">Serums</Link></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div className="mt-6 space-y-3 min-w-[150px] text-left">
              <h3 className="text-[20px] laptop:text-[17px] font-semibold mb-2">Customer Care</h3>
              <ul className="space-y-2 text-[16px] text-white">
                <li><Link to="/contactus" className="hover:underline">Contact Us</Link></li>
                
                <li className="flex items-center gap-2">
                  <img src="/icons/whatsapp.webp" className="w-[16px] h-[16px] -ml-6" alt="whatsapp" />
                  +91 - 8939843483
                </li>
                <li className="flex items-center gap-2 ">
                  <img src="/icons/mail.webp" className="w-[20px] h-[18px] -ml-6" alt="email" />
                  Ziaherbalpro@gmail.com
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="space-y-3 mt-6 min-w-[150px] text-left">
              <h3 className="text-[20px] laptop:text-[17px] font-semibold mb-2">Policies</h3>
              <ul className="space-y-2 text-[16px] text-white">
                <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link to="/return-refund-policy" className="hover:underline">Return & Refund Policy</Link></li>
                <li><Link to="/shipping-policy" className="hover:underline">Shipping Policy</Link></li>
                <li><Link to="/legal-compliance" className="hover:underline">Payment Policy</Link></li>
                <li><Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* About */}
            <div className="space-y-3 mt-6 min-w-[130px] text-left">
              <h3 className="text-[20px] laptop:text-[17px] font-semibold mb-2">About</h3>
              <ul className="space-y-2 text-[16px] text-white">
                <li><Link to="/about" className="hover:underline">Our Story</Link></li>
                <li><Link to="/about" className="hover:underline">Our Mission</Link></li>
                <li><Link to="/about" className="hover:underline">Our Vision</Link></li>
                <li><Link to="/about" className="hover:underline">Ingredients</Link></li>
              </ul>
            </div>

            {/* Info */}
            <div className="mt-6 space-y-3 min-w-[130px] text-left">
              <h3 className="text-[20px] laptop:text-[17px] font-semibold mb-2">Info</h3>
              <ul className="space-y-2 text-[16px] text-white">
                <li><Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
                <li><Link to="/disclaimer" className="hover:underline">Medical Disclaimer</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-400 w-full my-2" />

        {/* Footer Bottom */}
        <div className="flex flex-col laptop:flex-row justify-between items-center text-[15px] text-gray-400">
          <p>Copyright © 2025. Zia. All rights reserved.</p>
          <p className="mt-2 laptop:mt-0">Developed by ByteBandits.in</p>
        </div>
      </div>
    </footer>
  );
}
