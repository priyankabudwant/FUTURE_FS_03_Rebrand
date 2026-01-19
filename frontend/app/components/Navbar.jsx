"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (path) =>
    `transition ${
      pathname === path
        ? "text-green-400 font-semibold"
        : "hover:text-green-400"
    }`;

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          NIKE<span className="text-green-500">AI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-900 overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 pt-2 space-y-3">
          <Link href="/" className="block hover:text-green-400">
            Home
          </Link>
          <Link href="/products" className="block hover:text-green-400">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
