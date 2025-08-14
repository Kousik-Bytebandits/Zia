import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import endpoint_prefix from "../config/ApiConfig";
import { showSessionExpiredToast } from "../components/showSessionExpiredToast";
import { useNavigate } from "react-router-dom";

const AddressPopup = ({ isOpen, onClose, onProceed }) => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
const navigate = useNavigate();
  // Fetch profile whenever popup opens
  const fetchProfile = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    try {
      const res = await fetch(`${endpoint_prefix}02_Authentication/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok && data.user) {
        const { user = {}, address = {} } = data;
        setForm({
          first_name: user.first_name ?? "",
          last_name: user.last_name ?? "",
          phone: user.phone ?? "",
          email: user.email ?? "",
          address: address.street ?? "",
          city: address.city ?? "",
          state: address.state ?? "",
          pincode: address.postal_code ?? "",
        });
      } else {
        console.error("Failed to fetch user profile");
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
      if (err.message.includes("expired")) {
        showSessionExpiredToast(navigate);
      } else {
        toast.error("Failed to fetch profile. Please try again.");
      }
    }
  };

  useEffect(() => {
    if (isOpen) fetchProfile();
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.error("Please login first.");
      return;
    }

    const { first_name, last_name, phone, email, address, city, state, pincode } = form;
    if (!first_name || !last_name || !phone || !address || !city || !state || !pincode) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const res = await fetch(`${endpoint_prefix}02_Authentication/auth/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          first_name,
          last_name,
          phone,
          email,
          address: {
            street: address,
            city,
            state,
            postal_code: pincode,
          },
        }),
      });

      if (res.ok) {
        toast.success("Address updated successfully!");
        await fetchProfile(); // refresh data after update
        onProceed?.();
      } else {
        toast.error("Failed to update address.");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      toast.error("Something went wrong.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 font-archivo">
      <div className="bg-white w-[90%] max-w-3xl p-6 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700"
        >
          <img src="/images/close.webp" alt="Close" className="h-6 mt-4 mr-4" />
        </button>

        <h2 className="text-[32px] font-bold mb-6 text-[#3A261A]">
          Deliver To This Address
        </h2>

        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="w-full">
              <label className="block text-[#624534] text-[16px] mb-1">First Name</label>
              <input
                type="text"
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                className="w-full p-2 bg-[#D8E5DC] rounded-md"
              />
            </div>
            <div className="w-full">
              <label className="block text-[#624534] text-[16px] mb-1">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                className="w-full p-2 bg-[#D8E5DC] rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#624534] text-[16px] mb-1">Street Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full p-2 bg-[#D8E5DC] rounded-md h-24 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-[#624534] text-[16px] mb-1">Contact Number</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2 bg-[#D8E5DC] rounded-md"
              />
            </div>
            <div>
              <label className="block text-[#624534] text-[16px] mb-1">City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full p-2 bg-[#D8E5DC] rounded-md"
              />
            </div>
            <div>
              <label className="block text-[#624534] text-[16px] mb-1">State</label>
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                className="w-full p-2 bg-[#D8E5DC] rounded-md"
              />
            </div>
            <div>
              <label className="block text-[#624534] text-[16px] mb-1">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                className="w-full p-2 bg-[#D8E5DC] rounded-md"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="bg-[#2F623A] text-white text-[20px] font-bold  lg:w-[40%] p-3 rounded mt-4"
          >
            Proceed To Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressPopup;
