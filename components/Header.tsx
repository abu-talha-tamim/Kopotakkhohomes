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
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Media", href: "/media" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
    { name: "Completed", href: "/completed" },
    { name: "Ongoing", href: "/ongoing" },
    { name: "Upcoming", href: "/upcoming" },
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
                className="flex items-center gap-2 text-white font-medium text-foreground hover:text-gray-300 transition-colors"
              >
                <span>01810-008010</span>
              </a>

              {/* Menu Button (ALWAYS visible on ALL screen sizes) */}
              <Button
                variant="ghost"
                size="icon"
                className="
    text-white font-extrabold
    transition-all duration-500 ease-in-out
    
    rounded-full
    p-2
  "
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-10 h-10 transition-all duration-500" />
                ) : (
                  <Menu className="w-10 h-10 transition-all duration-500" />
                )}
              </Button>
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
