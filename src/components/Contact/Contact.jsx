import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.contactIcon} src={getImageUrl("contact/mail.png")} alt="Email icon" />
          <a href="mailto:sharmapurva5598@gmail.com">sharmapurva5598@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img className="contact-icon"
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/purva-sharma-587b4a236/">linkedin.com/purva-sharma</a>
        </li>
        <li className={styles.link}>
          <img className="contact-icon" src={getImageUrl("contact/github.png")} alt="Github icon" />
          <a href="https://www.github.com/purva5598">github.com/purva5598</a>
        </li>
      </ul>
    </footer>
  );
};