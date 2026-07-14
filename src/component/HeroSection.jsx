import { useState } from "react";
import heroMain from "../assets/hero.webp";
import heroSmall from "../assets/hero2.webp";
import "./HeroSection.css"

function HeroScetion() {

   const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / rect.height) / rect.height;
    setMouse({ x, y });
  };

  return (
    <section  className="hero-section" onMouseMove={handleMouseMove}>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content-lft">

          <h1 className="hero-title">

            <span className="hero-subtitle">
              No. 1 Website Development Agency
            </span>

            <span className="hero-line">
              Transforming Ideas Into
            </span>

            <span className="hero-line">
              Powerful Digital
            </span>

            <span className="hero-line">
              Experiences in India
            </span>

          </h1>


          <p className="hero-text">
            We design and develop high-performance, secure, and scalable
            websites tailored to your business goals. From startups to
            enterprises, we help brands grow with modern technology and
            creative solutions.
          </p>

          <div className="hero-button-area">

            <span className="hero-tagline">
              You Imagine
            </span>

            <a
              href="tel:+919311868909"
              className="hero-call-btn"
            >
              We Create.
            </a>


          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image-rt">

          <img
            src={heroMain}
            alt="Main Dashboard"
            className="hero-main-image"
            loading="lazy"
            style={{
              transform: `
                rotateY(${mouse.x * 40}deg)
                rotateX(${-mouse.y * 40}deg)
              `
            }}
          />

          <img
            src={heroSmall}
            alt="Floating UI"
            className="hero-small-image"
            loading="lazy"
            style={{
              transform: `
                translateX(${mouse.x * -50}px)
                translateY(${mouse.y * -50}px)
              `
            }}
          />

        </div>

      </div>

      {/* Network Background */}

      <div className="network-bg">
        <div className="network-animation"></div>
      </div>

      {/* Waves */}

      <div className="wave-container">

        <svg
          className="wave wave1"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,.25)"
            d="M0,160 C240,220 480,100 720,160 C960,220 1200,100 1440,160 L1440,320 L0,320 Z"
          />
        </svg>

        <svg
          className="wave wave2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,.5)"
            d="M0,180 C240,240 480,120 720,180 C960,240 1200,120 1440,180 L1440,320 L0,320 Z"
          />
        </svg>

        <svg
          className="wave wave3"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,200 C240,260 480,140 720,200 C960,260 1200,140 1440,200 L1440,320 L0,320 Z"
          />
        </svg>

      </div>

    </section>
  );
}

export default HeroScetion;