"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // ✅ Import Next.js Link
import styles from "./homesection1.module.css";

const slides = [
  {
    id: 1,
    title: "Healthiness is Sharing",
    description:
      "…those little moments with your loved ones that define your existence, just like the banter between a working mom and her toddler.",
    hashtag: "#InThePursuitOfHealthiness",
    button: "Discover Life @Koye",
    link: "/lifeat", 
    image: "/images/home/slide1.png",
  },
  {
    id: 2,
    title: "Healthiness is Enthusiasm",
    description:
      "…that stems from loving what you do, just like our strong workforce that is high soaring, whether in office or on the field.",
    hashtag: "#InThePursuitOfHealthiness",
    button: "Discover Koye Rx",
    link: "/products/koye-rx",
    image: "/images/home/slide2.png",
  },
  {
    id: 3,
    title: "Healthiness is Fitness",
    description:
      "…of the mind, body and the soul to follow your dreams and aspirations, just like the many people who trust our products, achieve.",
    hashtag: "#InThePursuitOfHealthiness",
    button: "Discover Koye Consumer Products",
    link: "/products/consumer",
    image: "/images/home/slide3.png",
  },
  {
    id: 4,
    title: "Healthiness is Peace",
    description:
      "…cause only when you are healthy in the truest sense, can you be truly happy, just like every person associated with us.",
    hashtag: "#InThePursuitOfHealthiness",
    button: "Discover Values @ Koye",
    link: "/values",
    image: "/images/home/slide4.png",
  },
  {
    id: 5,
    title: "Healthiness is Exuberance",
    description:
      "…that comes from embracing the challenges that life throws your way, only to emerge victorious from the other end.",
    hashtag: "#InThePursuitOfHealthiness",
    button: "Discover Koye",
    link: "/about-us", 
    image: "/images/home/slide5.png",
  },
];

export default function HomeSection1() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.carousel}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <div className={styles.text}>
              <h2>
                {slide.title.split(" ")[0]}{" "}
                <span>{slide.title.split(" ").slice(2).join(" ")}</span>
              </h2>
              <p>{slide.description}</p>
              <p className={styles.hashtag}>{slide.hashtag}</p>
              <Link href={slide.link}>
                <button>{slide.button}</button>
              </Link>
            </div>
            <div className={styles.image}>
              <img src={slide.image} alt={slide.title} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === current ? styles.active : ""
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
