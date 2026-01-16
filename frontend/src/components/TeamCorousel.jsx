import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function TeamCarousel({ team }) {
  return (
    <section className="w-full py-20 bg-white">
    <h1 className="text-5xl font-bold text-center my-24">Our <span className="text-[#005DAA]">Whole</span> Team in one carousel</h1>
      <Swiper
        modules={[Autoplay]}
        loop
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.5 },
        }}
        className="px-6"
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="group relative h-[420px] overflow-hidden rounded-xl hover:cursor-pointer">
              {/* Avatar */}
              <img
                src={member.image}
                alt={member.name}
                className="
                  w-full h-full object-cover
                  transition-all duration-700 ease-out
                  group-hover:scale-110
                  group-hover:brightness-50 hover:cursor-pointer
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  flex flex-col items-center justify-center
                  text-white text-center
                  opacity-0 translate-y-4
                  transition-all duration-500 ease-out
                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
              >
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-wider opacity-80">
                  {member.title}
                </p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TeamCarousel;