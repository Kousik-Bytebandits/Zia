import Footer from "../components/Footer";

export default function AboutUs() {
  const testimonials = [
    {
      name: "David Edward",
      location: "Chennai",
      gender: "male",
      comment:
        "Avarampoo soap is really refreshing! I just liked this soap and its fragrance.",
    },
    {
      name: "Jenifer Nisha",
      location: "Kerala",
      gender: "female",
      comment:
        "Hair shampoo is works amazing for hair, removes dirt and treats hair and scalp really well. My hair are more manageable and healthier than before.",
    },
    {
      name: "Hari Haran",
      location: "Chennai",
      gender: "male",
      comment:
        "Zia Herbals has changed my wellness routine for the better. Their products are 100% natural and actually work.",
    },
    {
      name: "Naresh Sudhan",
      location: "Tirunelveli",
      gender: "male",
      comment:
        "Lavender soap colour seems to be appealing and fragrance is amazing.",
    },
    {
      name: "Yogesh",
      location: "Chennai",
      gender: "male",
      comment:
        "Massage oil is good, relieves pain and stress relieving.",
    },
    {
      name: "Dhanya",
      location: "Kodaikanal",
      gender: "female",
      comment:
        "Lip Balm removes tan from lips after using a week. I can feel the difference.",
    },
    {
      name: "Dharshini",
      location: "Chennai",
      gender: "female",
      comment:
        "Zia Crack Heel Balm provided noticeable relief from heel cracks within days, leaving my feet smooth, moisturized, and comfortable.",
    },
    {
      name: "Siva Ranjan",
      location: "Chennai",
      gender: "male",
      comment:
        "The face mask nourished my skin, has reduced pimples. Thank you Zia.",
    },
    {
      name: "Johara Amirdheen",
      location: "Chennai",
      gender: "female",
      comment:
        "Calendula handwash make my hands feel nice. I can still smell it after washing, my hands feel so soft",
    },
  ];

  return (
    <>
      {/* ABOUT US SECTION */}
      <div className="lg:flex  lg:justify-between lg:px-20 px-4 mt-[25%] lg:mt-[5%] mb-20">
        {/* LEFT TEXT */}
        <div className="lg:w-[55%]  space-y-6 text-[#676A5E] font-archivo">
          <h1 className="text-[30px] font-tenor text-center xxxl:text-[50px] laptop:text-[30px] hd:text-[40px]">About Us</h1>
          <h2 className="text-[20px] xxxl:text-[32px] laptop:text-[20px] hd:text-[24px] uppercase tracking-widest font-tenor text-center lg:text-left">
            Where Nature Meets Science to Bring You Honest, Nourishing Skincare
          </h2>
          <p className="text-[14px] xxxl:text-[18px] laptop:text-[14px] hd:text-[16px] leading-relaxed text-left">
            At Zia, we believe in crafting high-quality skincare products that combine the purity of nature with the power of science. Born out of a passion for wellness and authenticity, Zia offers herbal soaps and personal care items made with love, care, and transparency. We aim to bring beauty and nourishment into everyday lives, using ingredients you can trust and feel good about.
          </p>

          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="lg:w-1/2">
              <h2 className="text-[20px] xxxl:text-[50px] laptop:text-[30px] hd:text-[40px] font-tenor">Our Mission</h2>
              <p className="text-[14px] xxxl:text-[19px] laptop:text-[14px] hd:text-[16px] leading-relaxed">
                To deliver safe, skin-loving products that celebrate nature, empower self-care, and uplift our customers’ confidence through purity and sustainability.
              </p>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-[20px] xxxl:text-[50px] laptop:text-[30px] hd:text-[40px] font-tenor">Our Vision</h2>
              <p className="text-[14px] xxxl:text-[19px] laptop:text-[14px] hd:text-[16px] leading-relaxed">
                To be a trusted and leading natural skincare brand in India, known for quality, transparency, and customer connection.
              </p>
            </div>
          </div>

        <div className="flex flex-wrap justify-between lg:gap-6 pt-4">
  {/* 1st Item */}
  <div className="flex flex-col items-center text-center gap-2 laptop:flex-row laptop:text-left laptop:items-center">
    <img
      src="images/drops.png"
      className="w-[60px] xxxl:w-[80px] laptop:w-[60px] hd:w-[70px]"
    />
    <p className="text-[14px] xxxl:text-[20px] laptop:text-[14px] hd:text-[16px]">
      Glow Naturally,<br />Live Authentically
    </p>
  </div>

  {/* 2nd Item */}
  <div className="flex flex-col items-center text-center gap-2 laptop:flex-row laptop:text-left laptop:items-center">
    <div className="border rounded-full border-[#B2BA98] w-[60px] h-[60px] xxxl:w-[80px] laptop:w-[60px] laptop:h-[60px] xxxl:h-[80px] hd:w-[70px] hd:h-[70px] flex items-center justify-center">
      <img
        src="images/fs.png"
        className="w-[35px] h-[40px] xxxl:w-[45px] xxxl:h-[50px] laptop:w-[35px] laptop:h-[40px] hd:w-[40px] hd:h-[45px]"
      />
    </div>
    <p className="text-[14px] xxxl:text-[20px] laptop:text-[14px] hd:text-[16px]">
      Gentle on Skin,<br />Strong in Purpose
    </p>
  </div>

  {/* 3rd Item */}
  <div className="flex flex-col items-center text-center gap-2 laptop:flex-row laptop:text-left laptop:items-center">
    <img
      src="images/leaf.png"
      className="w-[60px] xxxl:w-[80px] laptop:w-[60px] hd:w-[70px]"
    />
    <p className="text-[14px] xxxl:text-[20px] laptop:text-[14px] hd:text-[16px]">
      Powered by Nature,<br />Backed by Science
    </p>
  </div>
</div>



        <div className="hidden lg:flex lg:justify-around lg:items-center py-10">
          <button className="bg-black font-tenor text-white xxxl:w-[18%] laptop:w-[25%] xxxl:py-4 laptop:py-3 rounded-full text-[16px]">
            Contact Us →
          </button>
          <img src="images/review.png" alt="Reviews" className="max-w-[350px]" />
        </div>

        {/* Review image for mobile */}
        <div className="flex items-center justify-center lg:hidden block">
          <img src="images/review.png" alt="Reviews" className="lg:max-w-[350px] lg:my-5 max-w-[300px] my-10" />
        </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-[40%] pt-10 lg:pt-0">
          <img src="images/bg_lemon.png" className="rounded-xl object-contain w-full" />
        </div>
      </div>

      {/* REVIEW IMAGE MOBILE */}
      
      <div className="flex items-center justify-center lg:hidden">
        <img src="images/review.png" className="max-w-[300px] my-10" />
      </div>

      {/* SPECIAL PRODUCTS */}
      <div className="bg-white px-4 py-16">
        <h2 className="text-center text-[32px] font-tenor uppercase tracking-widest text-[#676A5E] mb-10">
          Our Special Products
        </h2>

        <div className="flex flex-col lg:flex-row lg:space-x-14 lg:justify-center space-y-8 lg:space-y-0 text-center">
          {["herbal-handwash", "herbal-shampoo", "herbal-soap"].map((img, idx) => (
            <div key={idx} className="relative xxxl:w-[500px] xxxl:h-[340px] laptop:w-[350px] laptop:h-[250px] hd:w-[400px] hd:h-[280px] w-full h-[200px]">
              <img src={`images/${img}.png`} alt={img} className="w-full h-full" />
              <div className="backdrop-blur-sm tracking-widest font-tenor uppercase w-full absolute bottom-0 lg:py-4 py-2 left-1/2 transform -translate-x-1/2 bg-white/70 text-[#1F1F1F] text-[24px]">
                {img.replace("herbal-", "Herbal ").replace("-", " ")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="lg:mt-20 p-6 text-left lg:text-center mb-10">
        <h2 className="text-[#686257] font-tenor text-[24px] lg:text-[32px] tracking-widest mb-10 uppercase">
          Customer Support Feedback
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-24 lg:mb-40">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col text-left text-[#686257]">
              <img src="images/quotes.png" alt="Quotes" className="mb-4 " />
              <p className="font-archivo text-black text-[16px] leading-relaxed">
                {item.comment}
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <img
                  src={item.gender === "male" ? "images/male.png" : "images/female.png"}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-[16px] font-archivo">
                  {item.name} - {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
