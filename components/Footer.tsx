import Link from "next/link";
import image from "next/image";

import { Mail, Phone, MapPin } from "lucide-react";
import SocialMedia from "./SocialMedia";
import Image from "next/image";

const Footer = () => {
  const navigation = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Media", href: "/media" },
      { name: "Career", href: "/career" },
    ],
    projects: [
      { name: "Completed", href: "/projects?status=completed" },
      { name: "Ongoing", href: "/projects?status=ongoing" },
      { name: "Upcoming", href: "/projects?status=upcoming" },
    ],
  };
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10  flex items-center justify-center">
                <span className="text-foreground font-serif font-bold text-lg">
                  <Image
                    src="/Kopotakkho-Homes-Ltdi-img._files/footerlogo.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                </span>
              </div>
            </div>
            <p className="text-background/80 text-sm mb-4">
              Creating sophisticated living spaces that redefine luxury and
              comfort.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-background text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Projects</h3>
            <ul className="space-y-2">
              {navigation.projects.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/80 hover:text-background text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-background/80 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:01810-008010"
                  className="hover:text-background transition-colors"
                >
                  01810-008010
                </a>
              </li>
              <li className="flex items-start space-x-3 text-background/80 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@kopotakkhohomes.com"
                  className="hover:text-background transition-colors"
                >
                  info@kopotakkhohomes.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-background/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <SocialMedia className="mt-6" />
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Kopotakkho Homes Limited. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-background/60 hover:text-background text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-background/60 hover:text-background text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
