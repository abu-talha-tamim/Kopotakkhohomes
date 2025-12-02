import Image from "next/image";

const KhlInterior = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        {/* LEFT: Text */}
        <div className="w-1/2  ">
          <p className="text-gray-800 leading-relaxed text-base md:text-lg lg:text-xl">
            KHL Interior’s design studio is about taking ample space to create
            an absolutely stunning look and experience. As to a whole new
            repertoire of ways to craft your home’s signature style, begin with
            us! Let’s co-create and personalize your space down to the finest of
            details.
          </p>
        </div>

        {/* RIGHT: Image with overlay card */}
        <div className="relative w-full h-full  ">
          {/* Image (fill parent) */}
          <div className="absolute inset-0  overflow-hidden shadow-xl">
            <Image
              src="/Kopotakkho-Homes-Ltdi-img._files/KHL-interior.jpg"
              alt="KHL Interior Studio"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Overlay dark card bottom-right */}
          <div
            className="
              absolute left-24
              -bottom-12
              md:-bottom-16
              lg:-bottom-20
              bg-gray-600 text-white
              px-6 py-6
              sm:px-8 sm:py-8
              lg:px-10 lg:py-10
               max-w-full sm:w-[220px] md:w-[280px] lg:w-[340px]
              rounded-sm shadow-2xl
              z-20
              flex items-center justify-center
              transform
            "
          >
            <span className="uppercase text-base mb-7 md:text-lg tracking-wider">
              KHL Interior
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KhlInterior;
