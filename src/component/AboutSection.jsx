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
              About InfiWeb Craft
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
               Building Powerful Digital
              <br />
              Experiences for Modern Businesses
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
               <strong>InfiWeb Craft</strong> is a leading website development agency in
               India specializing in modern, responsive, and high-performance web
               solutions. We help startups, small businesses, and enterprises establish a
               strong digital presence through custom websites, web applications, and
               e-commerce platforms built with the latest technologies.
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
                At <strong>InfiWeb Craft</strong>, we believe every business deserves a
  professional online identity. Our team designs visually stunning,
  SEO-friendly, secure, and lightning-fast websites that deliver exceptional
  user experiences across all devices. From business websites and portfolio
  websites to custom web applications and large-scale e-commerce solutions, we
  build products that help businesses grow.
              </p>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                O Our expertise includes <strong>React.js</strong>, <strong>Node.js</strong>,
  <strong>Express.js</strong>, <strong>MongoDB</strong>,
  <strong> Tailwind CSS</strong>, REST APIs, authentication systems, payment
  gateway integration, admin dashboards, and cloud deployment. Every project
  is developed with scalability, security, and performance in mind.
              </p>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
  We focus on delivering high-quality digital solutions that not only look
  modern but also generate real business results. Whether you need a company
  website, a custom business portal, an e-commerce platform, or a complete web
  application, InfiWeb Studio is committed to transforming your ideas into
  powerful digital experiences with reliable support and long-term
  maintenance.
</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;