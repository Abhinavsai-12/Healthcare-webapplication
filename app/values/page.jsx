"use client"; // Next.js 13+ (App Router)

import React from "react";
import {
  FaHandshake,
  FaUsers,
  FaSmile,
  FaBolt,
  FaRegHeart,
  FaLightbulb,
  FaLeaf,
} from "react-icons/fa"; // Icons
import styles from "./values.module.css"; // CSS Module

const values = [
  {
    title: "INTEGRITY",
    tagline: "Do It Right",
    icon: <FaHandshake className={styles.icon} />,
    description:
      "We are honest, transparent, and ethical in all our actions. Integrity guides us, even when no one is watching.",
  },
  {
    title: "TEAMWORK",
    tagline: "Do It Together",
    icon: <FaUsers className={styles.icon} />,
    description:
      "At Koye, there is no ‘I’, only ‘We’. Collaboration, equality, and diversity make us stronger and help us achieve more.",
  },
  {
    title: "CUSTOMER DELIGHT",
    tagline: "Do It For The Customers",
    icon: <FaSmile className={styles.icon} />,
    description:
      "We strive to exceed expectations by delivering innovative, high-quality healthcare solutions with care and commitment.",
  },
  {
    title: "SPEED",
    tagline: "Do It Quickly & Efficiently",
    icon: <FaBolt className={styles.icon} />,
    description:
      "We embrace innovation and technology to act swiftly, reduce bottlenecks, and meet the fast-paced demands of the modern world.",
  },
  {
    title: "RESPECT",
    tagline: "Do It With Humility",
    icon: <FaRegHeart className={styles.icon} />,
    description:
      "We value every individual, nurturing a culture of fairness, trust, and dignity across all our relationships.",
  },
  {
    title: "INNOVATION",
    tagline: "Do It Creatively",
    icon: <FaLightbulb className={styles.icon} />,
    description:
      "Innovation drives us to challenge the status quo, create new possibilities, and bring meaningful change in healthcare.",
  },
];

const ValuesKoye = () => {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.valuesContainer}>
        <h2 className={styles.valuesHeading}>Values @ Koye</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div
              className={`${styles.valueCard} ${styles.fadeIn}`}
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.iconWrapper}>{value.icon}</div>
              <h3>{value.title}</h3>
              <span className={styles.tagline}>— {value.tagline}</span>
              <p className={styles.description}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesKoye;
