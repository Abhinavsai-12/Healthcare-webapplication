"use client";
import React from "react";
import styles from "./WhyChooseUs.module.css";
import { FaFlask, FaShieldAlt, FaLightbulb, FaMicroscope } from "react-icons/fa";
import { motion } from "framer-motion";

const values = [
  {
    icon: <FaFlask />,
    title: "Quality",
    description: "Delivering pharmaceutical products with the highest quality standards.",
  },
  {
    icon: <FaMicroscope />,
    title: "Research",
    description: "Investing in advanced R&D for better healthcare solutions.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description: "Innovating with new therapies and cutting-edge technologies.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Compliance",
    description: "Ensuring safety and strict regulatory compliance globally.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <h2 className={styles.heading}>Why Choose Us</h2>
      <div className={styles.cards}>
        {values.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
