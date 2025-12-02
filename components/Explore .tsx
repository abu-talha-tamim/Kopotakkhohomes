"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ImmerseVideo from "./ImmerseVideo";

/**
 * Replace the image paths in `slides` with your real image URLs (public/ folder recommended).
 * Example: "/projects/project-1.jpg" or "/Kopotakkho-Homes-Ltdi-img._files/project1.png"
 */

const slides = [
  {
    id: 1,
    src: "/Kopotakkho-Homes-Ltdi-img._files/Thumb-Image-SM.png",
    alt: "project 1",
    title: "Bhusarga",
    type: "Residential",
    location: "Bashundhara R/A",
  },
  {
    id: 2,
    src: "/Kopotakkho-Homes-Ltdi-img._files/PT-D-Adnan-Palace.png",
    alt: "project 2",
    title: "Adnan Palace",
    type: "Commercial",
    location: "Dhanmondi",
  },
  {
    id: 3,
    src: "/Kopotakkho-Homes-Ltdi-img._files/Thumb-Image-HM.png",
    alt: "project 3",
    title: "Himel Mansion",
    type: "Residential",
    location: "Uttara",
  },
  {
    id: 4,
    src: "/Kopotakkho-Homes-Ltdi-img._files/Image-2.png",
    alt: "project 4",
    title: "Laboni's Dream",
    type: "Residential",
    location: "Gulshan",
  },
  {
    id: 5,
    src: "/Kopotakkho-Homes-Ltdi-img._files/KHL-Meherima-Paradise.jpg",
    alt: "project 5",
    title: "Meherima Paradise",
    type: "Residential",
    location: "Mirpur",
  },
  {
    id: 6,
    src: "/Kopotakkho-Homes-Ltdi-img._files/Thumb-Image.png",
    alt: "project 6",
    title: "Mary's Dream",
    type: "Residential",
    location: "Uttara",
  },
  {
    id: 7,
    src: "/Kopotakkho-Homes-Ltdi-img._files/KHL-Fahim-Nest.jpg",
    alt: "project 7",
    title: "Fahim Nest",
    type: "Residential",
    location: "Banani",
  },
  {
    id: 8,
    src: "/Kopotakkho-Homes-Ltdi-img._files/KHL-Islam-Garden.jpg",
    alt: "project 8",
    title: "Islam Garden",
    type: "Residential",
    location: "Banani",
  },
  {
    id: 9,
    src: "/Kopotakkho-Homes-Ltdi-img._files/KHL-Bandhan.jpg",
    alt: "project 9",
    title: "Bandhan",
    type: "Residential",
    location: "Banani",
  },
  {
    id: 10,
    src: "/Kopotakkho-Homes-Ltdi-img._files/KHL-Mary_s-Dream.jpg",
    alt: "project 10",
    title: "Mary's Dream",
    type: "Residential",
    location: "Uttara",
  },
  {
    id: 11,
    src: "/Kopotakkho-Homes-Ltdi-img._files/KHL-Bhusarga.jpg",
    alt: "project 11",
    title: "Bhusarga",
    type: "Residential",
    location: "Bashundhara R/A",
  },
  {
    id: 12,
    src: "/Kopotakkho-Homes-Ltdi-img._files/KHL-Laboni_s-Dream.jpg",
    alt: "project 12",
    title: "Laboni's Dream",
    type: "Residential",
    location: "Gulshan",
  },
];

const Explore = () => {
  return (
    <section
      className="relative py-32 overflow-hidden bg-cover bg-center "
      style={{
        backgroundImage:
          "url('/Kopotakkho-Homes-Ltdi-img._files/Thumb-Image-SM.png')",
        backgroundPosition: "center -500px",
      }}
    >
      {/* dark overlay over background */}
      <div className="absolute inset-0 bg-gray-900/95 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="fancy-title text-left text-3xl md:text-5xl lg:text-[56px] leading-tight text-white mb-12">
          <span className="block">Bringing your ideal lifestyle</span>
          <span className="block ml-48">To life with our homes</span>
        </h2>

        {/* Swiper row (3 visible on desktop) */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation
            pagination={{ clickable: true }}
            // autoplay removed here if you want stable layout; add back if needed
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
            {slides.map((s) => (
              <SwiperSlide key={s.id}>
                <div className="relative group overflow-hidden rounded-md shadow-lg">
                  {/* Card image (keeps original image colors) */}
                  <div className="w-full aspect-[3/4] relative bg-gray-200">
                    <Image
                      src={s.src}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Dark bottom gradient overlay (card) */}
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* plus icon */}
                  <button
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center
                  border border-gray-200 text-gray-800 hover:scale-105 transition-transform z-20"
                  >
                    <span className="text-2xl">+</span>
                  </button>

                  {/* Text Overlay (Title + Subtitle) */}
                  <div className="absolute bottom-4 left-4 text-white z-20">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="text-sm opacity-90">
                      {s.type} • {s.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ImmerseVideo: full-width block below with some top margin; keep it z-10 so visible */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <ImmerseVideo />
      </div>
    </section>
  );
};

export default Explore;
