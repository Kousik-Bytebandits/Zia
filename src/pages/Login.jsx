import { useNavigate, useLocation } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

 
  const fromCheckout = location.state?.fromCheckout || false;

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

      if (res.ok && data.success) {
        localStorage.setItem('user_id', data.user_id);
        localStorage.setItem('user', JSON.stringify(data));

        toast.success('Login successful!');

       
        if (fromCheckout) {
          navigate('/shopcart', { replace: true });
        } else {
          navigate('/home', { replace: true });
        }

      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong.');
    }
  };

  const handleForgotPassword = async () => {
    if (!email) return toast.warn('Enter your email first');
    try {
      const res = await fetch('https://booksemporium.in/ziaherbalpro/apirouting/user/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success('Password reset email sent!');
      } else {
        toast.error(data.message || 'Request failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred');
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">

      
      <img
        src="images/leaf.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 hidden lg:block"
      />
      <div className="absolute inset-0 bg-white/5 lg:bg-white/30 z-10 hidden lg:block" />

      {/* Desktop */}
      <div className="hidden lg:flex relative z-20 h-full w-full justify-center items-center font-archivo px-10">
        <div className="relative w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-2xl  flex">

          {/* Left */}
          <div className="relative w-1/2 h-full">
            <img
              src="images/leaf.jpg"
              alt="Side background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 flex flex-col justify-evenly items-center text-white h-full px-8 text-center gap-4">
              <h1 className="text-[52px] leading-snug">
                Your Herbal Beauty <br /> Journey Starts Here
              </h1>
              <img
                src="images/zia-white.png"
                alt="Zia Logo"
                className="w-[250px] h-[130px] mt-4"
              />
              <p className="mt-8 text-[32px]">
                Don’t have an account?{' '}
                <span
                  className="underline cursor-pointer"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="w-1/2 text-center bg-white flex flex-col justify-center px-36">
            <h2 className="text-[45px] text-[#2B452C] font-semibold">
              Welcome Back!
            </h2>
            <p className="text-[16px] mb-10">Login to your account</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              className="space-y-5"
            >
              <div className="flex items-center bg-[#D8E5DC] px-4 py-4 rounded-lg">
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

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-[#89A28A]">
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

              <div className="pt-10">
                <button
                  type="submit"
                  className="w-full bg-[#2F623A] mb-4 text-[22px] text-white rounded-full py-3"
                >
                  Login
                </button>
              </div>

              <p className="text-center text-[14px] text-[#89A28A]">
                Don’t have an account?{' '}
                <span
                  className="text-[#41734C] font-semibold underline cursor-pointer"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile View  */}
      <div className="font-archivo h-screen w-full bg-white relative text-gray-800 overflow-hidden lg:hidden">
        {/* Top animated leaf */}
        <div className="relative w-full overflow-hidden">
          <img
            src="images/leaf.jpg"
            alt="Leaf background"
            className="w-full h-[45lvh] object-cover"
          />
          <div className="ocean absolute bottom-0 left-0 w-full">
            <div className="wave"></div>
            <div className="wave"></div>
          </div>

          {/* Top icons */}
          <div className="absolute top-4 left-4 py-5 text-5xl z-10">
            <RiArrowLeftSLine
              onClick={() => navigate(-1)}
              className="bg-white rounded-full"
            />
          </div>
          <img
            src="images/zia-white.png"
            alt="Zia Logo"
            className="absolute top-4 right-3 py-4 w-[120px] z-10"
          />
        </div>

        {/* Login form */}
        <div className="bg-white -mt-12 text-center px-10 py-8">
          <h2 className="text-[45px] text-[#2B452C] font-semibold mb-6">
            Welcome Back!
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-6"
          >
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
            <span
              className="text-[#41734C] font-semibold underline cursor-pointer"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
