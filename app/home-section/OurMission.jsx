"use client"; // For Next.js 13+ (App Router)
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./MissionSection.css";

const MissionSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/values"); // Navigate to /values page
  };

  return (
    <section className="mission-section">
      <div className="mission-container">
        {/* Left content */}
        <div className="mission-content" data-aos="fade-right">
          <h2>Our Mission</h2>
          <p>
            To provide world-class healthcare that gets recommended by physicians,
            referred by patients and chosen by partners.
          </p>
          <button className="mission-btn" onClick={handleClick}>
            Discover Values@Koye
          </button>
        </div>

        {/* Right image */}
        <div className="mission-image" data-aos="fade-left">
          <Image
            src="/images/home/ourmission.jpg"
            alt="Our Mission"
            width={350}
            height={220}
            className="mission-img"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
