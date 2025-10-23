"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import Image, { StaticImageData } from "next/image";
import { FaPlus, FaJava } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
  SiJira,
  SiGit,
  SiOracle,
  SiJest,
  SiJquery,
  SiMysql,
} from "react-icons/si";
import TextMotion from "../motionsCustom/text";

import { projects } from "./dataProjects";

interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  details: string;
  link: string;
}

export default function PortfolioCard() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className={styles.projectsSection}>
      <h2>Experiências Profissionais em Projetos Corporativos</h2>
      <div className={styles.cardsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techs}>
                {project.technologies.includes("js") && <SiJavascript />}
                {project.technologies.includes("react") && <SiReact />}
                {project.technologies.includes("GitHub") && <SiGithub />}
                {project.technologies.includes("Jira") && <SiJira />}
                {project.technologies.includes("html") && <SiHtml5 />}
                {project.technologies.includes("css") && <SiCss3 />}
                {project.technologies.includes("Git") && <SiGit />}
                {project.technologies.includes("Oracle") && <SiOracle />}
                {project.technologies.includes("Jest") && <SiJest />}
                {project.technologies.includes("Jquery") && <SiJquery />}
                {project.technologies.includes("Java") && <FaJava />}
                {project.technologies.includes("Azure") && <VscAzureDevops />}
                {project.technologies.includes("MySql") && <SiMysql />}
              </div>
              <button
                className={styles.plusButton}
                onClick={() => setSelected(project)}
              >
                <FaPlus style={{ display: "inline-block" }} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImage}>
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.modalContent}>
              <p style={{ whiteSpace: "pre-wrap" }}>{selected.details}</p>
              <p>
                Link do site:{" "}
                <a
                  href={selected.link}
                  target="blank"
                  style={{ color: "#007bff" }}
                >
                  {selected.link}
                </a>
              </p>
              <div className={styles.techs}>
                {selected.technologies.includes("js") && <SiJavascript />}
                {selected.technologies.includes("react") && <SiReact />}
                {selected.technologies.includes("GitHub") && <SiGithub />}
                {selected.technologies.includes("Jira") && <SiJira />}
                {selected.technologies.includes("html") && <SiHtml5 />}
                {selected.technologies.includes("css") && <SiCss3 />}
                {selected.technologies.includes("Git") && <SiGit />}
                {selected.technologies.includes("Oracle") && <SiOracle />}
                {selected.technologies.includes("Jest") && <SiJest />}
                {selected.technologies.includes("Jquery") && <SiJquery />}
                {selected.technologies.includes("Java") && <FaJava />}
                {selected.technologies.includes("Azure") && <VscAzureDevops />}
                {selected.technologies.includes("MySql") && <SiMysql />}
              </div>
            </div>
            <button
              className={styles.closeButton}
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
