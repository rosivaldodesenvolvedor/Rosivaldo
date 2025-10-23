"use client";

import React from "react";
import styles from "./style.module.scss";
import {  FaJava } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiSass,
  SiReact,
  SiTestinglibrary,
  SiNextdotjs,
  SiTypescript,
  SiGit,
  SiRedux,
  SiJira,
  SiBitbucket, 
  SiGithub,
  SiGitlab,
  SiNodedotjs,
} from "react-icons/si"; // exemplo
import { FaDatabase } from "react-icons/fa";
import ImagenMotion from "@/components/motionsCustom/image";
import TextMotion from "@/components/motionsCustom/text";

const skills = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Nodejs", icon: <SiNodedotjs /> },
  { name: "Git", icon: <SiGit /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Nextjs", icon: <SiNextdotjs /> },
  { name: "React Testing Library", icon: <SiTestinglibrary /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "BitBucket", icon: <SiBitbucket /> },
  { name: "GitLab", icon: <SiGitlab /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Azure", icon: <VscAzureDevops/> },
  // adicione mais aqui...
];


export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h2><TextMotion>Habilidades</TextMotion></h2>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}><ImagenMotion>{skill.icon}</ImagenMotion></div>
            <p><TextMotion>{skill.name}</TextMotion></p>
          </div>
        ))}
      </div>
    </section>
  );
}
