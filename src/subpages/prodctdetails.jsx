import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Jointhebullwork from "../components/jointhebullwork";
import ContactPage from "../components/contact";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [feature, setFeature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductAndFeature = async () => {
      try {
        setLoading(true);

        const productRes = await fetch(`https://bullwork-backend.onrender.com/products/${id}`);
        if (!productRes.ok) throw new Error("Failed to fetch product");
        const productData = await productRes.json();
        setProduct(productData);

        const featureRes = await fetch(`https://bullwork-backend.onrender.com/api/features/${id}`);
        if (!featureRes.ok) throw new Error("Failed to fetch features");
        const featureData = await featureRes.json();
        setFeature(featureData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductAndFeature();
  }, [id]);

  if (loading) return <p className="text-center pt-20">Loading...</p>;
  if (error) return <p className="text-center pt-20 text-red-600">{error}</p>;
  if (!product) return <p className="text-center pt-20">No product found.</p>;

  return (
    <div className="w-screen min-h-screen object-contain">
      {/* Product Image */}
      <img
        src={product.image2 || "/placeholder.png"}
        alt={product.name}
        className="w-full max-h-[100vh] h-full object-contain"
      />

      <div className="bg-gray-50">
        <div className="w-full text-center px-4 pt-10">
          <h1
            className="text-4xl sm:text-7xl text-[#590561] mb-10"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            {product.name}
          </h1>

          {/* Description */}
          <p className="text-center text-gray-700 max-w-[90vw] sm:max-w-3xl mx-auto text-base sm:text-lg">
            {product.description || "No description available."}
          </p>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-white flex flex-wrap items-center justify-evenly px-5 py-2 shadow-lg mt-10 mb-10 gap-2 sm:gap-4">
          <ul className="flex flex-wrap gap-3 sm:gap-8 justify-center w-full sm:w-auto">
            <li>
              <a href="#features" className="hover:text-purple-500 cursor-pointer text-sm sm:text-base">
                1. Features
              </a>
            </li>
            <li>
              <a href="#vedio" className="hover:text-purple-500 cursor-pointer text-sm sm:text-base">
                2. Vedio
              </a>
            </li>
            <li>
              <a href="" className="hover:text-purple-500 cursor-pointer text-sm sm:text-base">
                3. Tco
              </a>
            </li>
            <li>
              <a href="" className="hover:text-purple-500 cursor-pointer text-sm sm:text-base">
                4. specifications
              </a>
            </li>
          </ul>

          <Link to='/orders' className="w-full sm:w-auto flex justify-center">
            <button
              className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                         text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg
                         shadow-lg hover:brightness-110 transition duration-300 
                         text-sm font-normal tracking-widest max-w-xs w-full sm:w-auto"
            >
              ORDER
            </button>
          </Link>
        </nav>

        {/* Features Section */}
        <section
          id="features"
          className="w-full mb-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 px-4 sm:px-0"
        >
          {/* Feature Image */}
          <div className="w-full sm:w-1/2 h-[300px] sm:h-[500px] bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(${feature?.imageUrl || "/fallback-feature-image.webp"})` }}
          ></div>

          {/* Feature Texts */}
          <div className="w-full sm:w-1/2 flex flex-col gap-6 sm:gap-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-black drop-shadow-lg text-center sm:text-left">
              {feature?.title}
            </h2>

            <div className="flex flex-col gap-4">
              <div className="bg-fuchsia-500 bg-opacity-70 text-white p-4 rounded-lg shadow-md max-w-full">
                <p>{feature?.feature1}</p>
              </div>

              <div className="bg-purple-700 bg-opacity-70 text-white p-4 rounded-lg shadow-md max-w-full">
                <p>{feature?.feature2}</p>
              </div>

              <div className="bg-indigo-600 bg-opacity-70 text-white p-4 rounded-lg shadow-md max-w-full">
                <p>{feature?.feature3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="text-center my-10 px-4">
  <h1 className="text-2xl sm:text-4xl text-center font-semibold text-[#510059]">
    {{
      1: "Charging Ahead with Zero Emissions",
      2: "Power up with the GLX E-Loader",
      3: "Charging Ahead with Zero Emissions",
      4: "Charging Ahead with Zero Emissions",
      5: "OX-1 Your Ultimate Material Handling Solution"
    }[Number(id)] || "Explore Our Innovative Vehicles"}
  </h1>
</section>


        <video
          src={product.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full mb-10 h-[250px] sm:h-[400px] object-contain rounded-l-full bg-transparent"
        />
      </div>

      <Jointhebullwork />
      <ContactPage />
    </div>
  );
};

export default ProductDetailsPage;
