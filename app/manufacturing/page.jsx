import React from 'react';
import styles from './manufacturing.module.css';
import Image from 'next/image';

const Manufacturing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/manufacturing.jpg"
          alt="Manufacturing Facility"
          layout="responsive"
          width={1920}
          height={600}
          className={styles.fullWidthImage}
          priority
        />
      </div>

      <h1 className={styles.heading}>STATE-OF-THE-ART MANUFACTURING</h1>

      <div className={styles.grid}>
        <div className={styles.item}>
          <span className={styles.icon}>➤</span>
          <p>
            Koye Pharmaceuticals' manufacturing facilities are strategically located and designed to meet global standards.
            Our facilities comply with WHO-GMP and are equipped with cutting-edge infrastructure to support scalable production.
          </p>
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>➤</span>
          <p>
            We continuously invest in automation, advanced technology, and robust quality systems to ensure consistent
            product safety, efficacy, and compliance with international regulatory requirements.
          </p>
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>➤</span>
          <p>
            With over 11 high-efficiency production lines and a dedicated workforce of more than 700 professionals,
            Koye is capable of producing a wide range of dosage forms including tablets, capsules, powders, and liquids.
          </p>
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>➤</span>
          <p>
            Environmental responsibility is embedded in our operations. Our facilities follow Zero Liquid Discharge (ZLD)
            principles and employ advanced effluent treatment systems to minimize environmental impact.
          </p>
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>➤</span>
          <p>
            Koye specializes in complex drug delivery systems and formulation development.
            Our manufacturing lines are designed for flexibility, enabling fast scale-up from pilot to commercial batches.
          </p>
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>➤</span>
          <p>
            We are proud recipients of the EDGE Advanced certification by the World Bank,
            recognizing our efforts in sustainability, energy efficiency, and water conservation in pharmaceutical manufacturing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
