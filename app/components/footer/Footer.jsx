"use client";
import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ---------------- Left Section - Facebook Embed ---------------- */}
        <div className="footer-left">
          <div className="fb-embed">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKoyePharmaceuticals&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="500"   // Increased width
              height="550"
              className="fb-iframe"
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Facebook Page"
            ></iframe>
          </div>

          {/* LinkedIn Follow Link */}
          <p className="follow">
            Follow us on{" "}
            <a
              href="https://www.linkedin.com/company/koye-pharmaceuticals/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </p>
        </div>

        {/* ---------------- Middle + Right Section (Grouped) ---------------- */}
        <div className="footer-right-container">
          {/* Middle Section - Quick Links */}
          <div className="footer-middle">
            <h4>Quick Links</h4>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/lifeat">Life @koye</Link>
            <Link href="/values">Values @koye</Link>
            <Link href="/corporate-info">Corporate Info</Link>
            <Link href="/milestones">Milestones</Link>
            <Link href="/manufacturing">Manufacturing Facilities</Link>
            <Link href="/research">Research and Development</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            
          </div>

          {/* Right Section - Contact Info */}
          <div className="footer-right">
            <h4>Contact Us</h4>
            <p>
              <FaPhoneAlt /> +91 22 6866 1200
            </p>
            <p>
              <FaEnvelope /> info@koye.co
            </p>
            <p>
              <FaMapMarkerAlt /> Koye Pharmaceuticals Pvt. Ltd. <br />
              A-01, 2nd Floor, Art Guild House, <br />
              Phoenix Market City Annexe, <br />
              LBS Marg, Kurla (West), <br />
              Mumbai - 400070
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- Bottom Section ---------------- */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Koye Pharmaceuticals Pvt. Ltd. All Rights
          Reserved.
        </p>
      </div>

      {/* ---------------- Scroll to Top Button ---------------- */}
      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;