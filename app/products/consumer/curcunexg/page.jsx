"use client";

import React from "react";
import Image from "next/image";
import styles from "./curcunexg.module.css";

const CurcunexG = () => {
  return (
    <div className={styles.container}>
      {/* Text Section */}
      <div className={styles.textSection}>
        <h1 className={styles.title}>CurcunexG</h1>
        <p>
          Curcumin is considered to be one of the most powerful antioxidants in
          nature that helps overcome the damaging effects of free radicals in
          the body and also has anti-inflammatory properties. This unique
          composition of CurcunexG is a natural and highly effective “Immunity
          Booster.”
        </p>
        <p>
          CurcunexG – Curcuma Drops is a revolutionary one-of-a-kind product
          that comprises water soluble particles of Curcuminoids and
          Non-curcuminoids derived from a mix of Turmeric Oleoresin, Curcumin
          Removed Turmeric Oleoresin and/or Curcumin 95% extracted from Curcuma
          Longa L. and formulated using the proprietary Augmented Absorption
          Technology.
        </p>
        <p>
          The above Nano technology ensures better solubility and offers 90x
          better absorption in the human body. The modern formula of this
          product which is Patented in India and the USA, a small dose of 5 mg
          is much more effective than comparative brands in the market.
        </p>
      </div>

      {/* Image Section */}
      <div className={styles.imageSection}>
        <Image
          src="/images/products/curcunexg.png"
          alt="CurcunexG Product"
          width={400}
          height={480}
          className={styles.productImage}
          priority
        />
      </div>
    </div>
  );
};

export default CurcunexG;
