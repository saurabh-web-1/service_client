import { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import { Phone } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-container">

        {/* Logo */}

        <a href="#" className="logo-box">
          <img src={logo} alt="InfiWeb" className="logo" />
        </a>


        {/* Hamburger */}

        

        {/* Navigation */}

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>

          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>


          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          

         <a href="tel:+919311868909" className="call-btn">
            <Phone size={20} strokeWidth={2.5} />
             <span>Call Now</span>
          </a>
        </nav>
      

      <div
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}

export default Navbar;