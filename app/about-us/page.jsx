"use client";

import React from "react";
import styles from "./aboutus.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      {/* Section 1: About Us */}
      <motion.section
        className={styles.aboutSection}
        id="about-us"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.sectionTitle}>About Us</h1>
        <p className={styles.sectionDescription}>
          With a name that comes from the mango seed, Koye as an organisation
          nurtures all the vital parts of the tree – the trunk being our people
          who make us stand tall, the branches being our products that impact
          millions of lives, the lush green leaves being our network that covers
          the whole expanse of the country and the roots being the values and
          ideals of our directors that keep us strong. All these parts come
          together to give YOU the fruit, the fruit of HEALTHINESS!
        </p>
      </motion.section>

      {/* Section 2: Our Story */}
      <motion.section
        className={styles.storySection}
        id="our-story"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.storyContent}>
          <Image
            src="/images/about-us/our-story.png"
            alt="Team"
            width={600}
            height={400}
            className={styles.storyImage}
          />
          <div className={styles.storyText}>
            <h2>Our Story</h2>
            <p>
              An eight-year young organisation, Koye in 2021 has operations that
              run across the length and breadth of India aided by its strong
              distribution network. The company employs more than 1250+ qualified
              ambassadors who meet up more than 80000+ doctors across the
              country every month.
            </p>
            <p>
              Koye has a strong foothold in different therapeutic segments with
              state-of-the-art scientific products in Speciality Primary Care,
              Respiratory, Gynaecology, IVF and Cardio-Diabetic segments. Koye
              also has a formidable presence in the OTC, FMCG and Ayurveda
              segment.
            </p>
            <p>
              As a custodian of good healthcare, Koye is committed to heal, cure
              and provide general wellbeing and happiness to people.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Mission and Vision */}
      <motion.section
        className={styles.missionVisionSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Mission */}
        <motion.div
          className={styles.mission}
          id="our-mission"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className={styles.textBox}>
            <h2>Our Mission</h2>
            <div className={styles.animatedBorder}></div>
            <p>
              To provide world-class healthcare that gets recommended by
              physicians, referred by patients and chosen by partners.
            </p>
          </div>
          <Image
            src="/images/about-us/our-mission.jpg"
            alt="Happy Family"
            width={650}
            height={450}
            className={styles.missionImage}
          />
        </motion.div>

        {/* Vision */}
        <motion.div
          className={styles.vision}
          id="our-vision"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src="/images/about-us/our-vision.jpg"
            alt="Smiling Woman"
            width={650}
            height={450}
            className={styles.visionImage}
          />
          <div className={styles.textBox}>
            <h2>Our Vision</h2>
            <div className={styles.animatedBorder}></div>
            <p>
              To forever be in the pursuit of healthiness, thereby creating a
              world of happy and healthy people.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 4: Directors */}
      <motion.section
        className={styles.directorsSection}
        id="directors"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Directors @ Koye</h2>
        <p>
          Mr. Preetish Toraskar and Mr. Ravindra Y. Shenoy joined hands in 2013
          to nurture ‘Koye’ and take root in the Indian pharma industry. With a
          collective experience of over five decades in the pharmaceutical
          industry, both these visionaries seek to fill in the crucial industry
          gap via quality products and services that Koye offers.
        </p>
        <Image
          src="/images/about-us/our-directors.png"
          alt="Directors"
          width={1000}
          height={500}
          className={styles.directorsImage}
        />
      </motion.section>
    </div>
  );
};

export default AboutUs;
