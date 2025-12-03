"use client";
import Link from "next/link";
import { X } from "lucide-react";
import SocialMedia from "./SocialMedia";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  navigation: { name: string; href: string }[];
}

const SideMenu = ({ isOpen, onClose, navigation }: Props) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Right Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-full
          bg-[#2b2b2b] text-[#e9e6e2] p-8 z-[9999]
          transition-transform duration-700 ease-in-out
          ${isOpen ? "translate-y-0" : "translate-y-full"}
          w-full sm:w-3/4 md:w-1/2
          overflow-hidden
        `}
        aria-hidden={!isOpen}
      >
        {/* Close button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="
      relative
      text-[#e9e6e2]
      hover:text-white
      rounded-full border border-[#e9e6e2]
      w-12 h-12 flex items-center justify-center
      overflow-hidden group
      transition-colors
    "
            aria-label="Close menu"
          >
            {/* Sliding Rounded BG */}
            <span
              className="
        absolute inset-0 
        rounded-full
        transform -translate-x-full
        group-hover:translate-x-0
        transition-transform duration-500 ease-out
      "
              style={{
                background:
                  "linear-gradient(90deg, rgba(237,156,83,0.95), rgba(227,122,74,0.95))",
              }}
            />

            {/* X Icon */}
            <X className="relative z-10 w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
          {/* LEFT COLUMN */}
          <div className="flex flex-col space-y-6">
            {navigation.slice(0, 6).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="relative text-xl md:text-2xl font-medium text-[#e9e6e2] group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px]  bg-[#d6d2cf] rounded-full w-16 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </Link>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col space-y-6">
            {navigation.slice(6).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="relative text-xl md:text-2xl font-medium text-[#e9e6e2] group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px]  bg-[#d6d2cf] rounded-full w-16 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Social + bottom text */}
        <div className="mt-12">
          <SocialMedia />
        </div>

        <div className="mt-8 text-xs text-[#9e8572]">
          <p>© 2023 Kopotakkho Homes Limited. All Rights Reserved.</p>
          <p>Designed &amp; Developed by Dcastalia</p>
        </div>

        {/* Decorative leaf cluster (positioned inside the sidebar) */}
        <div
          className="pointer-events-none absolute"
          style={{
            right: 58,
            bottom: 120,
            width: 320,
            height: 220,
            display: "block",
          }}
          aria-hidden
        >
          {/* largest leaf (back) */}
          <div
            style={{
              position: "absolute",
              right: 48,
              bottom: 12,
              width: 160,
              height: 160,
              transform: "rotate(-6deg)",
            }}
          >
            <Image
              src="/Kopotakkho-Homes-Ltdi-img._files/leaf.svg"
              alt="leaf large"
              fill
              className="object-contain opacity-90"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
