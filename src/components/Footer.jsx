export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white px-6 py-12 font-sans">
      <div className="max-w-[1350px] mx-auto space-y-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Logo & Address */}
          <div className="lg:w-1/3 text-center lg:text-left space-y-4 lg:mb-16">
            <img
              src="images/zia_footer.png"
              alt="Zia Logo"
              className="mx-auto lg:mx-0"
            />
            <p className="text-[15px] leading-relaxed lg:leading-7 tracking-wide whitespace-pre-line">
              {`ZIA HERBAL PRO PVT LTD.,
ISO 9001:2015 Certified Company
No. S-9, I Floor,
Thiru Vi Ka Industrial Estate,
Guindy, Chennai - 600 032., Tamilnadu`}
            </p>
          </div>

          {/* Useful Links and About: Side-by-side in mobile */}
          <div className="flex flex-row sm:flex-row justify-around    gap-10 lg:gap-40 text-center lg:text-left">
            {/* Useful Links */}
            <div className="lg:mt-8 space-y-4">
              <h3 className="font-archivo text-[18px] lg:text-[20px] text-left">Useful links</h3>
              <ul className="space-y-3 text-[15px] lg:text-[16px] text-left">
                <li>Body Care</li>
                <li>Facial Care</li>
                <li>Hair Care</li>
                <li>Personal Hygiene</li>
              </ul>
            </div>

            {/* About */}
            <div className="lg:mt-8 space-y-4">
              <h3 className="font-archivo text-[18px] lg:text-[20px] text-left">About</h3>
              <ul className="space-y-3 text-[15px] lg:text-[16px] text-left">
                <li>Our Story</li>
                <li>Gift Card</li>
                <li>Team</li>
              </ul>
            </div>
          </div>

          {/* Contact Us: Stays on side in desktop, moves below in mobile */}
          <div className="lg:mt-8 text-center lg:text-left space-y-4 order-last lg:order-none">
            <h3 className="font-archivo text-[18px] lg:text-[20px]">Contact Us</h3>
            <div className="mr-5 lg:mr-0 flex items-center justify-center lg:justify-start gap-2 text-[15px]">
              <img src="icons/whatsapp.png" className="w-5 h-5" alt="whatsapp" />
              <span>+91 - 8939843483</span>
            </div>
            <div className="ml-5 lg:ml-0 lg:tracking-wider flex items-center justify-center lg:justify-start gap-2 text-[15px]">
              <img src="icons/mail.png" className="w-6" alt="email" />
              <span>Ziaherbalpro@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 lg:hidden" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-gray-400 text-[14px] lg:tracking-[0.1rem] lg:text-[15px] mt-6 space-y-4 lg:space-y-0 text-center">
          <p>Copyright © 2025. Zia. All rights reserved.</p>
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-20 text-white text-[15px]">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
