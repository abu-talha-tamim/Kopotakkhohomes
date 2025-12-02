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
        className={`fixed inset-0 transition-opacity duration-300 ${
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
          bg-gray-800 text-white p-6 z-[9999]
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-y-full"}
          w-[50%]        /* fallback hard 50% */
          sm:w-3/4 md:w-1/2
        `}
        aria-hidden={!isOpen}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="self-end text-white hover:text-gray-300 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-10 h-10" />
        </button>

        {/* Navigation */}
        <nav className="mt-6 flex flex-col space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="relative text-lg font-medium text-gray-200 group"
            >
              {item.name}

              <span
                className="
          absolute left-0 bottom-0
          w-14 h-[2px]
          bg-gray-300 rounded-full
          scale-x-0 group-hover:scale-x-100
          transition-transform duration-300 origin-left
        "
              ></span>
            </Link>
          ))}
        </nav>
        <div className="absolute top-0 right-64 -mt-20 w-40 h-40 sm:w-48 sm:h-50 md:w-56 md:h-40 lg:w-72 lg:h-72 ">
          {/* Using next/image with fill requires parent relative + explicit size */}
          <Image
            src="/Kopotakkho-Homes-Ltdi-img._files/leaf.svg"
            alt="decorative leaf"
            fill
            className="object-contain"
          />
        </div>

        <SocialMedia className="mt-6" />
      </aside>
    </>
  );
};

export default SideMenu;
