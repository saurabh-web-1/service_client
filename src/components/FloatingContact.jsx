import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingContact = () => {
  const phone = import.meta.env.VITE_PHONE
 const whatsapp = import.meta.env.VITE_WHATSAPP
  return (
    <div className="fixed right-5 bottom-10 flex flex-col gap-4 z-50">

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition duration-300"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* Call */}
      <a
        href={`https://wa.me/${phone}`}
        className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition duration-300"
      >
        <FaPhone size={22} />
      </a>

    </div>
  );
};

export default FloatingContact;