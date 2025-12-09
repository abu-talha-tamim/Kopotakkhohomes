"use-client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Swipers = () => {
  const slides = [
    {
      id: 1,
      src: "/Kopotakkho-Homes-Ltdi-img._files/value-9.jpg",
      alt: "project 1",
      title: "Transparency",
      subtitle:
        "Delivering utmost client-service to maintain lifelong relationships.",
    },
    {
      id: 2,
      src: "/Kopotakkho-Homes-Ltdi-img._files/PT-D-Adnan-Palace.png",
      alt: "project 2",
      title: "Client-Centric",
      subtitle:
        "Delivering utmost client-service to maintain lifelong relationships.",
    },
    {
      id: 3,
      src: "/Kopotakkho-Homes-Ltdi-img._files/Thumb-Image-HM.png",
      alt: "project 3",
      title: "Adaptability",
      subtitle:
        "Delivering utmost client-service to maintain lifelong relationships.",
    },
    {
      id: 4,
      src: "/Kopotakkho-Homes-Ltdi-img._files/Image-2.png",
      alt: "project 4",
      title: "Design & Build",
      subtitle:
        "Delivering utmost client-service to maintain lifelong relationships.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "url('/Kopotakkho-Homes-Ltdi-img._files/Banner-2.jpg')",
        backgroundPosition: "center -500px",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/95 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16">
        <h2 className="fancy-title text-left text-3xl md:text-5xl lg:text-[56px] leading-tight text-white mb-12">
          <span className="block">Explore our exclusively</span>
          <span className="block ml-48">Stunning projects</span>
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            spaceBetween={28}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              640: { slidesPerView: 1.2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
          >
            {slides.map((s, idx) => (
              <SwiperSlide key={s.id}>
                <div className="relative group overflow-hidden rounded-md shadow-lg">
                  {/* image container */}
                  <div className="w-full aspect-[3/4] relative bg-gray-200">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* subtle black overlay that intensifies on hover */}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition-colors duration-500"></div>
                  </div>

                  {/* Big translucent number at center-bottom (behind text) */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 flex items-end justify-center"
                  >
                    <span
                      className="text-[140px] leading-none font-extrabold text-white opacity-10 drop-shadow-lg select-none"
                      style={{ transform: "translateY(8%)" }}
                    >
                      {idx + 1}
                    </span>
                  </div>

                  {/* Centered title & subtitle (middle of card) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
                    <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight drop-shadow-md">
                      {s.title}
                    </h3>
                    <p className="max-w-[420px] mt-3 text-sm md:text-base text-white/90">
                      {s.subtitle}
                    </p>
                  </div>

                  {/* bottom small text block (left) */}
                  <div className="absolute bottom-4 left-4 text-white z-30">
                    <h4 className="text-sm font-semibold">{s.title}</h4>
                    <p className="text-xs opacity-90">{s.alt}</p>
                  </div>

                  {/* centered plus button like in your original design (keeps same) */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Swipers;
