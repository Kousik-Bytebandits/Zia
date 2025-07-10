import Footer from "../components/Footer";

const TrackingStep = ({ icon, title, description, isCompleted }) => {
  return (
    <div className="relative flex items-start space-x-3 z-10 laptop:hidden">
      <div className="z-20">
        <div className={`w-3 h-3 rounded-full ${isCompleted ? "bg-[#388E3C]" : "bg-gray-300"} mt-[16px]`} />
      </div>
      <div className="flex space-x-2 font-archivo">
        <img src={icon} alt={title} className="w-[40px] h-[40px] mt-[1px]" />
        <div>
          <p className={`font-semibold text-[18px] ${isCompleted ? "text-[#4A4A4A]" : "text-gray-400"}`}>{title}</p>
          <p className="text-[14px] text-[#B6B6B6]">{description}</p>
        </div>
      </div>
    </div>
  );
};

const StepTimeline = ({ steps }) => (
  <>
    <div className="relative ml-2 laptop:hidden">
      <div className="absolute left-[5.5px] top-[20px] bottom-[42px] w-[1px] bg-[#388E3C] z-0" />
      <div className="flex flex-col space-y-10 mt-10 mb-4">
        {steps.map((step) => (
          <TrackingStep
            key={step.title}
            icon={step.icon}
            title={step.title}
            description={step.description}
            isCompleted={step.status === "completed" || step.status === "current"}
          />
        ))}
      </div>
    </div>

    <div className="hidden laptop:block">
      <div className="flex justify-between w-full px-2 hd:px-6 xxxl:px-12 mt-8">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className=" p-2 rounded-full">
              <img src={step.icon} alt={step.title} className="w-full h-14" />
            </div>
            <p className="mt-2 font-semibold xxxl:text-[24px] laptop:text-[18px] hd:text-[20px] text-[#4A4A4A]">{step.title}</p>
            <p className="xxxl:text-[20px] laptop:text-[14px] hd:text-[16px] text-[#B6B6B6] max-w-[280px]">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="relative mt-6 px-2 hd:px-6 xxxl:px-44 hd:px-40 laptop:px-36 mt-8 mb-10">
  {/* Line connecting all steps */}
  <div className="absolute top-3  xxxl:left-44 xxxl:right-44 laptop:left-36 laptop:right-36 hd:left-40 hd:right-40 h-[1px] bg-[#388E3C] z-0 " />

  {/* Green Dots */}
  <div className="flex justify-between mx-auto items-center relative z-10">
    {steps.map((_, idx) => (
      <div key={idx} className="w-6 h-6 bg-[#388E3C] rounded-full" />
    ))}
  </div>
</div>

    </div>
  </>
);

const OrderTrackingCard = ({ orderId, productName, volume, price, image, steps }) => (
  <div className="border rounded-xl p-4 text-[#2B452C] shadow-around-soft bg-white space-y-2">
    {/* Desktop Layout */}
    <div className="hidden lg:flex  lg:justify-between lg:items-center lg:gap-4">
      <img
        src={image}
        alt={productName}
        className="xxxl:w-[160px] xxxl:h-[270px] object-contain"
      />
      <div className="flex-1 space-y-2">
        <p className="xxxl:text-[29px] laptop:text-[20px] hd:text-[26px] font-archivo font-semibold text-[#333333] uppercase">{productName}</p>
        <p className="xxxl:text-[23px] laptop:text-[16px] hd:text-[20px] text-[#AEAEAE]">{volume}</p>
        <p className="xxxl:text-[40px] laptop:text-[28px] hd:text-[32px] font-bold text-[#151515] mt-2">₹{price}</p>
      </div>
      <div className="mr-10 -mt-[8%]">
      <p className="xxxl:text-[30px] laptop:text-[20px] hd:text-[24px]  text-[#2B452C] font-medium whitespace-nowrap">Order Id : {orderId}</p>
      </div>
    </div>

    {/* Mobile Layout */}
    <div className="laptop:hidden">
      <p className="text-[14px] text-[#2B452C] font-medium mb-1">Order Id : {orderId}</p>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[16px] font-archivo font-semibold text-[#333333] uppercase">{productName}</p>
          <p className="text-[14px] text-[#AEAEAE]">{volume}</p>
          <p className="text-[28px] font-bold text-[#151515] mt-2">₹{price}</p>
        </div>
        <img
          src={image}
          alt={productName}
          className="w-[94px] h-[125px] object-contain -mt-8 mb-4"
        />
      </div>
    </div>

    <div className="border-t border-[#B2BA98] my-2 mx-10" />
    <StepTimeline steps={steps} />
  </div>
);

export default function OrderTracking() {
  const stepsCompleted = [
    {
      title: "Shipped",
      description: "Your order has been handed over to our delivery partner and is on its way.",
      icon: "/icons/shipped.png",
      status: "completed",
    },
    {
      title: "Out of delivery",
      description: "Your package is arriving today. Please keep your phone nearby.",
      icon: "/icons/ood.png",
      status: "completed",
    },
    {
      title: "Delivered",
      description: "Your package was successfully delivered. We hope you love it!",
      icon: "/icons/delivered.png",
      status: "completed",
    },
  ];

  return (
    <>
      <div className="min-h-screen pt-24 bg-white px-4 py-6 xxxl:px-60 xxxl:py-20 hd:px-36 laptop:px-36 font-archivo mx-auto">
        <h1 className="text-center text-[22px] font-tenor text-[#2E3A27] mb-5 hd:text-[40px] laptop:text-[36px] xxxl:text-[50px]">
          Track Order
        </h1>
        <div className="space-y-6">
          <OrderTrackingCard
            orderId="887745"
            productName="ZIA HERBAL HAIR SHAMPOO"
            volume="100 ML"
            price="400"
            image="/images/h_shampoo.png"
            steps={stepsCompleted}
          />
          <OrderTrackingCard
            orderId="887745"
            productName="ZIA HERBAL HAIR SHAMPOO"
            volume="100 ML"
            price="400"
            image="/images/h_shampoo.png"
            steps={stepsCompleted}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
