"use client";
import { useEffect, useState } from "react";
import { FaUsers, FaPills, FaUserMd, FaGlobe, FaChartLine } from "react-icons/fa";
import styles from "./stats.module.css";

const statsData = [
  { icon: <FaUsers />, value: 1250, suffix: "+", label: "Employees" },
  { icon: <FaPills />, value: 500, suffix: "+", label: "Products" },
  { icon: <FaUserMd />, value: 80000, suffix: "+", label: "Empaneled HCPs" },
  { icon: <FaGlobe />, value: 5, suffix: "+", label: "Countries Reached" },
  { icon: <FaChartLine />, value: 300, suffix: " Crs", label: "Approx. Annual Rev." },
];

export default function Stats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounts();
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector(`.${styles.statsSection}`);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 1000;
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));

    statsData.forEach((stat, i) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(stat.value * progress);
          return newCounts;
        });
        if (frame === totalFrames) clearInterval(counter);
      }, 1000 / frameRate);
    });
  };

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {statsData.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.icon}>{stat.icon}</div>
            <h2 className={styles.value}>
              {counts[index]}
              {stat.suffix}
            </h2>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
