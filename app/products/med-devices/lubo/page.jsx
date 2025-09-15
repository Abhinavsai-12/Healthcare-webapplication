"use client";

import React from "react";
import Image from "next/image";
import styles from "./lubo.module.css";

const Lubo = () => {
  return (
    <div className={styles.container}>
      {/* Text Section */}
      <div className={styles.textSection}>
        <h1 className={styles.title}>Lubo</h1>
        <p className={styles.subtitle}>
          <strong>Lubo – Non-Invasive Airway Collar</strong>
        </p>
        <p>
          LUBO is the only non-invasive device that can open the airway by
          imitating the jaw thrust manoeuvre while protecting the cervical spine.
        </p>
        <p>
          The LUBO Advantage: Simultaneous jaw thrust manoeuvre with C-spine
          control, hands-free airway management, advanced airway management
          without compromising ICP, radiolucent, latex-free, MR and X-Ray
          compatible.
        </p>
      </div>

      {/* Image Section */}
      <div className={styles.imageSection}>
        <Image
          src="/images/products/lubo.png"
          alt="Lubo Device"
          width={400}
          height={400}
          className={styles.productImage}
          priority
        />
      </div>
    </div>
  );
};

export default Lubo;
