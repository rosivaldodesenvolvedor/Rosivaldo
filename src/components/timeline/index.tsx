"use client";

import styles from "./style.module.scss";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Timeline() {
  const timelineItems = [
    {
      year: "2017",
      icon: <FaGraduationCap />,
      side: "left",
      course: "Redes de Computadores",
      institution: "UemaNet",
      level: "Técnico",
      time: "2 anos",
    },
    {
      year: "2018",
      icon: <FaGraduationCap />,
      side: "right",
      course: "Sistemas para Internet",
      institution: "Pitágoras",
      level: "Superior",
      time: "3 anos",
    },
    {
      year: "2019",
      icon: <FaBriefcase />,
      side: "left",
      company: "UemaNet",
      role: "Professor do curso técnico em informática",
      time: "1 ano",
    },
    {
      year: "2021",
      icon: <FaBriefcase />,
      side: "right",
      company: "MyPharma",
      role: "Desenvolvedor de software",
      time: "1 ano",
    },
    {
      year: "2024",
      icon: <FaBriefcase />,
      side: "left",
      company: "Compass.uol",
      role: "Desenvolvedor de Front end",
      time: "3 anos e 6 meses",
    },
    {
      year: "2025",
      icon: <FaBriefcase />,
      side: "right",
      company: "Grupo Adriano Cobuccio",
      role: "Desenvolvedor de Front end",
      time: "Atualmente",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.title}>Linha do Tempo</h2>
      <div className={styles.timeline}>
        {timelineItems.map((item, index) => {
          const sideClass = styles[item.side];
          const animateClass = inView ? styles.animate : "";

          return (
            <div
              key={index}
              ref={ref}
              className={`${styles.timelineItem} ${sideClass} ${animateClass}`}
            >
              <div className={styles.content}>
                <span className={styles.year}>{item.year}</span>

                {item.institution && (
                  <>
                    <p>
                      <strong>Instituição:</strong> {item.institution}
                    </p>
                    <p>
                      <strong>Nível:</strong> {item.level}
                    </p>
                    <p>
                      <strong>Curso:</strong> {item.course}
                    </p>
                    <p>
                      <strong>Tempo:</strong> {item.time}
                    </p>
                  </>
                )}

                {item.company && (
                  <>
                    <p>
                      <strong>Empresa:</strong> {item.company}
                    </p>
                    <p>
                      <strong>Cargo:</strong> {item.role}
                    </p>
                    <p>
                      <strong>Tempo:</strong> {item.time}
                    </p>
                  </>
                )}
              </div>

              <div className={styles.iconWrapper}>{item.icon}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
