const AboutUs = () => {
  return (
    <section className="bg-gray-100 h-screen py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
        <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
          We are a team of passionate individuals dedicated to providing the
          best services for our clients. Our mission is to offer top-notch
          solutions that cater to the specific needs of each customer. With
          years of experience and expertise, we aim to help businesses grow and
          succeed.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide high-quality, reliable, and efficient services that
              exceed our clients' expectations.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become a global leader in providing innovative solutions to
              businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
