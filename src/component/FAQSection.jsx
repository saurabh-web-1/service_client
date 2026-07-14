import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within 5-10 working days depending on requirements.",
  },
  {
    question: "Do you provide hosting and domain?",
    answer:
      "Yes. We provide domain registration, hosting, SSL certificate and complete setup.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every website is fully responsive and works perfectly on mobile, tablet and desktop.",
  },
  {
    question: "Do you provide SEO?",
    answer:
      "Yes. Every website is built with basic SEO optimization and fast loading performance.",
  },
  {
    question: "Do you provide maintenance after delivery?",
    answer:
      "Yes. We provide technical support, maintenance and future upgrades.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold uppercase">
            FAQ
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Frequently Asked Questions
          </h2>

        </div>

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="mb-5 bg-white rounded-xl shadow"
          >

            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex justify-between items-center p-6 text-left font-semibold"
            >
              {faq.question}

              <ChevronDown
                className={`transition ${
                  open === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-gray-600">
                {faq.answer}
              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
};

export default FAQSection;