"use client";

import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";

export default function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center mt-8 px-4 w-full">
      <div className="w-full max-w-[1280px] mx-auto bg-black text-white px-6 py-3 rounded-full shadow-lg flex items-center justify-between relative">
        {/* Left Icon */}
        <div className="bg-white text-black rounded-full p-2 flex-shrink-0">
          <Mail className="w-5 h-5" />
        </div>

        {/* Center Menu Links (Desktop) */}
        <div className="hidden md:flex justify-center flex-1 space-x-8 text-sm font-semibold">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/playground" className="hover:text-gray-300 transition">
            Playground
          </Link>
          <Link href="/resource" className="hover:text-gray-300 transition">
            Resource
          </Link>
        </div>

        {/* Right Email Bubble */}
        <div className="hidden md:flex bg-white text-black px-4 py-1 rounded-full text-sm font-semibold shadow-md cursor-pointer hover:bg-gray-100 transition flex-shrink-0">
          xyz@gmail.com
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-black rounded-2xl shadow-lg flex flex-col items-center py-4 space-y-4 z-50">
            <Link
              href="/"
              className="hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/playground"
              className="hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Playground
            </Link>
            <Link
              href="/resource"
              className="hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Resource
            </Link>
            <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold shadow-md cursor-pointer hover:bg-gray-100 transition">
              xyz@gmail.com
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
