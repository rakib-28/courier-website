const ContactUs = () => {
  return (
    <section className="bg-gray-100 h-screen py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
        <p className="text-lg text-gray-500 mb-10">
          We'd love to hear from you! Fill out the form below to get in touch.
        </p>
        <div className="max-w-xl mx-auto bg-gray-50 p-8 shadow-lg rounded-lg">
          <form>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-40"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
