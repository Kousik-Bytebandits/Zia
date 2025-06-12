export default function GlowCards() {
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

  return (
    <div className="max-w-md mx-auto px-6 py-10 space-y-8">
      <h2 className="text-center text-[24px] font-tenor tracking-widest text-[#676A5E]">
        GET YOUR BEAUTY & GLOW
      </h2>

      {cards.map((card, index) => (
        <div
          key={index}
          className={`h-[400px]  rounded-xl p-6 ${card.bg} ${card.textColor} flex flex-col justify-evenly text-center`}
        >
          <img src={card.icon} alt={card.title} className=" mx-auto" />
          <h3
            className={`text-[24px] font-tenor tracking-wide ${
              card.title === "NATURE GLOW" ? "text-white" : "text-[#676A5E]"
            }`}
          >
            {card.title}
          </h3>
         
          {card.description && (
            <p className="text-[16px] w-[95%] text-[#676A5E] font-archivo leading-relaxed">{card.description}</p>
          )}
          {card.button && (
            <button className="mt-2 w-[55%] ml-[23%] py-3 bg-white text-[#676A5E] rounded-full font-tenor text-[16px]">
              View Items <span className="text-lg ml-2">→</span>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
