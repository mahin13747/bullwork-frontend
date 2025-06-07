import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12 text-center">
      <img
        src="https://www.bullworkmobility.com/images/logo.png"
        alt="Bullwork Mobility Logo"
        className="w-32 md:w-48 mb-6"
      />
      <h1 className="text-xl md:text-3xl font-bold text-green-700 mb-2">
        Thank You for Your Interest!
      </h1>
      <p className="text-gray-700 text-sm md:text-base mb-6 max-w-md">
        We appreciate your response. Our team will get back to you shortly!
      </p>
      <button
        onClick={handleReturnHome}
        className="bg-[#4b0052] text-white px-6 py-3 rounded-md hover:bg-[#5c0065] transition text-sm md:text-base"
      >
        Click Here to Return to Main Website
      </button>
    </div>
  );
};

export default SuccessPage;
