import {
  FaTruck,
  FaMoneyBillWave,
  FaMoneyCheckAlt,
  FaLaptop,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 p-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Why you should choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 p-8 shadow-lg rounded-lg text-center">
            <FaTruck className="text-5xl mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Daily Pickup, No Limits
            </h3>
            <p className="text-gray-600">
              We offer unlimited daily pickup options for your convenience.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-50 p-8 shadow-lg rounded-lg text-center">
            <FaMoneyBillWave className="text-5xl mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cash on Delivery</h3>
            <p className="text-gray-600">
              We collect cash on your behalf for seamless transactions.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-50 p-8 shadow-lg rounded-lg text-center">
            <FaMoneyCheckAlt className="text-5xl mx-auto text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Faster Payment Service
            </h3>
            <p className="text-gray-600">
              We provide multiple payment methods including cash, bank, or
              mobile banking.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-gray-50 p-8 shadow-lg rounded-lg text-center">
            <FaLaptop className="text-5xl mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Online Management</h3>
            <p className="text-gray-600">
              Manage all your information easily with our online dashboard.
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-gray-50 p-8 shadow-lg rounded-lg text-center">
            <FaClock className="text-5xl mx-auto text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
            <p className="text-gray-600">
              Get unique tracking codes for every consignment to ensure
              real-time tracking.
            </p>
          </div>
          {/* Card 6 */}
          <div className="bg-gray-50 p-8 shadow-lg rounded-lg text-center">
            <FaHeadset className="text-5xl mx-auto text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              24/7 Customer Service
            </h3>
            <p className="text-gray-600">
              Our support team is available 24/7 to assist you with any
              inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
