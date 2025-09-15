"use client";

import React, { useState, useEffect } from "react";
import styles from "./kch.module.css";

const KCHPage = () => {
  const images = [
    "/images/products/kch1.jpg",
    "/images/products/kch2.jpg",
    "/images/products/kch3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.container}>
      {/* Text Section */}
      <div className={styles.textSection}>
        <h2 className={styles.heading}>KCH - Koye Consumer Health</h2>
        <p>
          To give back to the body what the daily life squeezes out,
          Koye offers a plethora of OTC products that help promote
          day-to-day well-being.
        </p>
        <p>
          These innovative, science-based products help maintain
          and improve patient health.
        </p>
      </div>

      {/* Image Carousel Section */}
      <div className={styles.imageSection}>
        <button className={styles.prevBtn} onClick={prevSlide}>
          &#10094;
        </button>

        <img
          src={images[current]}
          alt={`KCH Slide ${current + 1}`}
          className={styles.image}
        />

        <button className={styles.nextBtn} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default KCHPage;
