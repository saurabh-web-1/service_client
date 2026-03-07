const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white pt-66 pb-10 overflow-hidden  ">

     
{/* 3 Layer Premium Wave - TOP */}
<div className="absolute top-0 left-0 w-full h-[140px] pointer-events-none overflow-hidden -translate-y-[1px ] ">

  <svg className="footer-wave wave1" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path
      fill="rgba(255,255,255,0.25)"
      d="M0,160 C240,220 480,100 720,160 C960,220 1200,100 1440,160 L1440,320 L0,320 Z"
    />
  </svg>

  <svg className="footer-wave wave2" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path
      fill="rgba(255,255,255,0.5)"
      d="M0,180 C240,240 480,120 720,180 C960,240 1200,120 1440,180 L1440,320 L0,320 Z"
    />
  </svg>

  <svg className="footer-wave wave3" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path
      fill="#ffffff"
      d="M0,200 C240,260 480,140 720,200 C960,260 1200,140 1440,200 L1440,320 L0,320 Z"
    />
  </svg>

</div>
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">InfiWeb</h2>
          <p className="text-white/80 text-sm leading-relaxed">
            We build powerful digital experiences that help businesses grow. 
            From design to development, we deliver scalable and secure solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li className="hover:text-yellow-400 transition cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">About Us</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Services</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Projects</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>Website Development</li>
            <li>UI/UX Design</li>
            <li>E-Commerce Solutions</li>
            <li>SEO Optimization</li>
            <li>Maintenance & Support</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
          <p className="text-white/80 text-sm">📞 +919311868909</p>
          <p className="text-white/80 text-sm">✉ saurabwebdeveloper@gmail.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition cursor-pointer">
              F
            </div>
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition cursor-pointer">
              I
            </div>
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition cursor-pointer">
              L
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} InfiWeb. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;