"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import  "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown (for mobile)
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link href="/">
          <img src="/logo.png" alt="Koye Logo" className="logo" />
        </Link>
      </div>

      {/* Hamburger / Close Icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {/* ABOUT US */}
        <li
          className={`dropdown ${openDropdown === "about" ? "open" : ""}`}
          onClick={() => toggleDropdown("about")}
        >
          <div className="dropdown-toggle">
            <Link href="/about-us">ABOUT US</Link>
            {openDropdown === "about" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <ul className="submenu">
            <li><Link href="/about-us#our-story" onClick={handleCloseMenu}>Our Story</Link></li>
            <li><Link href="/about-us#our-mission" onClick={handleCloseMenu}>Our Mission</Link></li>
            <li><Link href="/about-us#our-vision" onClick={handleCloseMenu}>Our Vision</Link></li>
            <li><Link href="/about-us#directors" onClick={handleCloseMenu}>Our Directors</Link></li>
          </ul>
        </li>

        {/* OUR PRODUCTS */}
        <li
          className={`dropdown ${openDropdown === "products" ? "open" : ""}`}
          onClick={() => toggleDropdown("products")}
        >
          <div className="dropdown-toggle">
            <Link href="/products"> PRODUCTS</Link>
            {openDropdown === "products" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <ul className="submenu">
            <li><Link href="/products/koye-rx" onClick={handleCloseMenu}>Koye Rx</Link></li>

            {/* Koye Consumer (no dropdown icon here) */}
            <li
              className={`dropdown nested ${openDropdown === "consumer" ? "open" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("consumer");
              }}
            >
              <div className="dropdown-toggle">
                <Link href="/products/consumer">Koye Consumer</Link>
              </div>
              <ul className="submenu">
                <li><Link href="/products/koye-consumer/kch" onClick={handleCloseMenu}>KCH</Link></li>
                <li><Link href="/products/koye-consumer/myfy" onClick={handleCloseMenu}>Myfy</Link></li>
                <li><Link href="/products/koye-consumer/swayos" onClick={handleCloseMenu}>Swayos</Link></li>
                <li><Link href="/products/koye-consumer/curcunexg" onClick={handleCloseMenu}>CurcunexG</Link></li>
              </ul>
            </li>

            {/* Med Devices (no dropdown icon here) */}
            <li
              className={`dropdown nested ${openDropdown === "meddevices" ? "open" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("meddevices");
              }}
            >
              <div className="dropdown-toggle">
                <Link href="/products/med-devices">Koye Med Devices</Link>
              </div>
              <ul className="submenu">
                <li><Link href="/products/med-devices/lubo" onClick={handleCloseMenu}>Lubo</Link></li>
                <li><Link href="/products/med-devices/ag-cuffill" onClick={handleCloseMenu}>AG Cuffill</Link></li>
              </ul>
            </li>
          </ul>
        </li>



        

        {/* OTHER LINKS */}
        <li><Link href="/our-people" onClick={handleCloseMenu}>OUR PEOPLE</Link></li>
        <li><Link href="/milestones" onClick={handleCloseMenu}>MILESTONES</Link></li>
        <li><Link href="/blogs" onClick={handleCloseMenu}>BLOGS</Link></li>
        <li><Link href="/contact" onClick={handleCloseMenu}>REACH US</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
