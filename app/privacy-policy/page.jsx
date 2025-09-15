"use client";

import React from "react";
import styles from "./privacy.module.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // 0.5s delay between children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const PrivacyPolicy = () => {
  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className={styles.pageTitle}
        variants={itemVariants}
      >
        Privacy Policy
      </motion.h1>

      <motion.section className={styles.section} variants={itemVariants}>
        <h2>1. Introduction</h2>
        <p>
          At Koye, we are committed to safeguarding the privacy of our website
          visitors and service users. This Privacy Policy outlines how we
          collect, use, and protect your personal data.
        </p>
      </motion.section>

      <motion.section className={styles.section} variants={itemVariants}>
        <h2>2. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          phone number, and any other details you provide through contact forms
          or newsletter subscriptions.
        </p>
      </motion.section>

      <motion.section className={styles.section} variants={itemVariants}>
        <h2>3. How We Use Your Data</h2>
        <ul>
          <li>To respond to inquiries and requests</li>
          <li>To improve our website and services</li>
          <li>To send updates, promotions, or newsletters (if opted-in)</li>
        </ul>
      </motion.section>

      <motion.section className={styles.section} variants={itemVariants}>
        <h2>4. Cookies</h2>
        <p>
          Our website uses cookies to improve user experience and analyze
          traffic. You can disable cookies through your browser settings at any
          time.
        </p>
      </motion.section>

      <motion.section className={styles.section} variants={itemVariants}>
        <h2>5. Data Security</h2>
        <p>
          We take appropriate technical and organizational precautions to
          prevent the loss, misuse, or alteration of your personal data.
        </p>
      </motion.section>

      <motion.section className={styles.section} variants={itemVariants}>
        <h2>6. Changes to this Policy</h2>
        <p>
          We may update this policy from time to time. We encourage you to
          review this page periodically for any changes.
        </p>
      </motion.section>

      <motion.section className={styles.section} variants={itemVariants}>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about our Privacy Policy, please contact us
          at <a href="mailto:info@koye.com">info@koye.com</a>.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default PrivacyPolicy;
