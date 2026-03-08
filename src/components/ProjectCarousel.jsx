import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const ProjectCarousel = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API}/workHistory`);
        setProjects(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="bg-white py-28 overflow-hidden" id="projects">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Completed Projects
          </h2>

          <p className="text-gray-500 mt-6 text-lg leading-relaxed">
            Delivering innovation through design and development.
            Each project reflects our commitment to quality,
            performance, and seamless user experience.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 2.2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="max-w-6xl mx-auto projectSwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project._id}>
              <div className="relative flex justify-center">

                <div className="relative group">

                  {/* Image */}
                 <div className="w-full max-w-[1000px] aspect-[16/10] overflow-hidden rounded-3xl">
  <img
    loading="lazy"
    src={project.ImageURL[0]}
    alt={project.projectName}
    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
  />
</div>
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Title Box */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-lg text-center w-[85%] transition duration-500 group-hover:-translate-y-2">
                    <h3 className="font-semibold text-gray-900 text-lg tracking-wide">
                      {project.projectName}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      UI/UX • Development • Optimization
                    </p>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Custom 3D Styling */}
      <style>
        {`
        .projectSwiper {
          perspective: 1200px;
        }

        .projectSwiper .swiper-slide {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform: scale(0.75);
          opacity: 0.4;
          filter: blur(2px);
        }

        .projectSwiper .swiper-slide-prev,
        .projectSwiper .swiper-slide-next {
          transform: scale(0.85);
          opacity: 0.7;
          filter: blur(1px);
        }

        .projectSwiper .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
          filter: blur(0);
          z-index: 20;
        }
        `}
      </style>
    </section>
  );
};

export default ProjectCarousel;