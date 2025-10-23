"use client";

import React from "react";
import { Link } from "react-scroll";
import styles from "./style.module.scss";
import Image from "next/image";
import Container from "@/components/container";
import Section from "@/components/sections";
import Rosivaldo from "@/assets/Rosivaldo.jpg";
import TextMotion from "@/components/motionsCustom/text";
import ImagenMotion from "@/components/motionsCustom/image";

export default function Hero() {
  return (
    <Section>
      <section className={styles.session}>
        <Container>
          <div className={styles.hero}>
            <div className={styles.content}>
              <h1>
                <TextMotion>
                  Olá, eu sou o <br />
                  <span>Rosivaldo :)</span>
                </TextMotion>
              </h1>
              <p>
                <TextMotion>
                  Desenvolvedor Front-End | Next.js | React.js | Node.js
                </TextMotion>
              </p>

<TextMotion>
              <div className={styles.buttons}>
                <a
                  href="/assets/ROSIVALDO_SILVA.pdf"
                  download
                  className={styles.btnPrimary}
                >
                  Download CV
                </a>
                <a href="#contato" className={styles.btnOutline}>
                  <Link to="contact" smooth={true} duration={1000}>
                    Entrar em contato
                  </Link>
                </a>
              </div>
              </TextMotion>
            </div>

            <div className={styles.avatar}>
              <div className={styles.avatarBorder}>
                <ImagenMotion>
                  <Image
                    src={Rosivaldo}
                    alt="Foto de perfil"
                    width={380}
                    height={380}
                    className={styles.avatarImg}
                  />
                </ImagenMotion>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Section>
  );
}
