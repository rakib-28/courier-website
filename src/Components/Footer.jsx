import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-row  justify-between items-start">
        {/* Logo and Address */}
        <div className="w-full  mb-6">
          <img
            src="https://via.placeholder.com/150x50"
            alt="SteadFast Courier"
            className="mb-4"
          />
          <p>House# 01, Dhanmondi, Dhaka 1209</p>
          <p>E-mail: info@xyz.com.bd</p>
          <p>Hotline: 0111-023456</p>
        </div>

        {/* Company Links */}
        <div className="w-full  mb-6">
          <h5 className="font-bold text-xl mb-4">Company</h5>
          <ul className="space-y-2 ">
            <li>
              <a href="contact-us">Contact Us</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>

        {/* Sister Concern */}
        <div className="w-full  mb-6">
          <h5 className="font-bold text-xl mb-4">Sister Concern</h5>
          <ul className="space-y-2 ">
            <li>
              <a href="#">Example 1</a>
            </li>
            <li>
              <a href="#">Example 2</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="w-full  mb-6 ">
          <h5 className="font-bold text-xl mb-4">Follow Us</h5>
          <div className="flex space-x-4 ">
            <FaFacebook className="text-2xl hover:text-blue-600 cursor-pointer" />
            <FaLinkedin className="text-2xl hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
          </div>
          <div className="mt-4">
            <a href="#">
              <img
                src="https://via.placeholder.com/150x40?text=App+Store"
                alt="App Store"
                className="inline-block mr-4"
              />
            </a>
            <a href="#">
              <img
                src="https://via.placeholder.com/150x40?text=Google+Play"
                alt="Google Play"
                className="inline-block"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-1 mt-8 ">
        © 2024 XYZ Courier Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
