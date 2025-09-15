"use client";
import { useState, useEffect } from "react";
import styles from "./careers.module.css";

export default function Careers() {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    if (userCaptcha !== captcha) {
      e.preventDefault();
      alert("Captcha validation failed! Please try again.");
      generateCaptcha();
    } else {
      alert("✅ Your application has been submitted successfully!");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Careers<span>@</span>Koye
      </h1>
      <p className={styles.subheading}>Step in. Step up!</p>
      <p className={styles.description}>
        Working with Koye is as exciting as it is challenging. If you think your
        career goals match our vision, kindly fill in the fields and attach your
        updated resume.
      </p>

      <form
        className={styles.form}
        action="https://formsubmit.co/vannam.abhinav.sai@brvteck.com"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className={styles.row}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.row}>
          <input
            type="tel"
            name="contact"
            placeholder="Contact No. *"
            className={styles.input}
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position Applying For *"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.fileUpload}>
          <label>
            Upload Resume (PDF only, max 5 MB) *
            <input
              type="file"
              name="resume"
              accept="application/pdf"
              className={styles.input}
              required
            />
          </label>
        </div>

        <textarea
          name="profile"
          rows="6"
          placeholder="Tell us about your work profile (max 500 words) *"
          className={styles.textarea}
          required
        ></textarea>

        {/* Captcha Section */}
        <div className={styles.captchaContainer}>
          <div className={styles.captchaBox}>{captcha}</div>
          <input
            type="text"
            placeholder="Enter Captcha *"
            className={styles.input}
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
            required
          />
          <button
            type="button"
            className={styles.refreshBtn}
            onClick={generateCaptcha}
          >
            ↻
          </button>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Apply
        </button>
      </form>
    </div>
  );
}
