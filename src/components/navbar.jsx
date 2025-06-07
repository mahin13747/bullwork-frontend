import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("https://bullwork-backend.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const links = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/products" },
    { name: "TECHNOLOGY", path: "/Technology" },
    { name: "ABOUT US", path: "/Aboutus" },
    { name: "CAREERS", path: "/Careers" },
  ];

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50 px-2 sm:px-6">
      <div className="flex items-center justify-between h-14 max-w-7xl mx-auto relative">

        <div className="flex items-center space-x-3">
          <img
            src="https://www.bullworkmobility.com/images/logo.webp"
            alt="Logo"
            className="h-8 w-auto ml-2 sm:ml-5"
          />
          <Link
            to="/"
            className="text-2xl font-normal tracking-wide ml-1 sm:ml-2"
          >
            BULLWORK MOBILITY
          </Link>
        </div>


        <div
          ref={dropdownRef}
          className="hidden md:flex items-center space-x-10 text-sm font-normal text-white relative"
        >
          {links.map((link) =>
            link.name === "PRODUCTS" ? (
              <div key={link.name} className="relative cursor-pointer">
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="text-white hover:text-fuchsia-700 transition tracking-wide"
                >
                  {link.name}
                </button>

                {dropdownOpen && (
                  <div className="fixed left-0 top-14 w-screen bg-white text-black z-40 shadow-lg border-t border-gray-200">
                    <div className="max-w-screen-2xl mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                      {products.map((product) => (
                        <div key={product.id} className="text-center">
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full max-w-xs h-48 object-cover rounded mb-2 mx-auto"
                          />
                          <p className="font-medium text-black text-lg tracking-widest">
                            {product.name}
                          </p>
                          <Link
                            to={`/products/${product.id}`}
                            className="text-purple-600 text-xs mt-1 inline-block hover:underline"
                            onClick={() => setDropdownOpen(false)}
                          >
                            EXPLORE
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-fuchsia-700 transition tracking-wide"
                onClick={() => setDropdownOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}

          <Link to="/orders" onClick={() => setDropdownOpen(false)}>
            <button className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-6 py-2 rounded-lg shadow-lg hover:brightness-110 transition duration-300 text-sm font-normal tracking-wide">
              ORDER
            </button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4 space-y-3 transition-all duration-300 ease-in-out">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 border-b border-gray-800 hover:text-yellow-400 tracking-wide"
            >
              {link.name}
            </Link>
          ))}

          <Link to="/orders">
            <button className="w-full mt-4 bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-6 py-3 rounded-lg shadow-lg hover:brightness-110 transition duration-300 text-sm font-normal tracking-wide">
              ORDER
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
