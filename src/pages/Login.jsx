import { useNavigate } from 'react-router-dom';
import { RiArrowLeftSLine } from "react-icons/ri";
import {  FaLock, FaUser } from 'react-icons/fa';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch('https://booksemporium.in/ziaherbalpro/apirouting/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Login successful");
        navigate('/home');
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Something went wrong.");
      console.error(err);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) return alert("Enter your email first");
    try {
      const res = await fetch('https://booksemporium.in/ziaherbalpro/apirouting/user/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Password reset email sent!");
      } else {
        alert(data.message || "Request failed");
      }
    } catch (err) {
      alert("An error occurred");
      console.error(err);
    }
  };

  return (
    <div className="font-archivo h-screen w-full bg-white relative text-gray-800 overflow-hidden">
      {/* Top animated leaf section */}
      <div className="relative w-full overflow-hidden">
        <img src="images/leaf.jpg" alt="Leaf background" className="w-full h-[45lvh] object-cover" />
        <div className="ocean absolute bottom-0 left-0 w-full">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>

        {/* Top bar icons */}
        <div className="absolute top-4 left-4  py-5 text-5xl z-10">
          < RiArrowLeftSLine onClick={() => navigate(-1)} className=' bg-white rounded-full'/>
        </div>
        <img src="images/zia-white.png" alt="Zia Logo" className="absolute top-4 right-3 py-4 w-[120px] z-10" />
      </div>

      {/* Login form */}
      <div className="bg-white rounded-tl-[50px] -mt-12 text-center  px-12 py-8">
        <h2 className="text-[45px] text-[#2B452C] font-semibold mb-6">Welcome Back!</h2>
<form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-6">
  <div className="flex items-center bg-[#D8E5DC] px-4 py-3 rounded-lg">
    <FaUser className="mr-3 text-[#41734C]" />
    <input
      type="email"
      placeholder="Email Id"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="bg-transparent w-full outline-none placeholder-[#41734C] text-[18px]"
      required
       autoComplete="email"
    />
  </div>

  <div className="flex items-center bg-[#D8E5DC] px-4 py-3 rounded-lg">
    <FaLock className="mr-3 text-[#41734C]" />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="bg-transparent w-full outline-none placeholder-[#41734C] text-[18px]"
      required
       autoComplete="current-password"
    />
  </div>

  <div className="flex justify-between items-center text-sm mt-2">
    <label className="flex items-center gap-2 ml-1 text-[#89A28A]">
      <input type="checkbox" />
      Keep me signed in
    </label>
    <span
      className="text-[#727272] font-medium cursor-pointer"
      onClick={handleForgotPassword}
    >
      Forgot password?
    </span>
  </div>

  <button
    type="submit"
    className="w-full bg-[#2F623A] text-[22px] text-white rounded-full py-2 mt-10"
  >
    Login
  </button>
</form>


        <p className="text-center text-[14px] mt-8 text-[#89A28A]">
          Don’t have an account?{' '}
          <span className="text-[#41734C] font-semibold underline cursor-pointer" onClick={() => navigate('/signup')}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
