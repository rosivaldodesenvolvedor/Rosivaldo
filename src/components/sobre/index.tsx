"use client";

import React from "react";
import styles from "./style.module.scss";
import Container from "@/components/container";
import Section from "@/components/sections";
import Front from "@/assets/front.png";
import TextMotion from "@/components/motionsCustom/text";
import ImagenMotion from "@/components/motionsCustom/image";
import Image from "next/image";

export default function Hero() {
  return (
    <Section>
      <section className={styles.session}>
        <h1>
          <TextMotion>Construindo Soluções Digitais</TextMotion>
        </h1>
        <Container>
          <div className={styles.hero}>
            <div className={styles.left}>
              <ImagenMotion>
                <Image
                  src={Front}
                  alt="Desenvolvimento Front-End"
                  width={500}
                  height={500}
                  className={styles.heroImage}
                />
              </ImagenMotion>
            </div>

            <div className={styles.content}>
              <TextMotion>
                <p>
                  Sou Desenvolvedor Front-End com foco em soluções escaláveis,
                  performáticas e centradas na experiência do usuário. Tenho
                  experiência sólida em e-commerce, atuando com React, Next,
                  Redux, JavaScript e integrações com Oracle Commerce e Adobe
                  Experience Manager (AEM). Já desenvolvi no Open Storefront
                  Framework (OSF) da Oracle e personalizei o painel de
                  administração do AEM com Java.
                </p>

                <p>
                  Também possuo vivência em desenvolvimento Full Stack com
                  Node.js, integração de APIs, criação de componentes
                  reutilizáveis e testes para garantir qualidade e desempenho.
                  Trabalho em equipes ágeis, participo de code reviews e sigo as
                  melhores práticas para entregar soluções robustas e
                  eficientes.
                </p>
              </TextMotion>
            </div>
          </div>
        </Container>
      </section>
    </Section>
  );
}
