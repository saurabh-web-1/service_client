import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to complete a website?",
    answer:
      "Most business websites are completed within 5–10 working days. Larger custom projects may require additional time depending on the features and requirements.",
  },
  {
    question: "Is domain included with the website?",
    answer:
      "No. The domain name is purchased separately by the client. We can help you choose and register the best domain for your business.",
  },
  {
    question: "Do you provide free hosting?",
    answer:
      "Yes. Every website includes 1 Year Free Premium Hosting. After one year, hosting can be renewed at the applicable renewal cost.",
  },
  {
    question: "Do you set up Google Search Console?",
    answer:
      "Yes. We connect your website with Google Search Console, verify ownership, submit your XML sitemap, and configure it for better search engine indexing.",
  },
  {
    question: "Will my website be SEO friendly?",
    answer:
      "Yes. Every website is developed with SEO best practices including optimized URLs, meta tags, sitemap, robots.txt, responsive design, and fast loading speed.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We provide 1 Year Free Website Maintenance, including bug fixes, security updates, technical support, and minor content changes.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Absolutely. Every website is fully responsive and optimized for mobile phones, tablets, laptops, and desktop devices.",
  },
  {
    question: "Can I update my website in the future?",
    answer:
      "Yes. Your website can be upgraded anytime. We also provide additional features and future enhancements based on your business needs.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Depending on the project, we use HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, PHP, MySQL, and Tailwind CSS to build secure and scalable websites.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply contact us through WhatsApp, phone, or the contact form. We'll discuss your requirements, provide a quotation, and begin your project after confirmation.",
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