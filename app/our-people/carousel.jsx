"use client";

import { useState, useEffect } from "react";
import styles from "./carousel.module.css";

const images = [
  "/images/people/banner1.jpg",
  "/images/people/banner2.jpg",
  "/images/people/banner4.jpg",
  "/images/people/banner5.jpg",
];

export default function FullWidthCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // auto change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className={styles.carousel}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className={styles.slide}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
}
