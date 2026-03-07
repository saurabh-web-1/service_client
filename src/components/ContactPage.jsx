import { useState } from "react";
import axios from "axios";
import contactImg from "../assets/contact.svg";

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    subject:"",
    message:""
  })

  const [loading,setLoading] = useState(false)

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try{

      setLoading(true)

      const res = await axios.post(
        "http://localhost:3000/contact",
        formData
      )

      alert(res.data.message)

      setFormData({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:""
      })

    }catch(error){

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      )

    }finally{
      setLoading(false)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-200 py-24 px-4 overflow-hidden" id="contact">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full blur-[140px] opacity-20"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full blur-[140px] opacity-20"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT - PREMIUM GLASS FORM */}
        <div className="backdrop-blur-xl bg-white/80 border border-white/40 shadow-2xl rounded-3xl p-10 md:p-14">

          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Let’s Build Something Amazing
          </h2>
          <p className="text-gray-500 text-center mt-3 mb-10">
            Have a project in mind? We’d love to hear from you.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="premium-input"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="premium-input"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="premium-input"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="premium-input"
              />
            </div>

            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="premium-input resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition duration-300"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>

          </form>

        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="text-sm font-semibold text-blue-600">
            Available 24/7 Support
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
            Contact Our Team
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Whether you're a startup, small business, or enterprise — 
            we provide high-performance, secure, and scalable web solutions 
            tailored to your business needs.
          </p>

          <img
            src={contactImg}
            alt="Contact"
            className="w-full max-w-md drop-shadow-2xl"
          />

          <div className="mt-8 space-y-2 text-gray-700">
            <p>📞 +919311868909</p>
            <p>✉ saurabwebdeveloper@gmail.com</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;