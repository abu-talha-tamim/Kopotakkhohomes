"use-client";
import Image from "next/image";
const Career = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* About Header */}

      <Image
        src="/Kopotakkho-Homes-Ltdi-img._files/10.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
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
};
export default Career;
