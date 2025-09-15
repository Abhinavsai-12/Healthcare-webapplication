"use client";

import React, { useState } from "react";
import styles from "./rx.module.css";

const RxPage = () => {
  // Directly reference from /public/images
  const images = [
    "/images/products/rx1.jpg",
    "/images/products/rx2.jpg",
    "/images/products/rx3.jpg",
    "/images/products/rx4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h2 className={styles.heading}>Rx</h2>
        <p>
          In our quest to bring healthiness to every household in the country
          and across the world, Koye offers a wide array of prescription
          products for patients across various segments.
        </p>
        <p>
          Having a strong presence in Women Healthcare, Respiratory Care,
          Primary Care and Diabetes Care, Koye is committed towards giving the
          gifts of health and happiness to everyone.
        </p>
        <p>
          Our mission is to innovate continuously and provide sustainable
          healthcare solutions that improve quality of life, while adhering to
          the highest global standards of safety and efficacy.
        </p>
      </div>

      <div className={styles.imageSection}>
        <button className={styles.prev} onClick={prevSlide}>
          &#10094;
        </button>
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className={styles.image}
        />
        <button className={styles.next} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default RxPage;
