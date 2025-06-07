import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Jointhebullwork from "../components/jointhebullwork";
import ContactPage from "../components/contact";

const Demo = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
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
      const res = await fetch("https://bullwork-backend.onrender.com/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          productId: Number(formData.productId),
        }),
      });

      if (!res.ok) throw new Error("Failed to submit order");

      await res.json();
      alert("Demo booked successfully!");
      navigate("/success");

      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        address: "",
        productId: "",
        message: "",
      });
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      
      <div className="bg-[#4b0052] h-[40vh] sm:h-[50vh] w-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-2xl sm:text-4xl font-semibold uppercase tracking-widest">Demo Form</h1>
        <p className="mt-2 text-sm sm:text-base">Fill in the below details to book a demo</p>
      </div>

     
      <div className="max-w-4xl mx-auto -mt-24 sm:-mt-28 bg-white p-6 sm:p-8 rounded-xl shadow-xl relative z-10">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name*</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full border border-purple-800 rounded px-3 py-2 text-sm sm:text-base"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number*</label>
            <input
              type="tel"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="w-full border border-purple-800 rounded px-3 py-2 text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full border border-purple-800 rounded px-3 py-2 text-sm sm:text-base"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="w-full border border-purple-800 rounded px-3 py-2 text-sm sm:text-base"
            />
          </div>

          {/* Product Selection */}
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium">Select Product*</label>
            <select
              name="productId"
              required
              value={formData.productId}
              onChange={handleChange}
              className="w-full border border-purple-800 rounded px-3 py-2 text-sm sm:text-base"
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
          <div className="sm:col-span-2">
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message..."
              className="w-full border border-purple-800 rounded px-3 py-2 text-sm sm:text-base"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-purple-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-purple-700 transition font-semibold tracking-wide w-full sm:w-auto"
            >
              Book Demo
            </button>
          </div>

          {/* Navigation Link */}
          <div className="sm:col-span-2 text-center mt-2">
            <p className="text-sm sm:text-base">
              Looking for a Product Demo?{" "}
              <Link
                to="/orders"
                className="text-purple-800 font-semibold underline hover:text-purple-600 transition"
              >
                Book Product
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Jointhebullwork/>
      <ContactPage/>
    </div>
  );
};

export default Demo;
