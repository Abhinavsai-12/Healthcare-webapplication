"use client";

import React from "react";
import styles from "./swayos.module.css";

const Swayos = () => {
  return (
    <div className={styles.container}>
      {/* Text Section */}
      <div className={styles.textSection}>
        <h2 className={styles.heading}>Swayos</h2>
        <p>
          The all-natural Swayos range from Koye has two categories –{" "}
          <em>Aahar</em> and <em>Aushadh</em>.
        </p>
        <p>
          According to Ayurveda, if your <em>Aahar</em> (diet) and daily routine
          are not adjusted as per the change in seasons, the amas (toxins) in
          the body prevent the immune system from improving and becoming
          stronger. The Swayos <em>Aahar</em> range is designed with powerful
          ayurvedic herbs for immunity building, strengthening, nourishing and
          repairing of all the Dhatus of the body – the fundamental constituents
          involved in the healthy functioning and upkeep of the body.
        </p>
        <p>
          On the other hand, Swayos <em>Aushadh</em> products combine the
          expertise of traditional ayurveda and modern probiotics to give you
          quicker relief and long lasting health solutions. Swayos{" "}
          <em>Aushadh</em> range is formulated with the combination of
          Probiotics and natural Ayurveda herbs, known as Proyurveda™. The
          Probiotics (beneficial micro-organisms) survive long time when blended
          with herbs because herbs are antioxidants. Such Proyurveda™
          preparations exhibit enhanced activity and effectiveness without any
          side effects.
        </p>
      </div>

      {/* Image Section */}
      <div className={styles.imageSection}>
        <img
          src="/images/products/swayos.png"
          alt="Swayos Product"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Swayos;
