"use client";

import Image from "next/image";

const Lifestyle = () => {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center ">
          {/* Text block */}
          <div className="w-full lg:w-2/3">
            {/* Fancy heading: two lines with serif font + subtle shadow + hover lift */}
            <h2 className="fancy-title text-left text-3xl md:text-5xl lg:text-[56px] leading-tight md:leading-[1.02] lg:leading-[1.02] text-gray-700">
              <span className="block">Bringing your ideal lifestyle</span>
              <span className="block ml-48">To life with our homes</span>
            </h2>

            {/* Paragraph */}
            <p className="mt-10 max-w-3xl text-sm md:text-base text-gray-600 w-1/2 mx-auto">
              Kopotakkho Homes Ltd, trailblazers in the Real Estate Industry of
              Bangladesh, redefining exceptional living within affordable
              boundaries since 2005. We have epitomized ‘The Sign of
              Excellence’, delivering flawless designs that astound the sights
              to see. <br />
              Combining architectural brilliance with tangible reality, we
              welcome you to embark on an exhilarating journey with Kopotakkho
              Homes Ltd., where dreams come alive in extraordinary architecture.
            </p>

            {/* CTA Button */}
            <button className="relative px-10 py-3 font-semibold border-2 border-black overflow-hidden group rounded-full ml-48 mt-10 cursor-pointer">
              {/* Sliding Background */}
              <span
                className="absolute inset-0 bg-orange-300 translate-x-[-100%] 
               group-hover:translate-x-0 rounded-full
               transition-transform duration-500"
              ></span>

              {/* Button Text */}
              <span
                className="relative z-10 text-black 
               group-hover:text-white transition-colors duration-500"
              >
                About KHL
              </span>
            </button>
          </div>

          {/* Image block (right) */}
          <div className="absolute top-0 right-64 -mt-20 w-40 h-40 sm:w-48 sm:h-50 md:w-56 md:h-40 lg:w-72 lg:h-72 ">
            {/* Using next/image with fill requires parent relative + explicit size */}
            <Image
              src="/Kopotakkho-Homes-Ltdi-img._files/leaf.svg"
              alt="decorative leaf"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
