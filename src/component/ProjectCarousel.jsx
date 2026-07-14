import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

import "swiper/css";
import "swiper/css/effect-coverflow";


const ProjectCarousel = () => {

  const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const API = import.meta.env.VITE_API_URL;

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get(`${API}/workHistory`);

      setProjects(data?.data || []);
    } catch (error) {
      console.error(error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  fetchProjects();
}, []);

 if (loading) {
    return (
      <section className="py-28 text-center">
        <h2 className="text-xl font-semibold">
          Loading Projects...
        </h2>
      </section>
    );
  }

  if (projects.length === 0) {
    return null;
  }


  return (

    <section className="py-28 bg-slate-950" id="projects">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-white">
            Our Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Every project reflects our commitment to quality,
            performance and premium user experience.
          </p>

        </div>

        <Swiper

          modules={[EffectCoverflow, Autoplay]}

          effect="coverflow"

          centeredSlides

          grabCursor

          loop

          autoplay={{
            delay:3500,
            disableOnInteraction:false
          }}

          breakpoints={{
            320:{
              slidesPerView:1
            },
            768:{
              slidesPerView:1.2
            },
            1200:{
              slidesPerView:1.5
            }
          }}

          coverflowEffect={{
            rotate:0,
            stretch:0,
            depth:220,
            modifier:1.8,
            slideShadows:false
          }}

        >

          {

            projects.map(project=>(

              <SwiperSlide key={project.id}>

                <a

                  href={project.liveUrl}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="block"

                >

                  <div className="rounded-3xl overflow-hidden bg-[#181818] border border-white/10 hover:border-blue-500 transition">

                    <div className="grid lg:grid-cols-2 gap-12 items-center p-12">

                      {/* LEFT */}

                      <div>

                        <img

                          src={project.logo || "/logo-placeholder.png"}

                          className="w-20 h-20 rounded-xl mb-8"

                          alt="logo"

                        />

                        <h3 className="text-4xl font-bold text-white">

                          {project.projectName}

                        </h3>

                        <p className="mt-6 text-gray-300 leading-8">

                          {project.description}

                        </p>

                        <div className="flex flex-wrap gap-3 mt-8">

                          {

                           project.technologies?.map((item) => (

                              <span

                                key={item}

                                className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 text-sm"

                              >

                                {item}

                              </span>

                            ))

                          }

                        </div>

                        <button className="mt-10 bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl font-semibold">

                          Visit Website

                        </button>

                      </div>

                      {/* RIGHT */}

                      <div>

                        <div className="rounded-2xl overflow-hidden shadow-2xl">

                          <img

                           src={project.ImageURL?.[0] || "/no-image.png"}

                            className="w-full h-full object-cover hover:scale-105 duration-500"

                            alt={project.projectName}

                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </a>

              </SwiperSlide>

            ))

          }

        </Swiper>

      </div>

    </section>

  );

};

export default ProjectCarousel;