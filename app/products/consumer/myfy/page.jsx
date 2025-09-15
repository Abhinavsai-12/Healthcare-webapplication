"use client";

import React from "react";
import styles from "./myfy.module.css";

const Myfy = () => {
  return (
    <div className={styles.container}>
      {/* Text Section */}
      <div className={styles.textSection}>
        <h2 className={styles.heading}>Myfy</h2>
        <p>
          Most of us today are fiber deficient due to the kind of diet and
          lifestyle we follow in our fast-paced lives. A shortage of fiber in
          the body often leads to various issues like constipation, low energy
          levels and poor gut health.
        </p>
        <p>
          To prevent such issues and lead an active and healthy lifestyle in
          general, all one has to do is ensure that their body’s daily fiber
          requirements are met and that’s where Myfy comes into the picture!
        </p>
        <p>
          A blend of natural ingredients, Myfy is made only from wheat and guar
          fibers – without any sugar, additives or preservatives. Scientifically
          formulated and patent pending in the U.S., Myfy is a soluble fiber
          supplement that’s been clinically proven to help boost your fiber
          levels.
        </p>
      </div>

      {/* Image Section */}
      <div className={styles.imageSection}>
        <img
          src="/images/products/myfy.png"
          alt="Myfy Product"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Myfy;
