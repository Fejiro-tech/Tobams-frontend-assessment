'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#", hasDropdown: true },
  { label: "What We Do", href: "#", hasDropdown: true },
  { label: "Jobs", href: "#", hasDropdown: true },
  { label: "Projects", href: "#", hasDropdown: false },
  { label: "TG Academy", href: "#", hasDropdown: false },
  { label: "Strategic Partnership", href: "#", hasDropdown: false },
  { label: "Pricing", href: "#", hasDropdown: false },
  { label: "Book a Consultation", href: "#", hasDropdown: false },
];

const TopBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("About");

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="border-b border-[#DDD0DA]">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 md:px-8 lg:px-16 md:py-4 lg:py-6">

          <Image
            src="/tobamslogo.png"
            width={130}
            height={80}
            alt="logo"
          />

          <div className="hidden md:flex gap-4 items-center">
            <Link
              href="#"
              className="bg-[#571244] rounded-md py-2 px-4 flex items-center gap-2 text-white text-sm font-medium"
            >
              <span className="w-6 h-6 bg-[#DDD0DA] rounded-full flex items-center justify-center">
                <Image src="/user.svg" width={12} height={12} alt="user icon" />
              </span>
              Account
              <Image src="/arrow-down.svg" width={12} height={12} alt="arrow down" />
            </Link>

            <Link
              href="#"
              className="bg-[#EF4353] rounded-md py-2 px-5 text-white text-sm font-medium"
            >
              Take Assessment
            </Link>
          </div>

          <button
            className="md:hidden text-[#151515] z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={24} />
            ) : (
              <Image src="/hamburger.svg" width={24} height={24} alt="hamburger" />
            )}
          </button>

        </div>
      </div>

      <div className="hidden md:block w-full">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-4 lg:px-16 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`flex items-center gap-1 text-xs lg:text-sm whitespace-nowrap transition-colors ${
                activeLink === link.label
                  ? "text-[#571244] font-semibold border-b-2 border-[#571244] pb-0.5"
                  : "text-gray-500 hover:text-[#151515]"
              }`}
            >
              {link.label}
              {link.hasDropdown && (
                <Image src="/arrow-down.svg" width={12} height={12} alt="arrow down" />
              )}
            </Link>
          ))}
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {mobileOpen && (
        <div className="fixed top-0 left-0 w-full z-50 md:hidden bg-white flex flex-col px-6 py-6 gap-4">

          <div className="flex justify-end">
            <button onClick={() => setMobileOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-700 hover:text-[#571244] flex items-center justify-between"
            >
              {link.label}
              {link.hasDropdown && (
                <Image src="/arrow-down.svg" width={12} height={12} alt="arrow down" />
              )}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-4 border-t border-[#DDD0DA]">
            <Link
              href="#"
              className="bg-[#571244] rounded py-2 px-4 text-white text-sm text-center"
            >
              Account
            </Link>
            <Link
              href="#"
              className="bg-[#EF4353] rounded py-2 px-4 text-white text-sm text-center"
            >
              Take Assessment
            </Link>
          </div>

        </div>
      )}

    </nav>
  );
};

export default TopBar;