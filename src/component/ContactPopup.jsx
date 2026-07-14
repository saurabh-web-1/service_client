import { useEffect, useState } from "react";
import axios from "axios";
import { X } from "lucide-react";

const ContactPopup = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const alreadyClosed = localStorage.getItem("contact-popup");

    if (!alreadyClosed) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("contact-popup", "true");
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API = import.meta.env.VITE_API_URL;

      setLoading(true);

      const res = await axios.post(`${API}/contact`, formData);

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      closePopup();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] p-4">

      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl p-8 relative animate-[fadeIn_.4s_ease]">

        <button
          onClick={closePopup}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white flex items-center justify-center transition"
        >
          <X size={20} />
        </button>

        <h2 className="text-3xl font-bold text-center">
          Let's Build Your Website
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Tell us about your project and we'll contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded-xl p-3 w-full outline-none focus:border-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-xl p-3 w-full outline-none focus:border-blue-600"
            />

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-xl p-3 w-full outline-none focus:border-blue-600"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border rounded-xl p-3 w-full outline-none focus:border-blue-600"
            />

          </div>

          <textarea
            rows="5"
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            className="border rounded-xl p-3 w-full outline-none resize-none focus:border-blue-600"
          />

          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default ContactPopup;