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
      alert("Passwords do not match");
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
        alert("Signup successful!");
        navigate('/login');
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      alert("An error occurred");
      console.error(err);
    }
  };

  return (
    <div className="font-archivo min-h-screen w-full bg-[url('images/leaf.jpg')] bg-white/20 bg-cover bg-center bg-no-repeat relative flex flex-col">
      {/* Top Icons */}
       <div className="absolute top-4 left-4  py-5 text-5xl z-10 ">
          < RiArrowLeftSLine onClick={() => navigate(-1)} className=' bg-white rounded-full '/>
        </div>
        <img src="images/zia-white.png" alt="Zia Logo" className="absolute top-4 right-3 py-4  w-[120px] z-10" />
   
      {/* Signup Form Card */}
      <div className="mt-32 mb-20 mx-6 bg-white rounded-2xl shadow-md px-6 py-10">
        <h2 className="text-[42px] font-bold text-[#2E3A27] text-center mb-1">Welcome</h2>
        <p className="text-center text-[#2E3A27] text-[28px] mb-6">Create Your Account</p>

        <form className="space-y-3">
          <input type="text" name="first_name" placeholder="First Name" value={form.first_name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] placeholder:text-[18px] text-[18px] outline-none" />
          <input type="text" name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] placeholder:text-[18px] text-[18px] outline-none" />
          <input type="text" name="phone" placeholder="Phone No" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] placeholder:text-[18px] text-[18px] outline-none" />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] placeholder:text-[18px] text-[18px] outline-none" />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] placeholder:text-[18px] text-[18px] outline-none" />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] placeholder:text-[18px] text-[18px] outline-none" />
          
          {/* Street address with more space */}
          <textarea name="street_address" rows={3} placeholder="Street Address" value={form.street_address} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] placeholder:text-[18px] text-[18px] outline-none resize-none" />
         <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] placeholder:text-[18px] text-[18px] outline-none" />
          
          <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] placeholder:text-[18px] text-[18px] outline-none" />
            
          <input type="text" name="postal_code" placeholder="Pincode" value={form.postal_code} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] placeholder:text-[18px] text-[18px] outline-none" />
        </form>

        <button onClick={handleSignup} className="w-full bg-[#2F623A] text-white rounded-full py-3 mt-6 text-lg font-semibold">
          Sign Up
        </button>

        <p className="text-center text-sm mt-4 text-gray-600">
          Do you have an account?{' '}
          <span onClick={() => navigate('/login')} className="text-[#2F5129] font-semibold cursor-pointer">
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
