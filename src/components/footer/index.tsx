"use client";

import React from "react";
import styles from "./style.module.scss";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.line} />
      <div className={styles.content}>
        <p className={styles.copy}>© Rosivaldo Souza 2025</p>

        <div className={styles.socials}>
          <a href="mailto:seuemail@exemplo.com" target="_blank" aria-label="E-mail"><FaEnvelope /></a>
          <a href="https://github.com/rosivaldodesenvolvedor" target="_blank" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rosivaldo-sousa/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://wa.me/5599984354285" target="_blank" aria-label="Whatsapp"> <FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
