"use client";

import { motion } from "framer-motion";
import styles from "./lifeat.module.css";

export default function LifeAtKoye() {
  const highlights = [
    {
      title: "Work Culture",
      text: "A collaborative environment where every voice is valued and teamwork drives innovation.",
      icon: "👥",
    },
    {
      title: "Employee Growth",
      text: "Continuous learning and opportunities for career development ensure that our people thrive.",
      icon: "📈",
    },
    {
      title: "Innovation",
      text: "We encourage curiosity and creativity, empowering teams to push boundaries in healthcare.",
      icon: "💡",
    },
    {
      title: "Wellbeing",
      text: "We prioritize physical, mental, and emotional wellness through initiatives that support balance.",
      icon: "🌿",
    },
    {
      title: "Diversity & Inclusion",
      text: "A workplace that celebrates differences and fosters a sense of belonging for everyone.",
      icon: "🌍",
    },
    {
      title: "Community Impact",
      text: "Giving back to society through CSR programs and volunteering that make a real difference.",
      icon: "🤝",
    },
    {
      title: "Recognition",
      text: "We celebrate achievements and recognize contributions that help shape the future of Koye.",
      icon: "🏆",
    },
    {
      title: "Leadership Support",
      text: "Our leaders mentor, guide, and inspire employees to unlock their true potential.",
      icon: "🧑‍💼",
    },
    // {
    //   title: "Sustainability",
    //   text: "We are committed to eco-friendly practices that safeguard the environment for future generations.",
    //   icon: "🌱",
    // },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>Life at Koye</h1>
        <p className={styles.subtitle}>
          At Koye Pharmaceuticals Pvt. Ltd., we believe healthiness begins with
          our people. Our culture is built on collaboration, innovation, and a
          passion for making a difference.
        </p>
      </motion.section>

      {/* Highlights Section */}
      <section className={styles.highlights}>
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className={styles.icon}>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
