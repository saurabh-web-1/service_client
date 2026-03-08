import { useState } from "react";
import heroMain from "../assets/hero.webp";
import heroSmall from "../assets/hero2.webp";
import Navbar from "./Navbar";

const HeroSection = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / rect.height) / rect.height;
    setMouse({ x, y });
  };

  return (
    <section
  onMouseMove={handleMouseMove}
  className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white pb-32 md:pb-0" id="home"
>
      <Navbar />

      <div className="container mx-auto px-5 sm:px-6 md:px-10 min-h-screen flex flex-col md:flex-row items-center justify-start md:justify-between gap-10 md:gap-12 pt-24 sm:pt-28 md:pt-0">

        {/* RIGHT IMAGES (Mobile me pehle) */}
        <div className="relative w-full max-w-[750px] h-[280px] sm:h-[400px] md:h-[600px] perspective-[1200px] order-1 md:order-2 mt-6 md:mt-0">

          {/* MAIN IMAGE */}
          <div
            className="absolute right-0 top-10 sm:top-16 md:top-20 w-[85%] sm:w-[75%] md:w-[650px] transition-all duration-300 ease-out"
            style={{
              transform: `
                rotateY(${mouse.x * 35}deg)
                rotateX(${-mouse.y * 35}deg)
                scale(1.05)
              `,
              transformStyle: "preserve-3d",
            }}
          >
            <img
              loading="lazy"
              src={heroMain}
              alt="Main Dashboard"
              className="w-full drop-shadow-2xl rounded-xl"
            />
          </div>

          {/* SMALL FLOATING IMAGE */}
          <div
            className="absolute left-2 sm:left-4 md:-left-6 top-4 sm:top-8 md:-top-0 w-[45%] sm:w-[38%] md:w-[300px] transition-all duration-300 ease-out"
            style={{
              transform: `
                translateX(${mouse.x * -50}px)
                translateY(${mouse.y * -50}px)
                rotateY(${mouse.x * 45}deg)
                rotateX(${-mouse.y * 45}deg)
                scale(1.1)
              `,
              transformStyle: "preserve-3d",
            }}
          >
            <img
             loading="lazy"
              src={heroSmall}
              alt="Floating UI"
              className="w-full drop-shadow-2xl rounded-xl"
            />
          </div>

        </div>

        {/* LEFT CONTENT */}
        <div className="max-w-xl space-y-5 sm:space-y-6 text-center md:text-left order-2 md:order-1 mt-8 md:-mt-16 px-2 sm:px-0">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug md:leading-tight">
            <span className="block text-yellow-400 text-base sm:text-lg md:text-xl font-semibold mb-2">
              No. 1 Website Development Company
            </span>
            <span className="block">
              Transforming Ideas Into
            </span>
            <span className="block">
              Powerful Digital Experiences in India
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-white/90 leading-relaxed">
            We design and develop high-performance, secure, and scalable websites 
            tailored to your business goals. From startups to enterprises, 
            we help brands grow with modern technology and creative solutions.
          </p>

          <p className="text-base sm:text-lg md:text-xl font-medium">
            You Imagine{" "}
            <a href="tel:+919311868909">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded">
              We Create.
            </span>
            </a>
          </p>

        </div>

      </div>

      {/* Animated Network Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="network-animation"></div>
      </div>

      {/* 3 Layer Premium Wave */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[120px] md:h-[160px] pointer-events-none z-20">

        <svg className="wave wave1" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(255,255,255,0.25)"
            d="M0,160 C240,220 480,100 720,160 C960,220 1200,100 1440,160 L1440,320 L0,320 Z"
          />
        </svg>

        <svg className="wave wave2" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgba(255,255,255,0.5)"
            d="M0,180 C240,240 480,120 720,180 C960,240 1200,120 1440,180 L1440,320 L0,320 Z"
          />
        </svg>

        <svg className="wave wave3" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,200 C240,260 480,140 720,200 C960,260 1200,140 1440,200 L1440,320 L0,320 Z"
          />
        </svg>

      </div>

    </section>
  );
};

export default HeroSection;