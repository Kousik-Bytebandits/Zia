
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
    <div className="h-[60vh] lg:h-[80vh] flex flex-col justify-center items-center bg-white text-center px-4">
      <h1 className="text-[70px] font-tenor tracking-widest text-[#676A5E]">404</h1>
      <p className="text-[#676A5E] text-[25px] mb-8 font-archivo">
        Sorry, we couldn’t find this page
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-black tracking-wider text-white text-[18px] font-archivo px-8 py-5 rounded-full flex items-center gap-4"
      >
        Back to Home Page <span className="text-lg">→</span>
      </button>
    
    </div>
    <Footer/>
</>
    
  );
}
