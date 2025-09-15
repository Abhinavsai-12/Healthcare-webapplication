"use client";

import React from "react";
import Image from "next/image";
import styles from "./ag-cuffill.module.css";

const AgCuffill = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>AG Cuffill</h1>
        <p className={styles.description}>
          The compact and intuitive AG CUFFILL device is the most accurate solution for measuring cuff
          pressure and controlling the volume of airway cuffs in all clinical settings. Its pocket-size,
          syringe-like design allows a simple and easy operation for medical professionals, including
          first-responders and hospital staff, and by users in home care environment.
        </p>
        <ul className={styles.list}>
          <li>Pocket-size, syringe-like solution</li>
          <li>Accurate measuring of cuff pressure and volume control</li>
          <li>Improved patient safety</li>
          <li>Diminish cuff-pressure related complications in intubated patients</li>
          <li>Measurement range 0-99 (mmHg/cmH2O)</li>
          <li>Measurement accuracy ±2 (mmHg/cmH2O)</li>
        </ul>
      </div>

      <div className={styles.imageSection}>
        <Image
          src="/images/products/ag-cufill.jpg" 
          alt="AG Cuffill Product"
          width={500}
          height={300}
          className={styles.productImage}
        />
      </div>
    </div>
  );
};

export default AgCuffill;
