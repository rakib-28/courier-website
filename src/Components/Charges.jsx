const Charges = () => {
  return (
    <section className="bg-gray-100 h-screen py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Charges</h2>
        <p className="text-lg text-gray-500 mb-10">
          Affordable pricing for all our services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Basic Plan
            </h3>
            <p className="text-gray-600 text-lg">$19 / month</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>10 projects</li>
              <li>Basic support</li>
              <li>Email integration</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full">
              Select
            </button>
          </div>
          <div className="bg-blue-100 p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Standard Plan
            </h3>
            <p className="text-gray-600 text-lg">$49 / month</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>50 projects</li>
              <li>Priority support</li>
              <li>Advanced tools</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full">
              Select
            </button>
          </div>
          <div className="bg-gray-50 p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Premium Plan
            </h3>
            <p className="text-gray-600 text-lg">$99 / month</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Unlimited projects</li>
              <li>Dedicated support</li>
              <li>Custom solutions</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full">
              Select
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charges;
