import React from 'react';
import styles from './research.module.css';
import Image from 'next/image';
import { FaMicroscope, FaFlask, FaDna, FaVials, FaHeartbeat, FaUserMd } from 'react-icons/fa';

const Research = () => {
  return (
    <div className={styles.container}>
      {/* Full-Width Banner Image */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/research.jpg"
          alt="Research and Development at Koye"
          layout="responsive"
          width={1920}
          height={600}
          className={styles.fullWidthImage}
          priority
        />
      </div>

      {/* Heading */}
      <h1 className={styles.heading}>Research & Development</h1>

      {/* Paragraph Sections with Icons */}
      <div className={styles.content}>
        <div className={styles.item}>
          <FaMicroscope className={styles.icon} />
          <p>
            Koye Pharmaceuticals' R&D focuses on breakthrough innovation and differentiated generics that improve patient care and adherence.
            Our team of experienced scientists work on cutting-edge technologies and formulations.
          </p>
        </div>

        <div className={styles.item}>
          <FaFlask className={styles.icon} />
          <p>
            Our state-of-the-art R&D labs are equipped for formulation development, analytical testing, and stability studies.
            This allows a seamless transition from research to regulatory-compliant production.
          </p>
        </div>

        <div className={styles.item}>
          <FaDna className={styles.icon} />
          <p>
            We emphasize complex drug delivery systems like sustained-release, dispersible tablets, and combination therapies across key therapeutic areas.
          </p>
        </div>

        <div className={styles.item}>
          <FaVials className={styles.icon} />
          <p>
            Koye maintains a robust product pipeline and accelerates development through collaboration with CROs and technology partners globally.
          </p>
        </div>

        <div className={styles.item}>
          <FaHeartbeat className={styles.icon} />
          <p>
            Therapeutic focus areas include cardiology, diabetology, gastroenterology, and respiratory care — supported by data-driven R&D strategies.
          </p>
        </div>

        <div className={styles.item}>
          <FaUserMd className={styles.icon} />
          <p>
            We combine scientific expertise with patient-centric design to deliver medicines that are not only effective but also easy to administer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Research;
