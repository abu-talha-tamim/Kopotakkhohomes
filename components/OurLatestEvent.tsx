"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurLatestEvent = () => {
  const slides = [
    {
      id: 1,
      src: "/Kopotakkho-Homes-Ltdi-img._files/KHL-Sales-Marketing-Team.png",
      alt: "event 1",
      title: "KHL Sales & Marketing team",
      isVideo: false,
      date: "12 Jan, 2023",
    },
    {
      id: 2,
      src: "/Kopotakkho-Homes-Ltdi-img._files/Video-tumb-bandhon.jpg",
      alt: "event 2",
      title: "A Luxury apartment in Bashundhara (video)",
      isVideo: true, // this one will show the play button and open modal
      videoId: "bHc1OrDQ4H4", // <-- updated to the YouTube id you provided
      date: "12 Jan, 2023",
    },
    {
      id: 3,
      src: "/Kopotakkho-Homes-Ltdi-img._files/Training-going-on.png",
      alt: "event 3",
      title: "A Day Long Training Session",
      isVideo: false,
      date: " Mar 23,2024",
    },
    {
      id: 4,
      src: "/Kopotakkho-Homes-Ltdi-img._files/KHL.png",
      alt: "event 4",
      title: "22nd Reall Estatc Expo",
      isVideo: false,
      date: " Dec 7,2023",
    },
  ];

  // Fix: allow null in ref type
  const swiperRef = useRef<SwiperType | null>(null);
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideo = (id: string) => {
    // autoplay=1 included
    setVideoUrl(`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`);
    setOpen(true);
  };

  const closeVideo = () => {
    setVideoUrl("");
    setOpen(false);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between mx-auto ">
        <h2 className="fancy-title text-left text-3xl md:text-5xl lg:text-[56px] leading-tight md:leading-[1.02] lg:leading-[1.02] text-gray-700">
          <span className="block">Our latest event</span>
          <span className="block ml-48">& media updates</span>
        </h2>

        <button className="relative px-10 py-3 font-semibold border-2 border-black overflow-hidden group rounded-full ml-48 mt-10 cursor-pointer">
          {/* Sliding Background */}
          <span
            className="absolute inset-0 -translate-x-full bg-orange-300 
               group-hover:translate-x-0 rounded-full transition-transform duration-500"
          ></span>

          {/* Button Text */}
          <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
            View All
          </span>
        </button>
      </div>

      {/* ===== Swiper START ===== */}
      <div className="my-36">
        <div className="px-6 lg:px-12">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView={2} // show two slides side-by-side
            slidesPerGroup={1} // advance one slide per click
            spaceBetween={28}
            allowTouchMove={true}
            speed={500}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              320: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 12 },
              640: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 18 },
              1024: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 28 },
            }}
            className="py-4"
          >
            {slides.map((s) => (
              <SwiperSlide key={s.id}>
                <div className="group overflow-hidden rounded-md shadow-lg relative bg-gray-900">
                  {/* Image box — fixed using arbitrary aspect ratio */}
                  <div className="w-full aspect-[4/4] relative bg-gray-200">
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

                    <Image
                      src={s.src}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Play button for video slides */}
                  {s.isVideo && s.videoId && (
                    <button
                      onClick={() => openVideo(s.videoId)}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                       w-20 h-20 rounded-full flex items-center justify-center border border-white
                       hover:scale-105 transition-transform shadow-lg z-20 bg-black/40"
                      aria-label="Play video"
                    >
                      {/* triangle play icon (Tailwind arbitrary border sizes) */}
                      <div
                        className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[18px] border-l-white ml-[2px]"
                        aria-hidden
                      />
                    </button>
                  )}

                  {/* bottom text (overlay on dark image like original) */}
                  <div className="absolute bottom-4 left-4 text-white z-20">
                    <p className="text-sm opacity-90">{s.date}</p>

                    <h3 className="text-xl lg:text-2xl font-serif">
                      {s.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeVideo}
              className="absolute top-3 right-3 text-white text-3xl hover:scale-110 transition z-30"
              aria-label="Close video"
            >
              &times;
            </button>

            <iframe
              key={videoUrl}
              className="w-full h-[60vh] md:h-[70vh]"
              src={videoUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurLatestEvent;
