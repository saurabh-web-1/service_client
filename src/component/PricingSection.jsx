import standardImg from "../assets/Standard Plan.webp";
import premiumImg from "../assets/Premium Plan.webp";
import customImg from "../assets/business plan.webp";
import { FaCheck } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const PricingSection = () => {
  const whatsapp = "919311868909";

const standardMessage = encodeURIComponent(
  "Hello InfiWeb Studio, I'm interested in the Standard Plan (₹4,999). Please share complete details."
);
const premiumMessage = encodeURIComponent(
  "Hello InfiWeb Studio, I'm interested in the Premium Plan (₹8,999). Please share complete details."
);
const customMessage = encodeURIComponent(
  "Hello InfiWeb Studio, I'm interested in the Custom Plan. Please contact me with complete details."
);
  return (
    <section className="bg-gray-100 py-24" id="pricing">
      <div className="container mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Plans & Pricing
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Choose the perfect plan according to your business needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* STANDARD PLAN */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">

            <div className="text-center mb-6">
              <span className="inline-block bg-orange-500 text-white px-6 py-2 text-sm font-semibold rounded-xl">
                Standard Plan
              </span>
              <img src={standardImg} alt="Standard Plan" className="mx-auto h-56 mt-6 object-contain" />
            </div>

            <div className="text-center mb-6">
              <p className="line-through text-gray-400 text-lg">₹ 10,000</p>
              <h3 className="text-3xl font-bold text-blue-700 mt-1">₹ 4,999</h3>
            </div>

            <ul className="space-y-3 text-gray-700 text-sm mt-6">
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Up to 5 Pages Website</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> 1 Year Hosting</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Dynamic Website ( Premium Design )</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Lifetime 24/7 Free Hosting Support</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Unlimited Images & Videos Upload</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> WhatsApp Chat Button</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Contact Form</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Free SSL Certificates</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> SEO Friendly Website</li>
                

              <h4 className="text-lg font-semibold mt-8 mb-4"> Technologies Used</h4>
              
 

<div className="flex flex-wrap gap-2">
  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Html</span>
  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">JavaScript</span>
  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">css</span>
  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">PHP</span>
  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">MySQL</span>
</div>
             
              
            </ul>

            <div className="text-center mt-8">
  <a
    href={`https://wa.me/${whatsapp}?text=${standardMessage}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-white px-7 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
      <FaWhatsapp size={22} />
      Message Now
    </button>
  </a>
</div>
          </div>

          {/* PREMIUM PLAN */}
          <div className="rounded-2xl shadow-xl p-8 text-white bg-gradient-to-b from-blue-800 to-blue-600 transform scale-105 hover:scale-110 transition duration-300">

            <div className="text-center mb-6">
              <span className="inline-block bg-orange-500 text-white px-6 py-2 text-sm font-semibold rounded-xl">
                Premium Plan
              </span>
              <img src={premiumImg} alt="Premium Plan" className="mx-auto h-56 mt-6 object-contain" />
            </div>

            <div className="text-center mb-6">
              <p className="line-through text-gray-200 text-lg">₹ 20,000</p>
              <h3 className="text-3xl font-bold text-yellow-300 mt-1">₹ 8,999</h3>
            </div>

            <ul className="space-y-3 text-sm mt-6">
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Up to10 Pages Website</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> 1 Year Hosting</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Dynamic Website ( Premium Design )</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Admin Access</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Lifetime 24/7 Free Hosting Support</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Unlimited Images & Videos Upload</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Free SSL Certificates</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> SEO Friendly Website</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Payment Gateway Integration</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Contact Form</li>
               <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Social Media Integration</li>
                <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Call Button Integration</li>
                
<h4 className="text-lg font-semibold mt-8 mb-4">
  Technologies Used
</h4>

<div className="flex flex-wrap gap-2">
  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React.js</span>
  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Express.js</span>
  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">MongoDB</span>
  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Tailwind CSS</span>
  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">REST API</span>
</div>
            </ul>

            <div className="text-center mt-8">
  <a
    href={`https://wa.me/${whatsapp}?text=${premiumMessage}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-white px-7 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
      <FaWhatsapp size={22} />
      Message Now
    </button>
  </a>
</div>
          </div>

          {/* CUSTOM PLAN */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300">

            <div className="text-center mb-6">
              <span className="inline-block bg-orange-500 text-white px-6 py-2 text-sm font-semibold rounded-xl">
                Custom Plan
              </span>
              <img src={customImg} alt="Custom Plan" className="mx-auto h-56 mt-6 object-contain" />
            </div>

          
            <div className="text-center mb-6">
              <p className="line-through text-gray-400 text-lg">₹ 25,000</p>
              <h3 className="text-3xl font-bold text-blue-700 mt-1">₹ 10,000</h3>
            </div>

            <ul className="space-y-3 text-gray-700 text-sm mt-6">
            <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Unlimited Pages Website</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> 1 Year Hosting</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Dynamic Website ( Premium Design )</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Admin Access</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Lifetime 24/7 Free Hosting Support</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Unlimited Images & Videos Upload</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Free SSL Certificates</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> SEO Friendly Website</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Payment Gateway Integration</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Live Chat Integration</li>
               <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Social Media Integration</li>
                <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Call Button Integration</li>
                <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> WhatsApp Button Integration</li>
                <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Inquiry Form</li>
                                <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Google Analytics Integration</li>

                <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Woocommece Features</li>
                <h4 className="text-lg font-semibold mt-8 mb-4">
  Technologies Used
</h4>

<div className="flex flex-wrap gap-2">
  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React.js</span>
  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Express.js</span>
  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">MongoDB</span>
  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Tailwind CSS</span>
  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">REST API</span>
</div>
                
            </ul>

            <div className="text-center mt-8">
  <a
    href={`https://wa.me/${whatsapp}?text=${customMessage}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-white px-7 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
      <FaWhatsapp size={22} />
      Message Now
    </button>
  </a>
</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;