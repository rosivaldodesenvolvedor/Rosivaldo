import React from "react";
import Header from "@/components/header";
import HeaderNovo from "@/components/header/header";
import Inicio from "@/components/inicio";
import InicioNovo from "@/components/inicio/inicio";
import About from "@/components/sobre";
import AboutNovo from "@/components/sobre/sobre";
import Skills from "@/components/Skills";
import SkillsNovo from "@/components/Skills/skills";
import Contact from "@/components/contact";
import ContactNovo from "@/components/contact/contact";
import Timeline from "@/components/timeline";
import TimelineNovo from "@/components/timeline/timeline";
import Projects from "@/components/projects";
import ProjectsNovo from "@/components/projects/projects";
import Footer from "@/components/footer";

import Style from "./style.module.scss" 

export default function Home() {
  return (
    <div className={Style.pageWrapper}>
      {/* 
      <Header />
      <div id="start"><Inicio /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
       <div id="expirience"><Timeline /></div>
       <div id="projects"><Projects /></div>
       <div id="contact"><Contact /></div>
       */}
      <HeaderNovo />
    <div id="start"><InicioNovo /></div>
    <div id="about"><AboutNovo /></div>
    <div id="skills"><SkillsNovo /></div>
    <div id="expirience"><TimelineNovo /></div>
    <div id="projects"><ProjectsNovo /></div>
    <div id="contact"><ContactNovo /></div>
    <div ><Footer /></div>
    </div>
  );
}
