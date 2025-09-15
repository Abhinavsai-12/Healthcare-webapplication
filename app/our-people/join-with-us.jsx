"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./join.module.css";

const JoinWithUs = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/careers"); // navigates to careers page
  };

  return (
    <section className={styles.careersSection}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Careers @ Koye</h1>
          <h2 className={styles.subtitle}>Step in. Step up!</h2>
          <p className={styles.description}>
            Working with Koye is as exciting as it is challenging. If you think
            your career goals match with the vision we have set for ourselves,
            then do fill in the fields and attach your updated resume.
          </p>
          <button className={styles.resumeButton} onClick={handleNavigate}>
            Send Your Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinWithUs;
