import React, { useState } from "react";
import { registerMerchant, registerRider } from "./firebaseAuth"; // Import your registration functions

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("merchant"); // Default to merchant
  const [error, setError] = useState("");

  const handleRegistration = async () => {
    setError(""); // Reset error
    try {
      if (userType === "merchant") {
        await registerMerchant(email, password);
        alert("Merchant Registered Successfully!");
      } else {
        await registerRider(email, password);
        alert("Rider Registered Successfully!");
      }
      setEmail(""); // Clear form fields
      setPassword("");
    } catch (error) {
      setError(error.message); // Display error message
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {userType === "merchant" ? "Become a Merchant" : "Become a Rider"}
        </h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <div className="my-5 flex justify-around sm:justify-between">
          <button
            onClick={() => setUserType("merchant")}
            className={`px-9 sm:px-16 py-2 rounded-md ${
              userType === "merchant"
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            } transition`}
          >
            Merchant
          </button>
          <button
            onClick={() => setUserType("rider")}
            className={`px-9 sm:px-16 py-2 rounded-md ${
              userType === "rider" ? "bg-green-500 text-white" : "bg-gray-200"
            } transition`}
          >
            Rider
          </button>
        </div>
        <form className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="button"
            onClick={handleRegistration}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
