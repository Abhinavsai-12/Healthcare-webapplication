"use client";

import React, { useEffect } from "react";
import styles from "./blogs.module.css";
import { motion } from "framer-motion";
import { FaUserTie, FaUserMd, FaUser, FaFlask, FaLeaf } from "react-icons/fa";

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const blogsData = [
  {
    id: 1,
    title: "Innovation in Pharmaceutical Research",
    content:
      "At Koye Pharmaceuticals Pvt. Ltd., we are committed to pioneering new approaches to healthcare. Our R&D team works tirelessly to discover innovative solutions that address unmet medical needs, ensuring quality and affordability.",
    author: "Dr. Arjun Mehta, CEO",
    icon: <FaUserTie />,
  },
  {
    id: 2,
    title: "The Role of Employees in Driving Growth",
    content:
      "Our employees are the backbone of our success. Their dedication, expertise, and passion for making a difference allow us to expand our reach and improve healthcare outcomes across India and beyond.",
    author: "Priya Sharma, Senior Manager",
    icon: <FaUser />,
  },
  {
    id: 3,
    title: "Advancing Patient-Centric Care",
    content:
      "Patient well-being is at the core of everything we do. We continue to invest in education, awareness, and access to ensure that patients not only receive medicine but also care, empathy, and trust.",
    author: "Dr. Neha Kapoor, Medical Head",
    icon: <FaUserMd />,
  },
  {
    id: 4,
    title: "Sustainability in Pharma",
    content:
      "We are integrating sustainability practices across our operations. From eco-friendly packaging to reducing our carbon footprint, we strive to contribute positively to both healthcare and the environment.",
    author: "Rahul Verma, Sustainability Lead",
    icon: <FaLeaf />,
  },
  {
    id: 5,
    title: "Clinical Trials: Ensuring Safety and Efficacy",
    content:
      "Clinical trials are a cornerstone of our commitment to patient safety. Our research teams adhere to global standards, ensuring that every product we bring to market is both effective and safe.",
    author: "Dr. Meera Joshi, Clinical Research Head",
    icon: <FaFlask />,
  },
  {
    id: 6,
    title: "Future of Biopharmaceuticals",
    content:
      "Biopharmaceuticals are shaping the next era of medicine. At Koye, we invest heavily in biologics, gene therapies, and precision medicine to bring advanced treatments to patients worldwide.",
    author: "Dr. Sanjay Rao, Head of Biotech Division",
    icon: <FaUserMd />,
  },
];

const BlogsPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.pageTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Koye Pharmaceuticals Blogs
      </motion.h1>

      <motion.div
        className={styles.blogsWrapper}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {blogsData.map((blog) => (
          <motion.div key={blog.id} className={styles.blogCard} variants={fadeInUp}>
            <h2 className={styles.blogTitle}>{blog.title}</h2>
            <p className={styles.blogContent}>{blog.content}</p>
            <div className={styles.blogAuthor}>
              {blog.icon}
              <span>{blog.author}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogsPage;
