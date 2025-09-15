"use client";

import React, { useEffect } from "react";
import styles from "./products.module.css";
import { motion } from "framer-motion";
import RxPage from "./koye-rx/page";
import KCHPage from "./consumer/kch/page";
import Myfy from "./consumer/myfy/page";
import Swayos from "./consumer/swayos/page";
import CurcunexG from "./consumer/curcunexg/page";
import Lubo from "./med-devices/lubo/page";
import AgCuffill from "./med-devices/ag-cuffill/page";

// Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const Products = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* Main Title */}
      <motion.h1
        className={styles.pageTitle}
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        Our Products
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className={styles.productsWrapper}
      >
        {/* Koye Rx */}
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
          Koye Rx
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <RxPage />
        </motion.div>

        {/* Koye Consumer */}
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
          Koye Consumer
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <KCHPage />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Myfy />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Swayos />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <CurcunexG />
        </motion.div>

        {/* Med Devices */}
        <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
          Med Devices
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <Lubo />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <AgCuffill />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Products;
