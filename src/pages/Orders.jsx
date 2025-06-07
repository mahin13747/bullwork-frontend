import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Jointhebullwork from "../components/jointhebullwork";
import ContactPage from "../components/contact";

const OrderPage = () => {
  const [type, setType] = useState("INDIVIDUAL");
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    aadharNumber: "",
    panNumber: "",
    productId: "",
    message: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://bullwork-backend.onrender.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        alert("Error loading products: " + err.message);
      }
    };
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.productId) {
      alert("Please select a product");
      return;
    }

    try {
      const res = await fetch("https://bullwork-backend.onrender.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          orderType: type.toUpperCase(),
          productId: Number(formData.productId),
        }),
      });

      if (!res.ok) throw new Error("Failed to submit order");

      await res.json();
      alert("Order placed successfully!");
      navigate("/success");

      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        address: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        aadharNumber: "",
        panNumber: "",
        productId: "",
        message: "",
      });
      setType("INDIVIDUAL");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#4b0052] h-[40vh] flex flex-col justify-center items-center text-white text-center p-6">
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-widest">Order Form</h1>
        <p className="mt-4 pb-10 text-sm md:text-base">Fill in the below details to order products</p>
      </div>

      {/* Form Card */}
      <div className="max-w-5xl mx-auto -mt-24 p-6 md:p-10 bg-white rounded-xl shadow-2xl z-10 relative">
        {/* Order Type Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["INDIVIDUAL", "COMPANY"].map((val) => (
            <button
              key={val}
              onClick={() => setType(val)}
              className={`px-6 py-2 rounded-md font-semibold border transition ${
                type === val
                  ? "bg-[#4b0052] text-white border-white"
                  : "bg-white text-[#4b0052] border-[#4b0052]"
              }`}
            >
              {val.charAt(0) + val.slice(1).toLowerCase()}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Name*", name: "name", type: "text", required: true },
            { label: "Phone Number*", name: "phoneNumber", type: "tel", required: true },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Address", name: "address", type: "text" },
            { label: "City", name: "city", type: "text" },
            { label: "Pincode", name: "pincode", type: "text" },
            { label: "Aadhar Number", name: "aadharNumber", type: "text" },
            { label: "PAN Number", name: "panNumber", type: "text" },
          ].map(({ label, name, type, required }) => (
            <div key={name}>
              <label className="block mb-1 font-semibold">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required={required}
                className="w-full border border-purple-800 rounded px-3 py-2"
                placeholder={`Enter ${label.replace("*", "")}`}
              />
            </div>
          ))}

          {/* Country Dropdown */}
          <div>
            <label className="block mb-1 font-semibold">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-purple-800 rounded px-3 py-2"
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
          </div>

          {/* State Dropdown */}
          <div>
            <label className="block mb-1 font-semibold">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border border-purple-800 rounded px-3 py-2"
            >
              <option value="">Select State</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Kerala">Kerala</option>
            </select>
          </div>

          {/* Product Dropdown */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold">Select Product*</label>
            <select
              name="productId"
              value={formData.productId}
              onChange={handleChange}
              required
              className="w-full border border-purple-800 rounded px-3 py-2"
            >
              <option value="">Select a Product</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Enter your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-purple-800 rounded px-3 py-2"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-purple-800 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition"
            >
              BOOK PRODUCT
            </button>
          </div>

          {/* Book Demo Link */}
          <div className="md:col-span-2 text-center mt-4">
            <p className="text-sm">
              Looking for a Product Demo?{" "}
              <a
                href="/demo"
                className="text-purple-800 font-semibold underline hover:text-purple-600 transition"
              >
                Book a Demo
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Footer CTA */}
     <Jointhebullwork/>
     <ContactPage/>
    </div>
  );
};

export default OrderPage;
