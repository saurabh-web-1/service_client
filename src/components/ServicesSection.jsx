import { FaMobileAlt, FaCode, FaBullhorn, FaBug, FaPaintBrush, FaServer } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20" id="services">
      <div className="container mx-auto px-6 md:px-10">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            What We Offer
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide high-quality digital solutions to help your business grow online 
            with modern technology and innovative strategies.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* SERVICE CARD */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaMobileAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Mobile App Development</h3>
            <p className="text-gray-600">
              We build high-performance Android and iOS applications with 
              modern UI and smooth functionality.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaCode className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Full Stack Web Development</h3>
            <p className="text-gray-600">
              Complete frontend and backend development using modern 
              frameworks and scalable architecture.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaBullhorn className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Social Media Ads</h3>
            <p className="text-gray-600">
              Run high-converting Facebook, Instagram & Google Ads 
              campaigns to grow your business.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaBug className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Debugging & Fixing</h3>
            <p className="text-gray-600">
              Fix bugs, optimize performance and improve website stability 
              with expert debugging services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaPaintBrush className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Frontend Design</h3>
            <p className="text-gray-600">
              Modern UI/UX design with responsive layouts and smooth 
              animations for better user experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaServer className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
            <p className="text-gray-600">
              Secure APIs, database management and server-side logic 
              for scalable applications.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;