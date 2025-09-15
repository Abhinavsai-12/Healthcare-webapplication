"use client";

import React, { useEffect, useState } from "react";
import styles from "./terms.module.css";
import { motion } from "framer-motion";

const termsPoints = [
  " **Acceptance of Terms:** By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part, please do not use our services.",
  
  " **Changes to Terms:** We reserve the right to modify these Terms and Conditions at any time. Continued use after changes constitutes acceptance of the updated terms.",
  
  " **User Responsibilities:** You agree to use the website responsibly and not engage in any conduct that may damage, disable, or impair the website or interfere with other users’ access.",
  
  " **Intellectual Property Rights:** All content on this site, including text, graphics, logos, images, and software, is the intellectual property of Koye or its licensors and is protected by law.",
  
  " **Account Security:** If you create an account, you are responsible for maintaining the confidentiality of your login credentials and all activities under your account.",
  
  " **Privacy:** Our Privacy Policy explains how we collect, use, and protect your personal information. By using our website, you also consent to the practices described in that policy.",
  
  " **Third-Party Links:** Our website may contain links to third-party sites. We do not control or endorse these sites and are not responsible for their content or practices.",
  
  " **Limitation of Liability:** To the fullest extent permitted by law, Koye shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the website.",
  
  " **Termination:** We reserve the right to suspend or terminate your access to the website at our sole discretion, including if you violate any of these Terms and Conditions.",
  
  " **Governing Law:** These terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
  
  " **Dispute Resolution:** Any disputes arising under these Terms will be resolved through negotiation in good faith. If unresolved, disputes will be subject to the exclusive jurisdiction of Indian courts.",
  
  " **Contact Information:** For any questions or concerns about these Terms, please contact us at contact@koye.com or through our website’s contact form.",
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TermsAndConditions = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < termsPoints.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className={styles.title}>Terms and Conditions</h1>
      <p className={styles.intro}>
        Welcome to Koye! Please read these Terms and Conditions carefully before
        using our website. Your access and use of the site constitutes your
        agreement to these terms.
      </p>

      <ul className={styles.termsList}>
        {termsPoints.slice(0, visibleCount).map((point, index) => (
          <motion.li
            key={index}
            className={styles.termItem}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {/* Render HTML-style bold tags */}
            <span
              dangerouslySetInnerHTML={{
                __html: point.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TermsAndConditions;
