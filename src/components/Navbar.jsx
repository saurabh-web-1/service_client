import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4 md:px-10 py-4 md:py-6">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Flowin Developer"
            className="h-14 md:h-40"
          />
        </div>

        {/* DESKTOP MENU (unchanged) */}
        <div className="hidden lg:flex items-center gap-8 
                        bg-white/10 backdrop-blur-md 
                        border border-white/20 
                        px-8 py-4 rounded-2xl shadow-xl">

          <a href="#home" className="text-white hover:text-yellow-400 transition">
            Home
          </a>

          <a href="#about" className="text-white hover:text-yellow-400 transition">
            About Us
          </a>

          <a href="#services" className="text-white hover:text-yellow-400 transition">
            Services
          </a>

          <a href="#projects" className="text-white hover:text-yellow-400 transition">
            Our Projects
          </a>

          <a href="#contact" className="text-white hover:text-yellow-400 transition">
            Contact Us
          </a>


         <a href="tel:+919311868909">
  <button className="ml-4 bg-yellow-400 text-black font-semibold 
                     px-5 py-2 rounded-xl shadow-lg 
                     hover:scale-105 transition duration-300">
    Call: +919311868909
  </button>
</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(true)}
            className="text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* RIGHT SIDE DRAWER (Smooth Slide) */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[350px] 
        bg-gradient-to-b from-blue-600 to-indigo-700 
        shadow-2xl p-6 transform transition-transform duration-500 ease-in-out lg:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >

       {/* Drawer Header */}
<div className="flex items-center justify-between mb-8">

  {/* Logo */}
  <img
    src={logo}
    alt="Flowin Developer"
    className="h-30  left-40"
  />

  {/* Close Button */}
  <button
    onClick={() => setOpen(false)}
    className="p-2 rounded-lg hover:bg-white/10 transition"
  >
    <X size={26} className="text-white" />
  </button>

</div>

        {/* LINKS (Same As Before) */}
        <div className="flex flex-col space-y-6 text-white text-lg">

          <a href="#home" className="hover:text-yellow-400">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-400">
            About Us
          </a>

          <a href="#services" className="hover:text-yellow-400">
            Services
          </a>

          <a href="#projects" className="hover:text-yellow-400">
            Our Projects
          </a>

         

          <a href="#contact" className="hover:text-yellow-400">
            Contact Us
          </a>


        </div>

        {/* CALL BUTTON (Same As Before) */}
        <div className="absolute bottom-10 left-6 right-6">
         <a href="tel:+919311868909">
  <button className="w-full bg-yellow-400 text-black font-semibold 
                     py-3 rounded-xl shadow-lg">
    📞 Call: +919311868909
  </button>
</a>
        </div>

      </div>
     
    </nav>
  );
};

export default Navbar;