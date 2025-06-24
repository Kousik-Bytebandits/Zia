import { useNavigate } from 'react-router-dom';

export default function StartScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full">
         <img
    src="images/leaf.jpg"
    alt="Leaf background"
    className="absolute inset-0 w-full h-full object-cover z-0"
    />
     
      <div className="absolute inset-0   z-0"
       style={{ backgroundColor: '#8AC78D1A' }}></div>

      
      <div className="relative z-20 font-archivo flex flex-col h-full justify-evenly items-center text-white px-4  pb-20">
        
        <div className="bg-[#1212124D]/10 text-left  text-[52px]  leading-snug tracking-wide">
          Your Herbal<br />Beauty Journey<br />Starts Here
        </div>
        
          <img src="images/zia-white.png" alt="Zia Herbal Logo" className="bg-[#1212124D]/10 w-[140px]  h-[74px] " />

        
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
  );
}
