// React component with fetch-based API integration and image upload using icons and preview
import { useState, useEffect } from 'react';
import { FaSync, FaRupeeSign, FaPercent } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function ProductEditor() {
  const inputClasses = "w-full p-2 border border-gray-300 rounded-md bg-white text-sm";

  const [formData, setFormData] = useState({
    productName: "",
    sku: "",
    ean: "",
    category: "",
    mfgDate: "",
    price: "",
    discount: "",
    expDate: "",
    warehouse: "",
    batchCode: "",
    isActive: "Active",
    description: "",
    features: "",
    howToUse: "",
    ingredients: "",
    specifications: {
      Units: "",
      Item_LWH: "",
      Package_LWH: "",
      Item_Weight: "",
      Package_Weight: "",
    },
  });

  const [images, setImages] = useState({
    Primary_Image: null,
    Secondary_Image: null,
    Normal_Image1: null,
    Normal_Image2: null,
  });

  const [imagePreviews, setImagePreviews] = useState({});

  const textAreaFields = [
    { label: "Description", name: "description" },
    { label: "Features", name: "features" },
    { label: "How to use", name: "howToUse" },
    { label: "Ingredients", name: "ingredients" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecificationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      specifications: {
        ...prev.specifications,
        [name]: value,
      },
    }));
  };

  const handleImageChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prev) => ({ ...prev, [key]: file }));
      setImagePreviews((prev) => ({ ...prev, [key]: URL.createObjectURL(file) }));
    }
  };

  const triggerImageUpload = (key) => {
    document.getElementById(key).click();
  };

  const fetchProductDetails = async () => {
    try {
      const res = await fetch("https://booksemporium.in/Microservices_zia/prod/03_Admin_Panel/api/products/1");
      const data = await res.json();

      setFormData({
        productName: data.name || "",
        sku: data.sku || "",
        ean: data.ean || "",
        category: data.category || "",
        mfgDate: data.manufacture_date || "",
        price: data.price || "",
        discount: data.discount || "",
        expDate: data.expiry_date || "",
        warehouse: data.warehouse_location || "",
        batchCode: data.quantity || "",
        isActive: data.is_active === "true" ? "Active" : "Inactive",
        description: data.description || "",
        features: data.features || "",
        howToUse: data.how_to_use || "",
        ingredients: data.ingredients || "",
        specifications: data.Product_Specifications || {
          Units: "",
          Item_LWH: "",
          Package_LWH: "",
          Item_Weight: "",
          Package_Weight: "",
        },
      });

      setImagePreviews({
        Primary_Image: data.Primary_Image || "",
        Secondary_Image: data.Secondary_Image || "",
        Normal_Image1: data.Normal_Image1 || "",
        Normal_Image2: data.Normal_Image2 || "",
      });
    } catch (err) {
      console.error("Failed to fetch product details:", err);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const handleSubmit = async () => {
    const payload = new FormData();
    payload.append("name", formData.productName);
    payload.append("sku", formData.sku);
    payload.append("ean", formData.ean);
    payload.append("category", formData.category);
    payload.append("price", formData.price);
    payload.append("discount", formData.discount);
    payload.append("warehouse_location", formData.warehouse);
    payload.append("quantity", formData.batchCode);
    payload.append("is_active", formData.isActive === "Active" ? "true" : "false");
    payload.append("description", formData.description);
    payload.append("features", formData.features);
    payload.append("how_to_use", formData.howToUse);
    payload.append("ingredients", formData.ingredients);
    payload.append("manufacture_date", formData.mfgDate);
    payload.append("expiry_date", formData.expDate);
    payload.append("Product_Specifications", JSON.stringify(formData.specifications));

    Object.entries(images).forEach(([key, file]) => {
      if (file) payload.append(key, file);
    });

    try {
      const res = await fetch("https://booksemporium.in/Microservices_zia/prod/03_Admin_Panel/api/products/", {
        method: "POST",
        body: payload,
      });

      if (res.ok) {
        alert("Product created successfully!");
        fetchProductDetails();
      } else {
        const errorText = await res.text();
        alert("Failed to create product: " + errorText);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      });
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentDate(`${formattedDate} ${formattedTime}`);
    };
    updateDate();
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 bg-[#f1f2e9] overflow-y-auto scrollbar-none">
      {/* Header */}
      <section className="mb-4 text-white">
        <div className="rounded w-full min-h-[80px] bg-[#102B01] flex flex-col md:flex-row md:items-center px-6 py-4 gap-4">
          <h2 className="text-[24px] md:text-[30px] font-bold uppercase flex-1">Product Editor</h2>
          <div className="flex items-center gap-3">
            <p className="hidden md:inline text-[18px]">Data Refresh</p>
            <FaSync className="hidden md:inline cursor-pointer text-lg" title="Sync" />
            <span className="text-sm md:text-base text-[#102B01] border border-[#375683] px-3 py-1 rounded-md bg-white font-bold">
              {currentDate}
            </span>
          </div>
        </div>
      </section>

      {/* Product Images */}
      <h1 className="text-[20px] sm:text-[24px] font-bold text-[#102B01] ">Product Settings</h1>
      <h2 className="text-[16px] font-bold text-[#102B01]  -mb-4 ">Product Images</h2>
      <div className="flex flex-col lg:flex-row  gap-6 items-center justify-between">
       
        
        <div className="flex  gap-4 lg:mt-6">
          {[
            { key: "Primary_Image", label: "Click to upload" },
            { key: "Secondary_Image", label: "Click to upload" },
          ].map(({ key, label }) => (
            <div
              key={key}
              onClick={() => triggerImageUpload(key)}
              className="cursor-pointer flex-col w-[270px] h-[270px] border-2 border-dashed border-[#102B01] rounded-md bg-white flex items-center justify-center "
            >
              {imagePreviews[key] ? (
                <img src={imagePreviews[key]} alt={label} className="w-full h-full object-cover rounded-md" />
              ) : (
                <>
                  <img src="/icons/img-icon.png" alt="Upload" className="w-10 h-10 opacity-70" />
                  <p className="text-[15px] text-center px-1">{label}</p>
                </>
              )}
              <input
                id={key}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, key)}
              />
            </div>
          ))}
        </div>

        
        <div className="flex flex-col gap-4 lg:mt-6">
          {[
            { key: "Normal_Image1", label: "Click to upload" },
            { key: "Normal_Image2", label: "Click to upload" },
          ].map(({ key, label }) => (
            <div
              key={key}
              onClick={() => triggerImageUpload(key)}
              className="cursor-pointer w-[125px] h-[125px] border-2 border-dashed border-[#102B01] rounded-md bg-white flex items-center justify-center flex-col"
            >
              {imagePreviews[key] ? (
                <img src={imagePreviews[key]} alt={label} className="w-full h-full object-cover rounded-md" />
              ) : (
                <>
                  <img src="/icons/img-icon.png" alt="Upload" className="w-6 h-6 opacity-70" />
                  <p className="text-xs text-center px-1">{label}</p>
                </>
              )}
              <input
                id={key}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, key)}
              />
            </div>
          ))}
        </div>
    
        
      {/* Input Fields */}
     <div className="flex-1 space-y-4">
 
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="text-[14px] font-bold text-[#102B01] mb-1 block">Product Name</label>
      <input
        name="productName"
        value={formData.productName}
        onChange={handleChange}
        type="text"
        className={inputClasses}
        placeholder="Enter product name"
      />
    </div>
    <div>
      <label className="text-[14px] font-bold text-[#102B01] mb-1 block">SKU</label>
      <input
        name="sku"
        value={formData.sku}
        onChange={handleChange}
        type="text"
        className={inputClasses}
        placeholder="Enter SKU"
      />
    </div>
  </div>

 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div>
      <label className="text-[14px] font-bold text-[#102B01] mb-1 block">EAN</label>
      <input
        name="ean"
        value={formData.ean}
        onChange={handleChange}
        type="text"
        className={inputClasses}
      />
    </div>

    <div className="relative">
      <label className="text-[14px] font-bold text-[#102B01] mb-1 block">Category</label>
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className={`${inputClasses} pr-10 appearance-none`}
      >
        <option>Shampoo</option>
        <option>Soap</option>
        <option>Face Wash</option>
      </select>
      <IoIosArrowDown className="absolute right-3 top-[40px] text-gray-500" />
    </div>

    <div className="relative">
      <label className="text-[14px] font-bold text-[#102B01] mb-1 block">Manufacturing Date</label>
      <input
        name="mfgDate"
        value={formData.mfgDate}
        onChange={handleChange}
        type="text"
        className={`${inputClasses} pr-10`}
        placeholder="DD-MM-YYYY"
      />
      <FiCalendar className="absolute right-3 top-[40px] text-gray-500" />
    </div>

    <div className="relative">
      <label className="text-[14px] font-bold text-[#102B01] mb-1 block">Price</label>
      <input
        name="price"
        value={formData.price}
        onChange={handleChange}
        type="number"
        className={`${inputClasses} pr-10`}
      />
      <FaRupeeSign className="absolute right-3 top-[40px] text-gray-500" />
    </div>

    <div className="relative">
      <label className="text-[14px] font-bold text-[#102B01] mb-1 block">Discount </label>
      <input
        name="discount"
        value={formData.discount}
        onChange={handleChange}
        type="number"
        className={`${inputClasses} pr-10`}
      />
      <FaPercent className="absolute right-3 top-[40px] text-gray-500" />
    </div>

    <div className="relative">
      <label className="text-[14px] font-bold text-[#102B01] mb-1 block">Expiry Date</label>
      <input
        name="expDate"
        value={formData.expDate}
        onChange={handleChange}
        type="text"
        className={`${inputClasses} pr-10`}
        placeholder="DD-MM-YYYY"
      />
      <FiCalendar className="absolute right-3 top-[40px] text-gray-500" />
    </div>

    <div>
      <label className="text-[14px] font-bold text-[#102B01] mb-1 block">Warehouse Location</label>
      <input
        name="warehouse"
        value={formData.warehouse}
        onChange={handleChange}
        type="text"
        className={inputClasses}
      />
    </div>

    <div>
      <label className="text-[14px] font-bold text-[#102B01] mb-1 block">Stock</label>
      <input
        name="batchCode"
        value={formData.batchCode}
        onChange={handleChange}
        type="number"
        className={inputClasses}
      />
    </div>

    <div className="relative">
      <label className="text-[14px] font-bold text-[#102B01] mb-1 block">Is Active</label>
      <select
        name="isActive"
        value={formData.isActive}
        onChange={handleChange}
        className={`${inputClasses} pr-10 appearance-none`}
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>
      <IoIosArrowDown className="absolute right-3 top-[40px] text-gray-500" />
    </div>
  </div>
</div>

      </div>

      
      <div className="flex flex-col xl:flex-row gap-6 mt-8">
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
         {textAreaFields.map(({ label, name }) => (
  <div key={name}>
    <h3 className="text-[16px] font-bold text-[#102B01] mb-2">{label}</h3>
    <div className="bg-white rounded-lg shadow-sm px-4 pt-3 pb-2 h-[200px]">
      <textarea
        name={name}
        value={formData[name]}
        onChange={handleTextAreaChange}
        className="w-full h-full resize-none outline-none bg-transparent text-sm text-[#1F3612]"
      />
    </div>
  </div>
))}

        </div>

       
        <div className="w-full xl:max-w-[42%] mt-8">
          <div className="bg-white rounded-xl shadow-md border border-[#E4E4E4] p-4">
            <h2 className="text-[16px] font-bold text-[#102B01] mb-4">Product Specifications</h2>
            <div className="overflow-auto rounded-2xl border border-[#E4E4E4]">
              <table className="w-full text-[14px] text-left border border-[#E4E4E4]">
                <thead className="text-[#534D59]">
                  <tr className="bg-[#F9FAFC]">
                    <th className="px-4 py-3 border border-[#E4E4E4]">Name</th>
                    <th className="px-4 py-3 border border-[#E4E4E4]">Value</th>
                  </tr>
                </thead>
               <tbody className="text-[#1B2128]">
  {Object.entries(formData.specifications).map(([key, value], index) => (
    <tr key={index}>
      <td className="px-4 py-3 border border-[#E4E4E4] whitespace-nowrap">{key}</td>
      <td className="px-4 py-3 border border-[#E4E4E4] whitespace-nowrap">
        <input
          type="text"
          name={key}
          value={value}
          onChange={handleSpecificationChange}
          className="w-full px-2 py-1 rounded-md text-sm"
        
        />
      </td>
    </tr>
  ))}
</tbody>

              </table>
            </div>
          </div>

          {/* Publish Button */}
          <div className="mt-4">
            <button  onClick={handleSubmit} className="bg-[#EEB420] text-[#102B01] w-full text-[20px] font-bold py-4 px-6 rounded-full shadow-md hover:bg-[#d6a81f] transition-all">
              Publish Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
