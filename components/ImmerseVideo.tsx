"use client";

import { useState } from "react";
import Image from "next/image";

const ImmerseVideo = () => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideo = () => {
    setVideoUrl("https://www.youtube.com/embed/_hhpkXrDIF0?autoplay=1");
    setOpen(true);
  };

  const closeVideo = () => {
    setVideoUrl("");
    setOpen(false);
  };

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Heading */}
      <h2
        className="absolute top-8 w-full text-center fancy-title 
        text-3xl md:text-5xl lg:text-[56px] leading-tight 
        text-white z-30 drop-shadow-2xl"
      >
        <span className="block mr-36">Immerse yourself in the charm of</span>
        <span className="block ml-36">South-facing luxury Apartments</span>
      </h2>

      {/* Thumbnail */}
      <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
        <Image
          src="/Kopotakkho-Homes-Ltdi-img._files/video-thumb-u3.jpg"
          alt="Video Thumbnail"
          width={1900}
          height={1000}
          className="w-full h-auto object-cover"
        />

        {/* Play Button */}
        <button
          onClick={openVideo}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          w-20 h-20 rounded-full flex items-center justify-center border border-white
          hover:scale-105 transition-transform shadow-lg"
        >
          <div
            className="w-0 h-0 
            border-t-[12px] border-t-transparent 
            border-b-[12px] border-b-transparent
            border-l-[20px] border-l-white ml-1"
          ></div>
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex items-center justify-center">
          <div className="relative w-[90%] max-w-3xl bg-black rounded-lg overflow-hidden">
            {/* Close button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 text-white text-3xl hover:scale-110 transition"
            >
              &times;
            </button>

            {/* Autoplay YouTube iframe */}
            <iframe
              key={videoUrl} // refreshes iframe when url changes
              className="w-full h-[400px] md:h-[500px]"
              src={videoUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImmerseVideo;
