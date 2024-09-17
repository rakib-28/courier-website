import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <section className="bg-gray-100 p-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>

        {/* FAQ 1 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            onClick={() => setIsOpen1(!isOpen1)}
          >
            <span className="text-lg font-semibold">
              Why choose our service?
            </span>
            <span className="text-lg">
              {isOpen1 ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          {isOpen1 && (
            <div className="py-2 text-gray-600">
              We stand out for our commitment to delivering parcels nationwide
              on time and without any hassle. We offer fast payment, easy
              tracking, a dedicated customer service team, and ensure the safe
              delivery of your parcels.
            </div>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            onClick={() => setIsOpen2(!isOpen2)}
          >
            <span className="text-lg font-semibold">
              What is the coverage area?
            </span>
            <span className="text-lg">
              {isOpen2 ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          {isOpen2 && (
            <div className="py-2 text-gray-600">
              We provide nationwide coverage, reaching even the most remote
              areas for delivery.
            </div>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            onClick={() => setIsOpen3(!isOpen3)}
          >
            <span className="text-lg font-semibold">
              What services do we provide?
            </span>
            <span className="text-lg">
              {isOpen3 ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          {isOpen3 && (
            <div className="py-2 text-gray-600">
              We offer parcel delivery, cash-on-delivery services, and real-time
              tracking.
            </div>
          )}
        </div>

        {/* FAQ 4 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            onClick={() => setIsOpen4(!isOpen4)}
          >
            <span className="text-lg font-semibold">
              How can I know about delivery charges?
            </span>
            <span className="text-lg">
              {isOpen4 ? <FaMinus /> : <FaPlus />}
            </span>
          </button>
          {isOpen4 && (
            <div className="py-2 text-gray-600">
              Our charges depend on the weight and delivery location. You can
              use our pricing tool for a more accurate estimate.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
