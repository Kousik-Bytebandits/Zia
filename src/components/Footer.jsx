
export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white px-12 py-8   font-sans">
     
      <div className="mb-8 text-center">
        <div className="mb-6">
          <img
            src="images/zia_footer.png"
            alt="Zia Logo"
            className="mx-auto "
          />
        </div>
        <p className="text-[15px] leading-normal tracking-wider whitespace-pre-line">
          {`ZIA HERBAL PRO PVT LTD.,
ISO 9001:2015 Certified Company
No. S-9, I Floor,
Thiru Vi Ka Industrial Estate,
Guindy, Chennai - 600 032.,
Tamilnadu`}
        </p>
      </div>

     
      <div className="flex justify-between mb-8 text-left">
        <div>
          <h3 className=" font-archivo tracking-wider text-[20px] mb-3">Useful links</h3>
          <ul className="space-y-4 text-[15px]">
            <li>Body Care</li>
            <li>Facial Care</li>
            <li>Hair Care</li>
            <li>Personal Hygiene</li>
          </ul>
        </div>

        <div className="mb-20">
          <h3 className="font-archivo tracking-wider text-[20px] mb-3">About</h3>
          <ul className="space-y-4 text-[15px]">
            <li>Our Story</li>
            <li>Gift Card</li>
            <li>Team</li>
          </ul>
        </div>
      </div>

      
      <div className="mb-8  space-y-3 text-center text-[16px] font-archivo ">
        <h3 className="mb-4  text-[20px]">Contact Us</h3>
        <div className="flex mr-8 items-center justify-center gap-2 tracking-wider">
          <img src="icons/whatsapp.png"></img>
          <span>+91 - 8939843483</span>
        </div>
        <div className="flex items-center ml-3 justify-center gap-2 tracking-wider">
          <img src="icons/mail.png" className="w-6"></img>
          <span>Ziaherbalpro@gmail.com</span>
        </div>
      </div>
  
      <hr className="border-gray-200 mb-12 mt-12 " />

      <div className="text-[14px] text-gray-400 space-y-3 text-center flex flex-col items-center">
        <p>Copyright © 2025. Zia. All rights reserved.</p>
        <p className="text-white text-[15px]  inline-block">Terms & Conditions</p>
        <p className="text-white   inline-block">Privacy Policy</p>
      </div>
    </footer>
  );
}
