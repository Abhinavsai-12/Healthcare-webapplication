"use client";

import { useState, useEffect } from "react";
import styles from "./contact.module.css";

export default function ReachUs() {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Generate random captcha
  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaText = "";
    for (let i = 0; i < 6; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(captchaText);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    if (userCaptcha !== captcha) {
      e.preventDefault();
      alert("Captcha does not match. Please try again!");
      generateCaptcha();
    } else {
      alert("Thank you! Your message has been submitted.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact@Koye</h1>
      <p className={styles.subheading}>Talk. Hear. Explore</p>

      <p className={styles.info}>
        For specific business enquiries or information on our products, you can
        write to us at <b>info@koye.co</b> or simply fill the below given form
        and a relevant authority from our end will get in touch with you.
        <br />
        For side effects & ADR reporting, please{" "}
        <span className={styles.link} onClick={() => setShowModal(true)}>
          click here
        </span>
        .
      </p>

      {/* ADR Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <span
              className={styles.closeBtn}
              onClick={() => setShowModal(false)}
            >
              ✖
            </span>
            <p>📞 +91-8928441770</p>
            <p>✉️ pv@koye.co</p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <form
        action="https://formsubmit.co/vannam.abhinav.sai@brvteck.com"
        method="POST"
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.row}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            className={styles.formInput}
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.row}>
          <input
            type="text"
            name="phone"
            placeholder="Phone *"
            required
            className={styles.formInput}
          />
          <input
            type="text"
            name="company"
            placeholder="Company *"
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.row}>
          <input
            type="text"
            name="designation"
            placeholder="Designation *"
            required
            className={styles.formInput}
          />
          <input
            type="text"
            name="purpose"
            placeholder="Purpose *"
            required
            className={styles.formInput}
          />
        </div>

        <textarea
          name="message"
          placeholder="Please enter your message in less than 200 words *"
          maxLength="200"
          required
          className={styles.formTextarea}
        ></textarea>

        {/* Captcha */}
        <div className={styles.captchaContainer}>
          <span className={styles.captcha}>{captcha}</span>
          <input
            type="text"
            placeholder="Enter Captcha"
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
            required
            className={styles.formInput}
          />
          <button
            type="button"
            onClick={generateCaptcha}
            className={styles.refreshBtn}
          >
            🔄
          </button>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Submit Message
        </button>
      </form>
    </div>
  );
}
