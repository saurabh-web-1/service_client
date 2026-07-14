import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ronak Kareliya",
    company: "Athelio Sports Management",
    review:
      "InfiWeb Studio delivered our business website before deadline. The design is modern and the support is excellent.",
  },
  {
    name: "Priya Gupta",
    company: "Fashion Store",
    review:
      "Very professional team. They built our e-commerce website exactly as we wanted. Highly recommended.",
  },
  {
    name: "Amit Verma",
    company: "Dream Weaver Wravels",
    review:
      "Amazing experience. Fast website, premium UI and great communication throughout the project.",
  },
];

const ReviewSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase">
            Client Reviews
          </p>

          <h2 className="text-5xl font-bold mt-3">
            What Our Clients Say
          </h2>

          <p className="text-gray-500 mt-5">
            Trusted by startups and businesses across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="flex gap-1 text-yellow-500 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <h3 className="font-bold mt-6">
                {item.name}
              </h3>

              <span className="text-gray-500 text-sm">
                {item.company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;