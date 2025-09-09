import React, { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { GoX, GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";

export default function ResponsiveHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="w-full bg-yellow-300 shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between md:justify-around items-center px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://assets.zupee.com/zupee-revamp/assets/zupee-logo-v1.webp"
            alt="Zupee Logo"
            className="h-10 md:h-12 cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-purple-900 font-bold uppercase">
          {/* ZUPEE GAMES Dropdown */}
          <div className="relative group cursor-pointer flex items-center gap-1">
            <span>ZUPEE GAMES</span>
            <GoChevronDown />
            <div className="absolute left-0 top-full mt-1 bg-yellow-300 text-purple-900 shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 ease-in-out z-50 min-w-[220px]">
              <div className="px-4 py-2 rounded-lg whitespace-nowrap">
                <Link to="/ludo">LUDO</Link>
              </div>
              <div className="px-4 py-2 rounded-lg whitespace-nowrap">
                <Link to="/ludo/ludo-supreme">LUDO SUPREME</Link>
              </div>
              <div className="px-4 py-2 rounded-lg whitespace-nowrap">
                <Link to="/ludo/ludo-turbo">LUDO TURBO</Link>
              </div>
              <div className="px-4 py-2 rounded-lg whitespace-nowrap">
                <Link to="/ludo/ludo-supreme-league">LUDO SUPREME LEAGUE</Link>
              </div>
              <div className="px-4 py-2 rounded-lg whitespace-nowrap">
                <Link to="/snakes-and-ladders-plus">SNAKES AND LADDERS PLUS</Link>
              </div>
              <div className="px-4 py-2 rounded-lg whitespace-nowrap">
                <Link to="/trump-cards-mania">TRUMP CARDS MANIA</Link>
              </div>
            </div>
          </div>

          {/* Other Links */}
          <Link to="/about" className="cursor-pointer">ABOUT US</Link>
          <Link to="/" className="cursor-pointer">BLOG</Link>
          <Link to="/contact" className="cursor-pointer">CONTACT US</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-900 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <GoX /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 right-0 h-full w-64 bg-yellow-300 text-purple-900 shadow-lg transform transition-transform duration-300 z-50"
        >
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <img
              src="https://assets.zupee.com/zupee-revamp/assets/zupee-logo-v1.webp"
              alt="Zupee Logo"
              className="h-10"
            />
            <button onClick={() => setIsOpen(false)} className="text-3xl">
              <GoX />
            </button>
          </div>

          <nav className="flex flex-col gap-4 p-6 font-bold uppercase">
            {/* Zupee Games Subitems */}
            <div className="ml-2 mt-4 flex flex-col gap-2">
              <Link onClick={() => setIsOpen(false)} className="text-sm py-1 cursor-pointer" to="/ludo">LUDO</Link>
              <Link onClick={() => setIsOpen(false)} className="text-sm py-1 cursor-pointer" to="/ludo/ludo-supreme">LUDO SUPREME</Link>
              <Link onClick={() => setIsOpen(false)} className="text-sm py-1 cursor-pointer" to="/ludo/ludo-turbo">LUDO TURBO</Link>
              <Link onClick={() => setIsOpen(false)} className="text-sm py-1 cursor-pointer" to="/ludo/ludo-supreme-league">LUDO SUPREME LEAGUE</Link>
              <Link onClick={() => setIsOpen(false)} className="text-sm py-1 cursor-pointer" to="/snakes-and-ladders-plus">SNAKES AND LADDERS PLUS</Link>
              <Link onClick={() => setIsOpen(false)} className="text-sm py-1 cursor-pointer" to="/trump-cards-mania">TRUMP CARDS MANIA</Link>
            </div>

            {/* About Us */}
            <Link onClick={() => setIsOpen(false)} to="/about" className="py-2 cursor-pointer">
              ABOUT US
            </Link>

            {/* Blog */}
            <Link onClick={() => setIsOpen(false)} to="/" className="py-2 cursor-pointer">
              BLOG
            </Link>

            {/* Contact */}
            <Link onClick={() => setIsOpen(false)} to="/contact" className="py-2 cursor-pointer">
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
