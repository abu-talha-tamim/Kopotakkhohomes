import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import SocialMedia from "./SocialMedia";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-[#e9e6e2]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
        {/* LEFT COLUMN */}
        <div className="space-y-4">
          <div className="flex flex-col items-start gap-3">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src="/Kopotakkho-Homes-Ltdi-img._files/footerlogo.svg"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <div className="text-sm text-[#d6d2cf]">
              <p>
                Rupayan Shopping Square, Suit no: E/8, Level: 08, Plot : 2/C,
                Umme Kulsum Road, Block: G, Bashundhara R/A, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="text-sm text-[#d6d2cf] space-y-1">
            <p>
              Email:{" "}
              <a
                href="mailto:info@kopotakkhohomes.com.bd"
                className="underline"
              >
                info@kopotakkhohomes.com.bd
              </a>
            </p>
          </div>
        </div>

        {/* CENTER COLUMN - Title + decorative leaf */}
        <div className="flex items-center justify-center relative px-4">
          <div className="text-center">
            {/* Remove manual ml/mr hacks and rely on text sizes & leading */}
            <h2 className="fancy-title text-[28px] md:text-[36px] lg:text-[48px] leading-tight">
              <span className="block mr-16">The sign of</span>
              <span className="block ml-6"> Excellence</span>
            </h2>
          </div>

          {/* decorative leaves - absolute and responsive */}
          <div className="pointer-events-none absolute -right-12 -top-6 md:-right-8 md:-top-12 lg:-right-14 lg:-top-6 w-[90px] h-[90px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]">
            <Image
              src="/Kopotakkho-Homes-Ltdi-img._files/leaf.svg"
              alt="decorative leaf"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-end md:items-end gap-6">
          <a
            href="tel:+8801810008010"
            className="text-lg font-medium hover:underline"
          >
            +88 01810-008010
          </a>

          <div>
            <button className="relative px-6 py-3 font-semibold border-[1.5px] border-[#e9e6e2] rounded-full overflow-hidden group inline-block">
              {/* sliding bg */}
              <span
                className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(237,156,83,0.95), rgba(227,122,74,0.95))",
                }}
              />
              <span className="relative z-10 text-[#e9e6e2]">
                Download brochure
              </span>
            </button>
          </div>

          <div className="mt-2">
            <SocialMedia />
          </div>
        </div>

        {/* BOTTOM ROW - spans full width of grid */}
        <div className="col-span-1 md:col-span-3 mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9e8572]">
            © 2023 Kopotakkho Homes Limited. All Rights Reserved.
          </p>
          <p className="text-xs text-[#9e8572]">
            Designed &amp; Developed by Dcastalia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
