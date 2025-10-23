import React from "react";
import Header from "@/components/header";
import Inicio from "@/components/inicio";
import About from "@/components/sobre";
import Skills from "@/components/Skills";
import Contact from "@/components/contact";
import Timeline from "@/components/timeline";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

import Style from "./style.module.scss" 

export default function Home() {
  return (
    <div className={Style.pageWrapper}>
      <Header />
    <div id="start"><Inicio /></div>
    <div id="about"><About /></div>
    <div id="skills"><Skills /></div>
    <div id="expirience"><Timeline /></div>
    <div id="projects"><Projects /></div>
    <div id="contact"><Contact /></div>
    <div ><Footer /></div>
    
      <div style={{width: '100px', height: '500px'}}>

      </div>
    </div>
  );
}
