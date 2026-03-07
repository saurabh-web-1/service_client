import standardImg from "../assets/Standard Plan.webp";
import premiumImg from "../assets/Premium Plan.webp";
import customImg from "../assets/business plan.webp";
import { FaCheck } from "react-icons/fa";

const PricingSection = () => {
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
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> 5 Pages Website</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> 1 Year Hosting</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Dynamic Website ( Premium Design )</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Admin Access</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Lifetime 24/7 Free Hosting Support</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Unlimited Images & Videos Upload</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Free SSL Certificates</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> SEO Friendly Website</li>
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Payment Gateway Integration</li>
              
              
            </ul>

            <div className="text-center mt-8">
              <a href="tel:+919311868909">
              <button className="bg-orange-400 px-7 py-2.5 rounded-lg font-semibold hover:bg-orange-500 transition">
                Call Now
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
              <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> 12 Pages Website</li>
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

            </ul>

            <div className="text-center mt-8">
              <a href="tel:+919311868909">
              <button className="bg-orange-400 text-black px-7 py-2.5 rounded-lg font-semibold hover:bg-orange-500 transition">
                Call Now
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
              <p className="line-through text-gray-200 text-lg">₹ 25,000</p>
              <h3 className="text-3xl font-bold text-yellow-300 mt-1">₹ 10,999</h3>
            </div>

            <ul className="space-y-3 text-gray-700 text-sm mt-6">
            <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> 12 Pages Website</li>
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
                <li className="flex gap-3"><FaCheck className="text-blue-600 mt-1" /> Woocommece Features</li>
                
            </ul>

            <div className="text-center mt-8">
              <a href="tel:+919311868909">
              <button className="bg-orange-400 px-7 py-2.5 rounded-lg font-semibold hover:bg-orange-500 transition">
                Call Now
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