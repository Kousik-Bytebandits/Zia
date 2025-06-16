import { useNavigate } from "react-router-dom";

export default function GlowCards() {
  const navigate = useNavigate();
  const cards = [
    {
      title: "BEAUTY GLOW",
      description:
        "Reveal your natural radiance with Zia Herbal’s Face Packs and Soaps. Formulated with ingredients like Papaya, Aloe Vera, and Hibiscus to brighten your skin and restore your natural beauty.",
      icon: "images/pot.png",
      bg: "bg-[#F8F2F0]",
      textColor: "text-black",
      button: false,
    },
    {
      title: "NATURE GLOW",
      description: "",
      icon: "images/nature.png",
      bg: "bg-[#2B452C]",
      textColor: "text-white",
      button: true,
    },
    {
      title: "FLAWLESS GLOW",
      description:
        "Achieve smooth, even-toned, and flawless skin. The Zia Radiance Boost Solution and Face Packs help reduce dullness and enhance your skin’s natural glow without harsh chemicals.",
      icon: "images/sun.png",
      bg: "bg-[#F8F2F0]",
      textColor: "text-black",
      button: false,
    },
    {
      title: "SUN GLOW",
      description:
        "Protect and hydrate your skin under the sun. Zia’s herbal formulations, including Aloe Vera and Rose Soaps, soothe sun-exposed skin while maintaining moisture and radiance throughout the day.",
      icon: "images/flawless.png",
      bg: "bg-[#F8F2F0]",
      textColor: "text-black",
      button: false,
    },
  ];
 
  const handleChange=()=>{
    navigate('/shoplist');
  }
  return (
    <div className="mx-auto px-6 py-10 space-y-8 lg:mt-20">
      <h2 className="text-center text-[24px] lg:text-[32px] lg:mb-20 font-tenor tracking-widest text-[#676A5E]">
        GET YOUR BEAUTY & GLOW
      </h2>
      <div className="lg:flex lg:justify-evenly  space-y-8 lg:space-y-0">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`h-[400px] lg:h-[430px] lg:w-[415px] rounded-xl p-6 ${card.bg} ${card.textColor} flex flex-col justify-evenly items-center text-center`}
          >
           <img
  src={card.icon}
  alt={card.title}
  className={`h-auto mb-4 ${card.title === "NATURE GLOW" ? "-mt-8" : "mt-0"}`}
  />

<h3
  className={`text-[24px] font-tenor tracking-wide ${
    card.title === "NATURE GLOW" ? "text-white -mt-6" : "text-[#676A5E]"
  }`}
>
  {card.title}
</h3>

            {card.description && (
              <p className="text-[16px] w-[95%] text-[#676A5E] font-archivo leading-relaxed">
                {card.description}
              </p>
            )}
            {card.button && (
              <button
                onClick={handleChange}
                className="mt-2 w-[55%] py-3 bg-white text-[#676A5E] rounded-full font-tenor text-[16px]"
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
