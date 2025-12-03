"use client";
import Link from "next/link";
import Container from "./Container";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";
import SideMenu from "./SideMenu";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/about", id: "about" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Media", href: "/media", id: "media" },
    { name: "Career", href: "/career", id: "career" },
    { name: "Contact", href: "/contact", id: "contact" },
    { name: "Completed", href: "/completed", id: "completed" },
    { name: "Ongoing", href: "/ongoing", id: "ongoing" },
    { name: "Upcoming", href: "/upcoming", id: "upcoming" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 ">
      <Container>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center text-3xl space-x-2">
              <div className="w-full h-10  flex items-center justify-center">
                <span className="text-foreground font-serif font-bold text-lg">
                  <Image
                    src="/Kopotakkho-Homes-Ltdi-img._files/footerlogo.svg"
                    alt="Logo"
                    width={60}
                    height={50}
                  />
                </span>
              </div>
            </Link>

            {/* Always Visible Phone Number */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:01810-008010"
                className="flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors"
              >
                <span className="text-xl">01810-008010</span>
              </a>

              {/* Menu Button (ALWAYS visible on ALL screen sizes) */}
              {/* Menu Button (ALWAYS visible on ALL screen sizes) */}
              <button
                className="text-white transition-all duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-10 h-10 transition-transform duration-300 ease-out " />
                ) : (
                  <Menu className="w-10 h-10 transition-all duration-300 ease-out hover:translate-x-2   " />
                )}
              </button>
            </div>
          </div>
        </div>

        <SideMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          navigation={navigation}
        />
      </Container>
    </header>
  );
};

export default Header;
