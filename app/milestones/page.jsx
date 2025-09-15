"use client";

import React from "react";
import styles from "./milestones.module.css";
import bannerImage from "../../public/images/milestones-banner.jpg";

const milestonesData = [
  {
    year: "2013",
    description:
      "Koye Pharmaceuticals Pvt. Ltd. was founded with a mission to bring innovative healthcare solutions.",
  },
  {
    year: "2016",
    description:
      "Achieved significant growth in nutraceuticals and established a strong presence across India.",
  },
  {
    year: "2019",
    description:
      "Recognized with multiple awards for excellence in pharmaceutical innovation and quality.",
  },
  {
    year: "2021",
    description:
      "Expanded operations globally, marking our presence in international markets.",
  },
  {
    year: "2023",
    description:
      "Launched new state-of-the-art manufacturing facilities aligned with global standards.",
  },
];

const MilestonesPage = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <img
          src={bannerImage.src}
          alt="Milestones Banner"
          className={styles.bannerImage}
        />
        <div className={styles.overlay}></div>
        <h1 className={styles.bannerText}>OUR MILESTONES</h1>
      </div>

      {/* Content Section */}
      <section className={styles.milestonesSection}>
        <h2 className={styles.heading}>Journey of Excellence</h2>
        <p className={styles.intro}>
          At <strong>Koye Pharmaceuticals Pvt. Ltd.</strong>, every milestone we
          achieve reflects our dedication to health, happiness, and innovation
          in healthcare. Here’s a glimpse of our journey so far:
        </p>

        <div className={styles.milestonesGrid}>
          {milestonesData.map((milestone, index) => (
            <div
              key={index}
              className={`${styles.milestoneCard} ${styles.fadeIn}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <h3 className={styles.year}>{milestone.year}</h3>
              <p className={styles.description}>{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MilestonesPage;
