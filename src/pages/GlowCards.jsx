import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function GlowCards() {
  const navigate = useNavigate();
  useEffect(() => {
  AOS.init({
    duration: 1000,  
    once: true       
    });
}, []);
  const cards = [
    {
      title: "BEAUTY GLOW",
      description:
        "Reveal your natural radiance with Zia Herbal’s Face Packs and Soaps. Formulated with ingredients like Papaya, Aloe Vera, and Hibiscus to brighten your skin and restore your natural beauty.",
      icon: "images/pot.webp",
      bg: "bg-[#F8F2F0]",
      textColor: "text-black",
      button: false,
    },
    {
      title: "NATURE GLOW",
      description: "",
      icon: "images/nature.webp",
      bg: "bg-[#2B452C]",
      textColor: "text-white",
      button: true,
    },
    {
      title: "FLAWLESS GLOW",
      description:
        "Achieve smooth, even-toned, and flawless skin. The Zia Radiance Boost Solution and Face Packs help reduce dullness and enhance your skin’s natural glow without harsh chemicals.",
      icon: "images/sun.webp",
      bg: "bg-[#F8F2F0]",
      textColor: "text-black",
      button: false,
    },
    {
      title: "SUN GLOW",
      description:
        "Protect and hydrate your skin under the sun. Zia’s herbal formulations, including Aloe Vera and Rose Soaps, soothe sun-exposed skin while maintaining moisture and radiance throughout the day.",
      icon: "images/flawless.webp",
      bg: "bg-[#F8F2F0]",
      textColor: "text-black",
      button: false,
    },
  ];
 
  const handleChange=()=>{
    navigate('/shoplist');
  }
  return (
 <div className="mx-auto px-6 laptop:px-10 hd:px-14 xxxl:px-20 py-10 space-y-8 lg:mt-20">
  <h2
    data-aos="fade-up"
    data-aos-delay="100"
    className="text-center text-[24px] laptop:text-[26px] hd:text-[28px] xxxl:text-[32px] lg:mb-20 font-tenor tracking-widest text-[#676A5E]"
  >
    GET YOUR BEAUTY & GLOW
  </h2>

  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="lg:flex lg:justify-evenly space-y-8 lg:space-y-0 lg:gap-6"
  >
    {cards.map((card, index) => (
      <div
        key={index}
        className={`h-[400px] laptop:h-[330px] hd:h-[380px] xxxl:h-[460px] 
                    w-full lg:w-[370px] laptop:w-[380px] hd:w-[395px] xxxl:w-[415px]
                    rounded-xl p-6 laptop:p-5 hd:p-8 xxxl:p-10 
                    ${card.bg} ${card.textColor} 
                    flex flex-col justify-evenly items-center text-center`}
      >
        <img
          src={card.icon}
          alt={card.title}
          className={`h-auto mb-4 ${
            card.title === "NATURE GLOW" ? "-mt-8" : "mt-0"
          }`}
        />

        <h3
          className={`text-[22px] laptop:text-[18px] hd:text-[22px] xxxl:text-[26px] font-tenor tracking-wide ${
            card.title === "NATURE GLOW" ? "text-white -mt-6" : "text-[#676A5E]"
          }`}
        >
          {card.title}
        </h3>

        {card.description && (
          <p className="text-[14px] laptop:text-[12px] hd:text-[14px] xxxl:text-[17px] w-[95%] text-[#676A5E] font-archivo leading-relaxed">
            {card.description}
          </p>
        )}

        {card.button && (
          <button
            onClick={handleChange}
            className="mt-2 w-[55%] py-3 laptop:py-2 xxxl:py-3 bg-white text-[#676A5E] text-[14px] rounded-full font-tenor xxxl:text-[16px] laptop:text-[12px] hd:text-[14px]"
          >
            View Items <span className="text-lg ml-2">→</span>
          </button>
        )}
      </div>
    ))}
  </div>
</div>

  );
}
