"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "/Kopotakkho-Homes-Ltdi-img._files/Dr.-Ashraful-Islam-Dr.-Begum-Rokeya.jpg",
    quote: `My journey with Kopotakkho Homes Ltd. toward the dream homeownership has been an amazing
experience indeed. KHL acted like a liaison between us & our dream home. We are thankful enough for
this unparalleled professionalism and unceasing support!`,
    author: "Dr. Ashraful Islam & Dr. Begum Rokeya",
    subtitle: "Honorable Landowner",
  },
  {
    id: 2,
    image: "/Kopotakkho-Homes-Ltdi-img._files/Mr.-Mrs.-Shanjib-Kumar-Shaha.jpg",
    quote: `I am a client of your esteemed project of Hydra, Bashundhara R/A. I am herewith expressing my utmost
satisfaction for your relentless efforts and supervision to hand over the endeavor in time with excellent
and expected quality. This will uplift your commitment to conduct a long-term relationship with
satisfaction and thanks. This is a sign of your sincere and honest attitude to your clients.`,
    author: "Mr. & Mrs. Shanjib Kumar Shaha",
    subtitle: "Honorable Buyer",
  },
  {
    id: 3,
    image: "/Kopotakkho-Homes-Ltdi-img._files/Mr.-Mrs.-Md.-Shafiqul-Islam.jpg",
    quote: `Thank you so much for giving us your full support on the Hydra project. We are very happy to get the
apartment with an on-time handover and your best effort. We pray for your success.`,
    author: "Mr. & Mrs. Md. Shafiqul Islam",
    subtitle: "Honorable Buyer",
  },
  {
    id: 4,
    image:
      "/Kopotakkho-Homes-Ltdi-img._files/Md.-Johurul-Islam-Mrs.-Merina-Jahan.jpg",
    quote: `“I am one of the landowners of your project ”Bandhan” in Bashundhara R/A. I think the presence of
this type of employee in Kopotakkho Homes Ltd. will help to maintain your good reputation in the
market. Thank you and your people to provide us with such support and service.”

`,
    author: "Md. Johurul Islam & Mrs. Merina Jahan",
    subtitle: "Honorable Buyer",
  },
];

export default function GlimpsesInto() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="fancy-title text-left text-3xl md:text-5xl my-11 lg:text-[56px] leading-tight text-gray-700">
          <span className="block">Glimpses into the</span>
          <span className="block ml-48">Discerning minds</span>
        </h2>

        <Swiper
          modules={[Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          loop
          pagination={{ el: ".fraction", type: "fraction" }}
          className="overflow-hidden"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="relative p-16">
                {/* ===== GRID: left=image, right=text ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* LEFT: image wrapper */}
                  <div className="flex justify-center mt-10">
                    {/* WRAPPER: overflow-visible so SVG won't be clipped */}
                    <div className="relative overflow-visible">
                      {/* SVG positioned outside image-box (won't be clipped) */}
                      <div className="hidden md:block absolute -top-10 -right-16 z-30 w-[120px] h-[120px] opacity-90 pointer-events-none">
                        <Image
                          src="/Kopotakkho-Homes-Ltdi-img._files/quotes.svg"
                          alt="quotes"
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </div>

                      {/* IMAGE BOX: keeps overflow-hidden for rounded corners */}
                      <div className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] h-[420px] sm:h-[470px] md:h-[500px] rounded shadow overflow-hidden">
                        <Image
                          src={s.image}
                          alt={s.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: quote + author + subtitle (kept outside image) */}
                  <div className="relative mt-10">
                    <div className="pl-0 md:pl-12">
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {s.quote}
                      </p>

                      <div className="mt-22">
                        <h3 className="text-2xl md:text-3xl">{s.author}</h3>
                        <p className="text-sm text-gray-500">{s.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ===== end grid ===== */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls row: single, clean structure */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 items-center">
          <div /> {/* left placeholder keeps alignment */}
          <div className="flex items-center gap-4 justify-end">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center bg-white hover:bg-gray-300 transition-colors z-10"
              aria-label="Previous"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline
                  points="15 18 9 12 15 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center bg-white hover:bg-gray-300 transition-colors z-10"
              aria-label="Next"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline
                  points="9 18 15 12 9 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Fraction */}
            <div className="fraction text-[#b39386] text-lg ml-6 min-w-[48px] text-right"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
