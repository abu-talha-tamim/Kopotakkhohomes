/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO / BANNER */}
      <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
        {/* full-bleed image using next/image fill */}
        <Image
          src="/Kopotakkho-Homes-Ltdi-img._files/10.jpg"
          alt="Kopotakkho Homes - meeting room"
          fill
          className="object-cover object-center"
          priority
        />

        {/* dark overlay to increase text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/40" />

        {/* Title + optional breadcrumb inside banner */}
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="text-left text-white pb-10 md:pb-0 md:py-10">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight">
                About
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <section className="mb-16 p-10">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">About KHL</h2>
          <p className="text-lg mt-16 mx-auto text-gray-600 max-w-3xl leading-relaxed transition-y-0 transition-transform duration-700 ">
            Step into the extraordinary realm of Kopotakkho Homes Ltd, a unique
            powerhouse of real estate in Bangladesh. We have been narrating
            uniquely-designed residential projects all around Bangladesh since
            2005. Transcending the expertise to architect a bespoke look and
            conceptualizing modern lifestyle keeping budgets within reach.
            Experience the combination of perfection & convenience, only with
            us! We have ensured to be genuine and ethical throughout our
            journey, as we aspire to redefine customer experience and services
            for the better. We present the alluring architectural plans and
            captivating interior designs that ignite the imagination to our
            clients – with an unwavering focus on quality materials and
            unwavering authenticity, we proudly offer the pinnacle of choice for
            life's significant ventures. At Kopotakkho, we don't just deliver
            exceptional customer service, alluring architectural plans, and
            intriguing interior design – we embark on a mission to shape your
            dreams with utmost integrity, standard development materials,
            authentic experiences, and unparalleled affordability. Dare to
            embrace the extraordinary and make Kopotakkho your ultimate choice
            for life's remarkable journeys.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* LEFT: two stacked cards (they stretch to full height) */}
            <div className="flex flex-col  h-full">
              {/* Card 1 */}
              <div className="flex-1  bg-[#2b2b2b] text-white p-10 ">
                <h3 className="text-2xl font-semibold mb-6 ml-19">Mission</h3>
                <p className="text-sm text-[#d6d2cf] leading-relaxed max-w-2/3 mx-auto ">
                  To be the premier real estate company in Bangladesh, that
                  constantly focuses on providing top-notch customer experience
                  by making the journey of owning a home truly enjoyable. We
                  further strive to ensure the highest-level expertise, to meet
                  expectations with utmost satisfaction.
                </p>
              </div>

              {/* white divider full width */}
              <div className="h-px bg-white/90" />

              {/* Card 2 */}
              <div className="flex-1 bg-[#2b2b2b] text-white p-10">
                <h3 className="text-2xl font-semibold mb-6 ml-19">Vision</h3>
                <p className="text-sm text-[#d6d2cf] leading-relaxed max-w-2/3 mx-auto">
                  To inspire excellence in Bangladesh’s economy, by delivering
                  high-quality and affordable homes to the people of, as we
                  empower our entire community.
                </p>
              </div>
            </div>

            {/* RIGHT: image that matches the left column height */}
            <div className="relative w-full h-full">
              {/* The wrapper must have an explicit min-height on small screens so it looks good */}
              <div className="relative w-full h-full min-h-[560px] lg:min-h-0">
                <Image
                  src="/Kopotakkho-Homes-Ltdi-img._files/9.jpg" // update path if needed
                  alt="Chess Strategy"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}
