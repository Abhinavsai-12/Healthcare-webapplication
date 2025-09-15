"use client";

import React, { useEffect } from "react";
import styles from "./consumer.module.css";
import { motion } from "framer-motion";
import KCHPage from "./kch/page";
import Myfy from "./myfy/page";
import Swayos from "./swayos/page";
import CurcunexG from "./curcunexg/page";

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 1 }, // 1s delay between components
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ConsumerPage = () => {
  // Ensure page always starts at top
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* Page Title */}
      <h1 className={styles.pageTitle}>Koye Consumer</h1>

      {/* Devices Section */}
      <motion.div
        className={styles.devicesSection}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >

        <motion.div variants={childVariants}>
          <KCHPage />
        </motion.div>

        <motion.div variants={childVariants}>
          <Myfy />
        </motion.div>

        <motion.div variants={childVariants}>
          <Swayos />
        </motion.div>

        <motion.div variants={childVariants}>
          <CurcunexG />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default ConsumerPage;
