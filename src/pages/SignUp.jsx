import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import endpoint_prefix from '../config/ApiConfig';
import { RiArrowLeftSLine } from 'react-icons/ri';

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    street_address: '',
    state: '',
    city: '',
    postal_code: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const payload = {
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      password: form.password,
      phone: form.phone,
      address: {
        street_address: form.street_address,
        city: form.city,
        state: form.state,
        postal_code: form.postal_code,
      },
    };

    try {
      const res = await fetch(`${endpoint_prefix}/user/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Signup successful!');
        navigate('/login');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (err) {
      alert('An error occurred');
      console.error(err);
    }
  };

  return (
    <div className="font-archivo min-h-screen w-full relative">
      <div className="absolute inset-0 bg-white/5 lg:bg-white/30 z-10 hidden lg:block" />

      {/* DESKTOP */}
      <div className="hidden lg:flex relative h-screen w-full overflow-hidden">
        {/* Background */}
        <img
          src="images/leaf.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />

        <div className="relative z-20 flex h-full w-full justify-center items-center">
          <div className="w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-2xl  flex">

            {/* Left Side - Form */}
            <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
              <h2 className="text-[45px] pt-16 font-semibold text-[#2B452C] text-center mb-1">
                Welcome!
              </h2>
              <p className="text-center font-tenor text-[#2E3A27] text-[22px] ">
                Create Your Account
              </p>

              <form className="space-y-4 py-6" onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
                <div className="flex gap-4">
                  <input type="text" name="first_name" placeholder="First Name" value={form.first_name} onChange={handleChange} className="w-1/2 px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
                  <input type="text" name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleChange} className="w-1/2 px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
                </div>

                <input type="text" name="phone" placeholder="Phone No" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
                <div className="flex gap-4">
                  <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-1/2 px-4 py-4 rounded-lg bg-[#D8E5DC] outline-none" />
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="w-1/2 px-4 py-4 rounded-lg bg-[#D8E5DC] outline-none" />
                </div>

                <input type="text" name="street_address" placeholder="Street Address" value={form.street_address} onChange={handleChange} className="w-full px-4 py-4 rounded-lg bg-[#D8E5DC] outline-none" />

                <div className="flex gap-4">
                  <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} className="w-1/3 px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
                  <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-1/3 px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
                  <input type="text" name="postal_code" placeholder="Pincode" value={form.postal_code} onChange={handleChange} className="w-1/3 px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
                </div>
                <div className='text-center py-4 '>
                <button type="submit" className=" bg-[#2F623A] text-white rounded-full py-3 px-32 mt-4 text-[22px] font-semibold">
                  Sign Up
                </button>
                </div>
              </form>

              
            </div>

            {/* Right Side - Image and Text */}
            <div className="w-1/2 relative">
              <img src="images/leaf.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10 flex flex-col justify-evenly items-center text-white h-full px-8 text-center gap-4">
                <h1 className="text-[52px] leading-snug">
                  Your Herbal Beauty <br /> Journey Starts Here
                </h1>
                <img src="images/zia-white.png" alt="Zia Logo" className="w-[250px] h-[130px]" />
                <p className="mt-8 text-[32px]">
                  Do you have an account?{' '}
                  <span onClick={() => navigate('/login')} className="underline cursor-pointer">
                    Sign In
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*MOBILE */}
      <div className="lg:hidden relative min-h-screen w-full overflow-hidden">
        {/* Background */}
        <img src="images/leaf.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Top bar */}
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
      

        {/* Form Card */}
        <div className="relative z-20 mt-32 mb-20 mx-6 bg-white rounded-2xl shadow-md px-6 py-10">
          <h2 className="text-[45px] font-bold text-[#2B452C] text-center ">Welcome</h2>
          <p className="text-center text-[#2B452C] text-[28px] mb-4">Create Your Account</p>

          <form className="space-y-4 text-[18px]">
            <input type="text" name="first_name" placeholder="First Name" value={form.first_name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
            <input type="text" name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
            <input type="text" name="phone" placeholder="Phone No" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
            <textarea name="street_address" rows={3} placeholder="Street Address" value={form.street_address} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none resize-none" />
            <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
            <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
            <input type="text" name="postal_code" placeholder="Pincode" value={form.postal_code} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none" />
          </form>

          <button onClick={handleSignup} className="w-full bg-[#2F623A] text-white rounded-full py-3 mt-4 text-[18px] font-semibold">
            Sign Up
          </button>

          <p className="text-center text-[14px] mt-4 text-[#89A28A]">
            Do you have an account?{' '}
            <span onClick={() => navigate('/login')} className="text-[#2F5129] font-semibold underline cursor-pointer">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
