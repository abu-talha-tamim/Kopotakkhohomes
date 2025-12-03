"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* About Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          About Kopotakkho Homes Ltd
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Kopotakkho Homes Ltd, trailblazers in the Real Estate Industry of
          Bangladesh, redefining exceptional living within affordable boundaries
          since 2005.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We epitomizedelivering flawless designs that astound the sights to
              see. Our commitment is to provide quality homes at affordable
              prices.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              Combining architectural brilliance with tangible reality, we
              welcome you to embark on an exhilarating journey where dreams come
              alive in extraordinary architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
