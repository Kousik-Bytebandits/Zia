import { useNavigate } from 'react-router-dom';

export default function StartScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
    
      <img
        src="images/leaf.jpg"
        alt="Background leaf"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-white/5 lg:bg-white/30  z-10" />

      {/* 🔹 Desktop View */}
      <div className="hidden lg:flex relative z-20 h-full w-full justify-center items-center font-archivo px-10">
        {/* Focused Panel */}
        <div className="relative w-[65%] h-[80%] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          {/* Same image again for sharp center */}
          <img
            src="images/leaf.jpg"
            alt="Focused leaf background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Optional dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:justify-evenly justify-center items-center h-full gap-8 text-white px-10 text-center">
            <h1 className="xxxl:text-[52px] laptop:text-[40px] hd:text-[48px] font-medium leading-snug">
              Your Herbal Beauty Journey Starts Here
            </h1>

            <img
              src="images/zia-white.png"
              alt="Zia Logo"
              className="xxxl:w-[255px] xxxl:h-[130px] laptop:w-[200px] laptop:h-[100px] hd:w-[220px] hd:h-[110px] -mt-16"
            />

            <div className="w-[40%] -mt-16 flex flex-col items-center gap-3">
              <button
                onClick={() => navigate('/login')}
                className="w-full bg-[#788F7966]/35 rounded-lg xxxl:py-5 laptop:py-2 hd:py-3 text-white text-[24px]"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="text-white text-[24px] tracking-wide"
              >
                Create an account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Mobile View */}
       <div className="relative h-screen w-full ">
         <img
    src="images/leaf.jpg"
    alt="Leaf background"
    className="absolute inset-0 w-full h-full object-cover z-0"
    />
      {/* Overlay smoke */}
      <div className="absolute inset-0   z-0"
       style={{ backgroundColor: '#8AC78D1A' }}></div>

      {/* Content */}
      <div className="relative z-20 font-archivo flex flex-col h-full justify-evenly items-center text-white px-4  pb-20">
        
      
        {/* Heading */}
        <div className="bg-[#1212124D]/10 text-left  text-[52px]  leading-snug tracking-wide">
          Your Herbal<br />Beauty Journey<br />Starts Here
        </div>
        
          <img src="images/zia-white.png" alt="Zia Herbal Logo" className="bg-[#1212124D]/10 w-[140px]  h-[74px] " />

        {/* Buttons - lower on screen */}
        <div className="w-full flex flex-col gap-5 max-w-xs bg-[#1212124D]/10">
          <button
            onClick={() => navigate('/login')}
            className="bg-[#788F7966]/65  rounded-lg  py-3 text-white text-[20px]  "
          >
            Sign in
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="text-white tracking-wide  text-[20px]"
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
     
    </div>
  );
}
