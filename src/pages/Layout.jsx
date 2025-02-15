import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo-dark.svg";
import { Link, Outlet } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from './Footer';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="relative">
        {/* Top Bar */}
        <div className="bg-red-600 text-white py-2 px-4 flex flex-wrap justify-between items-center">
          {/* Location */}
          <div className="flex items-center space-x-2 max-sm:hidden">
            <FaLocationDot className="text-lg" />
            <span className="text-sm font-semibold">
              Rd. Santa Ana, Illinois 85486, United States
            </span>
          </div>

          {/* Login / Social Icons */}
          <div className="flex items-center space-x-6 ml-auto max-sm:ml-0 max-sm:w-full max-sm:justify-between">
            <button className="bg-white text-red-600 font-semibold border border-red-600 rounded-md px-3 py-1 text-xs sm:text-sm md:text-base transition duration-300 hover:bg-red-600 hover:text-white shadow-md max-sm:order-none">
              Login
            </button>

            <div className="flex space-x-3">
              <span className="text-xs sm:text-sm font-semibold">Follow us:</span>
              <a href="#" className="hover:text-blue-400"><FaFacebookF className="text-xs sm:text-sm md:text-base" /></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter className="text-xs sm:text-sm md:text-base" /></a>
              <a href="#" className="hover:text-blue-400"><FaLinkedinIn className="text-xs sm:text-sm md:text-base" /></a>
              <a href="#" className="hover:text-red-400"><FaYoutube className="text-xs sm:text-sm md:text-base" /></a>
            </div>
          </div>
        </div>


        {/* Navbar */}
        <nav className="relative bg-white shadow-md py-4 px-6 flex justify-between items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-8" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-black font-semibold text-lg">
            <Link to="/" className="hover:text-red-600">Home</Link>
            <Link to="/" className="hover:text-red-600">About</Link>
            <Link to="/" className="hover:text-red-600">Reservations</Link>
            <Link to="/" className="hover:text-red-600">Contact</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-gray-600 text-xl">
              <IoSearchSharp />
            </button>

            {/* Hamburger Menu */}
            <button
              className="text-gray-600 text-2xl md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <GiHamburgerMenu />
            </button>

            {/* Order Now Button (Hidden on Mobile) */}
            <button className="hidden sm:flex items-center gap-2 bg-red-600 text-white font-semibold border border-red-600 rounded-md px-3 py-2 md:text-base transition duration-300 hover:bg-white hover:border-red-600 hover:text-red-600 shadow-md group">
              <span>ORDER NOW</span>
              <span className="bg-white text-red-600 p-1 rounded-md transition duration-300 group-hover:bg-red-600 group-hover:text-white">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 w-72 h-full bg-white shadow-2xl transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 text-2xl hover:text-red-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

          {/* Menu Links */}
          <div className="flex flex-col space-y-5 p-8 text-black font-semibold text-lg mt-10">
            <Link to="/" className="hover:text-red-600 bg-gray-100 rounded-lg py-3 px-4 transition duration-300 hover:bg-red-600 hover:text-white shadow-md" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/" className="hover:text-red-600 bg-gray-100 rounded-lg py-3 px-4 transition duration-300 hover:bg-red-600 hover:text-white shadow-md" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/" className="hover:text-red-600 bg-gray-100 rounded-lg py-3 px-4 transition duration-300 hover:bg-red-600 hover:text-white shadow-md" onClick={() => setMenuOpen(false)}>
              Reservations
            </Link>
            <Link to="/" className="hover:text-red-600 bg-gray-100 rounded-lg py-3 px-4 transition duration-300 hover:bg-red-600 hover:text-white shadow-md" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-500 transition text-gray-600 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition text-gray-600 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600 transition text-gray-600 text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-red-500 transition text-gray-600 text-xl">
              <FaYoutube />
            </a>
          </div>
        </div>

      </header>
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer/>
    </div>

    
  );
};

export default Layout;
