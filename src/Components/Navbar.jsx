import React, { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <h1 className="text-xl font-bold text-gray-800">XYZ Courier</h1>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <a href="/" className="text-gray-800 hover:text-blue-500">
              Home
            </a>
            <a href="charges" className="text-gray-800 hover:text-blue-500">
              Charges
            </a>
            <a href="about-us" className="text-gray-800 hover:text-blue-500">
              About Us
            </a>
            <a href="contact-us" className="text-gray-800 hover:text-blue-500">
              Contact Us
            </a>
          </div>
          <div className="hidden lg:flex space-x-8">
            <a href="login" className="text-gray-800 hover:text-blue-500">
              Log in
            </a>
            <a href="register" className="text-gray-800 hover:text-blue-500">
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={handleDrawerToggle}
              className="text-gray-800 focus:outline-none"
            >
              {mobileOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className=" lg:hidden bg-white border-t border-gray-200">
          <div className=" px-2 space-y-2 pb-4">
            <a href="/" className="block text-gray-800 hover:text-blue-500">
              Home
            </a>
            <a
              href="charges"
              className="block text-gray-800 hover:text-blue-500"
            >
              Charges
            </a>
            <a
              href="about-us"
              className="block text-gray-800 hover:text-blue-500"
            >
              About Us
            </a>
            <a
              href="contact-us"
              className="block text-gray-800 hover:text-blue-500"
            >
              Contact Us
            </a>
            <a href="login" className="block text-gray-800 hover:text-blue-500">
              Log in
            </a>
            <a
              href="register"
              className="block text-gray-800 hover:text-blue-500"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
