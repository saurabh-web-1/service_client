import { useState } from "react";
import aboutImage from "../assets/about.svg";

const AboutSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-20" id="about">
      <div className="container mx-auto px-6 md:px-10">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={aboutImage}
              alt="About Flowin Developer"
              className="w-full max-w-[500px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 space-y-6">

            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Define Us!
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Welcome to Flown Developer –
              <br />
              A Top Web Development Company in India
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              100% Trusted and Registered Company in India with a professional
              website that provides the best web development and web design
              services in India. We offer multi-functional web portals and
              ensure strong ROI-driven results.
            </p>

            {/* READ MORE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="mt-4 border border-gray-400 px-6 py-3 font-semibold hover:bg-black hover:text-white transition duration-300 flex justify-between items-center w-full md:w-auto"
            >
              {open ? "Read Less" : "Read More!"}
              <span className={`ml-3 transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {/* HIDDEN CONTENT */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                Flown Developer is among the top web design and web development
                companies in India. Our experts deliver high-quality websites
                that are user-friendly, SEO-optimized, and visually appealing.
                We have successfully served 100+ clients across various
                industries.
              </p>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Our professional team ensures fast-loading, secure, and
                responsive websites compatible with modern tools and
                technologies. We help businesses build a powerful online
                presence with affordable and result-oriented web solutions.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;