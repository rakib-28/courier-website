import React from "react";
import { useNavigate } from "react-router-dom";
import WhyChooseUs from "./WhyChooseUs";
import Faq from "./Faq";

function Hero() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/register");
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <section className="w-full max-w-4xl mx-auto text-center p-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to XYZ Courier
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            This is a simple hero section built with React and Tailwind CSS.
          </p>
          <button
            onClick={goToAbout}
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600"
          >
            Become a Member
          </button>
        </section>
      </div>
      <WhyChooseUs />
      <Faq />
    </div>
  );
}

export default Hero;
