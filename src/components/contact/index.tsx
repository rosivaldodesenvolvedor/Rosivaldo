"use client";

import styles from "./style.module.scss";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";


export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <h2>COMO ME ENCONTRAR</h2>
      <div className={styles.contacts} > 
          <div className={styles.contactCard}>
            <div className={styles.icon_background}>
              <FaEnvelope className={styles.icon} />
            </div>
            <h3>E-mail</h3>
            <p>rosivaldoedeus@gmail.com</p>
          </div>

        <a href="https://github.com/rosivaldodesenvolvedor" target="_blank">
          <div className={styles.contactCard}>
            <div className={styles.icon_background}>
              <FaGithub className={styles.icon} />
            </div>
            <h3>GitHub</h3>
            <p>@rosivaldodesenvolvedor</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/rosivaldo-sousa/" target="_blank">
          <div className={styles.contactCard}>
            <div className={styles.icon_background}>
              <FaLinkedin className={styles.icon} />
            </div>
            <h3>Linkedin</h3>
            <p>@rosivaldo-sousa</p>
          </div>
        </a>
        <a href="https://wa.me/5599984354285" target="_blank">
          <div className={styles.contactCard}>
            <div className={styles.icon_background}>
              <FaWhatsapp className={styles.icon} />
            </div>
            <h3>Whatsapp</h3>
            <p>55 (99) 98435-4235</p>
          </div>
        </a>
      </div>
    </section>
  );
}
