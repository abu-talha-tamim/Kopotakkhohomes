"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="relative h-[100vh] w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        loop={true}
        speed={1400}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full w-full">
            {/* Image */}
            <Image
              src="/Kopotakkho-Homes-Ltdi-img._files/cover-banner-14.jpg"
              alt="Slide 1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Black Overlay */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 z-30 ">
              <span
                className="block text-white text-4xl md:text-6xl font-serif leading-tight
               transform translate-y-6 opacity-90
               transition-all duration-700 ease-in-out
               group-hover:translate-y-0"
              >
                The Sign of
              </span>

              <span
                className="block text-white text-4xl md:text-6xl font-serif leading-tight mt-2 ml-32
               transform translate-y-6 opacity-90
               transition-all duration-800 ease-in-out
               group-hover:translate-y-0"
              >
                Excellence
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image
              src="/Kopotakkho-Homes-Ltdi-img._files/Banner-1-1.jpg"
              alt="Slide 2"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute left-10 top-1/2 -translate-y-1/2 z-30">
              <span
                className="block text-white text-4xl md:text-6xl font-serif leading-tight
               transform translate-y-6 opacity-90
               transition-all duration-700 ease-in-out
               group-hover:translate-y-0"
              >
                The Sign of
              </span>

              <span
                className="block text-white text-4xl md:text-6xl font-serif leading-tight mt-2 ml-32
               transform translate-y-6 opacity-90
               transition-all duration-800 ease-in-out
               group-hover:translate-y-0"
              >
                Excellence
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image
              src="/Kopotakkho-Homes-Ltdi-img._files/Banner-4.jpg"
              alt="Slide 3"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute left-10 top-1/2 -translate-y-1/2 z-30">
              <span
                className="block text-white text-4xl md:text-6xl font-serif leading-tight
               transform translate-y-6 opacity-90
               transition-all duration-700 ease-in-out
               group-hover:translate-y-0"
              >
                The Sign of
              </span>

              <span
                className="block text-white text-4xl md:text-6xl font-serif leading-tight mt-2 ml-32
               transform translate-y-6 opacity-90
               transition-all duration-800 ease-in-out
               group-hover:translate-y-0"
              >
                Excellence
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image
              src="/Kopotakkho-Homes-Ltdi-img._files/Banner-5-1.jpg"
              alt="Slide 4"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute left-10 top-1/2 -translate-y-1/2 z-30">
              <span
                className="block text-white text-4xl md:text-6xl font-serif leading-tight
               transform translate-y-6 opacity-90
               transition-all duration-700 ease-in-out
               group-hover:translate-y-0"
              >
                The Sign of
              </span>

              <span
                className="block text-white text-4xl md:text-6xl font-serif leading-tight mt-2 ml-32
               transform translate-y-6 opacity-90
               transition-all duration-800 ease-in-out
               group-hover:translate-y-0"
              >
                Excellence
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image
              src="/Kopotakkho-Homes-Ltdi-img._files/Banner-6.jpg"
              alt="Slide 5"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute left-10 top-1/2 -translate-y-1/2 z-30">
              <span
                className="block text-white text-4xl md:text-6xl font-serif leading-tight
               transform translate-y-6 opacity-90
               transition-all duration-700 ease-in-out
               group-hover:translate-y-0"
              >
                The Sign of
              </span>

              <span
                className="block text-white text-4xl md:text-6xl font-serif leading-tight mt-2 ml-32
               transform translate-y-6 opacity-90
               transition-all duration-800 ease-in-out
               group-hover:translate-y-0"
              >
                Excellence
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Pagination (right side) */}
      <div className="custom-pagination absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50"></div>

      {/* Navigation Button Bottom Right */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 z-50">
        <button className="prev-btn w-10 h-10 rounded-full bg-white/60 flex items-center justify-center hover:bg-gray-500 transition ">
          <span className="text-black text-xl">‹</span>
        </button>
        <button className="next-btn w-10 h-10 rounded-full bg-white/60 flex items-center justify-center hover:bg-gray-500 transition ">
          <span className="text-black text-xl ">›</span>
        </button>
      </div>
    </div>
  );
}
