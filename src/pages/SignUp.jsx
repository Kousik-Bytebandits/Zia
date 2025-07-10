import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import NotificationPopup from "./NotificatioPopup"

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    street_address: "",
    state: "",
    city: "",
    postal_code: "",
  });

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpVerified, setOtpVerified] = useState(false);

 
  const [popup, setPopup] = useState({
    show: false,
    type: "success",
    message: "",
  });
 const otpRefs = useRef([]);
 const moveToNext = (index) => {
  if (index < otpRefs.current.length - 1) {
    otpRefs.current[index + 1]?.focus();
  }
};
  const showPopup = (type, message) => {
    setPopup({ show: true, type, message });
  };

   const handleChange = (e) => {
    const { name, value } = e.target;

    
    setForm({ ...form, [name]: value });
  };



  const sendOtp = async () => {
    if (!form.email) {
      showPopup("error", "Please enter your email to receive OTP");
      return;
    }
    try {
      const res = await fetch(
        "https://booksemporium.in/Microservices_zia/prod/02_Authentication/auth/request-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        showPopup(
          "success",
          `Email sent to ${form.email}. Check spam if not received.`
        );
      } else {
        showPopup("error", data.message || "Failed to send OTP");
      }
    } catch (err) {
      showPopup("error", "An error occurred while sending OTP");
      console.log(err);
    }
  };

  const verifyOtp = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      showPopup("error", "Please enter a valid 6-digit OTP");
      return;
    }
    try {
      const res = await fetch(
        "https://booksemporium.in/Microservices_zia/prod/02_Authentication/auth/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email, otp: otpString }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setOtpVerified(true);
        showPopup("success", "Email verified successfully");
      } else {
        showPopup("error", data.message || "Invalid OTP");
      }
    } catch (err) {
      showPopup("error", "An error occurred during OTP verification");
      console.log(err)
    }
  };

  const handleSignup = async (e) => {
  e.preventDefault();


  if (!otpVerified) {
    showPopup("error", "Please verify OTP before signing up");
    return;
  }

  if (form.password !== form.confirmPassword) {
    showPopup("error", "Passwords do not match");
    return;
  }

  const payload = {
    email: form.email,
    password: form.password,
    first_name: form.first_name,
    last_name: form.last_name,
    phone: form.phone,
    address: {
      street: form.street_address,
      city: form.city,
      state: form.state,
      postal_code: form.postal_code,
      country: "INDIA",
      is_default: true,
    },
  };

  try {
    const res = await fetch(
      "https://booksemporium.in/Microservices_zia/prod/02_Authentication/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const data = await res.json();

    if (res.ok) {
      if (data.accessToken) {
        localStorage.setItem("access_token", data.accessToken);
        localStorage.setItem("refresh_token", data.refreshToken);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      showPopup("success", "Account created successfully");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      showPopup("error", data.message || "Signup failed");
    }
  } catch (err) {
    showPopup("error", "An error occurred during signup");
    console.log(err);
  }
};

const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value) moveToNext(index);
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

const renderOtpInput = () => (
    <div className="grid grid-cols-6 gap-2 justify-center w-full">
      {[...Array(6)].map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          ref={(el) => (otpRefs.current[i] = el)}
          value={otp[i]}
          onChange={(e) => handleOtpChange(e, i)}
          onKeyDown={(e) => handleOtpKeyDown(e, i)}
          className="w-[15%] min-w-[48px] h-10 rounded-lg bg-[#D8E5DC] text-center text-xl outline-none"
        />
      ))}
    </div>
  );





 const renderForm = (isDesktop) => (
  <form className="space-y-4 xxxl:space-y-4 laptop:space-y-1 hd:space-y-2" onSubmit={handleSignup}>
    {/* First and Last Name */}
    {isDesktop ? (
      <div className="flex gap-4">
        <input
          type="text"
          name="first_name"
          placeholder="First Name*"
          value={form.first_name}
          onChange={handleChange}
          required
          className="w-1/2 px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={form.last_name}
          onChange={handleChange}
          className="w-1/2 px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
        />
      </div>
    ) : (
      <>
        <input
          type="text"
          name="first_name"
          placeholder="First Name*"
          value={form.first_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={form.last_name}
          onChange={handleChange}
          className="w-full px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
        />
      </>
    )}

    {/* Phone and Email */}
    <input
  type="tel"
  name="phone"
  pattern="[0-9]{10}"
  title="Phone number must be exactly 10 digits"
  placeholder="Phone No*"
  value={form.phone}
  onChange={handleChange}
  required
  className="w-full px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
/>

    <input
      type="email"
      name="email"
      placeholder="Email Address*"
      value={form.email}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
    />

    {/* OTP */}
    <div className="bg-[#F9F9F9] rounded-md p-4 xxxl:p-4 laptop:p-1 hd:p-2 border border-[#F0F0F0]">
      {renderOtpInput()}

      <div className="flex justify-around mt-4 lg:mt-6 gap-4">
        <button
          type="button"
          onClick={sendOtp}
          className="bg-[#4D765A] text-white w-[50%] py-2 xxxl:py-2 laptop:py-1 hd:py-1 rounded-md text-[18px] xxxl:text-[18px] laptop:text-[14px] hd:text-[16px]"
        >
          Send OTP
        </button>
        <button
          type="button"
          onClick={verifyOtp}
          className="bg-[#161616] text-white w-[50%] py-2 rounded-md text-[18px] xxxl:text-[18px] laptop:text-[14px] hd:text-[16px] "
        >
          Verify OTP
        </button>
      </div>
      <p className="text-[#4D4D4D] text-[12px] xxxl:text-[14px] laptop:text-[12px] hd:text-[14px] text-center mt-4 font-semibold">
        Resend OTP
      </p>
    </div>

    {/* Password and Confirm Password */}
    {isDesktop ? (
      <div className="flex gap-4">
       <input
  type="password"
  name="password"
  autoComplete="new-password"
  placeholder="Password*"
  value={form.password}
  onChange={handleChange}
  required
  className="w-full px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
/>
<input
  type="password"
  name="confirmPassword"
  autoComplete="new-password"
  placeholder="Confirm Password*"
  value={form.confirmPassword}
  onChange={handleChange}
  required
  className="w-full px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
/>

      </div>
    ) : (
      <>
       <input
  type="password"
  name="password"
  autoComplete="new-password"
  placeholder="Password*"
  value={form.password}
  onChange={handleChange}
  required
  className="w-full px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
/>
<input
  type="password"
  name="confirmPassword"
  autoComplete="new-password"
  placeholder="Confirm Password*"
  value={form.confirmPassword}
  onChange={handleChange}
  required
  className="w-full px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
/>

      </>
    )}

    {/* Street */}
    <input
      type="text"
      name="street_address"
      placeholder="Street Address*"
      value={form.street_address}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
    />

    {/* State, City, Pincode */}
    {isDesktop ? (
      <div className="flex gap-4">
        <input
          type="text"
          name="state"
          placeholder="State*"
          value={form.state}
          onChange={handleChange}
          required
          className="w-1/3 px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
        />
        <input
          type="text"
          name="city"
          placeholder="City*"
          value={form.city}
          onChange={handleChange}
          required
          className="w-1/3 px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
        />
     <input
  type="text"
  name="postal_code"
  pattern="[0-9]{6}"
  title="Pincode must be exactly 6 digits"
  placeholder="Pincode*"
  value={form.postal_code}
  onChange={handleChange}
  required
  className="w-full px-4 py-3 xxxl:px-4 xxxl:py-3 laptop:px-3 laptop:py-2 hd:px-4 hd:py-2 rounded-lg bg-[#D8E5DC] outline-none"
/>

      </div>
    ) : (
      <>
        <input
          type="text"
          name="state"
          placeholder="State*"
          value={form.state}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none"
        />
        <input
          type="text"
          name="city"
          placeholder="City*"
          value={form.city}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none"
        />
       <input
  type="text"
  name="postal_code"
  pattern="[0-9]{6}"
  title="Pincode must be exactly 6 digits"
  placeholder="Pincode*"
  value={form.postal_code}
  onChange={handleChange}
  required
  className="w-full px-4 py-3 rounded-lg bg-[#D8E5DC] outline-none"
/>

      </>
    )}

    {/* Submit Button */}
    <div className="text-center pt-4 xxxl:pt-4 laptop:pt-2 hd:pt-3">
      <button
        type="submit"
        className="bg-[#2F623A] text-white rounded-full py-3 px-28 xxxl:px-28 xxxl:py-3 laptop:px-20 laptop:py-1 hd:px-28 hd:py-2 text-[22px] xxxl:text-[22px] laptop:text-[18px] hd:text-[20px] font-semibold"
      >
        Sign Up
      </button>
    </div>
  </form>
);

  return (
    <div className="font-archivo min-h-screen w-full relative">
       <div className="absolute inset-0 bg-white/5 lg:bg-white/30 z-10 hidden lg:block" />
      {/* Desktop */}
      <div className="hidden lg:flex relative h-screen w-full overflow-hidden">
        <img
          src="images/leaf.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="relative z-20 flex h-full w-full justify-center items-center">
          <div className="w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-2xl flex">
            <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
              <p className="text-center font-tenor text-[#2E3A27] xxxl:text-[22px] mb-6 laptop:text-[14px] hd:text-[16px]">
                Create Your Account
              </p>
              {renderForm(true)}
            </div>
            <div className="w-1/2 relative">
              <img
                src="images/leaf.jpg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 flex flex-col justify-evenly items-center text-white h-full px-8 text-center gap-4">
                <h1 className="xxxl:text-[52px] laptop:text-[36px] hd:text-[42px] leading-snug">
                  Your Herbal Beauty <br /> Journey Starts Here
                </h1>
                <img
                  src="images/zia-white.png"
                  alt="Zia Logo"
                  className="xxxl:w-[250px] xxxl:h-[130px] laptop:w-[180px] laptop:h-[90px] hd:w-[220px] hd:h-[110px] "
                />
                <p className="mt-8 xxxl:text-[32px] laptop:text-[24px] hd:text-[28px]">
                  Do you have an account?{" "}
                  <span
                    onClick={() => navigate("/login")}
                    className="underline cursor-pointer"
                  >
                    Sign In
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative min-h-screen w-full overflow-hidden">
        <img
          src="images/leaf.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
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

        <div className="relative z-20 mt-32 mb-20 mx-6 bg-white rounded-2xl shadow-md px-6 py-10">
          <h2 className="text-[45px] font-bold text-[#2B452C] text-center">
            Welcome
          </h2>
          <p className="text-center text-[#2B452C] text-[28px] mb-4">
            Create Your Account
          </p>
          {renderForm(false)}
          <p className="text-center text-[14px] mt-4 text-[#89A28A]">
            Do you have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#2F5129] font-semibold underline cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>

      {/* Popup */}
      <NotificationPopup
        show={popup.show}
        type={popup.type}
        message={popup.message}
        onClose={() => setPopup({ ...popup, show: false })}
      />
    </div>
  );
}
