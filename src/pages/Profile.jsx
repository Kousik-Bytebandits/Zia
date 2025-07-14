import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationPopup from './NotificatioPopup';



export default function Profile() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    address: {
      street_address: "",
      state: "",
      city: "",
      postal_code: "",
      country: "India",
    },
  });

 const [popup, setPopup] = useState({
  show: false,
  type: "success",
  message: "",
});

const showPopup = (type, message) => {
  setPopup({ show: true, type, message });
};

 const navigate = useNavigate();
 


useEffect(() => {
  const token = localStorage.getItem("accessToken");
  
  if (!token) {
    navigate('/login');
    return;
  }
const fetchUserData = async () => {
  try {
    const res = await fetch(
      "https://booksemporium.in/Microservices_zia/prod/02_Authentication/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    

    if (res.ok && data.user) {
      const user = data.user;
      const address = data.address || {};

      setForm({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        phone: user.phone || "",
        email: user.email || "",
        address: {
          street_address: address.street || "",
          city: address.city || "",
          state: address.state || "",
          postal_code: address.postal_code || "",
          country: address.country || "India",
        },
      });
    } else {
      console.error("Failed to fetch user profile");
    }
  } catch (err) {
    console.error("Error fetching user data:", err);
    alert("Failed to load user info.");
  }
};


  fetchUserData();
}, [navigate]);



 const handleChange = (e) => {
  const { name, value } = e.target;

  const addressFields = ["street_address", "state", "city", "postal_code", "country"];

  if (addressFields.includes(name)) {
    setForm((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  } else {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};

const handleUpdate = async () => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    showPopup("error", "You are not logged in. Please login again.");
    return;
  }

  try {
    const res = await fetch(
      "https://booksemporium.in/Microservices_zia/prod/02_Authentication/auth/update",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: form.email,
          first_name: form.first_name,
          last_name: form.last_name,
          phone: form.phone,
          address: {
            street: form.address.street_address,
            city: form.address.city,
            state: form.address.state,
            postal_code: form.address.postal_code,
            country: form.address.country || "India",
            is_default: true,
          },
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      showPopup("success", "Profile updated successfully!");
    } else {
      showPopup("error", data?.message || "Update failed");
    }
  } catch (err) {
    console.error("Update error:", err);
    showPopup("error", "Something went wrong while updating profile.");
  }
};




  return (
  <div className="min-h-screen font-archivo bg-white">
  {/* Mobile View */}
  <div className="lg:hidden pt-[25%] px-10 py-6 flex flex-col items-center">
    <h1 className="text-[30px] text-[#2E3A27] font-bold mb-4">User Profile</h1>

    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full max-w-sm mb-8">
      <img src="images/profile.png" alt="Profile" className="object-cover" />
      <p className="mt-2 text-lg font-semibold text-[#2E3A27]">
        {form.first_name} {form.last_name}
      </p>
      <p className="text-[#AEAEAE] text-[18px]">{form.email}</p>
      <p className="text-[#AEAEAE] text-[18px]">{form.phone}</p>
    </div>

    <div className="w-full max-w-sm space-y-4">
      <h2 className="text-[20px] text-[#2E3A27] font-semibold">Personal Information</h2>
      <p className="text-sm text-[#AEAEAE]">Manage your details and update your password</p>

      <input
        name="first_name"
        value={form.first_name}
        onChange={handleChange}
        placeholder="First Name"
        className="w-full p-3 rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66] placeholder:text-[18px]"
      />
      <input
        name="last_name"
        value={form.last_name}
        onChange={handleChange}
        placeholder="Last Name"
        className="w-full p-3 rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66] placeholder:text-[18px]"
      />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone No"
        className="w-full p-3 rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66] placeholder:text-[18px]"
      />

      <h2 className="pt-4 text-[20px] text-[#2E3A27] font-semibold">Delivery Address</h2>
      <textarea
        name="street_address"
        value={form.address.street_address}
        onChange={handleChange}
        rows={4}
        placeholder="Street Address"
        className="w-full p-3 rounded-xl bg-[#D8E5DC] placeholder:text-[#41734C66] placeholder:text-[18px]"
      />
      <input
        name="city"
        value={form.address.city}
        onChange={handleChange}
        placeholder="City"
        className="w-full p-3 rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66] placeholder:text-[18px]"
      />
      <input
        name="state"
        value={form.address.state}
        onChange={handleChange}
        placeholder="State"
        className="w-full p-3 rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66] placeholder:text-[18px]"
      />
      <input
        name="postal_code"
        value={form.address.postal_code}
        onChange={handleChange}
        placeholder="Pincode"
        className="w-full p-3 rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66] placeholder:text-[18px]"
      />
    </div>

    <button
      className="mt-6 bg-[#2F623A] text-white text-[22px] w-full py-3 rounded-full"
      onClick={handleUpdate}
    >
      Update
    </button>

    <NotificationPopup
      show={popup.show}
      type={popup.type}
      message={popup.message}
      onClose={() => setPopup({ ...popup, show: false })}
    />
  </div>

  {/* Desktop View */}
  <div className="hidden lg:flex flex-col items-center py-16 px-10 bg-white">
    <h1 className="xxxl:text-[32px] laptop:text-[24px] hd:text-[26px] font-bold text-[#2E3A27] mb-10">User Profile</h1>

    <div className="flex gap-10 w-full justify-center">
      {/* Profile Card */}
      <div className="bg-white shadow-around-soft rounded-xl p-8 flex flex-col items-center xxxl:w-[400px] xxxl:h-[300px] laptop:w-[350px] laptop:h-[250px] hd:w-[350px] hd:h-[260px]">
        <img src="images/profile.png" alt="Profile" className="object-cover" />
<p className="mt-4 xxxl:text-[28px] laptop:text-[22px] hd:text-[26px] font-semibold text-black uppercase text-center">
  {form.first_name} {form.last_name}
</p>

        <p className="text-[#AEAEAE] mt-1 text-[18px]">{form.email}</p>
        <p className="text-[#AEAEAE] text-[18px]">{form.phone}</p>
      </div>

      {/* Form Section */}
      <div className="bg-white shadow-around-soft rounded-xl p-8 xxxl:w-[850px] xxxl:h-[550px] laptop:w-[600px] laptop:h-[500px] hd:w-[600px] hd:h-[500px] flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="xxxl:text-[18px] laptop:text-[15px] hd:text-[16px] font-semibold mb-2">Personal Information</h2>
            <input
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full xxxl:p-3 laptop:p-2 hd:p-2 rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66]"
            />
            <input
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full mt-3 xxxl:p-3 laptop:p-2 hd:p-2 rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66]"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone No"
              className="w-full mt-3 xxxl:p-3 laptop:p-2 hd:p-2 rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66]"
            />
          </div>
          <div>
            <h2 className="xxxl:text-[18px] laptop:text-[15px] hd:text-[16px] font-semibold mb-2">Delivery Address</h2>
           <textarea
  name="street_address"
  value={form.address.street_address}
  onChange={handleChange}
  rows={5}
  className="w-full p-4 h-[130px] rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66] placeholder:text-[16px]"
  placeholder="Street Address"
/>

            <input
              name="state"
              value={form.address.state}
              onChange={handleChange}
              placeholder="State"
              className="w-full mt-3 xxxl:p-3 laptop:p-2 hd:p-2 rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66]"
            />
            <input
              name="city"
              value={form.address.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full mt-3 xxxl:p-3 laptop:p-2 hd:p-2 rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66]"
            />
            <input
              name="postal_code"
              value={form.address.postal_code}
              onChange={handleChange}
              placeholder="Pincode"
              className="w-full mt-3 xxxl:p-3 laptop:p-2 hd:p-2 rounded-lg bg-[#D8E5DC] placeholder:text-[#41734C66]"
            />
          </div>
        </div>
        <button
          className="self-center mt-6 bg-[#2F623A] text-white xxxl:text-[20px] laptop:text-[15px] hd:text-[16px] w-[30%] xxxl:py-3 laptop:py-2 rounded-full"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
     
    </div>
      {/* Save Button */}
  <button
    className="mt-16 bg-[#2F623A] text-white text-[18px] w-[20%] xxxl:py-3 laptop:py-2 rounded-full"
   
  >
    Save
  </button>


    <NotificationPopup
      show={popup.show}
      type={popup.type}
      message={popup.message}
      onClose={() => setPopup({ ...popup, show: false })}
    />
  </div>
</div>

  );
}
