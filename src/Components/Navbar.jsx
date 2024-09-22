import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { merchantAuth, riderAuth } from "./firebase"; // Import both auth instances

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

  // Determine if the user is logged in as a merchant or rider
  const currentUser = merchantAuth.currentUser || riderAuth.currentUser;

  // Handle logout for both merchant and rider
  const handleLogout = async () => {
    try {
      if (merchantAuth.currentUser) {
        await merchantAuth.signOut(); // Merchant logout
      } else if (riderAuth.currentUser) {
        await riderAuth.signOut(); // Rider logout
      }
      navigate("/"); // Redirect to Home page after logout
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 lg:w-1/4 lg:j ">
            <a href="/">
              <h1 className="text-xl font-bold text-gray-800">XYZ Courier</h1>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:w-2/4 lg:justify-center space-x-8">
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
          <div className="hidden lg:flex lg:w-1/4 lg:justify-end space-x-8">
            {currentUser ? (
              <div className=" flex justify-center items-center gap-2">
                <p>
                  Hi, <span className="font-medium">{currentUser.email}</span>
                </p>

                <button
                  onClick={handleLogout}
                  className="text-white bg-red-500 py-1 px-2 rounded-full hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              // If user is not logged in, show Login and Register buttons
              <div className="hidden lg:flex space-x-8">
                <a href="login" className="text-gray-800 hover:text-blue-500">
                  Log in
                </a>
                <a
                  href="register"
                  className="text-gray-800 hover:text-blue-500"
                >
                  Register
                </a>
              </div>
            )}
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
            {currentUser ? (
              <div>
                <p className="pb-2">
                  Hi, <span className="font-medium">{currentUser.email}</span>
                </p>

                <button
                  onClick={handleLogout}
                  className="text-white bg-red-500 py-1 px-2 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              // If user is not logged in, show Login and Register buttons
              <div className="flex-row">
                <a href="login" className="block pb-2">
                  Log in
                </a>
                <a href="register" className="block">
                  Register
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
