"use client";

import React from "react";
import styles from "./corporateInfo.module.css";
import { motion } from "framer-motion";
import { FaUsers, FaRegFileAlt, FaHandshake, FaBalanceScale, FaBuilding, FaRegChartBar } from "react-icons/fa";

const infoItems = [
  {
    title: "Annual Returns",
    icon: <FaRegFileAlt />,
    description:
      "Review our annual reports and financial disclosures, providing transparency into our business performance, operations, and compliance.",
  },
  {
    title: "CSR",
    icon: <FaHandshake />,
    description:
      "Our Corporate Social Responsibility initiatives focus on health, education, and community development to create lasting social impact.",
  },
  {
    title: "Corporate Governance",
    icon: <FaBalanceScale />,
    description:
      "Koye ensures robust governance frameworks to uphold ethical practices and promote long-term stakeholder trust.",
  },
  {
    title: "Company Overview",
    icon: <FaBuilding />,
    description:
      "Koye Pharmaceuticals Pvt. Ltd. is a leading healthcare company committed to innovation, affordability, and accessibility across India.",
  },
  {
    title: "Leadership",
    icon: <FaUsers />,
    description:
      "Our experienced leadership team drives strategic decisions and fosters a culture of excellence and integrity.",
  },
  {
    title: "Performance Reports",
    icon: <FaRegChartBar />,
    description:
      "Stay updated with key performance indicators and business insights that reflect our continued growth and market expansion.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const CorporateInfo = () => {
  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Corporate Information
      </motion.h1>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {infoItems.map((itemData, index) => (
          <motion.div className={styles.card} key={index} variants={item}>
            <div className={styles.icon}>{itemData.icon}</div>
            <h3 className={styles.cardTitle}>{itemData.title}</h3>
            <p className={styles.description}>{itemData.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CorporateInfo;
